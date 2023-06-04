import 'reflect-metadata';
import { Response, Router } from 'express';
import { injectable } from 'inversify/lib/annotation/injectable';
import { ILogger } from '../logger/logger.interface';
import { IControllerRoute, ExpressReturnType } from './route.interface';
export { Router } from 'express';

@injectable()
export abstract class BaseController {
	private readonly _router: Router;

	constructor(private logger: ILogger) {
		this._router = Router();
	}

	get router(): Router {
		return this._router;
	}

	public send<T>(res: Response, code: number, message: T): ExpressReturnType {
		res.type('application/json');
		return res.status(code).json(message);
	}

	public ok<T>(res: Response, message: T): ExpressReturnType {
		return this.send(res, 200, message);
	}

	public created(res: Response): ExpressReturnType {
		return res.sendStatus(201);
	}

	protected bindRoutes(routes: IControllerRoute[]): void {
		for (const route of routes) {
			this.logger.log([`[${route.method}] ${route.path}`]);
			const handler = route.func.bind(this);
			this.router[route.method](route.path, handler);
		}
	}
}
