import { Logo } from "@/components/global/logo";

export default function Feature() {
  return (
    <div className="container mx-auto flex max-w-xl flex-col gap-5 pt-16">
      <h1 className="pb-2 text-center text-5xl">
        <span className="border-b-4 border-gray-800 px-4">
          <Logo />
          の特徴
        </span>
      </h1>
      <div className="flex flex-col gap-2 text-xl leading-relaxed font-semibold text-gray-800">
        <p>シンプルで使いやすいブログ投稿アプリケーションです。</p>
        <p>
          直感的な操作で記事を書き、簡単に公開できます。
          作成した記事は一覧で見やすく表示されるため、過去の記事をいつでもすぐに振り返ることができます。
        </p>
        <p>
          エディターには、テキスト、見出し、リンク、リスト、コードなど必要最低限の機能が揃っており、快適な執筆環境を提供します。
        </p>
        <p>是非お楽しみください。</p>
      </div>
    </div>
  );
}
