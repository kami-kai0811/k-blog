import type { SendRequestParams, Theme } from "@/types";

export async function sendVerificationRequest(params: SendRequestParams) {
  const { identifier: to, url, provider, theme } = params;
  const { host } = new URL(url);
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${provider.apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: provider.from,
      to,
      subject: `Sign in to ${host}`,
      html: html({ url, host, theme }),
      text: text({ url, host }),
    }),
  });

  if (!res.ok) {
    throw new Error("Resend error:" + JSON.stringify(await res.json()));
  }
}

function html(params: { url: string; host: string; theme: Theme }) {
  const { url, host, theme } = params;

  const escapedHost = host.replace(/\./g, "&#8203;.");

  const brandColor = theme.brandColor ?? "#346df1";
  const color = {
    background: "#9da3a3",
    text: "#444",
    mainBackground: "#fff",
    buttonBackground: brandColor,
    buttonBorder: brandColor,
    buttonText: theme.buttonText ?? "#fff",
  };

  return `

  <body
    style="font-family: Helvetica, Arial, sans-serif; margin: 0; padding: 0 background: ${color.background}"
  >
    <table
      width="100%"
      border="0"
      cellspacing="0"
      cellpadding="0"
      style="padding: 40px 0"
    >
      <tr>
        <td align="center">
          <table
            width="600"
            border="0"
            cellspacing="0"
            cellpadding="0"
            style="
              border-radius: 10px;
              box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
            "
          >
            <tr>
              <td style="padding: 20px; text-align: center">
                <!-- オプション：ロゴ画像 -->

                <h2 style="margin: 0; font-size: 24px">
                  ログインリンクのご案内
                </h2>
                <p style="font-size: 16px; margin: 10px 0 20px">
                  下のボタンをクリックして、サインインを完了してください。
                </p>
              </td>
            </tr>
                <tr>
                  <td align="center"
                    style="padding: 10px 0px; font-size: 22px; font-family: Helvetica, Arial, sans-serif; color: ${color.text};">
                     <strong>${escapedHost}</strong>
                  </td>
                </tr>
            <tr>
              <td align="center" style="padding: 20px" bgcolor="${color.buttonBackground}">
                <a
                  href="${url}"
                  target="_blank"
                  style="

                    text-decoration: none;
                    padding: 15px 30px;
                    font-size: 18px;
                    border-radius: 5px;
                    display: inline-block;
                    font-weight: bold;
                  "
                >
                  サインインする
                </a>
              </td>
            </tr>
            <tr>
              <td style="padding: 20px; text-align: center">
                <p style="font-size: 14px; line-height: 20px; margin: 0">
                  ※ このリンクは <strong>60分間</strong> のみ有効です。<br />
                  リンクをクリックしてもサインインできない場合は、メールアドレスをご確認ください。
                </p>
              </td>
            </tr>
            <tr>
              <td style="padding: 20px; text-align: center">
                <p style="font-size: 12px; line-height: 18px; margin: 0">
                  ※ このメールに覚えがない場合は、無視してください。
                </p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
`;
}

// Email Text body (fallback for email clients that don't render HTML, e.g. feature phones)
function text({ url, host }: { url: string; host: string }) {
  return ` ${host}\n${url}\n\n のサインインメール`;
}
