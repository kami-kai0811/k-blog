This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

<div id="top"></div>

## 使用技術一覧

1. Next.js (App Router) -Web開発向けのReact フレームワーク
2. Tailwind CSS - CSS ユーティリティフレームワーク
3. Google Fonts - パフォーマンス重視のフォント管理
4. Prisma - データベース ORM
5. TypeScript - 静的型付けを付与したJavaScriptのスーパーセット
6. Auth.js - 認証の処理・管理を提供するフレームワーク
7. Editor.js - テキストエディタを提供するフレームワーク
8. supabase - Firebaseのオープンソース代替として開発されたバックエンドサービス

※詳細はpackage.jsonをご参照ください

## 目次

1. [プロジェクトについて](#プロジェクトについて)
2. [環境](#環境)
3. [ディレクトリ構成](#ディレクトリ構成)
4. [開発環境構築](#開発環境構築)

<!-- プロジェクトについて -->

## プロジェクトについて

### Next.jsを用いた、シンプルかつ使いやすいブログ投稿プラットフォームです。
- Auth.jsによるメールアドレス、GitHub、Googleを使った柔軟な認証機能を備えています。
- Editor.jsを用いて、必要最低限のシンプルで直感的なエディター機能を提供しています。
- supabaseをデータベースとして利用し、ユーザー情報や投稿記事の管理を効率的に行っています。

## 環境

<!-- 言語、フレームワーク、ミドルウェア、インフラの一覧とバージョンを記載 -->

| 言語・フレームワーク | バージョン    |
| -------------------- | ------------- |
| React                | 19.0.0        |
| React DOM            | 19.0.0        |
| Next.js              | 15.2.1        |
| NextAuth.js          | 5.0.0-beta.25 |
| Prisma               | 6.5.0         |
| Tailwind CSS         | 4.x           |
| ESLint               | 9.x           |
| TypeScript           | 5.x           |
| Node.js              | 20.x          |

その他のパッケージのバージョンは package.json を参照してください

<p align="right">(<a href="#top">トップへ</a>)</p>

## ディレクトリ構成

<!-- Treeコマンドを使ってディレクトリ構成を記載 -->

src 以下のディレクトリ構成

<pre>
└─src
    ├─app
    │  ├─(auth)
    │  │  └─login
    │  ├─(dashbord)
    │  │  └─dashbord
    │  │      └─use
    │  ├─(editor)
    │  │  └─editor
    │  │      └─[postId]
    │  ├─(home)
    │  │  ├─feature
    │  │  └─use
    │  └─api
    │      ├─auth
    │      │  └─[...nextauth]
    │      ├─links
    │      └─posts
    │          └─[postId]
    ├─components
    │  ├─dashbord
    │  ├─editor
    │  ├─global
    │  ├─homePage
    │  ├─loginPage
    │  └─ui
    ├─config
    ├─fonts
    ├─lib
    │  └─validations
    ├─styles
    └─types
</pre>

---

## フォルダ・ファイルの説明

### 📁 app フォルダ

　Next.js の App Router に準拠した、ページとルーティングの管理。

 **`(auth) `**
 
 　認証関連のページ(ログイン)
 
 **`(dashbord) `**
 
 　ユーザーダッシュボード（記事管理）
 
 **`(editor) `**
 
　 記事の編集・作成画面
 
 **`(home) `**
 
 　ブログのホームページ
 
 **`api`**
 
- **`auth`**
  
 　 認証に関するAPI
  
- **`links`**
  
  editor.jsのリンク機能に関するAPI
  
- **`posts`**
  
 　 記事の投稿に関するAPI
  


### 📁 components フォルダ

　再利用可能なコンポーネント群。

- **`dashbord`**
  
  　ユーザーダッシュボードのコンポーネント
  
- **`editor`**
  
 　　エディタページのコンポーネント
 
- **`global`**
  
 　　グローバルで使うコンポーネント
 
- **`homePage`**
  
 　　 ホームページのコンポーネント
  
- **`loginPage`**
  
  　　ログインページのコンポーネント
  
- **`ui`**
  
  　　shadcnのコンポーネント

### 📁 config フォルダ

　アプリケーション設定や初期化を管理。


### 📁 lib フォルダ

　汎用的な処理をまとめたユーティリティ。



### 📁 styles フォルダ

 　Tailwind CSS をベースとしたグローバルスタイル設定。


### 📁 types フォルダ

　　プロジェクト内で使用する型定義。




---

## 🔧 セットアップ方法

### 1. リポジトリのクローン

```bash
git clone <repository-url>
cd <repository-directory>


```

### 2. 開発環境構築

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

[http://localhost:3000]を開く
