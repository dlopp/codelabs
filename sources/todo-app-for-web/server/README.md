# todo-api

Todo アプリデモ用環境

## 1. Setup

```
# パッケージインストール
$ yarn install

# 環境変数ファイル作成(変更したい場合は各自で修正してください)
$ cp .env.sample .env

```

## 2. Running DB with docker compose

```
# mysqlの各種ファイル保存ディレクトリ作成
$ mkdir -p logs/mysql
$ mkdir -p docker/mysql/data
$ mkdir -p docker/mysql/my.cnf

# DB起動
$ docker compose up -d

# DB再起動
$ docker compose down -v
$ docker compose up -d
```

## 3. Running the API

```
# development
$ yarn start

# watch mode
$ yarn start:dev

# production mode
$ yarn start:prod
```

## 4. Try the API

```
# Todo一覧取得
curl -X GET http://localhost:8080/todolist

# Todo作成
curl -X POST http://localhost:8080/todolist -d 'title=Nest'

# Todo削除
curl -X DELETE http://localhost:8080/todolist/1
```
