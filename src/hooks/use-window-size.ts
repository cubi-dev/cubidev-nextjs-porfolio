import { useLayoutEffect, useState } from "react";

// Định nghĩa kiểu dữ liệu Size với hai thuộc tính: width và height, có thể là số hoặc null.
type Size = {
  width: number | null;
  height: number | null;
};

// Khai báo hook tùy chỉnh useWindowSize để lấy kích thước cửa sổ hiện tại.
export default function useWindowSize() {
  // Sử dụng useState để khởi tạo trạng thái size với giá trị ban đầu là width và height đều null.
  const [size, setSize] = useState<Size>({
    width: null,
    height: null,
  });

  // Sử dụng useLayoutEffect để thực hiện side effects liên quan đến DOM.
  // Hook này sẽ chạy sau khi tất cả các thay đổi DOM được commit.
  useLayoutEffect(() => {
    // Định nghĩa hàm handleResize để cập nhật kích thước cửa sổ vào trạng thái size.
    const handleResize = () => {
      setSize({
        width: window.innerWidth, // Lấy chiều rộng cửa sổ.
        height: window.innerHeight, // Lấy chiều cao cửa sổ.
      });
    };

    // Gọi hàm handleResize một lần để thiết lập kích thước ban đầu.
    handleResize();
    // Đăng ký sự kiện resize của window để gọi hàm handleResize mỗi khi cửa sổ thay đổi kích thước.
    window.addEventListener("resize", handleResize);

    // Trả về một hàm dọn dẹp để hủy đăng ký sự kiện khi component bị unmount hoặc trước khi effect chạy lại.
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Mảng rỗng [] nghĩa là effect này chỉ chạy một lần sau khi component mount.

  // Trả về kích thước cửa sổ hiện tại.
  return size;
}
