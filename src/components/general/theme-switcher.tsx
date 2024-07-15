'use client';

import { useState, useEffect } from 'react';
import { MoonStar, Sun } from 'lucide-react'; // Import các icon từ thư viện lucide-react
import { useTheme } from 'next-themes'; // Sử dụng hook useTheme từ thư viện next-themes để quản lý theme

import IconButton from '@/components/general/icon-button'; // Import component IconButton

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false); // Khởi tạo state để kiểm tra component đã được mount chưa
  const { theme, setTheme } = useTheme(); // Sử dụng hook useTheme để lấy và thiết lập theme hiện tại

  const toggleTheme = () => { // Hàm để chuyển đổi theme
    setTheme(theme === 'dark' ? 'light' : 'dark'); // Nếu theme hiện tại là dark thì chuyển sang light và ngược lại
  };

  useEffect(() => { // useEffect để thực hiện side effect
    setMounted(true); // Khi component được mount, set mounted thành true
  }, []);

  // Nếu component chưa được mount, hiển thị một default icon
  if (!mounted) {
    return (
      <IconButton>
        <Sun />
      </IconButton>
    );
  }

  // Khi component đã được mount, hiển thị icon tương ứng với theme và gán hàm toggleTheme vào sự kiện onClick
  return (
    <IconButton onClick={toggleTheme}>
      {theme === 'dark' ? <Sun /> : <MoonStar />}
    </IconButton>
  );
};

export default ThemeSwitcher;

// Ref :: https://www.npmjs.com/package/next-themes#avoid-hydration-mismatch
// Explain (fix):: https://stackoverflow.com/questions/77026759/using-next-themes-for-dark-mode-generates-hydration-failed-error
