/* eslint-disable @typescript-eslint/no-misused-promises */
import type { Router } from "express";

import { adaptRoute } from "../adapters/express-route-adapter";
import { makeWaterJugController } from "../factories/water-jug";

// eslint-disable-next-line import/no-default-export
export default (router: Router): void => {
	router.get("/challenges/water-jug", adaptRoute(makeWaterJugController()));
};
