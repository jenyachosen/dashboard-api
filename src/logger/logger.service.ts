import 'reflect-metadata';
import { injectable } from 'inversify';
import { Logger, ILogObj } from 'tslog';
import { ILogger } from './logger.interface';

@injectable()
export class LoggerService implements ILogger {
	public logger: Logger<ILogObj>;

	constructor() {
		this.logger = new Logger({
			stylePrettyLogs: true,
			// displayInstanceName: false,
			// displayLoggerName: false,
			// displayFilePath: 'hidden',
		});
	}

	log(args: unknown[]): void {
		this.logger.info(...args);
	}

	error(args: unknown[]): void {
		this.logger.error(...args);
	}

	warn(args: unknown[]): void {
		this.logger.warn(...args);
	}
}
