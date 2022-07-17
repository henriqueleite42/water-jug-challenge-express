import env from "./config/env";

const bootstrap = async () => {
	const app = (await import("./config/app")).default;

	app.listen(env.port, () =>
		// eslint-disable-next-line no-console
		console.log(`Server running at http://localhost:${env.port}`),
	);
};

bootstrap();
