//Utils
import { sanitizeUtil } from "./sanitize.util";
import { validationUtil } from "../validation.util";
import { AppError } from "./Error.util";
//Types
import { TMaterialDto } from "@/types/materials.type";
import { isValidObjectId } from "@/lib/mongoClient";

const sanitizeMaterialsDto = (dto: TMaterialDto): TMaterialDto => {
  const link = sanitizeUtil.sanitizedObjectField(dto?.link) || "";
  const subject = sanitizeUtil.sanitizedObjectField(dto?.subject) || "";
  const _id = sanitizeUtil.sanitizedObjectField(dto?._id) || "";

  return {
    link,
    subject,
    _id,
  };
};
const validateMaterialsDto = (
  dto: TMaterialDto
): Record<keyof TMaterialDto, string> => {
  const errors: Record<string, string> = {};

  const linkErrorLength = validationUtil.validateUrl(
    "קישור",

    dto?.link
  );
  if (linkErrorLength) errors.link = linkErrorLength;

  const subjectError = validationUtil.validateExistence("נושא", dto?.subject);
  if (subjectError) errors.subject = subjectError;
  const subjectErrorLength = validationUtil.validateStrLength(
    "נושא",
    2,
    dto?.subject
  );

  if (subjectErrorLength) errors.subject = subjectErrorLength;

  if (dto?._id) {
    const isValid = isValidObjectId(dto._id);
    if (!isValid) errors._id = " מזהה לא חוקי";
  }
  if (Object.keys(errors).length > 0) {
    throw AppError.create("", 400, true, errors);
  }
  return errors;
};

const fromDataToDto = (
  formData: FormData
): { data: TMaterialDto; imgFile: File } => {
  const imgFile = formData.get("imgFile") as File;
  const link = formData.get("link") as string;
  const _id = formData.get("_id") as string;
  const subject = formData.get("subject") as string;

  return {
    data: {
      link,
      _id,
      subject,
    },
    imgFile,
  };
};

const getEmpty = (): TMaterialDto => {
  return {
    imgPath: "",
    link: "",
    _id: "",
    subject: "",
  };
};
export const materialsServerUtils = {
  sanitizeMaterialsDto,
  validateMaterialsDto,
  fromDataToDto,
  getEmpty,
};
