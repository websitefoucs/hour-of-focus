import { Document, ObjectId } from "mongodb";
import { TTextBlock } from "./app.type";

export type TTestimony = {
  _id?: string;
  delta: TTextBlock[];
  updateAt?: string;
  createAt?: string;
};

export type TTestimonyDto = Omit<TTestimony, "createAt" | "updateAt">;

export type TTestimonyDocument = Document &
  Omit<TTestimony, "_id" | "createAt"> & {
    _id?: ObjectId;
    updateAt?: Date;
  };
