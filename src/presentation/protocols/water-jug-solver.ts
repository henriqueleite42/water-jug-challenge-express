import type { WaterJugSolution } from "@techmmunity/water-jug-solver";

export interface WaterJugSolverSolveInput {
	firstJugCapacity: number;
	secondJugCapacity: number;
	desiredAmount: number;
}

export type WaterJugSolverSolveOutput = WaterJugSolution;

export interface WaterJugSolver {
	solve: (p: WaterJugSolverSolveInput) => WaterJugSolverSolveOutput;
}
