import { solve } from "@techmmunity/water-jug-solver";

import type {
	WaterJugSolver,
	WaterJugSolverSolveInput,
	WaterJugSolverSolveOutput,
} from "../presentation/protocols/water-jug-solver";

export class WaterJugSolverAdapter implements WaterJugSolver {
	public solve(p: WaterJugSolverSolveInput): WaterJugSolverSolveOutput {
		return solve(p);
	}
}
