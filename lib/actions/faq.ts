"use server";
//Next
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
//DB
import { ObjectId } from "mongodb";
import { getCollection, isValidObjectId } from "@/lib/mongoClient";
//Types
import { TFaq, TFaqDocument, TFaqDto, TFaqFilter } from "@/types/faq";
import { TFormState } from "@/types/app.type";
//Utils
import { AppError } from "@/utils/server/Error.util.server";
import { authServerUtils } from "@/utils/server/auth.util.server";
import { faqServerUtils } from "@/utils/server/faq.util.server";

export async function createFaq(
  prevState: TFormState<TFaqDto>,
  formData: FormData
): Promise<TFormState<TFaqDto>> {
  let dto;
  try {
    const userId = await authServerUtils.verifyAuth();

    const data = faqServerUtils.fromDataToDto(formData);

    dto = faqServerUtils.sanitizeFaqDtoCreate({
      ...data,
      createBy: userId,
    });

    faqServerUtils.validateFaqDtoCreate(dto);
    const { createBy, question, answer, faqType } = dto;

    const collection = await getCollection<TFaqDocument>("faqs");
    const { acknowledged, insertedId } = await collection.insertOne({
      question,
      answer,
      faqType,
      createBy: new ObjectId(createBy),
    });

    if (!acknowledged || !insertedId) {
      throw AppError.create("Failed to create FAQ");
    }

    revalidatePath("/admin/@faqs");
  } catch (error) {
    const err = AppError.handleResponse(error);
    return {
      errors: err.errors as Record<keyof TFaqDto, string>,
      message: err.message,
      data: dto,
    };
  }

  redirect("/admin");
}

export async function updateFaq(
  prevState: TFormState<TFaqDto>,
  formData: FormData
): Promise<TFormState<TFaqDto>> {
  let dto;
  try {
    const userId = await authServerUtils.verifyAuth();

    const data = faqServerUtils.fromDataToDto(formData);

    dto = faqServerUtils.sanitizeFaqDtoUpdate({
      ...data,
      updateBy: userId,
    });

    faqServerUtils.validateFaqDtoUpdate(dto);

    const { updateBy, _id } = dto;
    const collection = await getCollection<TFaqDocument>("faqs");
    const { modifiedCount } = await collection.updateOne(
      { _id: new ObjectId(_id) },
      {
        $set: {
          ...dto,
          _id: new ObjectId(_id),
          updateBy: new ObjectId(updateBy),
          createBy: new ObjectId(dto.createBy),
          updateDate: new Date(),
        },
      }
    );

    if (!modifiedCount) {
      throw AppError.create("Failed to update FAQ");
    }

    revalidatePath("/admin/@faqs");
  } catch (error) {
    const err = AppError.handleResponse(error);
    return {
      errors: err.errors as Record<keyof TFaqDto, string>,
      message: err.message,
      data: dto,
    };
  }
  redirect("/admin");
}

export async function getFaqs(filter: TFaqFilter): Promise<TFaq[]> {
  try {
    console.log(" filter:", filter)
    const pipeline = [];

    const { faqType = "students", _id, isFull = false } = filter;

    pipeline.push({ $match: { faqType } });

    if (_id && isValidObjectId(_id)) {
      pipeline.push({ $match: { _id: new ObjectId(_id) } });
    }

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
          question: 1,
          answer: 1,
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
          faqType: 1,
          updateAt: 1,
        },
      });
    } else {
      pipeline.push({
        $project: {
          _id: { $toString: "$_id" },
          question: 1,
          answer: 1,
          faqType: 1,
        },
      });
    }
    const collection = await getCollection<TFaqDocument>("faqs");
    console.log(" collection:", collection)
    return collection.aggregate(pipeline).toArray() || [];
  } catch (error) {
    console.log(" error:", error)
    AppError.create(`Failed to get FAQs -> ${error}`);
    return [];
  }
}

export async function getFaqToEdit(id: string): Promise<TFaqDto> {
  try {
    const collection = await getCollection<TFaqDocument>("faqs");
    const pipeline = [];
    pipeline.push({ $match: { _id: new ObjectId(id) } });
    pipeline.push({
      $project: {
        _id: { $toString: "$_id" },
        question: 1,
        answer: 1,
        faqType: 1,
        createBy: {
          $toString: "$createBy",
        },
        updatedBy: {
          $toString: "$createBy",
        },
        createdAt: {
          $dateToString: {
            date: { $toDate: "$_id" },
            format: "%Y-%m-%d %H:%M:%S",
          },
        },
        updateAt: 1,
      },
    });
    const dto = await collection.aggregate<TFaqDto>(pipeline).next();
    if (!dto) {
      throw AppError.create("FAQ not found");
    }

    return dto;
  } catch (error) {
    throw AppError.create(`Failed to get FAQ by ID -> ${error}`);
  }
}

export async function deleteFaq(id: string) {
  try {
    const collection = await getCollection<TFaqDocument>("faqs");
    const { acknowledged } = await collection.deleteOne({
      _id: new ObjectId(id),
    });
    if (!acknowledged) {
      throw AppError.create("Failed to delete FAQ");
    }

    return acknowledged;
  } catch (error) {
    throw AppError.create(`Failed to delete FAQ -> ${error}`);
  }
}
