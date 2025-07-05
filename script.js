
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
    const lang = {
  "en": {
    "header_home": "Home",
    "header_shop": "Shop",
    "header_videos": "Videos",
    "header_articles": "Articles",
    "hero_title": "WINE ENTHUSIASTS, REJOICE!",
    "hero_subtitle": "Uncork the joys of wine and the vine with Vinus Social Club",
    "shop_button": "SHOP NOW",
    "card1_title": "SHOP WINE",
    "card1_text": "Explore our curated selection of fine wines.",
    "card2_title": "WATCH VIDEOS",
    "card2_text": "Sip, swirl, and smile with our fun, informative wine videos.",
    "card3_title": "READ ARTICLES",
    "card3_text": "Get the latest grape on all things wine with our articles."
  },
  "pt": {
    "header_home": "Início",
    "header_shop": "Loja",
    "header_videos": "Vídeos",
    "header_articles": "Artigos",
    "hero_title": "ENTUSIASTAS DO VINHO, ALEGREM-SE!",
    "hero_subtitle": "Desfrute das alegrias do vinho com o Vinus Social Club",
    "shop_button": "COMPRAR",
    "card1_title": "COMPRAR VINHO",
    "card1_text": "Explore a nossa seleção exclusiva de vinhos.",
    "card2_title": "VER VÍDEOS",
    "card2_text": "Saboreie e divirta-se com os nossos vídeos informativos sobre vinho.",
    "card3_title": "LER ARTIGOS",
    "card3_text": "Fique a par de tudo sobre vinhos com os nossos artigos."
  },
  "fr": {
    "header_home": "Accueil",
    "header_shop": "Boutique",
    "header_videos": "Vidéos",
    "header_articles": "Articles",
    "hero_title": "LES AMOUREUX DU VIN, RÉJOUISSEZ-VOUS!",
    "hero_subtitle": "Savourez les plaisirs du vin avec le Vinus Social Club",
    "shop_button": "ACHETER",
    "card1_title": "ACHETER DU VIN",
    "card1_text": "Découvrez notre sélection raffinée de vins.",
    "card2_title": "REGARDER DES VIDÉOS",
    "card2_text": "Savourez et apprenez avec nos vidéos sur le vin.",
    "card3_title": "LIRE DES ARTICLES",
    "card3_text": "Restez informé avec nos articles sur le vin.",
    "shop_title": "Notre Collection de Vins",
    "shop_description": "Parcourez et découvrez votre prochaine bouteille préférée.",
    "shop_back_button": "Retour à l'accueil",
    "videos_title": "Section Vidéos",
    "videos_description": "Contenu ludique et éducatif sur le vin bientôt disponible.",
    "videos_back_button": "Retour à l'accueil",
    "articles_title": "Section Articles",
    "articles_description": "Lisez les dernières tendances, conseils et plus.",
    "articles_back_button": "Retour à l'accueil"
  },
  "de": {
    "header_home": "Startseite",
    "header_shop": "Shop",
    "header_videos": "Videos",
    "header_articles": "Artikel",
    "hero_title": "WEINLIEBHABER, FREUT EUCH!",
    "hero_subtitle": "Entkorke die Freuden des Weins mit dem Vinus Social Club",
    "shop_button": "JETZT KAUFEN",
    "card1_title": "WEIN KAUFEN",
    "card1_text": "Entdecke unsere kuratierte Auswahl an Spitzenweinen.",
    "card2_title": "VIDEOS ANSEHEN",
    "card2_text": "Erfahre mehr über Wein mit unseren Videos.",
    "card3_title": "ARTIKEL LESEN",
    "card3_text": "Bleibe mit unseren Artikeln über Wein auf dem Laufenden.",
    "shop_title": "Unsere Weinkollektion",
    "shop_description": "Entdecke deine nächste Lieblingsflasche.",
    "shop_back_button": "Zurück zur Startseite",
    "videos_title": "Video-Bereich",
    "videos_description": "Bald verfügbar: unterhaltsame und lehrreiche Weininhalte.",
    "videos_back_button": "Zurück zur Startseite",
    "articles_title": "Artikel-Bereich",
    "articles_description": "Lies über Weintrends, Tipps und mehr.",
    "articles_back_button": "Zurück zur Startseite"
  }
};document.addEventListener("DOMContentLoaded", () => {
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
