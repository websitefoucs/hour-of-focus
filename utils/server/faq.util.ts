//Utils
import { sanitizeUtil } from "./sanitize.util";
import { validationUtil } from "../validation.util";
import { AppError } from "./Error.util";
import { isValidObjectId } from "@/lib/mongoClient";
//Types
import { FAQ_TYPE, TFaqDto, TFaqType } from "@/types/faqs";
/**
 * Sanitizes the properties of a TFaqDto object by ensuring that each field
 * is processed through a sanitization utility and defaults to an empty string
 * if the field is undefined or null.
 *
 * @param dto - The TFaqDto object to sanitize.
 * @returns A sanitized TFaqDto object with sanitized `deltaAnswer`, `deltaQuestion`, `faqType`, and `_id` fields.
 */
const sanitizeFaqDto = (dto: TFaqDto): TFaqDto => {
  const deltaAnswer = sanitizeUtil.sanitizeDelta(dto?.deltaAnswer) || [];
  const deltaQuestion = sanitizeUtil.sanitizeDelta(dto?.deltaQuestion) || [];
  const faqType = (sanitizeUtil.sanitizedObjectField(dto?.faqType) ||
    "students") as TFaqType;
  const _id = sanitizeUtil.sanitizedObjectField(dto?._id) || "";

  return {
    deltaAnswer,
    deltaQuestion,
    faqType,
    _id,
  };
};
/**
 * Validates the properties of a TFaqDto object by ensuring that each field
 * is processed through a validation utility and throws an AppError if any of the
 * fields are invalid.
 *
 * @param dto - The TFaqDto object to validate.
 * @returns An object containing the validation errors for the `deltaAnswer`, `deltaQuestion`, `faqType`, and `_id` fields.
 * @throws AppError if any of the fields are invalid.
 */
const validateFaqDto = (dto: TFaqDto): Record<keyof TFaqDto, string> => {
  const errors: Record<string, string> = {};

  validationUtil.validateDelta(errors, dto.deltaAnswer, "deltaAnswer");
  validationUtil.validateDelta(errors, dto.deltaQuestion, "deltaQuestion");

  if (dto?._id) {
    const isValid = isValidObjectId(dto._id);
    if (!isValid) errors._id = "מזהה לא חוקי";
  }

  const faqTypeError = validationUtil.compareStr<TFaqType>(
    "סוג שאלה",
    dto?.faqType,
    FAQ_TYPE
  );
  if (faqTypeError) errors.faqType = faqTypeError;

  if (Object.keys(errors).length > 0) {
    throw AppError.create("", 400, true, errors);
  }

  return errors;
};
/**
 * Converts a FormData object into a TFaqDto object by extracting the values
 * of the form fields and parsing them into the appropriate data types.
 *
 * @param formData - The FormData object to convert.
 * @returns A TFaqDto object with the values of the form fields.
 */
const fromDataToDto = (formData: FormData): TFaqDto => {
  const deltaQuestionRaw = formData.get("deltaQuestion");
  let deltaQuestion = [];
  if (deltaQuestionRaw) {
    try {
      deltaQuestion = JSON.parse(deltaQuestionRaw as string);
    } catch (error) {
      throw AppError.create(`שגיאה  לא ידוע -> ${error}`, 500, true);
    }
  }
  const deltaAnswerRaw = formData.get("deltaAnswer");
  let deltaAnswer = [];
  if (deltaQuestionRaw) {
    try {
      deltaAnswer = JSON.parse(deltaAnswerRaw as string);
    } catch (error) {
      throw AppError.create(`שגיאה לא ידוע -> ${error}`, 500, true);
    }
  }
  const _id = formData.get("_id") as string;
  const faqType = formData.get("faqType") as TFaqType;

  return {
    deltaQuestion,
    deltaAnswer,
    _id,
    faqType,
  };
};
/**
 * Returns an empty TFaqDto object with all fields set to empty strings.
 *
 * @returns An empty TFaqDto object with all fields set to empty strings.
 */
const getEmpty = (): TFaqDto => {
  return {
    deltaAnswer: [{ insert: "" }],
    deltaQuestion: [{ insert: "" }],
    _id: "",
  };
};
export const faqServerUtils = {
  fromDataToDto,
  getEmpty,
  sanitizeFaqDto,
  validateFaqDto,
};
