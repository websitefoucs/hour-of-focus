import {
  ALLOWED_ATTRIBUTES,
  ALLOWED_COLORS_REGEX,
  ALLOWED_TEXT_SIZES,
  URL_REGEX,
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
  fieldName: string,
  length: number,
  str?: string | null
): string | null => {
  if (!str) return ` ${fieldName} חייב להיות לפחות ${length} תווים.`;

  // Count characters including escaped sequence for Quill editor
  const actualLength = str
    .replace(/\n/g, "x") // Replace escape sequences with a single char
    .trim().length;

  if (actualLength < length) {
    return ` ${fieldName} חייב להיות לפחות ${length} תווים.`;
  }
  return null;
};
/**
 * Validates that a string matches one of the values in an array.
 * @param filedName - Name of the field being validated.
 * @param checkStr - String to validate.
 * @param strArr - Array of valid strings.
 * @returns An error message or null if valid.
 */
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
/**
 * Validates that a string is a valid URL.
 * @param filedName - Name of the field being validated.
 * @param value - URL to validate.
 * @returns An error message or null if valid.
 */
const validateUrl = (filedName: string, value?: unknown): string | null => {
  const isString = _isString(value);
  if (!isString) return `${filedName} שדה חובה.`;
  return URL_REGEX.test(value) ? null : `${filedName} לא תקין.`;
};
/**
 * Validates that a string is a valid hex color code.
 * @param filedName - Name of the field being validated.
 * @param value - Color code to validate.
 * @returns An error message or null if valid.
 */
const validateColorHex = (
  filedName: string,
  value?: unknown
): string | null => {
  const isString = _isString(value);
  if (!isString) return `${filedName} שדה חובה.`;
  return ALLOWED_COLORS_REGEX.test(value) ? null : `${filedName} is invalid.`;
};
/**
 * Validates that a string is a valid Quill text size.
 * @param filedName - Name of the field being validated.
 * @param value - Text size to validate.
 * @returns An error message or null if valid.
 */
const validateTextSize = (filedName: string, value?: string): string | null => {
  if (!value) return `${filedName} שדה חובה.`;
  const fontCheck = ALLOWED_TEXT_SIZES.has(value as TQuillTextSize);

  return fontCheck ? null : `${filedName} גודל טקסט לא חוקי.`;
};
/**
 * Validates that a value is a boolean.
 * @param filedName - Name of the field being validated.
 * @param value - Value to validate.
 * @returns An error message or null if valid.
 */
const validateBoolean = (filedName: string, value?: unknown): string | null => {
  if (value === null || value === undefined) {
    return `${filedName} שדה חובה.`;
  }
  if (typeof value !== "boolean") {
    return `${filedName} חייב להיות בוליאני.`;
  }
  return null;
};
/**
 * Validates a Quill Delta object.
 * @param errors - Object to store validation errors.
 * @param delta - Quill Delta object to validate.
 * @param name - Name of the field being validated.
 */
const validateDelta = (
  errors: Record<string, string>,
  delta?: TTextBlock[],
  name?: string
): void => {
  if (!delta) return;

  let newDelta: TTextBlock[] = delta;

  for (let i = 0; i < delta.length; i++) {
    if (delta[i].insert === "\n") {
      newDelta = delta.toSpliced(i, 1);
      break;
    }
  }

  if (!newDelta.length) {
    Object.assign(errors, { [`${name}`]: "שדה חובה" });
    return;
  }

  newDelta.forEach((block) => {
    const blockErrors: Record<string, string> = {};

    const insertError = validationUtil.validateStrLength(
      "טקסט",
      2,
      block.insert
    );
    if (
      insertError &&
      block?.attributes &&
      Object.keys(block?.attributes)?.length === 0
    ) {
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
/**
 * Checks if a value is a string.
 * @private
 * @param value - Value to check.
 * @returns True if the value is a string, false otherwise.
 */
const _isString = (value: unknown): value is string => {
  return !(value === null || value === undefined || typeof value !== "string");
};
/**
 * Provides validation utilities for various data types.
 */
export const validationUtil = {
  validateStrLength,
  compareStr,
  validateUrl,
  validateColorHex,
  validateTextSize,
  validateBoolean,
  validateDelta,
};
