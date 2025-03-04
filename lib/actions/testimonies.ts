"use server";
//Next
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
//DB
import { ObjectId } from "mongodb";
import { getCollection } from "@/lib/mongoClient";
//Types
import { TFormState } from "@/types/app.type";
import {
  TTestimony,
  TTestimonyDocument,
  TTestimonyDto,
} from "@/types/testimonies.type";
//Utils
import { AppError } from "@/utils/server/Error.util";
import { authServerUtils } from "@/utils/server/auth.util";
import { TestimoniesServerUtils } from "@/utils/server/testimonies.util";

export async function createTestimony(
  prevState: TFormState<TTestimonyDto>,
  formData: FormData
): Promise<TFormState<TTestimonyDto>> {
  let dto;
  try {
    const userId = await authServerUtils.verifyAuth();

    const data = TestimoniesServerUtils.fromDataToDto(formData);

    dto = TestimoniesServerUtils.sanitizeTestimonyDtoCreate({
      ...data,
      createBy: userId,
    });

    TestimoniesServerUtils.validateTestimonyDtoCreate(dto);
    const { createBy, text } = dto;

    const collection = await getCollection<TTestimonyDocument>("testimonies");
    const { acknowledged, insertedId } = await collection.insertOne({
      text,
      createBy: new ObjectId(createBy),
    });

    if (!acknowledged || !insertedId) {
      throw AppError.create("Failed to create Testimony");
    }

    revalidatePath("/admin/testimonies");
    revalidatePath(`/`);
  } catch (error) {
    const err = AppError.handleResponse(error);
    return {
      errors: err.errors as Record<keyof TTestimonyDto, string>,
      message: err.message,
      data: dto,
    };
  }

  redirect("/admin/testimonies");
}

export async function updateTestimony(
  prevState: TFormState<TTestimonyDto>,
  formData: FormData
): Promise<TFormState<TTestimonyDto>> {
  let dto;
  try {
    const userId = await authServerUtils.verifyAuth();

    const data = TestimoniesServerUtils.fromDataToDto(formData);

    dto = TestimoniesServerUtils.sanitizeTestimonyDtoUpdate({
      ...data,
      updateBy: userId,
    });

    TestimoniesServerUtils.validateTestimonyDtoUpdate(dto);
    const { createBy, text, _id, updateBy } = dto;

    const collection = await getCollection<TTestimonyDocument>("testimonies");
    const { modifiedCount } = await collection.updateOne(
      { _id: new ObjectId(_id) },
      {
        $set: {
          text,

          _id: new ObjectId(_id),
          updateBy: new ObjectId(updateBy),
          createBy: new ObjectId(createBy),
          updateDate: new Date(),
        },
      }
    );

    if (!modifiedCount) {
      throw AppError.create("Failed to update Testimony");
    }

    revalidatePath("/admin/testimonies");
    revalidatePath(`/`);
  } catch (error) {
    const err = AppError.handleResponse(error);
    return {
      errors: err.errors as Record<keyof TTestimonyDto, string>,
      message: err.message,
      data: dto,
    };
  }
  redirect("/admin/testimonies");
}

export async function getTestimonies(isFull?: boolean): Promise<TTestimony[]> {
  try {
    const pipeline = [];

    if (isFull) {
      pipeline.push({
        $lookup: {
          from: "users",
          localField: "createBy",
          foreignField: "_id",
          as: "createBy",
        },
      });

      pipeline.push({
        $unwind: {
          path: "$createBy",
          preserveNullAndEmptyArrays: true,
        },
      });

      pipeline.push({
        $lookup: {
          from: "users",
          localField: "updatedBy",
          foreignField: "_id",
          as: "updatedBy",
        },
      });

      pipeline.push({
        $unwind: {
          path: "$updatedBy",
          preserveNullAndEmptyArrays: true,
        },
      });

      pipeline.push({
        $project: {
          _id: { $toString: "$_id" },
          text: 1,
          createBy: {
            _id: { $toString: "$createBy._id" },
            username: 1,
          },
          updatedBy: {
            _id: { $toString: "$createBy._id" },
            username: 1,
          },
          createAt: {
            $dateToString: {
              date: { $toDate: "$_id" },
              format: "%Y-%m-%d %H:%M:%S",
            },
          },
          updateAt: {
            $dateToString: {
              date: { $toDate: "$updateAt" },
              format: "%Y-%m-%d %H:%M:%S",
            },
          },
        },
      });
    } else {
      pipeline.push({
        $project: {
          _id: { $toString: "$_id" },
          text: 1,
        },
      });
    }

    const collection = await getCollection<TTestimonyDocument>("testimonies");
    return (await collection.aggregate<TTestimony>(pipeline).toArray()) || [];
  } catch (error) {
    AppError.create(`Failed to get Testimony -> ${error}`);
    return [];
  }
}

export async function getTestimony(id: string): Promise<TTestimonyDocument> {
  try {
    const collection = await getCollection<TTestimonyDocument>("testimonies");
    const pipeline = [];
    pipeline.push({ $match: { _id: new ObjectId(id) } });
    pipeline.push({
      $lookup: {
        from: "users",
        localField: "createBy",
        foreignField: "_id",
        as: "createBy",
      },
    });

    pipeline.push({
      $unwind: {
        path: "$createBy",
        preserveNullAndEmptyArrays: true,
      },
    });

    pipeline.push({
      $lookup: {
        from: "users",
        localField: "updatedBy",
        foreignField: "_id",
        as: "updatedBy",
      },
    });

    pipeline.push({
      $unwind: {
        path: "$updatedBy",
        preserveNullAndEmptyArrays: true,
      },
    });

    pipeline.push({
      $project: {
        _id: { $toString: "$_id" },
        text: 1,
        createBy: {
          _id: { $toString: "$createBy._id" },
          username: 1,
        },
        updatedBy: {
          _id: { $toString: "$createBy._id" },
          username: 1,
        },
        createdAt: {
          $dateToString: {
            date: { $toDate: "$_id" },
            format: "%Y-%m-%d %H:%M:%S",
          },
        },
        updateAt: {
          $dateToString: {
            date: { $toDate: "$updateAt" },
            format: "%Y-%m-%d %H:%M:%S",
          },
        },
      },
    });
    const dto = await collection.aggregate<TTestimonyDocument>(pipeline).next();

    if (!dto) {
      throw AppError.create("Testimony not found");
    }

    return dto;
  } catch (error) {
    throw AppError.create(`Failed to get Testimony by ID -> ${error}`);
  }
}

export async function deleteTestimony(id: string) {
  try {
    const collection = await getCollection<TTestimonyDocument>("testimonies");
    const { acknowledged } = await collection.deleteOne({
      _id: new ObjectId(id),
    });
    if (!acknowledged) {
      throw AppError.create("Failed to delete Testimony");
    }

    revalidatePath("/admin/testimonies");
    revalidatePath(`/`);
  } catch (error) {
    throw AppError.create(`Failed to delete Testimony -> ${error}`);
  }
}
