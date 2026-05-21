import type { Metadata } from 'next';
import { Noto_Sans_JP } from 'next/font/google';
import './globals.css';

const notoSansJP = Noto_Sans_JP({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  display: 'swap',
  variable: '--font-noto-sans-jp',
});

export const metadata: Metadata = {
  title: 'MCP開発受託 | nodeflare',
  description: '企業向けMCP（Model Context Protocol）サーバー開発。AIと業務システムをシームレスに連携し、業務効率化を実現します。',
  keywords: ['MCP', 'Model Context Protocol', 'AI', 'Claude', 'エンタープライズ', '業務効率化', 'システム連携'],
  icons: {
    icon: '/favicon.png',
  },
  openGraph: {
    title: 'MCP開発受託 | nodeflare',
    description: '企業向けMCP（Model Context Protocol）サーバー開発',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" className={notoSansJP.variable}>
      <body className={notoSansJP.className}>{children}</body>
    </html>
  );
}
