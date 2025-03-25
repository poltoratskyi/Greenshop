import React from "react";

const SubscriptionTemplate: React.FC = () => {
  return (
    <div
      style={{
        fontFamily: "IBM_Plex_Sans, sans-serif",
        maxWidth: "600px",
        margin: "0 auto",
        padding: "20px",
        background: "#fafafa",
      }}
    >
      <h2
        style={{
          fontWeight: "600",
          fontSize: "22px",
          lineHeight: "30px",
          color: "#3d3d3d",
          textAlign: "center",
        }}
      >
        Thank you for subscribing!
      </h2>

      <p
        style={{
          fontWeight: "400",
          fontSize: "16px",
          lineHeight: "24px",
          color: "#3d3d3d",
          textAlign: "center",
        }}
      >
        Welcome to our community! You are now subscribed to receive the latest
        updates about our products and special offers.
      </p>

      <p
        style={{
          fontWeight: "400",
          fontSize: "16px",
          lineHeight: "24px",
          color: "#3d3d3d",
          textAlign: "center",
        }}
      >
        We are excited to have you on board! Keep an eye out for upcoming
        promotions and new arrivals - we have something special coming soon.
      </p>

      <p
        style={{
          fontWeight: "400",
          fontSize: "16px",
          lineHeight: "24px",
          color: "#3d3d3d",
          textAlign: "center",
        }}
      >
        If you have any questions or concerns, do not hesitate to reach out. We
        are here to help!
      </p>

      <div
        style={{
          marginTop: "20px",
          textAlign: "center",
        }}
      >
        <a
          href="https://next-greenshop.vercel.app/"
          style={{
            textDecoration: "none",
            color: "#46a358",
            fontWeight: "600",
            fontSize: "18px",
          }}
        >
          Visit our store
        </a>
      </div>

      <footer
        style={{
          marginTop: "30px",
          textAlign: "center",
        }}
      >
        <p
          style={{
            fontSize: "12px",
            color: "#888",
            fontWeight: "400",
            lineHeight: "24px",
          }}
        >
          If you no longer wish to receive updates, you can{" "}
          <a
            href="https://next-greenshop.vercel.app/login"
            style={{
              color: "#007bff",
              fontSize: "12px",
              fontWeight: "400",
              lineHeight: "24px",
            }}
          >
            unsubscribe{" "}
          </a>
          at any time.
        </p>

        <p
          style={{
            fontSize: "12px",
            color: "#888",
            fontWeight: "400",
            lineHeight: "24px",
            marginTop: "10px",
          }}
        >
          © {new Date().getFullYear()} GREENSHOP. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default SubscriptionTemplate;
