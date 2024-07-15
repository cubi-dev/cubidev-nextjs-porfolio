import * as React from "react";
// (thực ra là Dialog nhưng đặt tên lại)
import * as DrawerPrimitive from "@radix-ui/react-dialog"; // Import các component cần thiết từ thư viện @radix-ui/react-dialog .
import { cva, type VariantProps } from "class-variance-authority"; // Import cva từ class-variance-authority để xử lý biến thể class.

import { mergeClasses } from "@/lib/utils"; // Import hàm mergeClasses từ thư mục utils để gộp class names.

// Khởi tạo các component cơ bản từ DrawerPrimitive.
const Drawer = DrawerPrimitive.Root; // Root component của drawer.
const DrawerTrigger = DrawerPrimitive.Trigger; // Component kích hoạt mở drawer.
const DrawerClose = DrawerPrimitive.Close; // Component kích hoạt đóng drawer.

// Tạo DrawerPortal component, sử dụng để render drawer vào một DOM node khác thông qua Portal.
const DrawerPortal = ({
  className,
  ...props
}: DrawerPrimitive.DialogPortalProps) => (
  <DrawerPrimitive.Portal className={mergeClasses(className)} {...props} />
);
DrawerPortal.displayName = DrawerPrimitive.Portal.displayName; // Đặt displayName cho component.

// Tạo DrawerOverlay component, sử dụng để tạo một lớp phủ khi drawer mở.
const DrawerOverlay = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DrawerPrimitive.Overlay
    className={mergeClasses(
      "fixed inset-0 z-50 bg-gray-900/10 opacity-100 backdrop-blur-sm", // Class mặc định cho overlay.
      className // Thêm class tùy chỉnh.
    )}
    {...props}
    ref={ref}
  />
));
DrawerOverlay.displayName = DrawerPrimitive.Overlay.displayName; // Đặt displayName cho component.

// Định nghĩa các biến thể cho DrawerContent sử dụng cva.
const drawerVariants = cva(
  "fixed z-50 shadow-2xl bg-gray ring-1 ring-black/10 transition-all ease-in-out duration-100", // Class mặc định.
  {
    variants: {
      side: {
        // Biến thể "right" cho DrawerContent.
        right:
          "inset-y-0 right-0 h-full max-w-xs w-full data-[state=open]:animate-drawer-open data-[state=closed]:animate-drawer-close",
      },
    },
    defaultVariants: {
      side: "right", // Biến thể mặc định.
    },
  }
);

// Định nghĩa props cho DrawerContent.
interface DrawerContentProps
  extends React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Content>,
    VariantProps<typeof drawerVariants> {}

// Tạo DrawerContent component, sử dụng để hiển thị nội dung bên trong drawer.
const DrawerContent = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Content>,
  DrawerContentProps
>(({ side = "right", className, children, ...props }, ref) => (
  <DrawerPortal>
    <DrawerOverlay />
    <DrawerPrimitive.Content
      ref={ref}
      className={mergeClasses(drawerVariants({ side }), className)} // Gộp các class names.
      {...props}
    >
      {children} {/* Hiển thị nội dung truyền vào. */}
    </DrawerPrimitive.Content>
  </DrawerPortal>
));
DrawerContent.displayName = DrawerPrimitive.Content.displayName; // Đặt displayName cho component.

// Xuất các component để sử dụng ở nơi khác.
export { Drawer, DrawerTrigger, DrawerClose, DrawerContent };

// Link đến issue trên GitHub.
//Issues:https://github.com/shadcn-ui/ui/issues/1595
//Ref:: https://www.radix-ui.com/primitives/docs/components/dialog
