author: Yuto Ueki
summary: Flutter の簡単な ToDo アプリ
id: todo_app_for_mobile
categories: codelab,markdown
environments: Web
status: Published

# Flutter を用いた簡単な ToDo アプリを作ろう

## Flutter とは
Duration: 0:02:00

![flutter](img/flutter.png)

### 概要
- Google が開発しているアプリの作成環境
- 2018 年 12 月 4 日に発表
- 一つのプロジェクトファイルで Android、iOS、Web、Windows、MacOS、Linux アプリを作成可能
- めっちゃ簡単

このツールを利用して簡単なToDoアプリを作ります。以下が完成モデルです。

![complete](img/complete.gif)

## 利用する環境
Duration: 0:04:00

### ツール

Positive
: Web 上で Flutter を動かせる [DartPad](https://dartpad.dev/?)を利用します。


各自の PC に Flutter の開発環境を構築してもいいですが...
- 大量のファイルをダウンロードする必要がある
- 環境変数の設定など、様々な設定をする必要がある
- 筆者のそこそこスペックの PC と光回線を使っても 30 分くらいかかる

ということで、Web 上で動く[DartPad](https://dartpad.dev/?)を利用したほうが楽ちんなのです。


### 最初に

1. **Null Safety を解除する**
  - 下のバーにボタンがあるので解除してください
  - Null の扱いを記述するのがややこしいのと、今は必要ない知識だからです
1. **基礎になるコードをコピー**
  - 以下のコードをコピーしてください。

Positive
: 下記のコードは、Flutterプロジェクトファイルを作成したときに勝手に作られるサンプルコードに基づいています。お決まりの文言といった感じです。

```dart
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



## UIを作るには
Duration: 0:04:00

### UI作りの考え方
Flutter の場合、Widgetと呼ばれるUIパーツを組み合わせて画面を作っていきます。

Positive
: [Flutter:Widget一覧](https://qiita.com/matsukatsu/items/e289e30231fffb1e4502)を見てみると、たくさんあるのがわかります。

### デザインの種類

デザインにはたくさんの種類があります。モバイルアプリでは以下の２つが有名です。結局AndroidっぽいかiOSっぽいかになります。

- マテリアル・デザイン
  - Googleが推しているデザイン。Flutterはこれです。  
  ![material](img/material.png)
- クパチーノ・デザイン
  - Appleが推しているデザイン。Apple本社がクパチーノにあります。  
  <img src="img/cupertino.png" width="250">

### Runしてみる

基礎になるコードを貼り付けたらRunボタンを押してみてください。  
真っ白の画面が表示されるはずです。ここから画面を作っていきます。
![firstRun](img/firstRun.png)


## Scaffold()

この白い画面は`Scaffold()`Widgetが作り出しています。  
`Scaffold()`Widgetはすべての土台となるWidgetです。

`Scaffold()`Widgetはたくさんのプロパティを持っていますが、今回使うのは`appBar`と`body`です。`appBar`になにかWidgetを持たせるとそこに表示されますし、`body`も同じです。２つの領域が作られるような感じです。

![scaffold](img/scaffold.png)