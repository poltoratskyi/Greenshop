import { Resend } from "resend";
import EmailTemplate from "../components/shared/email-template";
import React from "react";
import { Email } from "../types";

const resend = new Resend(process.env.RESEND_API_KEY);

export const emailService = async (
  to: string,
  firstName: string,
  lastName: string,
  orderId: string,
  items: Email[],
  total: number,
  subTotalAmount: number
) => {
  const { data, error } = await resend.emails.send({
    from: "onboarding@resend.dev",
    to,
    subject: `GREENSHOP Order #${orderId}`,
    react: React.createElement(EmailTemplate, {
      firstName,
      lastName,
      orderId,

      items,
      total,
      subTotalAmount,
    }),
  });

  if (error) {
    console.error("Error sending email:", error);
    return null;
  }

  return data;
};
