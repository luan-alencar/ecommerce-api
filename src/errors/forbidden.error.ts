import { MESSAGES } from "../constants/messages.js";
import { ErrorBase } from "./base.error.js";

export class ForbiddenError extends ErrorBase {

    constructor(message = MESSAGES.AUTH.UNAUTHORIZED) {
        super(403, message);
    }
    
}