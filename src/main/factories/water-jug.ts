import { WaterJugController } from "../../presentation/controllers/water-jug";
import type { Controller } from "../../presentation/protocols";
import { LogControllerDecorator } from "../decorators/log";

import { PositiveIntValidatorAdapter } from "../../utils/int-validator-adapter";
import { WaterJugSolverAdapter } from "../../utils/water-jug-solver-adapter";

export const makeWaterJugController = (): Controller => {
	const positiveIntValidatorAdapter = new PositiveIntValidatorAdapter();
	const waterJugSolverAdapter = new WaterJugSolverAdapter();

	const waterJugController = new WaterJugController(
		positiveIntValidatorAdapter,
		waterJugSolverAdapter,
	);

	return new LogControllerDecorator(waterJugController);
};
