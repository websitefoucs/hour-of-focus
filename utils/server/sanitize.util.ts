import "server-only";
import sanitizeHtml from "sanitize-html";
/**
 * Sanitizes a field from FormData.
 * @param formData The FormData object.
 * @param fieldName The name of the form field to sanitize.
 * @returns The sanitized string.
 */
const sanitizedFormField = (formData: FormData, fieldName: string): string => {
  return sanitizeHtml(formData.get(fieldName)?.toString() || "");
};
/**
 * Sanitizes an object field.
 * @param value The value to sanitize.
 * @returns The sanitized string or null if no value is provided.
 */
const sanitizedObjectField = (
  value?: string | null | number
): string  => {
  if (!value) return "";
  return sanitizeHtml(value.toString());
};
/**
 * Returns a boolean value.
 * @param value The boolean value to sanitize.
 * @returns True if value is truthy, otherwise false.
 */
const sanitizedBoolean = (value?: unknown): boolean => {
  return !sanitizeHtml(value?.toString() || "")
    .toLowerCase()
    .includes("false");
};

export const sanitizeUtil = {
  sanitizedFormField,
  sanitizedObjectField,
  sanitizedBoolean,
};
