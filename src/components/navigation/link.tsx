// Import React và các thành phần liên quan từ thư viện 'next/link'
import * as React from 'react';
import NextLink, { LinkProps as NextLinkProps } from 'next/link';

// Import hàm tiện ích để gộp các class
import { mergeClasses } from '@/lib/utils';

// Định nghĩa props cho component Link, mở rộng từ NextLinkProps
interface LinkProps extends NextLinkProps {
  className?: string; // Cho phép tuỳ chỉnh class
  children?: React.ReactNode; // Nội dung bên trong Link
  noCustomization?: boolean; // Cờ để bỏ qua các tuỳ chỉnh mặc định
  externalLink?: boolean; // Đánh dấu Link là liên kết ngoài
  withUnderline?: boolean; // Thêm gạch chân cho Link
}

// Tạo component Link với forwardRef để có thể truyền ref
const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
  (
    {
      noCustomization,
      children = null,
      className = '',
      externalLink = false,
      withUnderline = false,
      ...props
    }: LinkProps,
    ref
  ) => {
    // Render component NextLink với các props được truyền vào
    return (
      <NextLink
        {...props} // Truyền tất cả props còn lại cho NextLink
        target={externalLink ? '_blank' : '_self'} // Mở liên kết ngoài trong tab mới
        ref={ref} // Truyền ref
        className={mergeClasses(
          // Gộp các class với điều kiện tuỳ chỉnh
          noCustomization ??
            'text-base font-medium text-gray-600 transition-all hover:text-gray-900 active:text-gray-600',
          withUnderline
            ? 'underline underline-offset-4 transition-all hover:text-gray-900 active:text-gray-600'
            : '',
          className // Thêm class tuỳ chỉnh
        )}
      >
        {children} {/* Hiển thị nội dung bên trong Link */}
      </NextLink>
    );
  }
);

Link.displayName = 'Link'; // Đặt tên hiển thị cho component để dễ debug

export default Link; // Xuất component để sử dụng ở nơi khác