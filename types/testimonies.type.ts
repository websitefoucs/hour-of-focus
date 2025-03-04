import { Document, ObjectId } from "mongodb";
import { TAuth } from "./auth.type";

export type TTestimony = {
  _id?: string;
  text: string;
  createBy?: TAuth;
  updateBy?: TAuth;
  updateAt?: string;
  createAt?: string;
};

export type TTestimonyDto = Omit<
  TTestimony,
  "createBy" | "updateBy" | "createdAt"
> & {
  createBy?: string;
  updateBy?: string;
};

export type TTestimonyDocument = Document &
  Omit<TTestimony, "_id" | "createBy" | "updateBy" | "createdAt"> & {
    _id?: ObjectId;
    createBy?: ObjectId;
    updateBy?: ObjectId;
    updateAt?: Date;
  };
