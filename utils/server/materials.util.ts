import { sanitizeUtil } from "./sanitize.util";
import { validationUtil } from "../validation.util";
import { AppError } from "./Error.util";
import { TMaterialDto } from "@/types/materials.type";

const sanitizeMaterialsDtoCreate = (dto: TMaterialDto): TMaterialDto => {
  const imgPath = sanitizeUtil.sanitizedObjectField(dto?.imgPath) || "";
  const link = sanitizeUtil.sanitizedObjectField(dto?.link) || "";
  const subject = sanitizeUtil.sanitizedObjectField(dto?.subject) || "";
  const createBy = sanitizeUtil.sanitizedObjectField(dto?.createBy) || "";

  return {
    imgPath,
    link,
    subject,
    createBy,
  };
};
const validateMaterialsDtoCreate = (
  dto: TMaterialDto
): Record<keyof TMaterialDto, string> => {
  const errors: Record<string, string> = {};

  const imgPath = validationUtil.validateExistence("imgPath", dto?.imgPath);
  if (imgPath) errors.imgPath = imgPath;

  const linkErrorLength = validationUtil.validateStrLength(
    "link",
    2,
    dto?.link
  );
  if (linkErrorLength) errors.link = linkErrorLength;

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

  if (subjectErrorLength) errors.subject = subjectErrorLength;

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

const sanitizeMaterialsDtoUpdate = (dto: TMaterialDto): TMaterialDto => {
  const updateBy = sanitizeUtil.sanitizedObjectField(dto?.updateBy) || "";
  const _id = sanitizeUtil.sanitizedObjectField(dto?._id) || "";

  return {
    ...sanitizeMaterialsDtoCreate(dto),
    updateBy,
    _id,
  };
};

const validateMaterialsDtoUpdate = (
  dto: TMaterialDto
): Record<keyof TMaterialDto, string> => {
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

const fromDataToDto = (formData: FormData): TMaterialDto => {
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

const getEmpty = (): TMaterialDto => {
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
