import { NextRequest, NextResponse } from 'next/server';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8080';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { company, name, email, phone, inquiry } = body;

    if (!company || !name || !email || !inquiry) {
      return NextResponse.json(
        { error: '必須項目を入力してください' },
        { status: 400 }
      );
    }

    // Format message for nodeflare API
    const message = `【Agency LP お問い合わせ】

会社名: ${company}
お名前: ${name}
電話番号: ${phone || '未入力'}

お問い合わせ内容:
${inquiry}`;

    // Call nodeflare contact API
    const response = await fetch(`${API_URL}/api/v1/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: `${company} ${name}`,
        email,
        message,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      console.error('nodeflare API error:', errorData);
      return NextResponse.json(
        { error: '送信に失敗しました' },
        { status: response.status }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: '送信に失敗しました' },
      { status: 500 }
    );
  }
}
