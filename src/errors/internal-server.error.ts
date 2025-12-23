import { MESSAGES } from "../constants/messages.js";
import { ErrorBase } from "./base.error.js";

export class InternalServerError extends ErrorBase {

    constructor(message = MESSAGES.ERROR.INTERNAL_SERVER_ERROR) {
        super(500, message);
    }

}