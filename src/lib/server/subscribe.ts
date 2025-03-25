import { Resend } from "resend";
import React from "react";
import { SubscriptionTemplate } from "../../components/shared/email-template";

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

export const subscribe = async (to: string) => {
  try {
    const { data, error } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to,
      subject: "Subscribe to notifications from GREENSHOP",
      react: React.createElement(SubscriptionTemplate),
    });

    if (error) {
      console.error("Error sending email:", error);
      return null;
    }

    return data;
  } catch (error) {
    console.error("Error sending email:", error);
    return null;
  }
};
