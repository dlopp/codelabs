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

## AppBar()・Text()

`appBar`に`AppBar()`Widgetを持たせましょう。これで画面上部にバーが表示されます。

```dart
return Scaffold(
      appBar: AppBar(
        title: Text('Simple ToDo'),
      ),
    );
```

`AppBar()`Widgetには`title`プロパティがあり、そこに`Text()`Widgetを置いています。`AppBar()`Widgetには`title`という領域があるということです。  
`Text()`Widgetの`()`の中に`''`付きで文字を置くと、その文字が画面上に表示されます。

![appbar](img/appbar.png)

## Column()

次に下のテキストボックスを作りたいのですが、下の画像のように、ToDo要素とテキストボックスが縦に並んでいます。Flutterの場合、要素を縦に並べるWidgetとして、`Column()`Widgetがあります。

![column](img/column.png)

`Column()`Widgetを設置します。`Scaffold()`Widgetの`body`領域に置きます。

```dart
return Scaffold(
      appBar: AppBar(
        title: Text('Simple ToDo'),
      ),
      body: Column(
        mainAxisAlignment: MainAxisAlignment.start,
        children: [
          
        ],
      ),
    );
```

`mainAxisAlignment: MainAxisAlignment.start,`とは、要素をどういう感じに並べるかの設定です。この場合、上から単純に並べるものです。他には、要素を等間隔に並べたり、中央に集中させたりできます。  
`children: [],`の中に並べたい要素を列挙していきます。

## ListTile()・Form()・TextFormField()

下記のコードを書きましょう。

```dart
children: [
          ListTile(
            title: Form(
              child: TextFormField(
              ),
            ),
          ),
        ],
```

### ListTile()

![listTile](img/listTile.png)

`ListTile()`Widgetも画面を分割するWidgetです。

Positive
: ちなみに、`title`の左に`leading`という領域もあります。あとで使います。

### Form()・TextFormField()

`Form()`Widgetは`TextFormField()`Widgetを使うための前提Widgetです。`TextFormField()`Widgetが実際に画面に表示されるテキストボックスです。

![textFormField](img/textFormField.png)

## InputDecoration()・OutlineInputBorder()・ElevatedButton()

### InputDecoration()・OutlineInputBorder()

テクストボックスは見た目や情報を変えることができます。  
下記のようなWidgetを置いてみましょう。

```dart
children: [
          ListTile(
            title: Form(
              child: TextFormField(
                decoration: InputDecoration(
                    border: OutlineInputBorder(), hintText: 'Todoを入力'),
              ),
            ),
          ),
        ],
```

`TextFormField()`の`decoration`プロパティに`InputDecoration()`Widgetを置くと装飾ができるようになります。  
`border`プロパティに`OutlineInputBorder()`Widgetを置くと、テクストボックスが縁取られたデザインになります。  
`hintText`プロパティはテキストボックス内に何を書くべきかのヒント文章を表示できます。

![decoration](img/decoration.png)

### ElevatedButton()

テキストボックスの右にボタンを置きましょう。  
`ListTile()`Widgetの`trailing`プロパティにボタンのWidgetを置けば、テクストボックスの右にボタンを置けそうです。

```dart
trailing: ElevatedButton(
      onPressed: () {
      },
      child: Text('追加')
),
```

ボタンにはいくつか種類がありますが、`ElevatedButton()`が見やすいと思います。  
`child`プロパティに`Text()`Widgetでボタン内に文字を表示できます。  
`onPressed`プロパティはボタンが押されたときにどんな処理をするのかを記述します。

![button](img/button.png)

```dart
children: [
          ListTile(
            title: Form(
              child: TextFormField(
                decoration: InputDecoration(
                    border: OutlineInputBorder(), hintText: 'Todoを入力'),
                controller: textbox,
              ),
            ),
          ),
        ],
```
```dart
children: [
          ListTile(
              title: Form(
                child: TextFormField(
                  decoration: InputDecoration(
                      border: OutlineInputBorder(), hintText: 'Todoを入力'),
                  controller: textbox,
                ),
              ),
              trailing: ElevatedButton(
                  onPressed: () {
                    setState(() {
                        todos.add(textbox.text);
                        textbox.clear();
                    });
                  },
                  child: Text('追加'))),
        ],
```