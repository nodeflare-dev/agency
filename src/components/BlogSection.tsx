'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Container } from './ui/Container';

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt?: string;
  publishDate?: string;
  author?: { name: string };
  categories: { id: string; name: string }[];
}

function formatDate(dateString?: string): string {
  if (!dateString) return '';
  const date = new Date(dateString);
  return date.toLocaleDateString('ja-JP', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
}

export function BlogSection() {
  const [blogPost, setBlogPost] = useState<BlogPost | null>(null);

  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        const res = await fetch('/api/blog');
        if (res.ok) {
          const posts = await res.json();
          if (posts.length > 0) {
            setBlogPost(posts[0]);
          }
        }
      } catch {
        // Silently fail - blog posts are not critical
      }
    };
    fetchBlogPosts();
  }, []);

  if (!blogPost) {
    return null;
  }

  return (
    <section className="py-16 bg-gray-50">
      <Container size="xl">
        <div className="flex items-center gap-3 mb-6">
          <span className="text-sm font-semibold text-violet-600">最新記事</span>
          <div className="flex-1 h-px bg-gray-200"></div>
        </div>

        <Link
          href={`/blog/${blogPost.slug}`}
          className="group block bg-white rounded-2xl border border-gray-200 p-6 sm:p-8 hover:border-violet-300 hover:shadow-lg transition-all"
        >
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-3">
                {blogPost.categories[0] && (
                  <span className="inline-block px-3 py-1 text-xs font-semibold text-violet-600 bg-violet-50 rounded-full">
                    {blogPost.categories[0].name}
                  </span>
                )}
                <span className="text-sm text-gray-400">{formatDate(blogPost.publishDate)}</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#323232] group-hover:text-violet-600 transition-colors mb-3">
                {blogPost.title}
              </h3>
              {blogPost.excerpt && (
                <p className="text-gray-600 line-clamp-2">{blogPost.excerpt}</p>
              )}
            </div>
            <div className="flex items-center gap-2 text-violet-600 font-medium shrink-0">
              <span>記事を読む</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </Link>
      </Container>
    </section>
  );
}
