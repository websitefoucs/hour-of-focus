import { sanitizeUtil } from "./sanitize.util";
import { validationUtil } from "../validation.util";
import { AppError } from "./Error.util";
import { TTestimonyDto } from "@/types/testimonies.type";

const sanitizeTestimonyDtoCreate = (dto: TTestimonyDto): TTestimonyDto => {
  const text = sanitizeUtil.SanitizedObjectField(dto?.text) || "";

  return {
    text,
  };
};
const validateTestimonyDtoCreate = (
  dto: TTestimonyDto
): Record<keyof TTestimonyDto, string> => {
  console.log(" dto:", dto)
  const errors: Record<string, string> = {};

  const textError = validationUtil.validateExistence("text", dto?.text);
  if (textError) errors.text = textError;

  const textErrorLength = validationUtil.validateStrLength(
    "text",
    2,
    dto?.text
  );
  if (textErrorLength) errors.text = textErrorLength;

  if (Object.keys(errors).length > 0) {
    throw AppError.create("Validation Error", 400, true, errors);
  }
  return errors;
};

const sanitizeTestimonyDtoUpdate = (dto: TTestimonyDto): TTestimonyDto => {
  const updateBy = sanitizeUtil.SanitizedObjectField(dto?.updateBy) || "";
  const _id = sanitizeUtil.SanitizedObjectField(dto?._id) || "";

  return {
    ...sanitizeTestimonyDtoCreate(dto),
    updateBy,
    _id,
  };
};

const validateTestimonyDtoUpdate = (
  dto: TTestimonyDto
): Record<keyof TTestimonyDto, string> => {
  const errors: Record<string, string> = {};

  validateTestimonyDtoCreate(dto);

  const updateByError = validationUtil.validateExistence(
    "updateBy",
    dto?.updateBy
  );

  if (updateByError) errors.updateBy = updateByError;

  const _idError = validationUtil.validateExistence("_id", dto?._id);

  if (_idError) errors._id = _idError;

  if (Object.keys(errors).length > 0) {
    throw AppError.create("Validation Error", 400, true, errors);
  }
  return errors;
};

const fromDataToDto = (formData: FormData): TTestimonyDto => {
  const text = formData.get("text") as string;
  const _id = formData.get("_id") as string;
  const createBy = formData.get("createBy") as string;
  const updateBy = formData.get("updateBy") as string;

  return {
    _id,
    text,
    createBy,
    updateBy,
  };
};

const getEmpty = (): TTestimonyDto => {
  return {
    text: "",
    _id: "",
    createBy: "",
    updateBy: "",
  };
};
export const TestimoniesServerUtils = {
  sanitizeTestimonyDtoCreate,
  validateTestimonyDtoCreate,
  sanitizeTestimonyDtoUpdate,
  validateTestimonyDtoUpdate,
  fromDataToDto,
  getEmpty,
};
