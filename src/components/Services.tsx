'use client';

import { useState } from 'react';
import { ChevronDown, Pointer } from 'lucide-react';
import { Container } from './ui/Container';
import { Section } from './ui/Section';
import { cn } from '@/lib/utils';

const items = [
  {
    badge: '金融',
    problem: '融資審査で複数システムの情報収集→稟議書作成→決裁回付が属人化',
    solution: '「この案件の稟議書を作成して審査部に回付」で信用情報取得→財務分析→稟議システム起票→承認者に通知',
  },
  {
    badge: '保険',
    problem: '保険金請求の受付→査定→支払処理に何日もかかる',
    solution: '「この請求を査定して問題なければ支払処理」で契約照合→過去事例チェック→支払システム登録→顧客に完了通知',
  },
  {
    badge: '製薬',
    problem: '治験データ収集→レポート作成→当局申請の書類準備が膨大',
    solution: '「Phase2の安全性レポートを作成」でEDC連携→統計解析実行→規制フォーマットで報告書自動生成',
  },
  {
    badge: 'コンサル',
    problem: '提案書作成で過去案件→工数見積→契約書までが非効率',
    solution: '「A社向けDX提案書を作成して見積もり」で類似案件参照→テンプレ生成→工数DB連携→見積書まで一括作成',
  },
  {
    badge: '広告',
    problem: '複数媒体の入稿→レポート集計→クライアント報告が毎週発生',
    solution: '「今週のキャンペーンレポート作成してクライアントに送付」で各媒体API連携→分析→レポート生成→メール送信',
  },
  {
    badge: '物流',
    problem: '受注→在庫確認→配送手配→請求を複数システムで処理',
    solution: '「この注文を処理して最短で配送手配」でWMS在庫引当→配送システム登録→送り状発行→顧客に追跡番号通知',
  },
  {
    badge: '製造',
    problem: '生産計画→部品発注→品質検査→出荷の連携が複雑',
    solution: '「来月の生産計画で不足部品を発注」でMRP連携→サプライヤーポータル発注→納期を生産システムに反映',
  },
  {
    badge: 'IT/SaaS',
    problem: '顧客の解約兆候把握→CSアクション→更新提案の後手対応',
    solution: '「解約リスク高の顧客にフォローアップ」で利用データ分析→CSツールにタスク登録→担当者にSlack通知→メール下書き作成',
  },
  {
    badge: '建設',
    problem: '見積作成→協力会社手配→工程管理→請求の紙作業が多い',
    solution: '「この案件の見積を作成して協力会社に発注」で積算システム連携→発注書生成→協力会社ポータルに送信',
  },
  {
    badge: '医療',
    problem: '検査オーダー→結果確認→カルテ記載→次回予約の流れが煩雑',
    solution: '「この患者の血液検査をオーダーして来週の予約を入れて」で検査システム登録→予約システム更新まで完了',
  },
  {
    badge: '不動産',
    problem: '物件提案→内見調整→契約書作成を毎回手動で進めている',
    solution: '「田中様に物件3件提案して内見日程を調整」でCRM更新→提案書作成→カレンダー登録→メール送信',
  },
  {
    badge: '人材',
    problem: '候補者への連絡→面接設定→評価入力→結果通知が手作業',
    solution: '「この候補者の2次面接を来週で設定」でATS更新→面接官カレンダー確認→候補者にメール送信まで一括',
  },
];

const ganttTasks = [
  {
    category: '',
    tasks: [
      { name: 'ヒアリング・要件定義', start: 1, end: 1 },
      { name: 'MCP設計・開発', start: 2, end: 3 },
      { name: 'テスト・デプロイ', start: 4, end: 4 },
      { name: 'ドキュメント納品', start: 4, end: 4 },
    ],
  },
];

const weeks = ['1週目', '2週目', '3週目', '4週目'];


function AccordionItem({ item, isOpen, onClick }: {
  item: typeof items[0];
  isOpen: boolean;
  onClick: () => void;
}) {
  return (
    <div
      className={cn(
        "border rounded overflow-hidden transition-all cursor-pointer group bg-white",
        isOpen ? "border-gray-400 border-l-4 border-l-violet-500" : "border-gray-400 hover:border-gray-500"
      )}
      onClick={onClick}
    >
      <div className="flex items-start gap-3 p-5">
        <div className="flex-1 min-w-0">
          <span className="text-xs font-medium text-violet-600 mb-1 block">
            {item.badge}
          </span>
          <p className={cn("font-medium", isOpen ? "text-violet-700" : "text-[#323232]")}>
            {item.problem}
          </p>
        </div>
        <ChevronDown className={cn(
          "w-5 h-5 transition-all shrink-0 mt-1 text-gray-400 group-hover:text-gray-500",
          isOpen && "rotate-180"
        )} />
      </div>
      <div className={cn(
        "overflow-hidden transition-all",
        isOpen ? "max-h-40" : "max-h-0"
      )}>
        <div className="px-5 pb-5 pt-0">
          <p className="text-sm text-violet-600 font-medium mb-1">MCPで解決</p>
          <p className="text-gray-600">{item.solution}</p>
        </div>
      </div>
    </div>
  );
}

export function Services() {
  const [openIndexes, setOpenIndexes] = useState<Set<number>>(new Set([0]));

  const toggleIndex = (index: number) => {
    setOpenIndexes(prev => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };

  return (
    <Section id="services" variant="default">
      <Container size="xl">
        {/* What MCP Can Do */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-light text-[#323232] mb-4">
              自社MCPでできること
            </h2>
            <p className="text-gray-600 flex items-center justify-center gap-2">
              タップして解決策を確認
              <Pointer className="w-4 h-4" />
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-4 max-w-4xl mx-auto">
            <div className="flex-1 flex flex-col gap-4">
              {items.filter((_, i) => i % 2 === 0).map((item, i) => {
                const index = i * 2;
                return (
                  <AccordionItem
                    key={index}
                    item={item}
                    isOpen={openIndexes.has(index)}
                    onClick={() => toggleIndex(index)}
                  />
                );
              })}
            </div>
            <div className="flex-1 flex flex-col gap-4">
              {items.filter((_, i) => i % 2 === 1).map((item, i) => {
                const index = i * 2 + 1;
                return (
                  <AccordionItem
                    key={index}
                    item={item}
                    isOpen={openIndexes.has(index)}
                    onClick={() => toggleIndex(index)}
                  />
                );
              })}
            </div>
          </div>
        </div>

        {/* Development Flow - Gantt Chart */}
        <div className="mb-20">
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
              {/* Header */}
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
                {ganttTasks[0].tasks.map((task, taskIndex) => (
                  <tr key={taskIndex}>
                    {/* Task name */}
                    <td className="text-sm text-gray-700 py-2 px-4 w-48 bg-gray-100 text-center font-medium">
                      {task.name}
                    </td>
                    {/* Week cells with bars */}
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
