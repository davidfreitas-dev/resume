$(function() {
  const currentTheme = localStorage.getItem('theme');
  
  if (!currentTheme) {
      applySystemColorScheme();
  } else {
      $('html').attr('data-theme', currentTheme);
      changeBtnIcon(currentTheme);
  }
  
  function applySystemColorScheme() {
      const colorScheme = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

      if (colorScheme === 'dark') {
          $('html').attr('data-theme', 'dark');
      } else {
          $('html').attr('data-theme', 'light');
      }

      changeBtnIcon(colorScheme);
  }

  function changeBtnIcon(theme) {
      const btnIcon = $('.btn__toggle__theme span');
      
      if (theme === 'dark') {
          btnIcon.removeClass('la-moon').addClass('la-sun');
      } else {
          btnIcon.removeClass('la-sun').addClass('la-moon');
      }
  }

  const themeToggleBtn = $('.btn__toggle__theme');

  function toggleTheme() {
      const currentTheme = localStorage.getItem('theme');

      if (currentTheme === 'light') {
          $('html').attr('data-theme', 'dark');
          localStorage.setItem('theme', 'dark');
          changeBtnIcon('dark');
      } else {
          $('html').attr('data-theme', 'light');
          localStorage.setItem('theme', 'light');
          changeBtnIcon('light');
      }      
  }

  themeToggleBtn.on('click', toggleTheme);
  
  // window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', applySystemColorScheme);
});
