import React from "react";
import { clsx } from "clsx";
import { useState } from "react";

export const Switch = ({ checked, onCheckedChange, disabled = false, className = "" }) => {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      onClick={() => !disabled && onCheckedChange(!checked)}
      className={clsx(
        "relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out",
        checked ? "bg-primary" : "bg-gray-300",
        disabled && "opacity-50 cursor-not-allowed",
        className
      )}
    >
      <span
        className={clsx(
          "pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out",
          checked ? "translate-x-5" : "translate-x-0"
        )}
      />
    </button>
  );
};