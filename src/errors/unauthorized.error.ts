import { MESSAGES } from "../constants/messages.js";
import { ErrorBase } from "./base.error.js";

export class UnauthorizedError extends ErrorBase {

    constructor(message = MESSAGES.AUTH.UNAUTHORIZED) {
        super(401, message);
    }

}