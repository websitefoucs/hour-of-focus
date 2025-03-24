import { Document, ObjectId } from "mongodb";

export type TArticle = {
  _id?: string;
  link: string;
  preview: string;
  publishDate: string;
  publishPlace: string;
  updateAt?: string;
  createAt?: string;
};

export type TArticleDto = Omit<TArticle, "createdAt"> & {};

export type TArticleDocument = Document &
  Omit<TArticle, "_id" | "createAt"> & {
    _id?: ObjectId;
    updateAt?: Date;
  };
