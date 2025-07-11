import React from "react";
import { cn } from "@/lib/utils";

export const Card = ({ className, ...props }) => (
  <div
    className={cn(
      "rounded-2xl border border-border bg-white shadow-sm dark:bg-background",
      className
    )}
    {...props}
  />
);

export const CardHeader = ({ className, ...props }) => (
  <div className={cn("border-b p-4", className)} {...props} />
);

export const CardContent = ({ className, ...props }) => (
  <div className={cn("p-4", className)} {...props} />
);

export const CardTitle = ({ className, ...props }) => (
  <h3 className={cn("text-lg font-semibold leading-none tracking-tight", className)} {...props} />
);

export const CardDescription = ({ className, ...props }) => (
  <p className={cn("text-sm text-muted-foreground", className)} {...props} />
);