import * as path from "node:path";
import { $ } from "bun";
import { TwitterApi } from "twitter-api-v2";
import { bundled_env } from "./bundled_env.ts" with { type: "macro" };

const client = new TwitterApi(bundled_env().x_token);

console.log(path.dirname(Bun.main));

// TODO 一度ファイルに出力せず、画像バイナリを直接受け取れるようにする方法を探す
const imageFilePath = "./libcamera_captured_picture.jpg";

const {height ,width } = bundled_env().camera;

await $`libcamera-jpeg -o ${imageFilePath} -t 1 --width ${width} --height ${height}`.env(
	{
		PATH: "/usr/bin", // `libcamera-jpeg`の場所},
	},
);

const mediaId = await client.v1.uploadMedia(imageFilePath);

client.v2.tweet(Date(), { media: { media_ids: [mediaId] } });
