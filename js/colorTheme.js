document.addEventListener("DOMContentLoaded", function() {
  const currentTheme = localStorage.getItem('theme');
  
  if (!currentTheme) {
      applySystemColorScheme();
  } else {
      document.documentElement.setAttribute('data-theme', currentTheme);
      changeBtnIcon(currentTheme);
  }
  
  function applySystemColorScheme() {
      const colorScheme = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

      if (colorScheme === 'dark') {
          document.documentElement.setAttribute('data-theme', 'dark');
      } else {
          document.documentElement.setAttribute('data-theme', 'light');
      }

      changeBtnIcon(colorScheme);
  }

  function changeBtnIcon(theme) {
      const btnIcon = document.querySelector('.btn__toggle__theme span');
      
      if (theme === 'dark') {
          btnIcon.classList.remove('la-moon');
          btnIcon.classList.add('la-sun');
      } else {
          btnIcon.classList.remove('la-sun');
          btnIcon.classList.add('la-moon');
      }
  }

  const themeToggleBtn = document.querySelector('.btn__toggle__theme');

  function toggleTheme() {
      const currentTheme = localStorage.getItem('theme');

      if (currentTheme === 'light') {
          document.documentElement.setAttribute('data-theme', 'dark');
          localStorage.setItem('theme', 'dark');
          changeBtnIcon('dark');
      } else {
          document.documentElement.setAttribute('data-theme', 'light');
          localStorage.setItem('theme', 'light');
          changeBtnIcon('light');
      }      
  }

  themeToggleBtn.addEventListener('click', toggleTheme);
  
  // window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', applySystemColorScheme);
});
