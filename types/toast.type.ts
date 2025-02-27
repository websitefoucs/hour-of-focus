export type TToast = {
  id: string;
  message: string;
  type: TToastType;
  createdAt: Date;
};

export const TOAST_TYPES = ["success", "error", "warning", "info"] as const;
export type TToastType = (typeof TOAST_TYPES)[number];
