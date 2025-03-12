import {
  ALLOWED_ATTRIBUTES,
  ALLOWED_COLORS_REGEX,
  ALLOWED_TEXT_SIZES,
  DEV_URL_REGEX,
  // URL_REGEX,
} from "@/constants/quill";
import { TQuillAttributes, TQuillTextSize, TTextBlock } from "@/types/app.type";

/**
 * Validates that a string has the specified minimum length.
 * @param filedName - Name of the field being validated.
 * @param length - Minimum length required.
 * @param str - String to validate.
 * @returns An error message or null if valid.
 */
const validateStrLength = (
  filedName: string,
  length: number,
  str?: string
): string | null => {
  if (!str || str.trim().length < length) {
    return `${filedName} must be at least ${length} characters long.`;
  }
  return null;
};
/**
 * Validates that an array has the specified minimum length.
 * @param filedName - Name of the field being validated.
 * @param arr - Array to validate.
 * @param length - Minimum length required.
 * @returns An error message or null if valid.
 */
const validateArrayLength = (
  filedName: string,
  arr: unknown[] | null | undefined,
  length: number
): string | null => {
  if (!arr) {
    return `${filedName} is required.`;
  }
  if (arr?.length < length) {
    return `At least ${length} ${filedName} is required.`;
  }
  return null;
};
/**
 * Validates that a value is neither null nor undefined.
 * @param filedName - Name of the field being validated.
 * @param value - Value to validate.
 * @returns An error message or null if valid.
 */
const validateExistence = (
  filedName: string,
  value: unknown
): string | null => {
  if (value === null || value === undefined || value === "") {
    return `שדה חובה ${filedName}.`;
  }
  return null;
};
/**
 * Validates that a string contains only letters, numbers, and spaces.
 * @param filedName - Name of the field being validated.
 * @param value - String to validate.
 * @returns An error message or null if valid.
 */
const validateLettersAndNumbers = (
  filedName: string,
  value?: string | null
): string | null => {
  if (value === null || value === undefined || !value) return null;
  if (!/^[a-zA-Z0-9 ]+$/.test(value)) {
    return `${filedName} can only contain letters, numbers, and spaces.`;
  }
  return null;
};
/**
 * Validates that a string contains only letters.
 * @param filedName - Name of the field being validated.
 * @param value - String to validate.
 * @returns An error message or null if valid.
 */
const validateLetters = (filedName: string, value?: string): string | null => {
  if (value === null || value === undefined) return null;
  if (!/^[a-zA-Z]+$/.test(value)) {
    return `${filedName} contain only letters.`;
  }
  return null;
};
/**
 * Validates that a value contains only numbers.
 * @param filedName - Name of the field being validated.
 * @param value - Value to validate.
 * @returns An error message or null if valid.
 */
const validateNumbers = (
  filedName: string,
  value?: string | number | null
): string | null => {
  if (value === null || value === undefined) return null;
  if (!/^[0-9]+$/.test(value?.toString() || "")) {
    return `${filedName} contain only numbers.`;
  }
  return null;
};
/**
 * Validates that a value is a valid Date object or string.
 * @param filedName - Name of the field being validated.
 * @param value - Date or date string to validate.
 * @returns An error message or null if valid.
 */
const validateDate = (
  filedName: string,
  value?: Date | null | string
): string | null => {
  if (value instanceof Date) {
    return null;
  }

  if (value === null || value === undefined) {
    return `${filedName} is required.`;
  }

  const _value = typeof value === "string" ? new Date(value) : value;
  if (isNaN(_value?.getTime())) {
    return `${filedName} is invalid.`;
  }
  return null;
};
/**
 * Validates that a string can be parsed as a valid date.
 * @param filedName - Name of the field being validated.
 * @param value - Date string to validate.
 * @returns An error message or null if valid.
 */
const validateDateStr = (filedName: string, value?: string): string | null => {
  if (value === null || value === undefined) {
    return `${filedName} is required.`;
  }
  if (isNaN(Date.parse(value))) {
    return `${filedName} is invalid.`;
  }
  return null;
};
const compareStr = <T>(
  filedName: string,
  checkStr?: string,
  strArr?: readonly T[]
): string | null => {
  if (!checkStr || !strArr) return null;
  if (!strArr.includes(checkStr as T)) {
    return `${filedName} do not match.`;
  }
  return null;
};
const validateUrl = (filedName: string, value?: unknown): string | null => {
  const isString = _isString(value);
  if (!isString) return `${filedName} שדה חובה.`;
  return DEV_URL_REGEX.test(value) ? null : `${filedName} לא תקין.`;
};
const validateColorHex = (
  filedName: string,
  value?: unknown
): string | null => {
  const isString = _isString(value);
  if (!isString) return `${filedName} שדה חובה.`;
  return ALLOWED_COLORS_REGEX.test(value) ? null : `${filedName} is invalid.`;
};
const validateTextSize = (filedName: string, value?: string): string | null => {
  if (!value) return `${filedName} שדה חובה.`;
  const fontCheck = ALLOWED_TEXT_SIZES.has(value as TQuillTextSize);

  return fontCheck ? null : `${filedName} גודל טקסט לא חוקי.`;
};
const validateBoolean = (filedName: string, value?: unknown): string | null => {
  if (value === null || value === undefined) {
    return `${filedName} שדה חובה.`;
  }
  if (typeof value !== "boolean") {
    return `${filedName} חייב להיות בוליאני.`;
  }
  return null;
};
const validateDelta = (
  errors: Record<string, string>,
  delta?: TTextBlock[],
  name?: string
): void => {
  if (!delta) return;

  delta.forEach((block) => {
    const blockErrors: Record<string, string> = {};

    const insertError = validationUtil.validateExistence("טקסט", block.insert);
    if (insertError) {
      blockErrors[`${name}`] = insertError;
    }

    if (block?.attributes) {
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
            if (sizeError) blockErrors[`${name}`] = sizeError;
            break;

          case "underline":
          case "italic":
          case "bold":
            const boolError = validationUtil.validateBoolean(key, value);
            if (boolError) blockErrors[`${name} ${key}`] = boolError;
            break;

          case "link":
            const linkError = validationUtil.validateUrl("קישור", value);
            if (linkError) blockErrors[`${name}`] = linkError;
            break;

          case "color":
            const colorError = validationUtil.validateColorHex("Color", value);
            if (colorError) blockErrors[`${name}`] = colorError;
            break;
        }
      }
    }

    Object.assign(errors, blockErrors);
  });
};
const _isString = (value: unknown): value is string => {
  return !(value === null || value === undefined || typeof value !== "string");
};

/**
 * Provides validation utilities for various data types.
 */
export const validationUtil = {
  validateStrLength,
  validateArrayLength,
  validateExistence,
  validateLettersAndNumbers,
  validateLetters,
  validateNumbers,
  validateDate,
  validateDateStr,
  compareStr,
  validateUrl,
  validateColorHex,
  validateTextSize,
  validateBoolean,
  validateDelta,
};
