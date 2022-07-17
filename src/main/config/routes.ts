/* eslint-disable @typescript-eslint/no-unused-expressions */
import type { Express } from "express";
import { Router } from "express";
import fg from "fast-glob";

// eslint-disable-next-line import/no-default-export
export default (app: Express): void => {
	const router = Router();
	app.use("/", router);
	fg.sync("**/src/main/routes/**routes.ts").map(async file =>
		(await import(`../../../${file}`)).default(router),
	);
};
