import type {
	Controller,
	HttpRequest,
	HttpResponse,
} from "../../presentation/protocols";

export class LogControllerDecorator implements Controller {
	private readonly controller: Controller;

	public constructor(controller: Controller) {
		this.controller = controller;
	}

	public handle(httpRequest: HttpRequest): HttpResponse {
		return this.controller.handle(httpRequest);
	}
}
