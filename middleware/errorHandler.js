'use strict';

const ErrorHandler = (err, req, res, next) => {
  const errStatus = err.statusCode || 500;
  const errMsg = err.message || 'Something went wrong';
  const errorJson = {
    success: false,
    status: errStatus,
    message: errMsg,
    stack: process.env.NODE_ENV === 'development' ? err.stack : {},
  };
  console.error('Error:', errMsg);
  res.status(errStatus).json(errorJson);
};
export default ErrorHandler;
