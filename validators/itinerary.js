
import { body } from "express-validator";
import { validate } from "./validate.js";
import { ValidationError } from "../errors/validation.js";



export const createItineraryValidator = [
    body("title")
        .notEmpty()
        .withMessage("Title should not be empty.")
        .trim()
        .escape(),

    body("description")
        .optional()
        .trim()
        .escape(),

    body("date")
        .notEmpty()
        .withMessage("Date should not be empty.")
        .isISO8601()
        .withMessage("Date should be a valid date."),

    body("activities")
        .optional()
        .isArray()
        .withMessage("Activities should be an array."),

    body("activities.*.name")
        .notEmpty()
        .withMessage("Activity name should not be empty.")
        .trim()
        .escape(),

    body("activities.*.time")
        .notEmpty()
        .withMessage("Activity time should not be empty.")
        .trim()
        .escape(),

    body("activities.*.notes")
        .optional()
        .isArray()
        .withMessage("Activity notes should be an array."),

    validate,
];

export const updateItineraryValidator = [
    body("title")
        .optional()
        .notEmpty()
        .withMessage("Title should not be empty.")
        .trim()
        .escape(),

    body("description")
        .optional()
        .trim()
        .escape(),

    body("date")
        .optional()
        .isISO8601()
        .withMessage("Date should be a valid date."),

    body("activities")
        .optional()
        .isArray()
        .withMessage("Activities should be an array."),

    body("activities.*.name")
        .optional()
        .notEmpty()
        .withMessage("Activity name should not be empty.")
        .trim()
        .escape(),

    body("activities.*.time")
        .optional()
        .notEmpty()
        .withMessage("Activity time should not be empty.")
        .trim()
        .escape(),

    body("activities.*.notes")
        .optional()
        .isArray()
        .withMessage("Activity notes should be an array."),

    validate,
];
