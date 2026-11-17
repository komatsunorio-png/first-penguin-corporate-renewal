# ファーストペンギン コーポレートサイト リニューアル（デザイン確認用モック）

株式会社ファーストペンギンのコーポレートサイトをインハウスでリニューアルするための、表示確認用の静的HTMLです。
**公式サイトではありません。** すべてのページに `noindex` を設定しています。

## 確認用URL（GitHub Pages）

https://komatsunorio-png.github.io/first-penguin-corporate-renewal/

## ページ構成

| 区分 | ページ | パス |
|---|---|---|
| トップ | トップ | `/` |
| 会社情報 | 会社情報トップ | `/company/` |
| | 企業理念 | `/company/philosophy/` |
| | 企業概要（日本語・English・中文） | `/company/overview/`、`/company/overview/company_en/`、`/company/overview/company_cn/` |
| | 沿革 | `/company/history/` |
| | プライバシーポリシー | `/company/privacy/` |
| | コンプライアンス | `/company/compliance/` |
| | 情報セキュリティ | `/company/security/` |
| | 反社会的勢力に対する基本方針 | `/company/antisocial/` |
| 事業内容 | 事業内容トップ | `/business/` |
| | ASP事業 | `/business/infotop/` |
| | ペイメント事業 | `/business/payment/` |
| | 広告事業 | `/business/ad/` |
| | コンテンツプロデュース事業 | `/business/contentsproduce/` |
| ニュース | ニューストップ | `/news/` |
| | コーポレートニュース | `/news/corporate/` |
| | サービスニュース | `/news/service/` |
| | ニュース記事（1ページのみ） | `/news/article.html` |
| 採用情報 | 採用情報 | `/recruit/` |
| | キャリア採用 | `/recruit/career/` |
| | エントリー（メール応募） | `/recruit/career/entry/` |
| | 個人情報の取り扱い（採用） | `/recruit/career/privacy/` |
| お問い合わせ | お問い合わせ | `/contact/` |
| | 個人情報の取り扱い（お問い合わせ） | `/contact/privacypolicy/` |

## 表示確認用の仕様

- ニュース記事は1ページのみ作成し、**すべてのニュースのリンク先を `/news/article.html` に**しています。
- 年での絞り込み・ページ送りは見た目のみです（リンク先なし）。
- お問い合わせ・キャリア採用エントリーは、フォームではなくメール（mailto）で受け付ける形式です。ボタンを押すと、件名と記入項目が入った状態でメールソフトが開きます。
- 宛先は以下のとおりです。

| 窓口 | 宛先 |
|---|---|
| ファーストペンギンに関するお問い合わせ | inquire@first-penguin.co.jp |
| 各種サービスに関するお問い合わせ | inquire@first-penguin.co.jp |
| 個人情報に関するお問い合わせ | privacy@first-penguin.co.jp |
| 中途採用・キャリア採用に関するお問い合わせ（エントリー含む） | career@first-penguin.co.jp |
| 新卒採用サイト、説明会・選考エントリー | recruit@first-penguin.co.jp |
| インベスターリレーションに関するお問い合わせ | ir@first-penguin.co.jp |
| 取材に関するお問い合わせ | pr@first-penguin.co.jp |

- 広告事業ページの「広告事業の内容」3項目は仮テキストです。
- ペイメント事業の特徴（4項目）の説明文は、現行サイトでは画像内の文言のため仮テキストにしています。

## 画像について

- 人物写真はFigmaのAIで生成したイメージ画像です（正式素材ではありません）。
- 建物・ノートなど一部の写真は、イメージ確認用のフリー素材（Unsplash）です。
- ロゴは株式会社ファーストペンギンのものです。

## ファイル構成

```
assets/
  css/style.css   共通スタイル（PC／SP レスポンシブ、ブレークポイント 767px／960px）
  js/main.js      SPメニュー、アコーディオン、タブ、ページトップ
  img/            画像
各ディレクトリ/index.html
```

ビルドは不要です。各HTMLをそのままブラウザで開けます（相対パスで記述）。
