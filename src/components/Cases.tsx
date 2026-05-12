'use client';

import { Container } from './ui/Container';
import { Section } from './ui/Section';

const cases = [
  {
    industry: '製造業',
    company: '大手製造業A社',
    challenge: '在庫確認に毎回30分、複数システムを横断して調査',
    solution: 'MCPで在庫管理・受発注・物流システムを統合',
    result: '問い合わせ対応80%自動化、顧客満足度25%向上',
  },
  {
    industry: '金融',
    company: '金融機関B社',
    challenge: '数千ページの規定集から該当箇所を探すのに数時間',
    solution: '社内ドキュメント全体をMCPで検索・参照可能に',
    result: '検索時間90%削減、新人教育コスト40%削減',
  },
  {
    industry: 'IT/SaaS',
    company: 'ITサービスC社',
    challenge: 'サポート対応が属人化、回答品質にばらつき',
    solution: 'Zendesk・Wiki・過去履歴をMCPで統合',
    result: '初回解決率35%向上、対応時間60%短縮',
  },
];

export function Cases() {
  return (
    <Section id="cases" variant="gray">
      <Container size="xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-light text-[#323232] mb-4">
            導入事例
          </h2>
          <p className="text-gray-600">
            様々な業界でMCPによる業務自動化を実現
          </p>
        </div>

        <div className="space-y-4 max-w-4xl mx-auto">
          {cases.map((caseItem, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg border border-gray-200"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-8">
                <div className="md:w-24 shrink-0">
                  <span className="text-xs font-medium text-violet-600 bg-violet-50 px-2 py-1 rounded">
                    {caseItem.industry}
                  </span>
                  <p className="text-xs text-gray-400 mt-2">{caseItem.company}</p>
                </div>

                <div className="flex-1 grid md:grid-cols-3 gap-4">
                  <div>
                    <p className="text-xs text-gray-400 mb-1">課題</p>
                    <p className="text-sm text-gray-700">{caseItem.challenge}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 mb-1">導入内容</p>
                    <p className="text-sm text-gray-700">{caseItem.solution}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 mb-1">成果</p>
                    <p className="text-sm text-violet-600 font-medium">{caseItem.result}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
