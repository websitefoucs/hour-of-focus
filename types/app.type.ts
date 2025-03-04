export type TValidationError<T> = Record<keyof T, string>;

export type TFormState<T> = {
  errors?: TValidationError<T> | null;
  message?: string;
  data?: T;
};

export type TEntity = {
  _id?: string;
};

