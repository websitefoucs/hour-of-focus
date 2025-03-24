//Utils
import { sanitizeUtil } from "./sanitize.util";
import { validationUtil } from "../validation.util";
import { AppError } from "./Error.util";
//Types
import { TTestimonyDto } from "@/types/testimonies.type";
import { TQuillAttributes, TQuillTextSize } from "@/types/app.type";
//Constants
import { ALLOWED_ATTRIBUTES } from "@/constants/quill";

/**
 * Sanitizes a testimony DTO by processing its `delta` property to ensure
 * that all fields conform to the allowed and safe formats.
 *
 * @param dto - The testimony DTO to sanitize.
 * @returns A sanitized version of the testimony DTO.
 *
 * The function performs the following operations:
 * - Iterates through the `delta` array of blocks in the DTO.
 * - Sanitizes the `insert` field of each block using `sanitizeUtil.sanitizedObjectField`.
 * - Processes the `attributes` field of each block, retaining only allowed attributes
 *   as defined by `ALLOWED_ATTRIBUTES`.
 * - Sanitizes specific attributes (`size`, `underline`, `italic`, `bold`, `link`, `color`)
 *   using appropriate sanitization methods from `sanitizeUtil`.
 *
 * Notes:
 * - Attributes not listed in `ALLOWED_ATTRIBUTES` are ignored.
 * - The sanitized `delta` array is returned as part of the updated DTO.
 */
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
/**
 * Validates a testimony DTO by checking the `delta` property for any errors.
 *
 * @param dto - The testimony DTO to validate.
 * @returns An object containing any validation errors found in the DTO.
 *
 * The function performs the following operations:
 * - Calls `validationUtil.validateDelta` to validate the `delta` property.
 * - If any errors are found, an `AppError` is thrown with the error details.
 */
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
/**
 * Converts a FormData object to a testimony DTO.
 *
 * @param formData - The FormData object to convert.
 * @returns A testimony DTO created from the FormData object.
 *
 * The function performs the following operations:
 * - Extracts the `_id` and `quillOps` fields from the FormData object.
 * - Parses the `quillOps` field to obtain the `delta` array.
 * - Returns a new testimony DTO with the extracted fields.
 */
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
/**
 * Returns an empty testimony DTO.
 *
 * @returns An empty testimony DTO.
 */
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
