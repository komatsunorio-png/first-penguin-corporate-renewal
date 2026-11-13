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
| | エントリーフォーム | `/recruit/career/entry/` |
| | 個人情報の取り扱い（採用） | `/recruit/career/privacy/` |
| お問い合わせ | お問い合わせ | `/contact/` |
| | 個人情報の取り扱い（お問い合わせ） | `/contact/privacypolicy/` |

## 表示確認用の仕様

- ニュース記事は1ページのみ作成し、**すべてのニュースのリンク先を `/news/article.html` に**しています。
- 年での絞り込み・ページ送りは見た目のみです（リンク先なし）。
- お問い合わせはWFの方針どおり「メールで問い合わせる」ボタン（mailto）です。宛先 `xxxx@first-penguin.co.jp` は仮です。
- エントリーフォームは見た目のみで、送信はできません（送信の仕組みはシステム開発部で別途構築）。
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
