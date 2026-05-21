'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Header, Footer } from '@/components';
import { Container } from '@/components/ui/Container';
import { cn } from '@/lib/utils';

const faqs = [
  {
    category: 'サービスについて',
    items: [
      {
        question: 'MCPとは何ですか？',
        answer: 'MCP（Model Context Protocol）は、AIと外部システムを連携させるためのプロトコルです。Anthropic社が策定し、オープンな仕様として公開されています。MCPを活用することで、AIが社内システムやSaaSと連携し、複雑な業務を自動化できるようになります。',
      },
      {
        question: 'nodeflareとは何ですか？',
        answer: '自社開発のMCP専用サーバーです。nodeflareにより、MCP基盤が完全に整備されており、最適化された環境で安定稼働を実現します。',
      },
      {
        question: 'どのようなシステムと連携できますか？',
        answer: 'Slack、Salesforce、Google Workspace、社内データベース、基幹システムなど、APIを持つほぼすべてのシステムと連携可能です。独自システムとの連携も対応いたします。',
      },
    ],
  },
  {
    category: '料金・契約について',
    items: [
      {
        question: '料金体系を教えてください',
        answer: '完全納品報酬制です。納品完了まで報酬は発生しません。詳細はお問い合わせください。',
      },
      {
        question: '完全納品報酬制とは何ですか？',
        answer: '納品が完了するまで報酬が発生しない契約形態です。成果物に自信があるからこそ、リスクなくご依頼いただけます。',
      },
    ],
  },
  {
    category: '導入・開発について',
    items: [
      {
        question: '導入までどのくらいかかりますか？',
        answer: '4週間で納品します。事前に詳細なスケジュールを共有いたします。',
      },
      {
        question: '導入時に必要な作業はありますか？',
        answer: '御社にお願いする作業は、ヒアリングへの参加と動作確認程度です。',
      },
      {
        question: '開発の流れを教えてください',
        answer: '1週目にヒアリング・要件定義、2〜3週目にMCP設計・開発、4週目にテスト・デプロイとドキュメント納品を行います。',
      },
    ],
  },
];

function AccordionItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-5 text-left"
      >
        <span className="font-medium text-[#323232] pr-4">{question}</span>
        <ChevronDown
          className={cn(
            'w-5 h-5 text-gray-400 shrink-0 transition-transform',
            isOpen && 'rotate-180'
          )}
        />
      </button>
      <div
        className={cn(
          'overflow-hidden transition-all',
          isOpen ? 'max-h-96 pb-5' : 'max-h-0'
        )}
      >
        <p className="text-gray-600 leading-relaxed">{answer}</p>
      </div>
    </div>
  );
}

export default function QAPage() {
  return (
    <>
      <Header />
      <main className="pt-24 pb-20">
        <Container size="xl">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl sm:text-4xl font-light text-[#323232] mb-4">
              よくあるご質問
            </h1>
            <p className="text-gray-600 mb-12">
              お客様からよくいただくご質問をまとめました。
            </p>

            <div className="space-y-12">
              {faqs.map((section) => (
                <div key={section.category}>
                  <h2 className="text-lg font-semibold text-violet-600 mb-4">
                    {section.category}
                  </h2>
                  <div className="border-t border-gray-200">
                    {section.items.map((item, index) => (
                      <AccordionItem
                        key={index}
                        question={item.question}
                        answer={item.answer}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
