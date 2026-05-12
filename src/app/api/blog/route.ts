import { NextResponse } from 'next/server';
import { getBlogPosts } from '@/lib/hygraph';

const AGENCY_CATEGORY_SLUG = 'agency';

export async function GET() {
  // Return empty array if HYGRAPH_TOKEN not configured
  if (!process.env.HYGRAPH_TOKEN) {
    return NextResponse.json([]);
  }

  try {
    const posts = await getBlogPosts('ja', AGENCY_CATEGORY_SLUG);
    return NextResponse.json(posts);
  } catch {
    return NextResponse.json([]);
  }
}
