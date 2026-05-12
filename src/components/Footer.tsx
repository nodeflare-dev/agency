import Link from 'next/link';
import { Container } from './ui/Container';

const footerLinks = {
  services: {
    title: 'サービス',
    links: [
      { label: 'データ連携MCP', href: '#services' },
      { label: '業務自動化MCP', href: '#services' },
      { label: 'セキュアMCP', href: '#services' },
      { label: 'カスタマーサポートMCP', href: '#services' },
    ],
  },
  company: {
    title: '会社情報',
    links: [
      { label: '会社概要', href: '#' },
      { label: 'ブログ', href: '#' },
      { label: '採用情報', href: '#' },
      { label: 'お問い合わせ', href: '#contact' },
    ],
  },
  resources: {
    title: 'リソース',
    links: [
      { label: 'ドキュメント', href: '#' },
      { label: '導入事例', href: '#cases' },
      { label: '料金プラン', href: '#pricing' },
      { label: 'FAQ', href: '#' },
    ],
  },
};

export function Footer() {
  return (
    <footer className="bg-violet-50 text-gray-600 pt-16 pb-8">
      <Container size="xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Logo and description */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <img src="/logo.png" alt="NodeFlare" className="h-8 w-auto" />
              <span className="font-black text-xl text-[#333333]" style={{ fontFamily: 'Inter, sans-serif' }}>NodeFlare</span>
            </Link>
            <p className="text-base leading-relaxed">
              企業向けMCPソリューションで、
              AIと業務システムの連携を実現します。
            </p>
          </div>

          {/* Links */}
          {Object.values(footerLinks).map((section) => (
            <div key={section.title}>
              <h4 className="text-[#323232] font-semibold text-lg mb-4">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm hover:text-violet-600 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-violet-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs">
            &copy; {new Date().getFullYear()} nodeflare Inc. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs">
            <Link href="#" className="hover:text-violet-600 transition-colors">
              プライバシーポリシー
            </Link>
            <Link href="#" className="hover:text-violet-600 transition-colors">
              利用規約
            </Link>
            <Link href="#" className="hover:text-violet-600 transition-colors">
              特定商取引法
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
