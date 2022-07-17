import { MissingParamError, InvalidParamError } from "../errors";
import { badRequest, serverError, ok } from "../helpers/http-helper";
import type { Controller, HttpRequest, HttpResponse } from "../protocols";
import type { PositiveIntValidator } from "../protocols/positive-int-validator";
import type { WaterJugSolver } from "../protocols/water-jug-solver";

export class WaterJugController implements Controller {
	private readonly positiveIntValidator: PositiveIntValidator;

	private readonly waterJugSolver: WaterJugSolver;

	public constructor(
		positiveIntValidator: PositiveIntValidator,
		waterJugSolver: WaterJugSolver,
	) {
		this.positiveIntValidator = positiveIntValidator;
		this.waterJugSolver = waterJugSolver;
	}

	public handle(httpRequest: HttpRequest): HttpResponse {
		try {
			const requiredFields = [
				"firstJugCapacity",
				"secondJugCapacity",
				"desiredAmount",
			];

			for (const field of requiredFields) {
				if (!httpRequest.query[field]) {
					return badRequest(new MissingParamError(field));
				}
			}

			const { firstJugCapacity, secondJugCapacity, desiredAmount } =
				httpRequest.query;

			if (!this.positiveIntValidator.isValid(firstJugCapacity)) {
				return badRequest(new InvalidParamError("firstJugCapacity"));
			}

			if (!this.positiveIntValidator.isValid(secondJugCapacity)) {
				return badRequest(new InvalidParamError("secondJugCapacity"));
			}

			if (!this.positiveIntValidator.isValid(desiredAmount)) {
				return badRequest(new InvalidParamError("desiredAmount"));
			}

			const result = this.waterJugSolver.solve({
				firstJugCapacity: parseInt(httpRequest.query.firstJugCapacity, 10),
				secondJugCapacity: parseInt(httpRequest.query.secondJugCapacity, 10),
				desiredAmount: parseInt(httpRequest.query.desiredAmount, 10),
			});

			return ok(result);
		} catch (error) {
			console.error(error);

			if (error?.statusCode) {
				return error;
			}

			return serverError();
		}
	}
}
