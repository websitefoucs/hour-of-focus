import { Document, ObjectId } from "mongodb";
import { TAuth } from "./auth.type";
import { Op } from "quill";

export type TTestimony = {
  _id?: string;
  text: string;
  createBy?: TAuth;
  updateBy?: TAuth;
  updateAt?: string;
  createAt?: string;
  op?: Op[];
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
