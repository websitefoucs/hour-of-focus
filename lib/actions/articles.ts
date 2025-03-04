"use server";
//Next
import { revalidatePath } from "next/cache";
//DB
import { ObjectId } from "mongodb";
import { getCollection } from "@/lib/mongoClient";
//Types
import { TFormState } from "@/types/app.type";
import { TArticle, TArticleDocument, TArticleDto } from "@/types/articles.type";
//Utils
import { AppError } from "@/utils/server/Error.util";
import { authServerUtils } from "@/utils/server/auth.util";
import { ArticlesServerUtils } from "@/utils/server/articles.util";
import { redirect } from "next/navigation";

export async function createArticle(
  prevState: TFormState<TArticleDto>,
  formData: FormData
): Promise<TFormState<TArticleDto>> {
  let dto;
  try {
    const userId = await authServerUtils.verifyAuth();

    const data = ArticlesServerUtils.fromDataToDto(formData);

    dto = ArticlesServerUtils.sanitizeArticleDtoCreate({
      ...data,
      createBy: userId,
    });

    ArticlesServerUtils.validateArticleDtoCreate(dto);
    const { createBy, publishDate, link, preview, publishPlace } = dto;

    const collection = await getCollection<TArticleDocument>("articles");
    const { acknowledged, insertedId } = await collection.insertOne({
      preview,
      link,
      publishPlace,
      publishDate,
      createBy: new ObjectId(createBy),
    });

    if (!acknowledged || !insertedId) {
      throw AppError.create("Failed to create Article");
    }

    revalidatePath("/admin/articles");
    revalidatePath(`/`);
  } catch (error) {
    const err = AppError.handleResponse(error);
    return {
      errors: err.errors as Record<keyof TArticleDto, string>,
      message: err.message,
      data: dto,
    };
  }
  redirect("/admin/articles");
}

export async function updateArticle(
  prevState: TFormState<TArticleDto>,
  formData: FormData
): Promise<TFormState<TArticleDto>> {
  let dto;
  try {
    const userId = await authServerUtils.verifyAuth();

    const data = ArticlesServerUtils.fromDataToDto(formData);

    dto = ArticlesServerUtils.sanitizeArticleDtoUpdate({
      ...data,
      updateBy: userId,
    });

    ArticlesServerUtils.validateArticleDtoUpdate(dto);
    const {
      createBy,
      publishDate,
      link,
      preview,
      publishPlace,
      _id,
      updateBy,
    } = dto;

    const collection = await getCollection<TArticleDocument>("articles");
    const { modifiedCount } = await collection.updateOne(
      { _id: new ObjectId(_id) },
      {
        $set: {
          preview,
          link,
          publishPlace,
          publishDate,
          _id: new ObjectId(_id),
          updateBy: new ObjectId(updateBy),
          createBy: new ObjectId(createBy),
          updateDate: new Date(),
        },
      }
    );

    if (!modifiedCount) {
      throw AppError.create("Failed to update Article");
    }

    revalidatePath("/admin/articles");
    revalidatePath(`/`);
    return { data: dto, message: "Article updated successfully" };
  } catch (error) {
    const err = AppError.handleResponse(error);
    return {
      errors: err.errors as Record<keyof TArticleDto, string>,
      message: err.message,
      data: dto,
    };
  }

  redirect("/admin/articles");
}

export async function getArticles(isFull?: boolean): Promise<TArticle[]> {
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
          preview: 1,
          link: 1,
          publishPlace: 1,
          publishDate: 1,
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
    } else {
      pipeline.push({
        $project: {
          _id: { $toString: "$_id" },
          preview: 1,
          link: 1,
          publishPlace: 1,
          publishDate: {
            $dateToString: {
              date: { $toDate: "$publishDate" },
              format: "%Y-%m-%d %H:%M:%S",
            },
          },
        },
      });
    }

    const collection = await getCollection<TArticleDocument>("articles");
    const articles = await collection.aggregate<TArticle>(pipeline).toArray();
    return articles||[];
  } catch (error) {
    AppError.create(`Failed to get Articles -> ${error}`);
    return [];
  }
}

export async function getArticle(id: string): Promise<TArticleDto> {
  try {
    const collection = await getCollection<TArticleDocument>("articles");
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
        preview: 1,
        link: 1,
        publishPlace: 1,
        publishDate: {
          $dateToString: {
            date: { $toDate: "$publishDate" },
            format: "%Y-%m-%d %H:%M:%S",
          },
        },
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
    const dto = await collection.aggregate<TArticleDto>(pipeline).next();

    if (!dto) {
      throw AppError.create("Article not found");
    }

    return dto;
  } catch (error) {
    throw AppError.create(`Failed to get Article by ID -> ${error}`);
  }
}

export async function deleteArticle(id: string) {
  try {
    const collection = await getCollection<TArticleDocument>("articles");
    const { acknowledged } = await collection.deleteOne({
      _id: new ObjectId(id),
    });
    if (!acknowledged) {
      throw AppError.create("Failed to delete Article");
    }

    revalidatePath("/admin/articles");
    revalidatePath(`/`);
  } catch (error) {
    throw AppError.create(`Failed to delete Article -> ${error}`);
  }
}
