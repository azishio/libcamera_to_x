# libcarema_to_x

libcarema-jpegで取得した画像をX(Twitter)に日付付きでアップロードするプログラム

## 動作環境

以下のOS([Archive](https://downloads.raspberrypi.com/raspios_oldstable_arm64/images/raspios_oldstable_arm64-2024-03-12/))を[Raspberry Pi 4 Model B](https://www.raspberrypi.com/products/raspberry-pi-4-model-b/)にインストールして動作確認済

```
Raspberry Pi OS (Legacy) with desktop
Release date: March 12th 2024
System: 64-bit
Kernel version: 6.1
Debian version: 11 (bullseye)
Size: 853MB
Show SHA256 file integrity hash:
Release notes
```

## 前提
[Bun](https://bun.sh/)が必要です。従って、32bitのOSでは動作しません。(2024/3/24現在)

## 使い方
以下はOSをインストールしたRaspberry Pi上での操作です

1. カメラが使えることを確認
    
    ```bash
   libcamera-hello
    ```
2. 環境変数の定義
    以下を埋めた`.env`ファイルをプロジェクトルートに作成
    ```dotenv:/path/to/
   // Twitter API関係
   X_API_KEY=
   X_API_KEY_SECRET=
   X_ACCESS_TOKEN=
   X_ACCESS_TOKEN_SECRET=
   
   // 撮影画像の画素数
   WIDTH=
   HEIGHT=
    ```

3. 実行ファイルの生成
    プロジェクトディレクトリ内で以下を実行
    ```bash
    bun install
    bun run build
    ```
    `[プロジェクトルート]/build/`に実行ファイル`libcamera_to_x`が生成される。
