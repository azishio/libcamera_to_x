import {TwitterApi} from "twitter-api-v2";

const client = new TwitterApi({
    appKey:process.env.X_API_KEY,
    appSecret:process.env.X_API_SECRET,
    accessToken:process.env.X_ACCESS_TOKEN,
    accessSecret:process.env.X_ACCESS_SECRET,

})

const mediaId = await client.v1.uploadMedia(process.env.IMAGE_PATH as string);

const postMsg = `実験中
「青岩公園」
${Date()}`;

client.v2.tweet("hello world",{media:{media_ids:[mediaId]}});
