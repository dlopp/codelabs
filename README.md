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
└─ codelabs/      # 作業ディレクトリ
   └─ sample/     # ハンズオンの内容が分かるディレクトリ名を付ける
      ├─ sample.md # 記事を書くファイル
      └─ img/     # 画像を使う場合はここ
```
codelabsディレクトリ配下にディレクトリを作って、記事を書いてください。

## 😋 Build
Docker又は、Go & claat が必要です。
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

## 🏜️ Serve
Docker又は、Go & claat が必要です。  

### Docker
```bash
  # ローカルサーバー起動
    $ docker run --rm -v ${pwd}:/work -w /work -p 9090:9090 dlopp/claat serve -addr 0.0.0.0:9090
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
