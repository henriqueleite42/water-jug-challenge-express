import type { PositiveIntValidator } from "../presentation/protocols/positive-int-validator";

export class PositiveIntValidatorAdapter implements PositiveIntValidator {
	public isValid(number: string): boolean {
		if (number.includes(".")) return false;

		const numberInt = parseInt(number, 10);

		return !Number.isNaN(numberInt);
	}
}
