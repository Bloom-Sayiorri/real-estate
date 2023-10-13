export const errorHandler = (statusCode, message) => {
    error.statusCode = statusCode;
    error.message = message;
    return error;
}