"use client";

import { useState, useEffect } from "react";

export const useDiscountStatus = () => {
  const [discountStatus, setDiscountStatus] = useState<boolean>(true);

  useEffect(() => {
    const storedDiscountStatus = localStorage.getItem("discountStatus");

    const result = storedDiscountStatus
      ? JSON.parse(storedDiscountStatus)
      : false;

    setDiscountStatus(result);
  }, []);

  return { discountStatus };
};
