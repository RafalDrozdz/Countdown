import classnames from "classnames";
import { ButtonHTMLAttributes } from "react";

export type BaseButtonVariant = "cta" | "ghost";

interface Props extends ButtonHTMLAttributes<any> {
  children?: React.ReactNode;
  loading?: boolean;
  className?: string;
  variant?: BaseButtonVariant;
}

export default function BaseButton({
  children,
  className,
  variant = "cta",
  ...props
}: Props) {
  const getBackgroundClass = (variant: BaseButtonVariant) => {
    const colors: Record<BaseButtonVariant, string> = {
      cta: "primary",
      ghost: "background",
    };
    return `after:bg-${colors[variant]}`;
  };

  const getTextClass = (variant: BaseButtonVariant) => {
    const colors: Record<BaseButtonVariant, string> = {
      cta: "background",
      ghost: "text",
    };
    return `text-${colors[variant]}`;
  };

  const backgroundClass = getBackgroundClass(variant);
  const textClass = getTextClass(variant);
  return (
    <button
      {...props}
      className={classnames(
        `group relative py-2 px-6 rounded-3xl shadow-input after:content-[''] after:absolute after:w-full after:h-full after:top-0 after:left-0 after:rounded-3xl after:active:translate-y-1 after:transition  font-semibold ${backgroundClass} ${textClass}`,
        className
      )}>
      <span className="relative block z-10 group-active:translate-y-1 transition">
        {children}
      </span>
    </button>
  );
}
