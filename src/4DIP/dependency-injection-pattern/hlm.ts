import { LoggerService } from "./logger.service";


export class UserService {
    constructor(private _loggerService: LoggerService) {

    }

    showInstance() {
        console.log(this._loggerService);
    }
}