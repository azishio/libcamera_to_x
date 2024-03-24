import env from "./env.ts";

export function bundled_env() {
	return {
		x_token: {
			appKey: env.X_API_KEY,
			appSecret: env.X_API_KEY_SECRET,
			accessToken: env.X_ACCESS_TOKEN,
			accessSecret: env.X_ACCESS_TOKEN_SECRET,
		},
		camera: {
			height: env.HEIGHT,
			width: env.WIDTH,
		},
	};
}
