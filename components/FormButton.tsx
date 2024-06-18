"use client";
import React from "react";
import { useFormStatus } from "react-dom";

function FormButton() {
  const { pending } = useFormStatus();
  return (
    <button disabled={pending}>{pending ? "Submitting..." : "Submit"}</button>
  );
}

export default FormButton;
