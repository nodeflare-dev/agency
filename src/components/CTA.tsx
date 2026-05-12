import Link from 'next/link';
import { ArrowRight, Mail } from 'lucide-react';
import { Container } from './ui/Container';
import { Button } from './ui/Button';

export function CTA() {
  return (
    <section id="contact" className="py-24 bg-gray-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-violet-600/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-purple-600/20 rounded-full blur-[100px]" />
      </div>

      <Container size="lg" className="relative z-10">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight">
            MCP導入のご相談は
            <br />
            お気軽にどうぞ
          </h2>
          <p className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto">
            まずは無料相談で、貴社の課題やご要望をお聞かせください。
            <br />
            最適なソリューションをご提案いたします。
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link href="mailto:contact@nodeflare.tech">
              <Button size="lg" className="w-full sm:w-auto gap-2">
                無料相談を予約する
                <ArrowRight size={18} />
              </Button>
            </Link>
            <Link href="mailto:contact@nodeflare.tech">
              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto border-gray-700 text-gray-300 hover:bg-gray-800 hover:border-gray-600"
              >
                資料をダウンロード
              </Button>
            </Link>
          </div>

          <div className="flex items-center justify-center gap-2 text-gray-400">
            <Mail size={18} />
            <a
              href="mailto:contact@nodeflare.tech"
              className="hover:text-white transition-colors"
            >
              contact@nodeflare.tech
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
