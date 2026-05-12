import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Container } from './ui/Container';

export function Notice() {
  return (
    <div className="bg-[#fff] py-6">
      <Container size="xl">
        <Link
          href="#"
          className="flex items-center gap-6 hover:opacity-80 transition-opacity max-w-4xl mx-auto"
        >
          <span className="text-sm text-gray-400 shrink-0">2025.01.15</span>
          <span className="text-sm font-medium text-violet-600 shrink-0">お知らせ</span>
          <span className="text-sm text-[#323232]">MCP専用サーバー「nodeflare」の提供を開始しました</span>
          <ArrowRight size={16} className="text-gray-400" />
        </Link>
      </Container>
    </div>
  );
}
