author: Yuto Ueki
summary: Flutter の簡単な ToDo アプリ
id: todo_app_for_mobile
categories: codelab,markdown
environments: Web
status: Published

# Flutter を用いた簡単な ToDo アプリを作ろう

## Flutter とは

Duration: 0:02:00

![](img/flutter.png)

**概要**

- Google が開発しているアプリの作成環境
- 2018 年 12 月 4 日に発表
- 一つのプロジェクトファイルで Android、iOS、Web、Windows、MacOS、Linux アプリを作成可能
  普通はそれぞれの OS に合わせて別々のプロジェクトファイルを作る必要がある
- <font color="red">めっちゃ簡単</font>

このツールを利用して簡単なアプリを作ります。

## 利用する環境

Duration: 0:04:00

#### ツール

Web 上で Flutter を動かせる[DartPad](https://dartpad.dev/?)を利用します。

各自の PC に Flutter の開発環境を構築してもいいですが...

- 大量のファイルをダウンロードする必要がある
- 環境変数の設定など、様々な設定をする必要がある
- 筆者のそこそこスペックの PC と光回線を使っても 30 分くらいかかる

ということで、Web 上で動く[DartPad](https://dartpad.dev/?)を利用したほうが楽ちんなのです。

#### 最初に

1. Null Safety を解除する
   下のバーにボタンがあるので解除してください
   （Null の扱いを記述するのがややこしいのと、今は必要ない知識だからです）
2. 基礎になるコードをコピー
   以下のコードをコピーしてください。

```Dart
import 'package:flutter/material.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      theme: ThemeData(primarySwatch: Colors.blue),
      home: MyHomePage(),
    );
  }
}

class MyHomePage extends StatefulWidget {
  @override
  _MyHomePageState createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  @override
  Widget build(BuildContext context) {
    return Scaffold();
  }
}
```
