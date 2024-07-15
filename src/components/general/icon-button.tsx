import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority"; // Sử dụng cva để quản lý các biến thể của class

import { mergeClasses } from "@/lib/utils"; // Hàm để gộp các class lại với nhau

const iconButtonVariants = cva(
  "flex justify-center items-center hover:bg-gray-100 active:bg-gray-200 rounded-lg p-1.5 transition-colors duration-200 [&_svg]:stroke-gray-600 [&_svg]:hover:stroke-gray-700",
  {
    variants: {
      size: {
        md: "[&_svg]:w-6 [&_svg]:h-6", // Kích thước medium cho icon
        lg: "[&_svg]:w-8 [&_svg]:h-8", // Kích thước large cho icon
      },
    },
    defaultVariants: {
      size: "md", // Kích thước mặc định là medium
    },
  }
);

export interface IconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof iconButtonVariants> {
  asChild?: boolean; // Cho phép button được sử dụng như một child component
  showTooltip?: boolean; // Có hiển thị tooltip hay không
  tooltipText?: string; // Nội dung của tooltip
}

const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  (
    {
      className,
      size,
      asChild = false,
      showTooltip = false,
      tooltipText = "",
      children,
      ...props
    },
    ref
  ) => {
    return (
      <div className="group relative inline-block">
        <button
          className={mergeClasses(
            "relative",
            iconButtonVariants({ size }), // Áp dụng các biến thể của iconButton dựa trên props size
            className
          )}
          ref={ref}
          {...props}
        >
          {children} {/* Nội dung bên trong button, thường là icon */}
        </button>
        {showTooltip &&
          tooltipText.length > 0 && ( // Nếu showTooltip là true và tooltipText có nội dung, hiển thị tooltip
            <span className="absolute top-10 -translate-x-1/2 rounded-lg bg-gray-200 px-2 py-1 text-sm opacity-0 hidden group-hover:opacity-100 group-hover:block transition-opacity duration-300 ">
              {tooltipText}
            </span>
          )}
      </div>
    );
  }
);

IconButton.displayName = "IconButton"; // Đặt tên hiển thị cho component để dễ dàng debug

export default IconButton;
