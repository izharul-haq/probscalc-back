import { HttpError } from 'routing-controllers';

interface Error {
  httpCode: number;
  message: string;
}

export class HTTPError extends HttpError {
  public message: string;

  constructor(statusCode: number, messsage: string) {
    super(statusCode);
    Object.setPrototypeOf(this, HTTPError.prototype);
    this.message = messsage;
  }

  public toJSON(): Error {
    return {
      httpCode: this.httpCode,
      message: this.message,
    };
  }
}
