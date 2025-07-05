
document.addEventListener("DOMContentLoaded", () => {
  const selector = document.getElementById("langSelect");

  if (!selector) return; // Evita erro se o seletor não existir

  function updateLanguage(langData, lang) {
    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.getAttribute("data-i18n");
      if (langData[lang] && langData[lang][key]) {
        el.textContent = langData[lang][key];
      }
    });
  }

  fetch("lang.json")
    .then(res => res.json())
    .then(langData => {
      updateLanguage(langData, selector.value);
      selector.addEventListener("change", e => {
        updateLanguage(langData, e.target.value);
      });
    })
    .catch(err => console.error("Erro ao carregar lang.json:", err));
});
