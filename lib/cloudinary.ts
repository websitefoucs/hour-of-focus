import { AppError } from "@/utils/server/Error.util";
import crypto from "crypto";

const uploadToCdn = async (
  file: Blob
): Promise<{ imgPath: string; public_id: string }> => {
  const cloudName = process.env.CLOUDINARY_CLOUD_NAME;
  const cloudPreset = process.env.CLOUDINARY_UPLOAD_PRESET;

  if (!cloudName || !cloudPreset) {
    throw AppError.create("No cloudinary credentials", 502);
  }
  const UPLOAD_URL = `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`;

  const formData = new FormData();
  formData.append("upload_preset", cloudPreset);
  formData.append("file", file);
  formData.append("folder", "hof");
  const res = await fetch(UPLOAD_URL, {
    method: "POST",
    body: formData,
  });

  const result = await res.json();

  if (!result || !result?.secure_url) {
    throw AppError.create("No return value", 502);
  }

  return {
    imgPath: result.secure_url,
    public_id: result.public_id,
  };
};

const removeFromCdn = async (public_id: string): Promise<void> => {
  const cloudName = process.env.CLOUDINARY_CLOUD_NAME;
  const cloudApiKey = process.env.CLOUDINARY_API_KEY;
  const cloudApiSecret = process.env.CLOUDINARY_API_SECRET;

  if (!cloudName || !cloudApiKey || !cloudApiSecret) {
    throw AppError.create("No cloudinary credentials", 502);
  }
  const DELETE_URL = `https://api.cloudinary.com/v1_1/${cloudName}/image/destroy`;

  const timestamp = Date.now();
  const signatureString = `public_id=${public_id}&timestamp=${timestamp}${cloudApiSecret}`;
  const signature = crypto
    .createHash("sha1")
    .update(signatureString)
    .digest("hex");

  const formData = new FormData();
  formData.append("public_id", public_id);
  formData.append("timestamp", timestamp.toString());
  formData.append("api_key", cloudApiKey);
  formData.append("signature", signature);
  const res = await fetch(DELETE_URL, {
    method: "POST",
    body: formData,
  });

  const result = await res.json();

  if (!result || result?.result !== "ok") {
    throw AppError.create("No return value", 502);
  }
};

export const imageUpload = {
  uploadToCdn,
  removeFromCdn,
};
