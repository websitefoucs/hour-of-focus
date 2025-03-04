import { Document, ObjectId } from "mongodb";
import { TAuth } from "./auth.type";

export type TArticle = {
  _id?: string;
  publishDate: string;
  link: string;
  preview: string;
  publishPlace: string;
  createBy?: TAuth;
  updateBy?: TAuth;
  updateAt?: string;
  createdAt?: string;
};

export type TArticleDto = Omit<
  TArticle,
  "createBy" | "updateBy" | "createdAt"
> & {
  createBy?: string;
  updateBy?: string;
};

export type TArticleDocument = Document &
  Omit<
    TArticle,
    "_id" | "createBy" | "updateBy" | "createdAt" | "publishDate"
  > & {
    _id?: ObjectId;
    createBy?: ObjectId;
    updateBy?: ObjectId;
    updateAt?: Date;
    publishDate?: Date;
  };
