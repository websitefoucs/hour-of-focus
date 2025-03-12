import { Document, ObjectId } from "mongodb";
import { TTextBlock } from "./app.type";

export type TTestimony = {
  _id?: string;
  delta: TTextBlock[];
  updateAt?: string;
  createAt?: string;
};

export type TTestimonyDto = Omit<TTestimony, "createAt">;

export type TTestimonyDocument = Document &
  Omit<TTestimony, "_id" | "createdAt"> & {
    _id?: ObjectId;
    updateAt?: Date;
  };
