import { TContactForm } from "@/types/contact.type";
import { sanitizeUtil } from "./sanitize.util";
import { validationUtil } from "../validation.util";
import { AppError } from "./Error.util";
import { authServerUtils } from "./auth.util";

const sanitizeContact = (contact?: TContactForm): TContactForm => {
  return {
    from: contact?.from
      ? sanitizeUtil.sanitizedObjectField(contact?.from)
      : undefined,
    subject: contact?.subject
      ? sanitizeUtil.sanitizedObjectField(contact?.subject)
      : undefined,
    message: contact?.message
      ? sanitizeUtil.sanitizedObjectField(contact?.message)
      : undefined,
    senderName: contact?.senderName
      ? sanitizeUtil.sanitizedObjectField(contact?.senderName)
      : undefined,
  };
};

const fromDataToDto = (formData: FormData): TContactForm => {
  return {
    from: formData.get("from") as string,
    subject: formData.get("subject") as string,
    message: formData.get("message") as string,
    senderName: formData.get("senderName") as string,
  };
};

const validateContactDto = (
  dto: TContactForm
): Partial<Record<keyof TContactForm, string>> => {
  const errors: Partial<Record<keyof TContactForm, string>> = {};

  const sanderNameError = validationUtil.validateStrLength(
    "שם השולח",
    1,
    dto?.senderName
  );
  if (sanderNameError) errors.senderName = sanderNameError;

  const fromEmailError = authServerUtils.validateEmail(dto?.from);
  if (fromEmailError) errors.from = fromEmailError;

  const subjectErrorLength = validationUtil.validateStrLength(
    "נושא",
    2,
    dto?.subject
  );
  if (subjectErrorLength) errors.subject = subjectErrorLength;

  const messageErrorLength = validationUtil.validateStrLength(
    "הודעה",
    2,
    dto?.message
  );

  if (messageErrorLength) errors.message = messageErrorLength;
  if (Object.keys(errors).length > 0) {
    throw AppError.create("", 400, true, errors);
  }
  return errors;
};

export const contactUtil = {
  sanitizeContact,
  fromDataToDto,
  validateContactDto,
};
