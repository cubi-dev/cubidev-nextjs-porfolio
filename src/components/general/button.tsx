'use client';

import * as React from 'react'; // Import React.
import { Slot } from '@radix-ui/react-slot'; // Import Slot từ radix-ui để xử lý slotting.

import { mergeClasses } from '@/lib/utils'; // Import hàm mergeClasses từ thư mục utils để gộp các class.

// Định nghĩa interface cho props của Button, mở rộng từ ButtonHTMLAttributes của HTMLButtonElement.
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean; // Prop asChild là tùy chọn, dùng để quyết định Button có được render như một child component hay không.
}

// Tạo component Button sử dụng forwardRef để có thể truyền ref vào component.
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, asChild = false, ...props }, ref) => {
    // Nếu asChild là true, sử dụng Slot từ radix-ui, ngược lại sử dụng thẻ 'button'.
    const Comp = asChild ? Slot : 'button';
    return (
      // Render component hoặc thẻ button với các props và className được truyền vào.
      // mergeClasses được sử dụng để gộp className mặc định của button với className được truyền vào từ props.
      <Comp
        className={mergeClasses(
          'inline-flex items-center justify-center rounded-xl bg-gray-900 px-4 py-1.5 font-medium text-gray-50 transition-colors duration-200 hover:bg-gray-700 active:bg-gray-800',
          className
        )}
        ref={ref} // Truyền ref vào component hoặc thẻ button.
        {...props} // Truyền tất cả props còn lại vào component hoặc thẻ button.
      />
    );
  }
);

Button.displayName = 'Button'; // Đặt tên hiển thị cho component để dễ dàng debug.

export default Button; // Xuất component Button để sử dụng ở nơi khác.