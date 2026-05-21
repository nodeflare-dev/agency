import Link from 'next/link';
import { Header, Footer } from '@/components';
import { Container } from '@/components/ui/Container';
import { getBlogPosts } from '@/lib/hygraph';

export const revalidate = 60;

function formatDate(dateString: string | undefined): string {
  if (!dateString) return '';
  const date = new Date(dateString);
  return date.toLocaleDateString('ja-JP', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).replace(/\//g, '.');
}

export default async function BlogPage() {
  let posts: Awaited<ReturnType<typeof getBlogPosts>> = [];

  try {
    posts = await getBlogPosts();
  } catch {
    // Hygraph not configured or error
  }

  return (
    <>
      <Header />
      <main className="pt-24 pb-20">
        <Container size="xl">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl sm:text-4xl font-light text-[#323232] mb-12">
              ブログ
            </h1>

            {posts.length > 0 ? (
              <div className="space-y-0 divide-y divide-gray-200">
                {posts.map((post) => (
                  <article key={post.id} className="py-8">
                    <Link href={`/blog/${post.slug}`} className="block group">
                      <div className="flex items-center gap-4 mb-3">
                        <span className="text-sm text-gray-400">
                          {formatDate(post.publishDate)}
                        </span>
                        {post.categories[0] && (
                          <span className="text-sm font-medium text-violet-600">
                            {post.categories[0].name}
                          </span>
                        )}
                      </div>
                      <h2 className="text-xl font-semibold text-[#323232] group-hover:text-violet-600 transition-colors mb-3">
                        {post.title}
                      </h2>
                      {post.excerpt && (
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {post.excerpt}
                        </p>
                      )}
                    </Link>
                  </article>
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <p className="text-gray-500">記事がありません</p>
              </div>
            )}
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
