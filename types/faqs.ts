import { Document, ObjectId } from "mongodb";
import { TTextBlock } from "./app.type";

export type TFaq = {
  _id?: string;
  deltaQuestion?: TTextBlock[];
  deltaAnswer?: TTextBlock[];
  createAt?: string;
  updateAt?: string;
  faqType?: TFaqType;
};

export type TFaqDto = Omit<TFaq, "createAt"> & {};

export type TFaqDocument = Document &
  Omit<TFaqDto, "_id" | "updateAt"> & {
    _id?: ObjectId;
    updateDate?: Date;
  };

export const FAQ_TYPE = ["volunteers", "students"] as const;
export type TFaqType = (typeof FAQ_TYPE)[number];

export type TFaqFilter = {
  faqType?: TFaqType;
  _id?: string;
  isFull?: boolean;
};
