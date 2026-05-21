import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Header, Footer } from '@/components';
import { Container } from '@/components/ui/Container';

const blogs: Record<string, {
  date: string;
  category: string;
  title: string;
  content: string;
}> = {
  '1': {
    date: '2025.01.15',
    category: 'お知らせ',
    title: 'MCP専用サーバー「nodeflare」の提供を開始しました',
    content: `
企業向けMCPソリューションの新サービス「nodeflare」の提供を開始いたしました。

## nodeflareとは

nodeflareは、Model Context Protocol（MCP）に特化した専用サーバーソリューションです。高いセキュリティと拡張性を備え、御社のAI連携を加速します。

## 主な特徴

- **高セキュリティ**: SOC2 Type II準拠の開発体制
- **高可用性**: 99.9%の稼働率保証
- **柔軟な拡張性**: 御社の成長に合わせてスケール可能

## 導入について

導入をご検討の方は、お気軽にお問い合わせください。専門スタッフが御社の課題をヒアリングし、最適なソリューションをご提案いたします。
    `,
  },
  '2': {
    date: '2025.01.10',
    category: '導入事例',
    title: '大手製造業A社様にてMCPによる在庫管理自動化を導入',
    content: `
大手製造業A社様にて、MCPを活用した在庫管理自動化システムを導入いたしました。

## 導入前の課題

- 在庫確認に毎回30分以上かかっていた
- 複数システムを横断して調査する必要があった
- 担当者によって確認方法にばらつきがあった

## 導入したソリューション

MCPで在庫管理・受発注・物流システムを統合し、AIへの一言で在庫状況を確認できるようにしました。

## 導入効果

- 問い合わせ対応80%自動化
- 顧客満足度25%向上
- 導入から4週間で本番稼働を実現
    `,
  },
  '3': {
    date: '2025.01.05',
    category: '技術ブログ',
    title: 'MCPを活用した業務自動化の最新トレンド',
    content: `
Model Context Protocol（MCP）の最新動向と、企業での活用事例をご紹介します。

## MCPとは

MCPは、AIと外部システムを連携させるためのプロトコルです。Anthropic社が策定し、オープンな仕様として公開されています。

## 2025年のトレンド

1. **エンタープライズ導入の加速**: 大企業での本格導入が進んでいます
2. **セキュリティ強化**: 金融機関レベルのセキュリティ要件への対応
3. **マルチシステム連携**: 複数のSaaSを横断した業務自動化

## 今後の展望

2025年はMCPが業務自動化の主流になると予測されています。早期導入により、競合他社に先駆けた業務効率化が可能です。
    `,
  },
};

export default async function BlogDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const blog = blogs[id];

  if (!blog) {
    return (
      <>
        <Header />
        <main className="pt-24 pb-20">
          <Container size="xl">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-2xl font-semibold text-[#323232] mb-4">
                記事が見つかりません
              </h1>
              <Link href="/blog" className="text-violet-600 hover:underline">
                ブログ一覧に戻る
              </Link>
            </div>
          </Container>
        </main>
        <Footer />
      </>
    );
  }

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

            <div className="flex items-center gap-4 mb-4">
              <span className="text-sm text-gray-400">{blog.date}</span>
              <span className="text-sm font-medium text-violet-600">{blog.category}</span>
            </div>

            <h1 className="text-2xl sm:text-3xl font-semibold text-[#323232] mb-8">
              {blog.title}
            </h1>

            <div className="prose prose-gray max-w-none">
              {blog.content.split('\n').map((line, i) => {
                if (line.startsWith('## ')) {
                  return <h2 key={i} className="text-xl font-semibold text-[#323232] mt-8 mb-4">{line.replace('## ', '')}</h2>;
                }
                if (line.startsWith('- **')) {
                  const match = line.match(/- \*\*(.+?)\*\*: (.+)/);
                  if (match) {
                    return (
                      <p key={i} className="text-gray-600 mb-2">
                        <strong className="text-[#323232]">{match[1]}</strong>: {match[2]}
                      </p>
                    );
                  }
                }
                if (line.startsWith('- ')) {
                  return <p key={i} className="text-gray-600 mb-2 pl-4">• {line.replace('- ', '')}</p>;
                }
                if (line.match(/^\d\. \*\*/)) {
                  const match = line.match(/^\d\. \*\*(.+?)\*\*: (.+)/);
                  if (match) {
                    return (
                      <p key={i} className="text-gray-600 mb-2">
                        <strong className="text-[#323232]">{match[1]}</strong>: {match[2]}
                      </p>
                    );
                  }
                }
                if (line.trim()) {
                  return <p key={i} className="text-gray-600 mb-4 leading-relaxed">{line}</p>;
                }
                return null;
              })}
            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
