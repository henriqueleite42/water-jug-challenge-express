import express from "express";

import setupMiddlewares from "./middlewares";
import setupRoutes from "./routes";

const app = express();
setupMiddlewares(app);
setupRoutes(app);
// eslint-disable-next-line import/no-default-export
export default app;
