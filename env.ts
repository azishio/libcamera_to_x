import { createEnv } from "@t3-oss/env-core";
import { z } from "zod";

const env = createEnv({
	server: {
		X_API_KEY: z.string(),
		X_API_SECRET: z.string(),
		X_ACCESS_TOKEN: z.string(),
		X_ACCESS_SECRET: z.string(),
		HEIGHT: z.coerce.number(),
		WIDTH: z.coerce.number(),
	},
	runtimeEnv: Bun.env,
	emptyStringAsUndefined: true,
});

export default env;
