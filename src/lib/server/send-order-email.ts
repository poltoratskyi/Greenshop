import { Resend } from "resend";
import { orderEmailTemplate } from "../../components/shared/email-template";
import React from "react";
import { OrderEmail } from "../../types";

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

export const sendOrderEmail = async (
  to: string,
  firstName: string,
  lastName: string,
  orderId: string,
  items: OrderEmail[],
  totalAmount: number,
  subtotalAmount: number
) => {
  try {
    const { data, error } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to,
      subject: `GREENSHOP Order #${orderId}`,
      react: React.createElement(orderEmailTemplate, {
        firstName,
        lastName,
        orderId,

        items,
        totalAmount,
        subtotalAmount,
      }),
    });

    if (error) {
      console.error("Error sending email:", error);
      return null;
    }

    return data;
  } catch (error) {
    console.error("Error sending email:", error);
  }
};
