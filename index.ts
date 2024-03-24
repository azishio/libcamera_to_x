import {$} from "bun";
import sharp from "sharp";
import {EUploadMimeType, TwitterApi} from "twitter-api-v2";
import {bundled_env} from "./bundled_env.ts" with {type: "macro"};

const client = new TwitterApi(bundled_env().x_token);

const { height, width } = bundled_env().camera;

const image =
	await $`libcamera-jpeg -o - -t 1 -n --width ${width} --height ${height}`
		.env({ PATH: "/usr/bin" }) // `libcamera-jpeg`の場所
		.arrayBuffer();

const normalizedImage = await sharp(image).normalize({ upper: 90 }).toBuffer();

const mediaId = await client.v1.uploadMedia(normalizedImage, {
	mimeType: EUploadMimeType.Jpeg,
});

await client.v2.tweet(Date(), { media: { media_ids: [mediaId] } });
