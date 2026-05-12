import Link from 'next/link';
import { Download } from 'lucide-react';
import { Container } from './ui/Container';
import { Button } from './ui/Button';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <picture>
          <source media="(max-width: 768px)" srcSet="/top_bg_sm.png" />
          <img
            src="/top_bg.png"
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
          />
        </picture>
      </div>

      {/* Content */}
      <Container size="xl" className="relative z-10 pt-24 pb-20">
        <div className="max-w-3xl">
          <span className="inline-block mb-8 px-6 py-3 text-lg font-semibold text-white" style={{ background: 'linear-gradient(to right, #7C3AED, #E040D0)' }}>
            MCPにより業務完全自動化に成功
          </span>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light leading-[1.1] tracking-tight mb-8 text-[#323232]">
            AIに話しかけるだけで
            <br />
            業務が完了する会社へ
          </h1>

          <p className="text-lg sm:text-xl text-[#323232] leading-relaxed mb-12 max-w-2xl">
            MCPで社内システムとAIをつなぎ、複雑な業務もAIへの一言で完結。
            事前に詳細なスケジュールを共有し開発。完全納品契約で安心してお任せください。
          </p>

          <Link href="#download">
            <Button size="lg" className="gap-2.5 px-10 py-4">
              <Download size={20} />
              資料ダウンロード
            </Button>
          </Link>
        </div>
      </Container>
    </section>
  );
}
