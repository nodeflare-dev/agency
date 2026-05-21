import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Header, Footer } from '@/components';
import { Container } from '@/components/ui/Container';
import { getBlogPost, getBlogPosts, sanitizeHtml } from '@/lib/hygraph';
import { notFound } from 'next/navigation';

export const revalidate = 60;

function formatDate(dateString: string | undefined): string {
  if (!dateString) return '';
  const date = new Date(dateString);
  return date.toLocaleDateString('ja-JP', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export async function generateStaticParams() {
  if (!process.env.HYGRAPH_TOKEN) {
    return [];
  }

  try {
    const posts = await getBlogPosts();
    return posts.map((post) => ({
      slug: post.slug,
    }));
  } catch {
    return [];
  }
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  if (!process.env.HYGRAPH_TOKEN) {
    return { title: 'ブログ' };
  }

  const { slug } = await params;
  try {
    const post = await getBlogPost(slug);
    if (!post) {
      return { title: '記事が見つかりません' };
    }
    return {
      title: `${post.title} | ブログ`,
      description: post.excerpt,
    };
  } catch {
    return { title: 'ブログ' };
  }
}

export default async function BlogDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  if (!process.env.HYGRAPH_TOKEN) {
    notFound();
  }

  const { slug } = await params;
  let post;
  let otherPosts;

  try {
    [post, otherPosts] = await Promise.all([
      getBlogPost(slug),
      getBlogPosts(),
    ]);
  } catch {
    notFound();
  }

  if (!post) {
    notFound();
  }

  const relatedPosts = otherPosts
    .filter((p) => p.slug !== slug)
    .slice(0, 3);

  return (
    <>
      <Header />
      <main className="pt-24 pb-20">
        <Container size="xl">
          <div className="max-w-3xl mx-auto">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-gray-500 hover:text-violet-600 transition-colors mb-8"
            >
              <ArrowLeft size={16} />
              ブログ一覧に戻る
            </Link>

            <article>
              <header className="mb-8">
                <div className="flex items-center gap-4 mb-4">
                  {post.publishDate && (
                    <span className="text-sm text-gray-400">
                      {formatDate(post.publishDate)}
                    </span>
                  )}
                  {post.categories[0] && (
                    <span className="text-sm font-medium text-violet-600">
                      {post.categories[0].name}
                    </span>
                  )}
                </div>

                <h1 className="text-2xl sm:text-3xl font-semibold text-[#323232] mb-6">
                  {post.title}
                </h1>

                {post.author && (
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-violet-400 to-violet-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-medium">
                        {post.author.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">{post.author.name}</p>
                    </div>
                  </div>
                )}
              </header>

              {post.excerpt && (
                <div className="mb-10 pb-10 border-b border-gray-100">
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>
              )}

              {post.content?.html && (
                <div
                  className="prose prose-gray max-w-none"
                  dangerouslySetInnerHTML={{ __html: sanitizeHtml(post.content.html) }}
                />
              )}

              {post.author?.bio && (
                <div className="mt-16 pt-10 border-t border-gray-100">
                  <div className="flex items-start gap-5 bg-gray-50 rounded-2xl p-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-violet-400 to-violet-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-xl">
                        {post.author.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">著者</p>
                      <p className="font-bold text-gray-900 mb-2">{post.author.name}</p>
                      <p className="text-sm text-gray-600 leading-relaxed">{post.author.bio}</p>
                    </div>
                  </div>
                </div>
              )}
            </article>

            {relatedPosts.length > 0 && (
              <div className="mt-16 pt-10 border-t border-gray-100">
                <h2 className="text-xl font-bold text-gray-900 mb-6">
                  他の記事
                </h2>
                <div className="grid gap-6">
                  {relatedPosts.map((relatedPost) => (
                    <Link
                      key={relatedPost.id}
                      href={`/blog/${relatedPost.slug}`}
                      className="group block p-5 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
                    >
                      <div className="flex items-center gap-2 mb-2">
                        {relatedPost.categories[0] && (
                          <span className="text-xs font-medium text-violet-600">
                            {relatedPost.categories[0].name}
                          </span>
                        )}
                        {relatedPost.publishDate && (
                          <span className="text-xs text-gray-400">
                            {formatDate(relatedPost.publishDate)}
                          </span>
                        )}
                      </div>
                      <h3 className="font-semibold text-gray-900 group-hover:text-violet-600 transition-colors mb-1">
                        {relatedPost.title}
                      </h3>
                      {relatedPost.excerpt && (
                        <p className="text-sm text-gray-500 line-clamp-2">
                          {relatedPost.excerpt}
                        </p>
                      )}
                    </Link>
                  ))}
                </div>
              </div>
            )}

            <div className="mt-16 pt-10 border-t border-gray-100">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-sm font-medium text-violet-600 hover:text-violet-700 transition-colors"
              >
                <ArrowLeft size={16} />
                ブログ一覧に戻る
              </Link>
            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
