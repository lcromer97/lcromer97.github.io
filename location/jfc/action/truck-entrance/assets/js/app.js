const languageSwitcher = document.getElementById("languageSwitcher");

async function loadLanguage(lang) {
  const response = await fetch(`assets/language/${lang}.json`);
  const translations = await response.json();

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (translations[key]) {
      el.textContent = translations[key];
    }
  });

  document.documentElement.lang = lang;
}

languageSwitcher.addEventListener("change", e => {
  loadLanguage(e.target.value);
});

// Load default language
loadLanguage("en");