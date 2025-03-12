export const QUILL_TEXT_SIZES = ["small", "large", "huge"] as const;

export const ALLOWED_ATTRIBUTES = new Set([
  "size",
  "underline",
  "italic",
  "bold",
  "color",
  "link",
]);

export const ALLOWED_TEXT_SIZES = new Set(QUILL_TEXT_SIZES);
export const ALLOWED_COLORS_REGEX = /^#[0-9A-Fa-f]{6}$/;
export const URL_REGEX =
  /^(https?:\/\/)?(www\.)?[a-zA-Z0-9-]+(\.[a-zA-Z]{2,})+$/;
