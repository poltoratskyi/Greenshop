"use client";

import Style from "./footer.module.scss";
import Form from "./form";
import { Message } from "../discount";
import { useState } from "react";

const Newsletter: React.FC = () => {
  const [isSendEmail, setIsSendEmail] = useState(false);

  return (
    <>
      {!isSendEmail ? (
        <div className={Style.newsletters}>
          <Form setIsSendEmail={setIsSendEmail} />

          <p className={Style.descr}>
            &quot;We usually post offers and challenges in newsletter.
            We&rsquo;re your online houseplant destination. We offer a wide
            range of houseplants and accessories shipped directly from our
            (green) house to yours!&quot;
          </p>
        </div>
      ) : (
        <div className={Style.newsletters}>
          <h3 className={Style.title}>Confirm your subscription</h3>

          <Message />
        </div>
      )}
    </>
  );
};

export default Newsletter;
