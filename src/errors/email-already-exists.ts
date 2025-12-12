import { ErrorBase } from "./base.error.js";

export class EmailAlreadyExistsError extends ErrorBase {

    constructor(message = "O e-mail já existe em outra conta!") {
        super(409, message);
    }
}