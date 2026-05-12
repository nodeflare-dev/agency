'use client';

import { Container } from './ui/Container';
import { Section } from './ui/Section';

const phases = [
  {
    week: 'Week 1',
    title: '要件定義',
    nodeflare: [
      'Slack専用チャンネル開設',
      '業務フローのヒアリング',
      '技術要件・API仕様の調査',
      '開発スコープ・見積もり確定',
    ],
    client: [
      '担当者アサイン（1名）',
      '接続先システムの情報共有',
      'APIキー・認証情報の準備',
      '週2回のMTG参加（各30分）',
    ],
    clientTime: '約3時間/週',
  },
  {
    week: 'Week 2-3',
    title: '開発',
    nodeflare: [
      'MCPサーバー構築',
      '各システムとのAPI連携実装',
      '認証・認可・セキュリティ設定',
      '毎日Slackで進捗共有',
    ],
    client: [
      'Slackでの質問対応',
      'テスト環境へのアクセス許可',
      '仕様変更があれば早めに連絡',
    ],
    clientTime: '約1時間/週',
  },
  {
    week: 'Week 4',
    title: 'テスト・納品',
    nodeflare: [
      '結合テスト・負荷テスト実施',
      'セキュリティチェック',
      '本番環境へのデプロイ',
      '運用ドキュメント納品',
    ],
    client: [
      '動作確認・フィードバック',
      '本番環境の準備',
      '管理者向けレクチャー参加（1時間）',
    ],
    clientTime: '約2時間/週',
  },
];

export function Flow() {
  return (
    <Section id="flow">
      <Container size="xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-light text-[#323232] mb-4">
            開発フロー
          </h2>
          <p className="text-gray-600">
            最短4週間で納品。御社の負担は最小限に抑えます
          </p>
        </div>

        {/* Legend */}
        <div className="flex justify-center gap-8 mb-8">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-violet-600 rounded-full"></div>
            <span className="text-sm text-gray-600">NodeFlare</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
            <span className="text-sm text-gray-600">御社</span>
          </div>
        </div>

        <div className="space-y-6">
          {phases.map((phase, index) => (
            <div key={phase.week} className="border border-gray-300 rounded overflow-hidden">
              {/* Header */}
              <div className="bg-gray-50 px-6 py-4 flex items-center justify-between border-b border-gray-300">
                <div className="flex items-center gap-4">
                  <span className="text-sm font-medium text-violet-600">{phase.week}</span>
                  <h3 className="text-lg font-bold text-[#323232]">{phase.title}</h3>
                </div>
                <div className="text-sm text-gray-500">
                  御社の工数: <span className="font-medium text-[#323232]">{phase.clientTime}</span>
                </div>
              </div>

              {/* Content */}
              <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-200">
                {/* NodeFlare side */}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-2 h-2 bg-violet-600 rounded-full"></div>
                    <span className="text-sm font-medium text-violet-600">NodeFlareの作業</span>
                  </div>
                  <ul className="space-y-2">
                    {phase.nodeflare.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                        <span className="text-violet-400 mt-0.5">→</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Client side */}
                <div className="p-6 bg-gray-50/50">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                    <span className="text-sm font-medium text-gray-500">御社にお願いすること</span>
                  </div>
                  <ul className="space-y-2">
                    {phase.client.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                        <span className="text-gray-400 mt-0.5">→</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Total */}
        <div className="mt-8 text-center p-6 bg-violet-50 rounded-lg">
          <p className="text-gray-600 mb-2">御社の総工数目安</p>
          <p className="text-2xl font-bold text-violet-600">約6〜8時間<span className="text-base font-normal text-gray-500">（4週間合計）</span></p>
          <p className="text-sm text-gray-500 mt-2">開発はNodeFlareが全て担当。御社は確認・フィードバックのみ</p>
        </div>
      </Container>
    </Section>
  );
}
