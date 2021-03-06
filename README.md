# dlopp Codelabs

dloppが作成・公開しているコードラボです。  
https://dlopp.github.io/codelabs

## 🎄 Architecture
```bash
.
├─ docs/ # docs以下をGitHub Pagesでホスティングしています。
│  ├─ sample/     # Buildされたフォルダ
│  ├─ index.html  # ランディングページ
│  ├─ card.js     # ランディングページのカードコンポーネント的な
│  └─ codelabs.json # コンポーネントの変数の中身
├─ codelabs/      # 作業ディレクトリ
│  └─ sample/     # ハンズオンの内容が分かるディレクトリ名を付ける
│     ├─ sample.md # 記事を書くファイル
│     └─ img/     # 画像を使う場合はここ
└─ sources/ # コードラボで使うハンズオン資料
   └─ sample/     # 上と同じ名前だと分かりやすくて良いと思う

```
codelabsディレクトリ配下にディレクトリを作って、記事を書いてください。  
ハンズオンで使うコード(ひな形など)がある場合は、sourcesディレクトリ配下に追加してください。  
適当にブランチを切って開発してください。

## 🛠️ Dev
1. ブランチ切る
2. マークダウン書く  
   **Windowsの人は、改行コードを必ず「LF」に設定してください。この設定を忘れると、改行を認識してくれないため記述通りに表示されなくなります。**  
   ページの上部には、ファイル名をidとして書いてください。ここに書いたものが、Build後のディレクトリ名になります。  
   ```md
    id: sample
   ```
3. meta情報をjsonに記述する
```json
[ 
   {
      "id": "作業したディレクトリ名",
      "color": "カードの色。tailwindで使える色を指定して下さい。",
      "title": "カードのtitle",
      "description": "カードに表示される説明文",
      "date": "最終更新日時",
      "author": "作者",
      "time": "読むのにどれくらいかかるか(分)"
   }
]
```
5. Buildする
6. ローカルサーバで表示を確認する
7. ハンズオンで作るアプリがある場合は、sourcesディレクトリ配下に記述してください。
8. BuildされたHTMLファイルのheadに下記を追加する
   ```html
      <script src="../overwrite.js"></script>
   ```
   例えば、idがnuxt-todoならdocs/nuxt-todo/index.htmlのheadに追加してください。  
   理由は #9 を参照  
9.  pushする。

## 😋 Build
Docker又は、Go & claat が必要です。(Docker推奨)
codelabs配下のマークダウンファイルをdocs配下にBuildします。  
Build後は、そのまま`add && commit`してください。

### Docker
```bash
  # docker image 作成
    $ docker build . -t dlopp/claat
  
  # codelabs/~~ は出力したいマークダウンファイルのパスを入力してください。
  # コマンドプロンプトを使っている人は、pwdの辺りを -v %CD%:/work と置き換えてください。
    $ docker run --rm -v ${pwd}:/work -w /work dlopp/claat export -o docs codelabs/sample/sample.md
  # codelabs/*.mdとかするとなぜかエラーが出るのですが誰か理由教えてください。。
```

### Go & claat  
お好きな方法で、Go と claatをインストールしてください。
```bash
  # Goがインストールされているか確認
    $ go version
  # claatがインストールされているか確認 (helpが表示されればok)
    $ claat -h
  # codelabs/~~は出力したいマークダウンファイルのパスを入力してください。
    $ claat export -o docs codelabs/sample/sample.md
```

## ✈️ Serve  

### Docker
```bash
  # ローカルサーバー起動
    $ docker run --name codelabs --rm -v ${pwd}:/work -w /work -p 9090:9090 dlopp/claat serve -addr 0.0.0.0:9090
  # コンテナ停止
    $ docker stop codelabs
```

### Go & claat
```bash
  # ローカルサーバー起動
    $ claat serve
```

http://localhost:9090/docs  
にアクセスすると、ローカルで表示を確認できます。  
ホットリロードとかはなかったと思うのでいちいちビルドしてください。  
VScodeなら、setting.jsonとかに、claat exportコマンドを指定しておくと、保存時にビルドできたはず
