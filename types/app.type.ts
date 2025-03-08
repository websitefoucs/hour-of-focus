export type TValidationError<T> = Record<keyof T, string>;

export type TFormState<T> = {
  errors?: TValidationError<T> | null;
  message?: string;
  data?: T;
};

export type TEntity = {
  _id?: string;
};

export type TAcccibility = {
  zoom: number;
  grayscale: boolean;
  "invert-contrast": boolean;
  "highlight-links": boolean;
  "highlight-headers": boolean;
  "stop-animations": boolean;
};