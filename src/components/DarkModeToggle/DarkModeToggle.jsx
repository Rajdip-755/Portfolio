import { useEffect, useState } from 'react';

export default function DarkModeToggle() {
  const [darkMode, setDarkMode] = useState(() => {
    const storedTheme = localStorage.getItem('theme');
    return storedTheme ? storedTheme === 'dark' : true; // default to dark
  });

  useEffect(() => {
    const root = document.body;
    if (darkMode) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      style={{
        position: 'fixed',
        top: '1rem',
        right: '1rem',
        padding: '0.5rem 1rem',
        borderRadius: '999px',
        background: darkMode ? '#facc15' : '#1f2937',
        color: darkMode ? '#000' : '#fff',
        border: 'none',
        cursor: 'pointer',
        zIndex: 1000,
        fontSize: '1rem',
        transition: 'all 0.3s ease',
      }}
    >
      {darkMode ? '☀️ Light' : '🌙 Dark'}
    </button>
  );
}
