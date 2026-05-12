'use client';

import Image from 'next/image';
import { Container } from './ui/Container';
import { Section } from './ui/Section';

const ganttTasks = [
  { name: 'ヒアリング・要件定義', start: 1, end: 1 },
  { name: 'MCP設計・開発', start: 2, end: 3 },
  { name: 'テスト・デプロイ', start: 4, end: 4 },
  { name: 'ドキュメント納品', start: 4, end: 4 },
];

const weeks = ['1週目', '2週目', '3週目', '4週目'];

const featureGroups = [
  {
    image: '/select1.png',
    items: [
      {
        number: '01',
        title: 'MCP専用基盤「nodeflare」を開発',
        description: '自社開発のMCP専用サーバー「nodeflare」により、MCP基盤が完全に整備。最適化された環境で安定稼働を実現します。',
      },
      {
        number: '02',
        title: 'MCP開発に特化した技術力',
        description: 'MCP仕様を熟知した専門チームが、要件定義から実装まで一貫対応。複雑な連携も確実に実現します。',
      },
    ],
  },
  {
    image: '/select2.png',
    items: [
      {
        number: '03',
        title: '完全納品報酬制',
        description: '納品完了まで報酬は発生しません。成果物に自信があるからこそ、リスクなくご依頼いただけます。',
      },
      {
        number: '04',
        title: '透明なスケジュール共有',
        description: '納品までのスケジュールを細かく共有。進捗が常に見えるため、安心してプロジェクトをお任せいただけます。',
      },
    ],
  },
];

export function Features() {
  return (
    <Section id="features" variant="default" className="relative overflow-hidden pt-8 lg:pt-12">
      {/* Background decoration between sections */}
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-64 bg-contain bg-no-repeat bg-right pointer-events-none"
        style={{ backgroundImage: 'url(/bg3.png)' }}
      />
      <Container size="xl" className="relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-light text-[#323232] mb-4">
            選ばれる理由
          </h2>
          <p className="text-gray-600">
            MCP開発の専門チームが、企画から運用まで一貫サポート
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {featureGroups.map((group, groupIndex) => (
            <div key={groupIndex} className="bg-gray-50 rounded-lg flex flex-col overflow-hidden">
              <Image
                src={group.image}
                alt=""
                width={500}
                height={300}
                className="w-full h-auto"
              />
              <div className="p-6 flex flex-col gap-4">
                {group.items.map((feature) => (
                  <div key={feature.number}>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-violet-500 font-bold text-sm">
                        {feature.number}
                      </span>
                      <h3 className="text-lg font-semibold text-violet-600">
                        {feature.title}
                      </h3>
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Development Flow - Gantt Chart */}
        <div className="mt-20">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-light text-[#323232] mb-4">
              開発フロー
            </h2>
            <p className="text-gray-600">
              4週間で納品。御社の負担は合計約7時間
            </p>
          </div>

          <div className="max-w-4xl mx-auto overflow-x-auto flex justify-center">
            <table className="border-separate" style={{ borderSpacing: '3px 3px' }}>
              <thead>
                <tr className="bg-violet-600">
                  <th className="w-48 text-left py-2"></th>
                  {weeks.map((week) => (
                    <th
                      key={week}
                      className="text-center py-2 text-sm font-medium text-white w-36"
                    >
                      {week}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {ganttTasks.map((task, taskIndex) => (
                  <tr key={taskIndex}>
                    <td className="text-sm text-gray-700 py-2 px-4 w-48 bg-gray-100 text-center font-medium">
                      {task.name}
                    </td>
                    {weeks.map((_, weekIndex) => {
                      const weekNum = weekIndex + 1;
                      const isActive = weekNum >= task.start && weekNum <= task.end;
                      return (
                        <td key={weekIndex} className="p-0 h-12" style={{ background: isActive ? '#DDD6FE' : '#f9f9f9' }}>
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Container>
    </Section>
  );
}
