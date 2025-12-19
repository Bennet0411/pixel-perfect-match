import { ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

interface FantasyButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "back";
}

const FantasyButton = forwardRef<HTMLButtonElement, FantasyButtonProps>(
  ({ className, variant = "default", children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "fantasy-button px-10 py-3.5 min-w-[220px] rounded-[30px] text-lg text-foreground",
          variant === "back" && "opacity-80 min-w-[180px]",
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

FantasyButton.displayName = "FantasyButton";

export { FantasyButton };
