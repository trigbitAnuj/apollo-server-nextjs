"use client";
import React from "react";

const error = ({ error, reset }: { error: Error; reset: () => void }) => {
  return (
    <>
      <div>{error.message}</div>;
      <button
        onClick={() => {
          reset;
        }}
      >
        Try again
      </button>
    </>
  );
};

export default error;
