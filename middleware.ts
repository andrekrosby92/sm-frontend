import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest): NextResponse {
  const ip = request.headers.get('x-forwarded-for')?.split(',')[0] ?? 'unknown';

  console.log(`[${new Date().toISOString()}] ${ip} → ${request.nextUrl.pathname}`);

  return NextResponse.next();
}

export const config = {
  matcher: ['/_next/image/:path*'],
};