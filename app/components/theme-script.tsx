export function ThemeScript() {
  const themeScript = `
    (function() {
      try {
        const theme = localStorage.getItem('theme') || 'system';
        const root = document.documentElement;
        
        if (theme === 'dark') {
          root.classList.add('dark');
        } else if (theme === 'light') {
          root.classList.remove('dark');
        } else {
          // system
          const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
          if (isDark) {
            root.classList.add('dark');
          } else {
            root.classList.remove('dark');
          }
        }
      } catch (e) {}
    })();
  `;

  return <script dangerouslySetInnerHTML={{ __html: themeScript }} />;
}
