'use client';

// Import hook useEffect và useState từ React.
import { useEffect, useState } from 'react';
// Import component Image và kiểu dữ liệu ImageProps, StaticImageData từ thư viện next/image.
import Image, { ImageProps, StaticImageData } from 'next/image';
// Import hook useTheme từ thư viện next-themes để xử lý chủ đề.
import { useTheme } from 'next-themes';

// Định nghĩa kiểu dữ liệu cho props của ImageWrapper, mở rộng từ ImageProps và thêm srcForDarkMode.
type ImageWrapperProps = ImageProps & {
  srcForDarkMode?: string | StaticImageData; // src dành cho chế độ tối, có thể là chuỗi hoặc dữ liệu ảnh tĩnh.
};

// Khai báo component ImageWrapper với props tương ứng.
const ImageWrapper = ({
  srcForDarkMode, // src dành cho chế độ tối.
  src, // src mặc định của ảnh.
  alt, // thuộc tính alt cho ảnh.
  ...props // các props khác được truyền vào Image.
}: ImageWrapperProps) => {
  // Ref: https://github.com/pacocoursey/next-themes#avoid-hydration-mismatch
  // Khởi tạo state mounted để kiểm tra xem component đã mount chưa.
  const [mounted, setMounted] = useState(false);
  // Sử dụng hook useTheme để lấy thông tin về chủ đề hiện tại.
  const { theme } = useTheme();

  // Sử dụng useEffect để set giá trị của mounted thành true sau khi component đã mount.
  useEffect(() => {
    setMounted(true);
  }, []);

  // Nếu component chưa mount, trả về null để tránh hydration mismatch.
  if (!mounted) {
    return null;
  }

  // Xác định src cuối cùng dựa trên chủ đề hiện tại: nếu chủ đề là 'dark' và có srcForDarkMode, sử dụng srcForDarkMode; ngược lại, sử dụng src.
  const finalSrc = theme === 'dark' ? srcForDarkMode || src : src;

  // Render component Image với src đã xác định và các props khác.
  return <Image src={finalSrc!} alt={alt} {...props} />;
};

// Xuất component ImageWrapper để sử dụng ở nơi khác.
export default ImageWrapper;