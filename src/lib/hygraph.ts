import 'server-only';

const HYGRAPH_ENDPOINT = process.env.HYGRAPH_ENDPOINT || 'https://api-us-west-2.hygraph.com/v2/cmmky48hh00h006w5q885vkcf/master';
const HYGRAPH_TOKEN = process.env.HYGRAPH_TOKEN;

export interface Author {
  id: string;
  name: string;
  bio?: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt?: string;
  content?: {
    html: string;
    text: string;
  };
  publishDate?: string;
  author?: Author;
  categories: Category[];
}

const RETRY_CONFIG = {
  maxRetries: 3,
  initialDelayMs: 1000,
  maxDelayMs: 8000,
  backoffMultiplier: 2,
};

function sleep(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function isRetryableError(error: unknown, response?: Response): boolean {
  if (error instanceof TypeError && error.message.includes('fetch')) {
    return true;
  }
  if (response) {
    if (response.status >= 500 && response.status < 600) {
      return true;
    }
    if (response.status === 429) {
      return true;
    }
  }
  return false;
}

async function fetchHygraph<T>(query: string, variables?: Record<string, unknown>): Promise<T> {
  if (!HYGRAPH_TOKEN) {
    throw new Error('HYGRAPH_TOKEN is not configured');
  }

  let lastError: Error | null = null;
  let delay = RETRY_CONFIG.initialDelayMs;

  for (let attempt = 0; attempt <= RETRY_CONFIG.maxRetries; attempt++) {
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 30000);

      const res = await fetch(HYGRAPH_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${HYGRAPH_TOKEN}`,
        },
        body: JSON.stringify({ query, variables }),
        next: { revalidate: 60 },
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      if (!res.ok && isRetryableError(null, res)) {
        if (attempt < RETRY_CONFIG.maxRetries) {
          await sleep(delay);
          delay = Math.min(delay * RETRY_CONFIG.backoffMultiplier, RETRY_CONFIG.maxDelayMs);
          continue;
        }
      }

      const json = await res.json();

      if (json.errors) {
        throw new Error(json.errors[0]?.message || 'GraphQL Error');
      }

      return json.data;
    } catch (error) {
      lastError = error instanceof Error ? error : new Error(String(error));

      if (isRetryableError(error) && attempt < RETRY_CONFIG.maxRetries) {
        await sleep(delay);
        delay = Math.min(delay * RETRY_CONFIG.backoffMultiplier, RETRY_CONFIG.maxDelayMs);
        continue;
      }

      throw lastError;
    }
  }

  throw lastError || new Error('Hygraph request failed after retries');
}

function toHygraphLocales(locale: string): string[] {
  return locale === 'ja' ? ['ja_JP', 'en'] : ['en'];
}

export async function getBlogPosts(locale: string = 'ja', categorySlug?: string): Promise<BlogPost[]> {
  const query = categorySlug
    ? `
      query GetBlogPostsByCategory($locales: [Locale!]!, $categorySlug: String!) {
        blogPosts(
          locales: $locales,
          orderBy: publishDate_DESC,
          stage: PUBLISHED,
          where: { categories_some: { slug: $categorySlug } }
        ) {
          id
          title
          slug
          excerpt
          publishDate
          author {
            id
            name
          }
          categories {
            id
            name
            slug
          }
        }
      }
    `
    : `
      query GetBlogPosts($locales: [Locale!]!) {
        blogPosts(locales: $locales, orderBy: publishDate_DESC, stage: PUBLISHED) {
          id
          title
          slug
          excerpt
          publishDate
          author {
            id
            name
          }
          categories {
            id
            name
            slug
          }
        }
      }
    `;

  const locales = toHygraphLocales(locale);
  const variables: Record<string, unknown> = { locales };
  if (categorySlug) {
    variables.categorySlug = categorySlug;
  }
  const data = await fetchHygraph<{ blogPosts: BlogPost[] }>(query, variables);
  return data.blogPosts;
}

export async function getBlogPost(slug: string, locale: string = 'ja'): Promise<BlogPost | null> {
  const query = `
    query GetBlogPost($slug: String!, $locales: [Locale!]!) {
      blogPosts(where: { slug: $slug }, locales: $locales, stage: PUBLISHED, first: 1) {
        id
        title
        slug
        excerpt
        content {
          html
          text
        }
        publishDate
        author {
          id
          name
          bio
        }
        categories {
          id
          name
          slug
        }
      }
    }
  `;

  const locales = toHygraphLocales(locale);
  const data = await fetchHygraph<{ blogPosts: BlogPost[] }>(query, { slug, locales });
  return data.blogPosts[0] || null;
}
