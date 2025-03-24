//Utils
import { sanitizeUtil } from "./sanitize.util";
import { validationUtil } from "../validation.util";
import { AppError } from "./Error.util";
//Types
import { TArticleDto } from "@/types/articles.type";
import { isValidObjectId } from "@/lib/mongoClient";

const sanitizeArticleDto = (dto: TArticleDto): TArticleDto => {
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
