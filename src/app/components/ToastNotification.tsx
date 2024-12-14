"use client";

import React from "react";
import { Toaster } from "react-hot-toast";

const ToastNotification = () => {
  return (
    <Toaster
      position="top-center"
      reverseOrder={false}
      toastOptions={{
        style: {
          background: "#333",
          color: "#fff",
          borderRadius: "10px",
        },
        success: {
          duration: 4000,
          style: {
            background: "green",
          },
        },
        error: {
          duration: 4000,
          style: {
            background: "red",
          },
        },
        loading: {
          duration: Infinity,
          style: {
            background: "#FF9900",
            color: "#fff",
          },
        },
      }}
    />
  );
};

export default ToastNotification;
