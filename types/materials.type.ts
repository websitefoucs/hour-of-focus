import { Document, ObjectId } from "mongodb";
import { TAuth } from "./auth.type";

export type TMaterials = {
  _id?: string;
  imgPath?: string;
  link: string;
  subject: string;
  createBy?: TAuth;
  updateBy?: TAuth;
  updateAt?: string;
};

export type TMaterialsDto = Omit<
  TMaterials,
  "createBy" | "updateBy" | "createdAt"
> & {
  createBy?: string;
  updateBy?: string;
};

export type TMaterialsDocument = Document &
  Omit<TMaterials, "_id" | "createBy" | "updateBy" | "createdAt"> & {
    _id?: ObjectId;
    createBy?: ObjectId;
    updateBy?: ObjectId;
    updateDate?: Date;
  };

export type TMaterialsFilter = {
  isFull?: boolean;
};
