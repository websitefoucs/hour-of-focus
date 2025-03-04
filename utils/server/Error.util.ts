import "server-only";

export class AppError extends Error {
  public readonly status: number;
  public readonly isOperational: boolean;
  public readonly validationErrors?: Record<string, string>;

  constructor(
    message: string,
    statusCode: number = 500,
    isOperational: boolean = true,
    validationErrors?: Record<string, string>
  ) {
    super(message);

    // Set prototype explicitly for extending built-ins
    Object.setPrototypeOf(this, new.target.prototype);

    this.name = this.constructor.name;
    this.status = statusCode;
    this.isOperational = isOperational;
    this.validationErrors = validationErrors;

    // Capture stack trace for better debugging
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, this.constructor);
    }
  }

  public static create(
    message: string,
    statusCode: number = 500,
    isOperational: boolean = true,
    validationErrors?: Record<string, string>
  ): AppError {
    return new AppError(message, statusCode, isOperational, validationErrors);
  }

  public static handleResponse(error: unknown) {
    const returnError: {
      status?: number;
      message?: string;
      validationErrors?: Record<string, string>;
    } = {};
    if (error instanceof AppError && error?.status < 500) {
      returnError.status = error.status;
      returnError.validationErrors = error.validationErrors;
      returnError.message = error.message;
    } else {
      const err = AppError.create(`Unexpected Error -> ${error}`, 500, false);
      returnError.status = err.status;
      returnError.message = err.message;
    }

    return {
      message: returnError.message,
      errors: returnError.validationErrors,
      status: returnError.status,
    };
  }
}
