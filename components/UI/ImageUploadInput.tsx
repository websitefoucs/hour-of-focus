/**
 * ImageUploadInput client component that allows users to upload an image and preview it.
 *
 * @param {Object} props - The properties object.
 * @param {string} [props.imgPath] - The initial image path to display as a preview. Defaults to a constant default image if not provided.
 * @param {string} [props.itemId] - A unique identifier for the input element, used to associate the label and input.
 * @param {string | null} [props.serverError] - An error message from the server to display, if any.
 * @param {string} [props.public_id] - A unique identifier for the uploaded image, used for server-side processing.
 * @param {boolean} [props.serverErrorFlag] - A flag to trigger updates when a server error occurs to force rerender to remove preview image.
 *
 * @returns {JSX.Element} The rendered ImageUploadInput component, including an image preview, file input, and error messages.
 */

"use client";
//React
import { ChangeEvent, useEffect, useState } from "react";
//Next
import Image from "next/image";
//UI
import Input from "./Input";
import Label from "./Label";
import ErrorLabel from "./ErrorLabel";
//Images
import { DEFAULT_IMAGE } from "@/constants/images";

interface ImageUploadInputProps {
  imgPath?: string;
  itemId?: string;
  serverError?: string | null;
  public_id?: string;
  serverErrorFlag?: boolean;
}
export default function ImageUploadInput({
  imgPath,
  itemId,
  serverError,
  public_id,
  serverErrorFlag,
}: ImageUploadInputProps) {
  const [imgPreview, setImgPreview] = useState<string>(
    imgPath || DEFAULT_IMAGE
  );
  // NextJS default file size limit is 1MB, but the check happens before the route is processed,
  // which throws an unexpected error. Adding this handler to return a valid error response to the client.
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (imgPath) {
      setImgPreview(imgPath);
    } else {
      setImgPreview(DEFAULT_IMAGE);
    }
    //Force rerender when serverErrorFlag is true to remove preview image
  }, [imgPath, serverErrorFlag]);

  const handleImagePreview = (ev: ChangeEvent<HTMLInputElement>) => {
    if (!ev.target.files || !ev.target.files[0]) return;
    const file = ev.target.files[0];
    const fileSize = file.size / 1024 / 1024;

    if (fileSize > 1) {
      ev.target.value = "";
      setError("גודל התמונה חייב להיות עד 1MB");
      return;
    }

    setError(null);

    const imgUrl = URL.createObjectURL(file);
    setImgPreview(imgUrl);
  };
  return (
    <div>
      <Label htmlFor={`imgPath-${itemId}`}>
        <Image
          className="w-full h-auto"
          src={imgPreview}
          width={200}
          height={100}
          alt="ברירת מחדל"
        />
      </Label>
      <Input
        type="file"
        name="imgFile"
        id={`imgFile-${itemId}`}
        onChange={handleImagePreview}
        placeholder="הכנס כתובת תמונה"
      ></Input>
      <Input
        type="hidden"
        className="hidden"
        name="imgPath"
        defaultValue={imgPath}
      />
      <Input
        type="hidden"
        className="hidden"
        name="public_id"
        defaultValue={public_id}
      />
      {error ? <ErrorLabel error={error} /> : null}
      {serverError ? <ErrorLabel error={serverError} /> : null}
    </div>
  );
}
