const debug = (false) ? console : null;

let prefersDark = matchMedia('(prefers-color-scheme: dark)');
prefersDark.addEventListener('change', event => loadTheme());

function setTheme(theme) {
  if (theme == 'auto') {
    try { localStorage.removeItem('theme'); }
    catch (err) { debug?.warn('unable to unset theme'); }
    loadTheme(null);
  } else {
    try { localStorage.setItem('theme', theme); }
    catch (err) { debug?.warn('unable to set theme'); }
    applyTheme(theme);
  }
}

function getTheme() {
  return localStorage.getItem('theme') || 'auto';
}

function loadTheme(theme) {
  try { theme = localStorage.getItem('theme'); }
  catch (err) { debug?.warn('unable to load theme'); }
  theme ??= (prefersDark.matches) ? 'dark' : 'light';
  applyTheme(theme);
}

function applyTheme(theme) {
  document.documentElement.className = theme;
}

loadTheme();

export { getTheme, setTheme }
