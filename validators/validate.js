import { validationResult } from "express-validator";
import { ValidationError } from "../errors/validation.js";

/**
 * Validate the request body using express-validator
 * This middleware checks validation results after validators have run
 */
export const validate = (req, res, next) => {
  const errors = validationResult(req);/** here errors is variab;e that stores object validationresult(req) which have 
  methods like isempty() and array() */
  if (!errors.isEmpty()) {
    return next(new ValidationError("Validation error", errors.array()));/** here errors is object and 
    array is method to convert if errors is found in errors object */
  }
  next();
};