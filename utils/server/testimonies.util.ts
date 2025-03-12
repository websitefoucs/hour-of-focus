//Utils
import { sanitizeUtil } from "./sanitize.util";
import { validationUtil } from "../validation.util";
import { AppError } from "./Error.util";
//Types
import { TTestimonyDto } from "@/types/testimonies.type";
import { TQuillAttributes, TQuillTextSize } from "@/types/app.type";
//Constants
import { ALLOWED_ATTRIBUTES } from "@/constants/quill";

const sanitizeTestimonyDto = (dto: TTestimonyDto): TTestimonyDto => {
  const delta = dto.delta.map((block) => {
    const insert = sanitizeUtil.sanitizedObjectField(block.insert) || "";
    const attributes: TQuillAttributes = {};

    if (block.attributes) {
      for (const key in block.attributes) {
        if (!ALLOWED_ATTRIBUTES.has(key)) continue;

        switch (key) {
          case "size":
            attributes.size =
              (sanitizeUtil.sanitizedObjectField(
                block.attributes[key]
              ) as TQuillTextSize) || undefined;
            break;
          case "underline":
          case "italic":
          case "bold":
            attributes[key] = sanitizeUtil.sanitizedBoolean(
              block.attributes[key]
            );
            break;
          case "link":
            attributes.link = sanitizeUtil.sanitizedObjectField(
              block.attributes[key]
            );
            break;
          case "color":
            attributes.color = sanitizeUtil.sanitizedObjectField(
              block.attributes[key]
            );
            break;
        }
      }
    }

    return { insert, attributes };
  });

  return { ...dto, delta };
};
const validateTestimonyDto = (
  dto: TTestimonyDto
): Record<keyof TTestimonyDto, string> => {
  const errors: Record<string, string> = {};

  validationUtil.validateDelta(errors, dto.delta, "delta");

  if (Object.keys(errors).length > 0) {
    throw AppError.create("Validation Error", 400, true, errors);
  }
  return errors;
};
const fromDataToDto = (formData: FormData): TTestimonyDto => {
  const _id = formData.get("_id") as string;
  const quillOps = formData.get("quillOps");
  let delta = [];
  if (quillOps) {
    try {
      delta = JSON.parse(quillOps as string);
    } catch (error) {
      throw AppError.create(
        `Unexpected Error parsing Quill Delta -> ${error}`,
        500,
        true
      );
    }
  }

  return {
    _id,
    delta,
  };
};
const getEmpty = (): TTestimonyDto => {
  return {
    delta: [],
    _id: "",
  };
};
export const TestimoniesServerUtils = {
  fromDataToDto,
  getEmpty,
  sanitizeTestimonyDto,
  validateTestimonyDto,
};
