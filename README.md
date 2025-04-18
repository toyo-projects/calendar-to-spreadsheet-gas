# 📅 Google Calendar to Spreadsheet (GAS)

Googleカレンダーの予定をGoogleスプレッドシートに自動出力するGASスクリプトです。  
業務報告や作業時間集計などに活用でき、日付ごとに整形＋15分単位で工数（時間）も算出されます。

## 🗓️ スプレッドシート記入フォーマット（例）

以下のような形式でスプレッドシートに予定を記入しています。ご参考ください。

<img width="729" alt="todo_spreadsheet_smple_20250418" src="https://github.com/user-attachments/assets/a9392d4d-5052-4a18-b240-d6ce0c102167" />


## ✨ 主な機能

- 今月のカレンダー予定を一覧で取得
- 日付ごとに空行を挿入し視認性を向上
- 工数を15分単位（0.25h刻み）で算出
- スプレッドシートに自動出力

## 🛠 使用技術

- Google Apps Script (JavaScriptベース)
- Google カレンダー API
- Google スプレッドシート API

## 🔁 実行方法

1. Google スプレッドシートを新規作成
2. `拡張機能 > Apps Script` を開く
3. `Code.gs` のコードを貼り付けて保存
4. `importCurrentMonthEventsFormatted()` を実行
5. 初回はアクセス許可を付与

## 📌 注意点

- 個人利用スクリプトのため、Googleの認証警告が表示されます（「詳細」→「移動」で許可）
- トリガー設定で毎月自動実行も可能です

