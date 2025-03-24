//Utils
import { sanitizeUtil } from "./sanitize.util";
import { validationUtil } from "../validation.util";
import { AppError } from "./Error.util";
import { isValidObjectId } from "@/lib/mongoClient";
//Types
import { TArticleDto } from "@/types/articles.type";
/**
 * Sanitizes the properties of a TArticleDto object by ensuring that each field
 * is processed through a sanitization utility and defaults to an empty string
 * if the field is undefined or null.
 *
 * @param dto - The TArticleDto object to sanitize.
 * @returns A sanitized TArticleDto object with sanitized `link`, `preview`, `publishDate`, `publishPlace`, and `_id` fields.
 */ const sanitizeArticleDto = (dto: TArticleDto): TArticleDto => {
  const preview = sanitizeUtil.sanitizedObjectField(dto?.preview) || "";
  const link = sanitizeUtil.sanitizedObjectField(dto?.link) || "";
  const publishDate = sanitizeUtil.sanitizedObjectField(dto?.publishDate) || "";
  const publishPlace =
    sanitizeUtil.sanitizedObjectField(dto?.publishPlace) || "";
  const _id = sanitizeUtil.sanitizedObjectField(dto?._id) || "";

  return {
    link,
    preview,
    publishDate,
    publishPlace,
    _id,
  };
};
/**
 * Validates the properties of a TArticleDto object by ensuring that each field
 * is processed through a validation utility and throws an AppError if any of the
 * fields are invalid.
 *
 * @param dto - The TArticleDto object to validate.
 * @returns An object containing the validation errors for the `link`, `preview`, `publishDate`, `publishPlace`, and `_id` fields.
 * @throws AppError if any of the fields are invalid.
 */
const validateArticleDto = (
  dto: TArticleDto
): Record<keyof TArticleDto, string> => {
  const errors: Record<string, string> = {};

  const linkErrorLength = validationUtil.validateUrl(
    "קישור",

    dto?.link
  );
  if (linkErrorLength) errors.link = linkErrorLength;

  const publishPlaceErrorLength = validationUtil.validateStrLength(
    "מקום הפרסום",
    2,
    dto?.publishPlace
  );
  if (publishPlaceErrorLength) errors.publishPlace = publishPlaceErrorLength;

  const publishDateErrorLength = validationUtil.validateStrLength(
    "תאריך פרסום",
    2,
    dto?.publishDate
  );
  if (publishDateErrorLength) errors.publishDate = publishDateErrorLength;

  const previewErrorLength = validationUtil.validateStrLength(
    "תקציר",
    2,
    dto?.preview
  );

  if (previewErrorLength) errors.preview = previewErrorLength;

  if (dto?._id) {
    const isValid = isValidObjectId(dto._id);
    if (!isValid) errors._id = " מזהה לא חוקי";
  }

  if (Object.keys(errors).length > 0) {
    throw AppError.create("", 400, true, errors);
  }
  return errors;
};
/**
 * Converts a FormData object into a TArticleDto object by extracting the `link`, `preview`, `publishDate`, `publishPlace`, and `_id` fields
 * from the FormData object and returning a new object with those fields.
 *
 * @param formData - The FormData object to convert.
 * @returns An object containing the `link`, `preview`, `publishDate`, `publishPlace`, and `_id` fields from the FormData object.
 */
const fromDataToDto = (formData: FormData): TArticleDto => {
  const publishDate = formData.get("publishDate") as string;
  const link = formData.get("link") as string;
  const _id = formData.get("_id") as string;
  const preview = formData.get("preview") as string;
  const publishPlace = formData.get("publishPlace") as string;

  return {
    publishDate,
    link,
    _id,
    preview,
    publishPlace,
  };
};
/**
 * Returns an empty TArticleDto object with all fields set to empty strings.
 *
 * @returns An empty TArticleDto object with all fields set to empty strings.
 */
const getEmpty = (): TArticleDto => {
  return {
    publishPlace: "",
    publishDate: "",
    link: "",
    _id: "",
    preview: "",
  };
};
export const ArticlesServerUtils = {
  sanitizeArticleDto,
  validateArticleDto,
  fromDataToDto,
  getEmpty,
};
