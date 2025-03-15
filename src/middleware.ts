// middleware.ts
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import NextAuth from "next-auth";

import { authConfig } from "./config/auth.config";

// ミドルウェア用の Auth.js インスタンスを生成（データベースアダプターなし）
const { auth: middlewareAuth } = NextAuth(authConfig);

export default middlewareAuth(async (req: NextRequest) => {
  // ミドルウェアでは軽量な処理のみを実施する
  const token = await middlewareAuth();
  const isAuth = !!token;
  const isAuthPage =
    req.nextUrl.pathname.startsWith("/login") ||
    req.nextUrl.pathname.startsWith("/register");

  // 認証ページの場合、認証済みならダッシュボードへリダイレクト
  if (isAuthPage) {
    if (isAuth) {
      return NextResponse.redirect(new URL("/dashbord", req.url));
    }
    // 未認証の場合はそのまま表示（ループ回避）
    return NextResponse.next();
  }

  // 認証が必要なページで未認証ならログインへリダイレクト
  if (!isAuth) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  // 認証済みの場合は通常通りページを表示
  return NextResponse.next();
});

// ミドルウェアを適用するパスの設定
export const config = {
  matcher: ["/dashbord/:path*", "/editor/:path*", "/login", "/register"],
};
