'use client';

import Link from 'next/link';
import { Container } from './ui/Container';
import { Section } from './ui/Section';

const blogs = [
  {
    date: '2025.01.15',
    category: 'お知らせ',
    title: 'MCP専用サーバー「nodeflare」の提供を開始しました',
    href: '#',
  },
  {
    date: '2025.01.10',
    category: '導入事例',
    title: '大手製造業A社様にてMCPによる在庫管理自動化を導入',
    href: '#',
  },
  {
    date: '2025.01.05',
    category: '技術ブログ',
    title: 'MCPを活用した業務自動化の最新トレンド',
    href: '#',
  },
  {
    date: '2024.12.20',
    category: 'お知らせ',
    title: '年末年始の営業日のご案内',
    href: '#',
  },
];

export function Cases() {
  return (
    <Section id="cases" variant="gray" className="relative pt-8 lg:pt-12">
      {/* Background decoration - extends into footer */}
      <div
        className="absolute -left-4 bottom-0 translate-y-[70%] w-72 h-[500px] bg-contain bg-no-repeat bg-left-bottom scale-y-[-1] pointer-events-none"
        style={{ backgroundImage: 'url(/bg2.png)' }}
      />
      <Container size="xl" className="relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-light text-[#323232] mb-4">
            お知らせ
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <ul className="divide-y divide-gray-200">
            {blogs.map((blog, index) => (
              <li key={index}>
                <Link
                  href={blog.href}
                  className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 py-5 hover:bg-gray-50 transition-colors px-2 -mx-2 rounded"
                >
                  <span className="text-sm text-gray-400 shrink-0">{blog.date}</span>
                  <span className="text-sm font-medium text-violet-600 shrink-0">
                    {blog.category}
                  </span>
                  <span className="text-[#323232] hover:text-violet-600 transition-colors">
                    {blog.title}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </Section>
  );
}
