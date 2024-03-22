import {TwitterApi} from "twitter-api-v2";
import {$} from "bun"
import * as path from "path";

const client = new TwitterApi({
    appKey:process.env.X_API_KEY,
    appSecret:process.env.X_API_SECRET,
    accessToken:process.env.X_ACCESS_TOKEN,
    accessSecret:process.env.X_ACCESS_SECRET,

})

console.log(path.dirname(Bun.main));

const imageFile = `${path.dirname(Bun.main)}/shimonita.jpg`

await $`libcamera-jpeg -o ${imageFile} -t 1 --width ${Bun.env.WIDTH} --height ${Bun.env.HEIGHT}`

const mediaId = await client.v1.uploadMedia(imageFile);

const postMsg = `実験中
「青岩公園」
${Date()}`;

client.v2.tweet(postMsg,{media:{media_ids:[mediaId]}});
