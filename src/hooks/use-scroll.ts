// Import các hook từ React để sử dụng trong custom hook
import { useCallback, useEffect, useState } from 'react';

// Định nghĩa custom hook `useScroll` để theo dõi trạng thái cuộn trang
export default function useScroll(threshold: number) {
  // Khởi tạo state `scrolled` để theo dõi trạng thái đã cuộn qua ngưỡng hay chưa
  const [scrolled, setScrolled] = useState(false);

  // Sử dụng `useCallback` để tạo ra hàm `onScroll` mà không bị tạo mới mỗi lần component re-render,
  // chỉ tái tạo khi `threshold` thay đổi
  const onScroll = useCallback(() => {
    // Cập nhật trạng thái `scrolled` dựa trên vị trí cuộn hiện tại so với ngưỡng
    setScrolled((window.scrollY || window.pageYOffset) > threshold);
  }, [threshold]);

  // Sử dụng `useEffect` để thêm và loại bỏ event listener cho sự kiện cuộn trang
  useEffect(() => {
    // Thêm event listener cho sự kiện cuộn trang
    window.addEventListener('scroll', onScroll);
    // Cleanup function được gọi khi component unmount hoặc trước khi effect chạy lại
    return () => window.removeEventListener('scroll', onScroll);
  }, [onScroll]);

  // Trả về trạng thái `scrolled`, true nếu đã cuộn qua ngưỡng, false nếu chưa
  return scrolled;
}