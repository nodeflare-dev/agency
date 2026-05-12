'use client';

import { Container } from './ui/Container';
import { Section } from './ui/Section';

const features = [
  {
    number: '01',
    title: 'MCP公式仕様の策定段階から関与',
    description: 'Anthropic社のMCP仕様策定に初期から参画。仕様の深い理解と最新動向の把握により、最適な実装を提供します。',
  },
  {
    number: '02',
    title: '4週間での確実な納品',
    description: '豊富な開発実績とテンプレートにより、要件定義から本番稼働まで最短4週間。御社の負担は合計約7時間のみ。',
  },
  {
    number: '03',
    title: 'エンタープライズ品質のセキュリティ',
    description: 'SOC2 Type II準拠の開発体制。データ暗号化、アクセス制御、監査ログを標準装備し、金融機関レベルの要件に対応。',
  },
  {
    number: '04',
    title: '導入後も継続サポート',
    description: '24時間365日の監視体制と定期メンテナンス。業務変化に合わせた機能追加や改善も継続的に対応します。',
  },
];

const stats = [
  { value: '50+', label: '導入実績' },
  { value: '99.9%', label: '稼働率保証' },
  { value: '4週間', label: '平均納品期間' },
];

export function Features() {
  return (
    <Section id="features" variant="default">
      <Container size="xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-light text-[#323232] mb-4">
            選ばれる理由
          </h2>
          <p className="text-gray-600">
            MCP開発の専門チームが、企画から運用まで一貫サポート
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-16">
          {features.map((feature) => (
            <div
              key={feature.number}
              className="p-6 bg-gray-50 rounded-lg"
            >
              <span className="text-violet-500 font-bold text-sm mb-2 block">
                {feature.number}
              </span>
              <h3 className="text-lg font-semibold text-[#323232] mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-violet-600 rounded-2xl p-8 max-w-3xl mx-auto">
          <div className="grid grid-cols-3 gap-4 text-center text-white">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl sm:text-4xl font-bold">{stat.value}</p>
                <p className="text-sm text-violet-200 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
