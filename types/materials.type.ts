import { Document, ObjectId } from "mongodb";

export type TMaterial = {
  _id?: string;
  imgPath?: string;
  link: string;
  subject: string;
  updateAt?: string;
  createAt?: string;
};

export type TMaterialDto = Omit<TMaterial, "updateAt" | "createAt"> & {
  public_id?: string;
};

export type TMaterialDocument = Document &
  Omit<TMaterial, "_id" | "updateAt" | "createAt"> & {
    _id?: ObjectId;
    updateAt?: Date;
    public_id?: string;
  };

export type TMaterialFilter = {
  isFull?: boolean;
};
