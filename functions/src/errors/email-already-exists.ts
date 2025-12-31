import { MESSAGES } from "../constants/messages.js";
import { ErrorBase } from "./base.error.js";

export class EmailAlreadyExistsError extends ErrorBase {

    constructor(message = MESSAGES.USER.EMAIL_ALREADY_EXISTS) {
        super(409, message);
    }
}