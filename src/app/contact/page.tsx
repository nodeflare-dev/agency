'use client';

import { useState } from 'react';
import { Send, Mail } from 'lucide-react';
import Link from 'next/link';
import { Header, Footer } from '@/components';
import { Container } from '@/components/ui/Container';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    company: '',
    name: '',
    email: '',
    phone: '',
    inquiry: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
      } else {
        setSubmitStatus('error');
      }
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // 送信完了画面
  if (submitStatus === 'success') {
    return (
      <>
        <Header />
        <main className="pt-24 pb-20">
          <Container size="xl">
            <div className="max-w-2xl mx-auto text-center py-16">
              <div className="flex flex-col gap-8 text-xl sm:text-2xl text-[#323232] font-light">
                <span className="flex items-center justify-center gap-3">
                  <Mail className="w-6 h-6 text-violet-600" strokeWidth={1.5} />
                  お問い合わせありがとうございます。
                </span>
                <span>この度は、NodeFlareにお問い合わせいただき、</span>
                <span>誠にありがとうございます。</span>
                <span>内容を確認のうえ、担当者より</span>
                <span>2営業日以内にご連絡いたします。</span>
                <span>何卒よろしくお願い申し上げます。</span>
                <span className="mt-8 pt-8 border-t border-gray-400 text-lg text-[#323232]">NodeFlare株式会社　一同より</span>
              </div>
            </div>
          </Container>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <main className="pt-24 pb-20">
        <Container size="xl">
          <div className="max-w-2xl mx-auto">
            <h1 className="text-3xl sm:text-4xl font-light text-[#323232] mb-4">
              お問い合わせ
            </h1>
            <p className="text-gray-600 mb-12">
              MCP導入のご相談、お見積り依頼など、お気軽にお問い合わせください。
            </p>

            {submitStatus === 'error' && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-6 py-4 rounded-lg mb-8">
                送信に失敗しました。時間をおいて再度お試しください。
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-[#323232] mb-2">
                  会社名 <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  required
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-colors"
                  placeholder="株式会社〇〇"
                />
              </div>

              <div>
                <label htmlFor="name" className="block text-sm font-medium text-[#323232] mb-2">
                  お名前 <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-colors"
                  placeholder="山田 太郎"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[#323232] mb-2">
                  メールアドレス <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-colors"
                  placeholder="example@company.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-[#323232] mb-2">
                  電話番号
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-colors"
                  placeholder="03-1234-5678"
                />
              </div>

              <div>
                <label htmlFor="inquiry" className="block text-sm font-medium text-[#323232] mb-2">
                  お問い合わせ内容 <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="inquiry"
                  name="inquiry"
                  required
                  rows={6}
                  value={formData.inquiry}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-colors resize-none"
                  placeholder="ご質問やご要望をお聞かせください"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-violet-600 hover:bg-violet-700 disabled:bg-violet-400 text-white font-medium py-3 px-8 rounded-lg transition-colors border border-violet-700 flex items-center justify-center gap-2"
              >
                {isSubmitting ? '送信中...' : '送信する'}
                <Send size={18} />
              </button>
            </form>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
