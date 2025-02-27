import { Document, ObjectId } from "mongodb";
import { TAuth } from "./auth.type";

export type TFaq = {
  _id?: string;
  question?: string;
  answer?: string;
  createBy?: TAuth;
  updateBy?: TAuth;
  createdAt?: string;
  faqType?: TFaqType;
};

export type TFaqDto = Omit<TFaq, "createBy" | "updateBy" | "createdAt"> & {
  _id?: string;
  createBy?: string;
  updateBy?: string;
};

export type TFaqDocument = Document &
  Omit<TFaq, "_id" | "createBy" | "updateBy" | "createdAt"> & {
    _id?: ObjectId;
    createBy?: ObjectId;
    updateBy?: ObjectId;
    updateDate?: Date;
    faqType?: TFaqType;
  };
export const FAQ_TYPE = ["volunteers", "students"] as const;
export type TFaqType = (typeof FAQ_TYPE)[number];
