// Import các hàm cần thiết từ 'clsx' để thao tác với chuỗi class
import { ClassValue, clsx } from 'clsx';
// Import 'twMerge' từ 'tailwind-merge' để gộp các class của Tailwind CSS
import { twMerge } from 'tailwind-merge';

// Hàm gộp nhiều giá trị class thành một chuỗi duy nhất với khả năng gộp class của Tailwind CSS
export const mergeClasses = (...inputs: ClassValue[]) => {
  // Sử dụng 'clsx' để kết hợp các chuỗi/đối tượng class, sau đó 'twMerge' để gộp các class của Tailwind
  return twMerge(clsx(inputs));
};

// Hàm bất đồng bộ để sao chép văn bản vào bộ nhớ tạm
export const copyTextToClipboard = async (text: string) => {
  if ('clipboard' in navigator) { // Kiểm tra xem API Clipboard có sẵn trong trình duyệt không
    // Sử dụng API Clipboard để viết văn bản vào bộ nhớ tạm
    return await navigator.clipboard.writeText(text);
  } else {
    // Phương án dự phòng cho các trình duyệt cũ hơn sử dụng 'document.execCommand'
    return document.execCommand('copy', true, text);
  }
};

//shadcn/ui
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
