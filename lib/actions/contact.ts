"use server";
import nodemailer from "nodemailer";
import { TFormState } from "@/types/app.type";
import { TContactForm } from "@/types/contact.type";
import { contactUtil } from "@/utils/server/contact.util";
import { AppError } from "@/utils/server/Error.util";

export async function contactAction(
  prevState: TFormState<TContactForm>,
  formData: FormData
): Promise<TFormState<TContactForm>> {
  let dto;

  try {
    const data = contactUtil.fromDataToDto(formData);

    dto = contactUtil.sanitizeContact(data);

    contactUtil.validateContactDto(dto);

    const appPassword = process.env.GOOGLE_APP_PASSWORD;
    const email = process.env.GMAIL_USER;

    if (!email || !appPassword) {
      throw AppError.create("חסרים משתנים סביבתיים", 500, true);
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: email,
        pass: appPassword,
      },
    });

    const { from, subject, message, senderName } = dto;

    const html = `<article>
    <h3>New message from ${senderName}</h3>
    <h4><strong>Subject:</strong> ${subject}</h4>
    <p><strong>Message:</strong> ${message}</p>
  </article>`;

    await transporter.sendMail({
      from: email,
      to: email,
      replyTo: from ?? "",
      subject: `New message from ${senderName}`,
      html,
    });
    return {
      errors: null,
      message: "ההודעה נשלחה בהצלחה",
      data: dto,
    };
  } catch (error) {
    const err = AppError.handleResponse(error);
    return {
      errors: err.errors as Record<keyof TContactForm, string>,
      message: err.message,
      data: dto,
    };
  }
}
