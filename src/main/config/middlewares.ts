import type { Express } from "express";

import { contentType } from "../middlewares/content-type";
import { cors } from "../middlewares/cors";

// eslint-disable-next-line import/no-default-export
export default (app: Express): void => {
	app.use(cors);
	app.use(contentType);
};
