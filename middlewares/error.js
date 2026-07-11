const errorMiddleware = (err, req, res, next) => {
  const statusCode = err.statusCode || res.statusCode || 500;

  res.status(statusCode).json({
    success: false,
    message: err.message || "Something went wrong",
    stack: process.env.NODE_ENV === "production" ? null : err.stack,
    ...(err.errors?.length > 0 && { /**errors = array of objects */
      errors: err.errors.map((error) => ({ /** errors means name only saying like these are errors */
        field: error.field,
        message: error.message,
      })),
    }),
  });
};

export default errorMiddleware;