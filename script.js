
document.addEventListener("DOMContentLoaded", () => {
  const langData = JSON.parse(document.getElementById("lang-data").textContent);
  const selector = document.getElementById("langSelect");

  function updateLanguage(lang) {
    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.getAttribute("data-i18n");
      if (langData[lang] && langData[lang][key]) {
        el.textContent = langData[lang][key];
      }
    });
  }

  selector.addEventListener("change", e => {
    const lang = e.target.value;
    updateLanguage(lang);
  });

  // Load default language
  updateLanguage(selector.value);
});
