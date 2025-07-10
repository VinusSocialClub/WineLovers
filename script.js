
const translations = {
  en: {
    header_home: "Home",
    header_shop: "Shop",
    header_videos: "Videos",
    header_articles: "Articles",
    hero_title: "WINE ENTHUSIASTS, REJOICE!",
    hero_subtitle: "Uncork the joys of wine and the vine with Vinus Social Club",
    shop_button: "SHOP NOW",
    card1_title: "SHOP WINE",
    card1_text: "Explore our curated selection of fine wines.",
    card2_title: "WATCH VIDEOS",
    card2_text: "Sip, swirl, and smile with our fun, informative wine videos.",
    card3_title: "READ ARTICLES",
    card3_text: "Get the latest grape on all things wine with our articles.",
    video_wine_education: "Wine Education",
    video_wine_tasting: "Wine Tasting",
    video_wine_tourism: "Wine Tourism",
    video_vinus_partys: "Vinus Partys",
    watch_button: "WATCH",
    shop_title: "Shop Section",
    shop_description: "Discover our exclusive wines, curated packs, and unique experiences.",
    back_home: "HOMEPAGE"
  },
  pt: {
    header_home: "Início",
    header_shop: "Loja",
    header_videos: "Vídeos",
    header_articles: "Artigos",
    hero_title: "ENTUSIASTAS DO VINHO, ALEGREM-SE!",
    hero_subtitle: "Desfrute das alegrias do vinho com o Vinus Social Club",
    shop_button: "COMPRAR",
    card1_title: "COMPRAR VINHO",
    card1_text: "Explore a nossa seleção exclusiva de vinhos.",
    card2_title: "VER VÍDEOS",
    card2_text: "Saboreie e divirta-se com os nossos vídeos informativos sobre vinho.",
    card3_title: "LER ARTIGOS",
    card3_text: "Fique a par de tudo sobre vinhos com os nossos artigos.",
    video_wine_education: "Educação sobre Vinho",
    video_wine_tasting: "Prova de Vinhos",
    video_wine_tourism: "Enoturismo",
    video_vinus_partys: "Festas Vinus",
    watch_button: "VER",
    shop_title: "Seção da Loja",
    shop_description: "Descubra os nossos vinhos exclusivos, packs especiais e experiências únicas.",
    back_home: "PÁGINA INICIAL"
  },
  fr: {
    header_home: "Accueil",
    header_shop: "Boutique",
    header_videos: "Vidéos",
    header_articles: "Articles",
    hero_title: "AMATEURS DE VIN, RÉJOUISEZ-VOUS !",
    hero_subtitle: "Savourez les plaisirs du vin avec le Vinus Social Club",
    shop_button: "ACHETER",
    card1_title: "ACHETER DU VIN",
    card1_text: "Découvrez notre sélection de vins raffinés.",
    card2_title: "REGARDER LES VIDÉOS",
    card2_text: "Appréciez nos vidéos informatives et amusantes sur le vin.",
    card3_title: "LIRE DES ARTICLES",
    card3_text: "Restez informé sur le vin avec nos articles.",
    video_wine_education: "Éducation sur le vin",
    video_wine_tasting: "Dégustation de vin",
    video_wine_tourism: "Tourisme viticole",
    video_vinus_partys: "Fêtes Vinus",
    watch_button: "REGARDER",
    shop_title: "Section Boutique",
    shop_description: "Découvrez nos vins exclusifs, nos packs soignés et des expériences uniques.",
    back_home: "PAGE D’ACCUEIL"
  },
  de: {
    header_home: "Startseite",
    header_shop: "Shop",
    header_videos: "Videos",
    header_articles: "Artikel",
    hero_title: "WEINLIEBHABER, FREUT EUCH!",
    hero_subtitle: "Entkorke die Freuden des Weins mit dem Vinus Social Club",
    shop_button: "JETZT KAUFEN",
    card1_title: "WEIN KAUFEN",
    card1_text: "Entdecke unsere kuratierte Auswahl an Weinen.",
    card2_title: "VIDEOS ANSEHEN",
    card2_text: "Genieße informative und unterhaltsame Videos über Wein.",
    card3_title: "ARTIKEL LESEN",
    card3_text: "Bleib auf dem Laufenden mit unseren spannenden Artikeln über Wein.",
    video_wine_education: "Weinbildung",
    video_wine_tasting: "Weinverkostung",
    video_wine_tourism: "Weintourismus",
    video_vinus_partys: "Vinus-Partys",
    watch_button: "ANSCHAUEN",
    shop_title: "Shop Bereich",
    shop_description: "Entdecken Sie unsere exklusiven Weine, kuratierte Pakete und besondere Erlebnisse.",
    back_home: "STARTSEITE"
  }
};

document.getElementById("langSelect").addEventListener("change", function () {
  const lang = this.value;
  localStorage.setItem("preferredLanguage", lang);

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem("preferredLanguage") || "en";
  document.getElementById("langSelect").value = savedLang;

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (translations[savedLang] && translations[savedLang][key]) {
      el.textContent = translations[savedLang][key];
    }
  });
});
