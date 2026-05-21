import Link from 'next/link';
import { Header, Footer } from '@/components';
import { Container } from '@/components/ui/Container';

const blogs = [
  {
    id: '1',
    date: '2025.01.15',
    category: 'お知らせ',
    title: 'MCP専用サーバー「nodeflare」の提供を開始しました',
    excerpt: '企業向けMCPソリューションの新サービス「nodeflare」の提供を開始いたしました。高いセキュリティと拡張性を備えた専用サーバーで、御社のAI連携を加速します。',
  },
  {
    id: '2',
    date: '2025.01.10',
    category: '導入事例',
    title: '大手製造業A社様にてMCPによる在庫管理自動化を導入',
    excerpt: '複数システムを横断した在庫確認作業を、MCPによりAIへの一言で完結できるようになりました。導入から4週間での本番稼働を実現。',
  },
  {
    id: '3',
    date: '2025.01.05',
    category: '技術ブログ',
    title: 'MCPを活用した業務自動化の最新トレンド',
    excerpt: 'Model Context Protocol（MCP）の最新動向と、企業での活用事例をご紹介します。2025年のAI連携はMCPが主流になると予測されています。',
  },
  {
    id: '4',
    date: '2024.12.20',
    category: 'お知らせ',
    title: '年末年始の営業日のご案内',
    excerpt: '2024年12月28日〜2025年1月5日まで休業とさせていただきます。期間中のお問い合わせは1月6日以降に順次ご対応いたします。',
  },
  {
    id: '5',
    date: '2024.12.15',
    category: '技術ブログ',
    title: 'MCPとは？基礎から分かる導入ガイド',
    excerpt: 'MCPの基本概念から導入メリットまで、初めての方にも分かりやすく解説します。なぜ今MCPが注目されているのか、その理由をお伝えします。',
  },
  {
    id: '6',
    date: '2024.12.01',
    category: '導入事例',
    title: '金融機関B社様での社内ドキュメント検索システム構築',
    excerpt: '数千ページの規定集から必要な情報を瞬時に検索できるシステムを構築。検索時間90%削減を実現しました。',
  },
];

export default function BlogPage() {
  return (
    <>
      <Header />
      <main className="pt-24 pb-20">
        <Container size="xl">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl sm:text-4xl font-light text-[#323232] mb-12">
              ブログ
            </h1>

            <div className="space-y-0 divide-y divide-gray-200">
              {blogs.map((blog) => (
                <article key={blog.id} className="py-8">
                  <Link href={`/blog/${blog.id}`} className="block group">
                    <div className="flex items-center gap-4 mb-3">
                      <span className="text-sm text-gray-400">{blog.date}</span>
                      <span className="text-sm font-medium text-violet-600">{blog.category}</span>
                    </div>
                    <h2 className="text-xl font-semibold text-[#323232] group-hover:text-violet-600 transition-colors mb-3">
                      {blog.title}
                    </h2>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {blog.excerpt}
                    </p>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
