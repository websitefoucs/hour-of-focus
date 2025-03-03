import { sanitizeUtil } from "./sanitize.util";
import { validationUtil } from "../validation.util";
import { AppError } from "./Error.util.server";
import { TMaterialsDto } from "@/types/materials.type";

const sanitizeMaterialsDtoCreate = (dto: TMaterialsDto): TMaterialsDto => {
  const imgPath = sanitizeUtil.SanitizedObjectField(dto?.imgPath) || "";
  const link = sanitizeUtil.SanitizedObjectField(dto?.link) || "";
  const subject = sanitizeUtil.SanitizedObjectField(dto?.subject) || "";

  return {
    imgPath,
    link,
    subject,
  };
};
const validateMaterialsDtoCreate = (
  dto: TMaterialsDto
): Record<keyof TMaterialsDto, string> => {
  const errors: Record<string, string> = {};

  const imgPath = validationUtil.validateExistence("imgPath", dto?.imgPath);
  if (imgPath) errors.imgPath = imgPath;

  const linkErrorLength = validationUtil.validateStrLength(
    "link",
    2,
    dto?.link
  );
  if (linkErrorLength) errors.answer = linkErrorLength;

  const subjectError = validationUtil.validateExistence(
    "subject",
    dto?.subject
  );
  if (subjectError) errors.subject = subjectError;
  const subjectErrorLength = validationUtil.validateStrLength(
    "subject",
    2,
    dto?.subject
  );

  if (subjectErrorLength) errors.question = subjectErrorLength;

  const createByError = validationUtil.validateExistence(
    "createBy",
    dto?.createBy
  );
  if (createByError) errors.createBy = createByError;

  if (Object.keys(errors).length > 0) {
    throw AppError.create("Validation Error", 400, true, errors);
  }
  return errors;
};

const sanitizeMaterialsDtoUpdate = (dto: TMaterialsDto): TMaterialsDto => {
  const updateBy = sanitizeUtil.SanitizedObjectField(dto?.updateBy) || "";
  const _id = sanitizeUtil.SanitizedObjectField(dto?._id) || "";

  return {
    ...sanitizeMaterialsDtoCreate(dto),
    updateBy,
    _id,
  };
};

const validateMaterialsDtoUpdate = (
  dto: TMaterialsDto
): Record<keyof TMaterialsDto, string> => {
  const errors: Record<string, string> = {};

  validateMaterialsDtoCreate(dto);

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

const fromDataToDto = (formData: FormData): TMaterialsDto => {
  const imgPath = formData.get("imgPath") as string;
  const link = formData.get("link") as string;
  const _id = formData.get("_id") as string;
  const createBy = formData.get("createBy") as string;
  const updateBy = formData.get("updateBy") as string;
  const subject = formData.get("subject") as string;

  return {
    imgPath,
    link,
    _id,
    subject,
    createBy,
    updateBy,
  };
};

const getEmpty = (): TMaterialsDto => {
  return {
    imgPath: "",
    link: "",
    _id: "",
    subject: "",
    createBy: "",
    updateBy: "",
  };
};
export const materialsServerUtils = {
  sanitizeMaterialsDtoCreate,
  validateMaterialsDtoCreate,
  sanitizeMaterialsDtoUpdate,
  validateMaterialsDtoUpdate,
  fromDataToDto,
  getEmpty,
};
