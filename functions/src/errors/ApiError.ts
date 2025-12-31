export class ApiError extends Error {
    public readonly statusCode: number;

    constructor(messsage: string, statusCode = 500) {
        super(messsage);
        this.statusCode = statusCode;

        Object.setPrototypeOf(this, new.target.prototype);
        Error.captureStackTrace?.(this, this.constructor);
    }
}