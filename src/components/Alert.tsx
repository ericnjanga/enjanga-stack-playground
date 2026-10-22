import type { ComponentPropsWithoutRef } from "react";

const variantStyles = {
  info: "border-blue-500/40 bg-blue-950 text-blue-200",
  success: "border-emerald-500/40 bg-emerald-950 text-emerald-200",
  warning: "border-amber-500/40 bg-amber-950 text-amber-200",
  error: "border-red-500/40 bg-red-950 text-red-200",
};

type AlertProps = ComponentPropsWithoutRef<"div"> & {
  variant?: keyof typeof variantStyles;
};

export default function Alert({ variant = "info", children, className = "", role, ...props }: AlertProps) {
  return (
    <div
      {...props}
      role={role ?? (variant === "error" ? "alert" : "status")}
      className={`mb-4 flex w-full items-start gap-2 rounded-md border p-3 text-sm ${variantStyles[variant]} ${className}`}
    >
      <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-5 shrink-0">
        <circle cx="12" cy="12" r="9" />
        {variant === "success" ? (
          <path strokeLinecap="round" strokeLinejoin="round" d="m8 12 3 3 5-6" />
        ) : variant === "info" ? (
          <path strokeLinecap="round" d="M12 11v5m0-9h.01" />
        ) : (
          <path strokeLinecap="round" d="M12 7v6m0 4h.01" />
        )}
      </svg>
      <div className="min-w-0">{children}</div>
    </div>
  );
}
