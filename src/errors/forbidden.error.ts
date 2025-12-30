import { ErrorBase } from "./base.error.js";

export class ForbiddenError extends ErrorBase {

    constructor(message = "" ) {
        super(403, message);
    }
    
}