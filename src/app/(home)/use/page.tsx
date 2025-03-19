import { Logo } from "@/components/global/logo";

export default function Use() {
  return (
    <div className="container mx-auto flex max-w-2xl flex-col gap-5 pt-16">
      <h1 className="pb-2 text-center text-5xl">
        <span className="border-b-4 border-gray-800 px-4">
          <Logo />
          の使い方
        </span>
      </h1>
      <div className="text-xl leading-relaxed font-semibold text-gray-800">
        <ol className="list-inside list-decimal space-y-2">
          <li>
            「ログイン」または「はじめる」ボタンをクリックして、ログインページを開きます。
          </li>
          <li>
            メールアドレス、Github、Googleのいずれかの方法でログインします。
          </li>
          <li>
            記事を投稿するには、記事一覧ページの「新しい記事」ボタンをクリックし、エディター画面で内容を作成します。
          </li>
          <li>過去の記事は記事一覧ページからいつでも確認・編集できます。</li>
          <li>
            あとは自由に記事を作成し、快適なブログ体験をお楽しみください！
          </li>
        </ol>
      </div>
    </div>
  );
}
