import { sanitizeUtil } from "./sanitize.util";
import { validationUtil } from "../validation.util";
import { AppError } from "./Error.util.server";
import { FAQ_TYPE, TFaqDto, TFaqType } from "@/types/faq";

const sanitizeFaqDtoCreate = (dto: TFaqDto): TFaqDto => {
  const answer = sanitizeUtil.SanitizedObjectField(dto?.answer) || "";
  const question = sanitizeUtil.SanitizedObjectField(dto?.question) || "";
  const createBy = sanitizeUtil.SanitizedObjectField(dto?.createBy) || "";
  const faqType = (sanitizeUtil.SanitizedObjectField(dto?.faqType) ||
    "students") as TFaqType;

  return {
    answer,
    question,
    createBy,
    faqType,
  };
};
const validateFaqDtoCreate = (
  userDto: TFaqDto
): Record<keyof TFaqDto, string> => {
  const errors: Record<string, string> = {};

  const answerError = validationUtil.validateExistence(
    "answer",
    userDto?.answer
  );
  if (answerError) errors.answer = answerError;
  const answerErrorLength = validationUtil.validateStrLength(
    "answer",
    2,
    userDto?.answer
  );
  if (answerErrorLength) errors.answer = answerErrorLength;

  const questionError = validationUtil.validateExistence(
    "question",
    userDto?.question
  );
  if (questionError) errors.question = questionError;
  const questionErrorLength = validationUtil.validateStrLength(
    "question",
    2,
    userDto?.question
  );

  if (questionErrorLength) errors.question = questionErrorLength;

  const createByError = validationUtil.validateExistence(
    "createBy",
    userDto?.createBy
  );
  if (createByError) errors.createBy = createByError;

  const faqTypeError = validationUtil.compareStr<TFaqType>(
    "faqType",
    userDto?.faqType,
    FAQ_TYPE
  );

  if (faqTypeError) errors.faqType = faqTypeError;

  if (Object.keys(errors).length > 0) {
    throw AppError.create("Validation Error", 400, true, errors);
  }
  return errors;
};

const sanitizeFaqDtoUpdate = (dto: TFaqDto): TFaqDto => {
  const updateBy = sanitizeUtil.SanitizedObjectField(dto?.updateBy) || "";
  const _id = sanitizeUtil.SanitizedObjectField(dto?._id) || "";

  return {
    ...sanitizeFaqDtoCreate(dto),

    updateBy,
    _id,
  };
};
const validateFaqDtoUpdate = (
  userDto: TFaqDto
): Record<keyof TFaqDto, string> => {
  const errors: Record<string, string> = {};

  validateFaqDtoCreate(userDto);

  const updateByError = validationUtil.validateExistence(
    "updateBy",
    userDto?.updateBy
  );

  if (updateByError) errors.updateBy = updateByError;

  const _idError = validationUtil.validateExistence("_id", userDto?._id);

  if (_idError) errors._id = _idError;

  if (Object.keys(errors).length > 0) {
    throw AppError.create("Validation Error", 400, true, errors);
  }
  return errors;
};
const fromDataToDto = (formData: FormData): TFaqDto => {
  const question = formData.get("question") as string;
  const answer = formData.get("answer") as string;
  const _id = formData.get("_id") as string;
  const createBy = formData.get("createBy") as string;
  const updateBy = formData.get("updateBy") as string;
  const faqType = formData.get("faqType") as TFaqType;

  return {
    question,
    answer,
    _id,
    faqType,
    createBy,
    updateBy,
  };
};

const getEmpty = (): TFaqDto => {
  return {
    question: "",
    answer: "",
    _id: "",
    createBy: "",
    updateBy: "",
  };
};
export const faqServerUtils = {
  sanitizeFaqDtoCreate,
  validateFaqDtoCreate,
  sanitizeFaqDtoUpdate,
  validateFaqDtoUpdate,
  fromDataToDto,
  getEmpty,
};
