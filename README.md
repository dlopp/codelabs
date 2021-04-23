# dlopp Codelabs

dloppが作成・公開しているコードラボです。  
https://dlopp.github.io/codelabs

## 🛠️ Dev
[WIP]

## 😋 Build
Docker又は、Go & claat が必要です。  
codelabs配下のマークダウンファイルをdocs配下にBuildします。  
build後は、そのまま`add && commit`してください。

### Docker
```bash
  # docker image 作成
    $ docker build . -t dlopp/claat
  # build
  # コマンドプロンプトを使っている人は、pwdの辺りを -v %CD%:/work と置き換えてください。
  # codelabs/~~ は出力したいマークダウンファイルのパスを入力してください。
    $ docker run --rm -v ${pwd}:/work -w /work dlopp/claat export -o docs codelabs/sample/sample.md
  # codelabs/*.mdとかするとなぜかエラーが出るのですが誰か理由教えてください。。
```

### Go & claat  
お好きな方法でGoとclaatをインストールしてください。
```bash
  # Goがインストールされているか確認
    $ go version
  # claatがインストールされているか確認
    $ claat -h
  # build
  # codelabs/~~は出力したいマークダウンファイルのパスを入力してください。
    $ claat export -o docs codelabs/sample/sample.md
```
