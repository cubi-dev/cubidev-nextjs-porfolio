import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority'; // cva dùng để xây dựng class names với logic biến thể.
import { mergeClasses } from '@/lib/utils'; // Hàm hỗ trợ gộp class names.

// Định nghĩa các biến thể cho typography bằng cva, bao gồm cả mặc định và các biến thể cụ thể.
const typographyVariants = cva('text-gray-600 text-normal', {
  variants: {
    variant: {
      h1: 'text-4xl font-semibold md:font-bold md:text-5xl md:tracking-[-0.02em] lg:text-6xl lg:leading-[72px] text-gray-900',
      h2: 'text-lg md:text-4xl font-semibold tracking-[-0.02em] text-gray-900',
      h3: 'text-2xl md:text-3xl font-semibold tracking-[-0.02em] text-gray-900',
      subtitle: 'text-lg md:text-xl',
      body1: 'text-base md:text-lg',
      body2: 'text-base',
      body3: 'text-sm',
    },
  },
  defaultVariants: {
    variant: 'body2',
  },
});

// Định nghĩa props cho component Typography, mở rộng từ HTMLAttributes và VariantProps.
interface TypographyProps
  extends React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLHeadingElement>,
      HTMLHeadingElement
    >,
    VariantProps<typeof typographyVariants> {
  component?: React.ElementType; // Cho phép định nghĩa component custom để render.
}

// Mapping giữa variant và element HTML tương ứng.
let elementMapping = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  subtitle: 'p',
  body1: 'p',
  body2: 'p',
  body3: 'p',
};

// Định nghĩa các loại element có thể được sử dụng.
type ComponentElement = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';

// Component Typography với forwardRef để có thể truyền ref.
const Typography = React.forwardRef<
  HTMLHeadingElement | HTMLParagraphElement,
  TypographyProps
>(
  (
    { component, className = '', variant, children, ...props }: TypographyProps,
    ref
  ) => {
    // Xác định component cần render dựa trên props component hoặc variant.
    const Comp = (
      component ? component : variant ? elementMapping[variant] : 'p'
    ) as ComponentElement;

    // Render component với các class được gộp từ typographyVariants và className truyền vào.
    return (
      <Comp
        className={mergeClasses(typographyVariants({ variant }), className)}
        ref={ref}
        {...props}
      >
        {children} {/* Render children bên trong component. */}
      </Comp>
    );
  }
);

Typography.displayName = 'Typography'; // Đặt tên hiển thị cho component, hữu ích trong debugging.

export default Typography; // Xuất component để sử dụng ở nơi khác.