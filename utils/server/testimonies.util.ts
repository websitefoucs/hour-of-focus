import { sanitizeUtil } from "./sanitize.util";
import { validationUtil } from "../validation.util";
import { AppError } from "./Error.util";
import { TTestimonyDto } from "@/types/testimonies.type";
import { ALLOWED_ATTRIBUTES } from "@/constants/quill";
import { TQuillAttributes, TQuillTextSize } from "@/types/app.type";

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
  let errors: Record<string, string> = {};

  dto.delta.map((block, index) => {
    const blockErrors: Record<string, string> = {};

    const insertError = validationUtil.validateExistence(
      "טקסט",
      !block.insert.trim()
    );
    if (insertError) {
      blockErrors[block.insert] = insertError;
    }

    if (block.attributes) {
      for (const key in block.attributes) {
        if (!ALLOWED_ATTRIBUTES.has(key)) {
          delete (block.attributes as Record<string, unknown>)[key];
          continue;
        }

        const value = block.attributes[key as keyof TQuillAttributes];

        switch (key) {
          case "size":
            const sizeError = validationUtil.validateTextSize(
              value as string,
              value as string
            );
            if (sizeError) blockErrors[value as string] = sizeError;
            break;

          case "underline":
          case "italic":
          case "bold":
            const boolError = validationUtil.validateBoolean(key, value);
            if (boolError) blockErrors[key] = boolError;
            break;

          case "link":
            const linkError = validationUtil.validateUrl("קישור", value);
            if (linkError) blockErrors[value as string] = linkError;
            break;

          case "color":
            const colorError = validationUtil.validateColorHex("Color", value);
            if (colorError) blockErrors[`text[${index}].color`] = colorError;

            break;
        }
      }
    }

    // Merge errors
    errors = { ...errors, ...blockErrors };
  });

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
