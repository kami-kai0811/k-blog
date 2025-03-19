import Image from "next/image";

export default function Use() {
  return (
    <div className="container mx-auto flex flex-col gap-10">
      <h2 className="p text-5xl font-bold">使い方</h2>
      <div className="pl-10">
        <ul className="list-disc space-y-8 text-2xl">
          <li>新しい記事を作成する</li>
          <ol className="list-inside list-decimal text-lg">
            <li>新しい投稿ボタンをクリックする</li>
            <Image
              src={"/images/new-post.png"}
              alt="記事投稿ページ"
              width={800}
              height={500}
              className="border-2"
            />
            <li className="mt-8">
              編集ページで記事を編集し、保存ボタンをおす。
            </li>
            <Image
              src={"/images/post-example.png"}
              alt="記事投稿ページ"
              width={800}
              height={400}
              className="border-2"
            />
          </ol>
          <li>記事を削除する</li>
          <ol className="list-inside list-decimal text-lg">
            <li>削除をクリックする</li>
            <Image
              src={"/images/delete-page.png"}
              alt="記事投稿ページ"
              width={800}
              height={500}
              className="border-2"
            />
            <li className="mt-8">削除ボタンをクリックする</li>
            <Image
              src={"/images/delete-page2.png"}
              alt="削除確認ページ"
              width={800}
              height={500}
              className="border-2"
            />
          </ol>
        </ul>
      </div>
    </div>
  );
}
