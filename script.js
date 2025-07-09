const translations = {
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
    "card3_text": "Get the latest grape on all things wine with our articles.",
    "video_wine_education": "Wine Education",
    "video_wine_tasting": "Wine Tasting",
    "video_wine_tourism": "Wine Tourism",
    "video_vinus_partys": "Vinus Partys",
    "watch_button": "WATCH",
    "videos_title": "Videos Section",
    "videos_description": "Choose a theme to explore our video content.",
    "partys_description": "Relive the best moments of Vinus parties with our vibrant videos.",
    "education_description": "Discover wine tips, curiosities and knowledge in our educational videos.",
    "tourism_description": "Join our travels and explore the finest wine regions with us.",
    "tasting_description": "Learn and enjoy the art of wine tasting with our exclusive clips."
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
    "card3_text": "Fique a par de tudo sobre vinhos com os nossos artigos.",
    "video_wine_education": "Educação sobre Vinho",
    "video_wine_tasting": "Prova de Vinhos",
    "video_wine_tourism": "Enoturismo",
    "video_vinus_partys": "Festas Vinus",
    "watch_button": "VER",
    "videos_title": "Secção de Vídeos",
    "videos_description": "Escolha um tema para explorar o nosso conteúdo em vídeo.",
    "partys_description": "Revive os melhores momentos das festas Vinus com os nossos vídeos vibrantes.",
    "education_description": "Descobre dicas, curiosidades e conhecimento vínico nos nossos vídeos educativos.",
    "tourism_description": "Acompanha as nossas viagens e explorações pelas melhores regiões vinícolas.",
    "tasting_description": "Aprende e aprecia a arte da prova de vinhos com os nossos vídeos exclusivos."
  },
  "fr": {
    "header_home": "Accueil",
    "header_shop": "Boutique",
    "header_videos": "Vidéos",
    "header_articles": "Articles",
    "hero_title": "AMATEURS DE VIN, RÉJOUISEZ-VOUS !",
    "hero_subtitle": "Savourez les plaisirs du vin avec le Vinus Social Club",
    "shop_button": "ACHETER",
    "card1_title": "ACHETER DU VIN",
    "card1_text": "Découvrez notre sélection de vins raffinés.",
    "card2_title": "REGARDER LES VIDÉOS",
    "card2_text": "Appréciez nos vidéos informatives et amusantes sur le vin.",
    "card3_title": "LIRE DES ARTICLES",
    "card3_text": "Restez informé sur le vin avec nos articles.",
    "video_wine_education": "Éducation sur le vin",
    "video_wine_tasting": "Dégustation de vin",
    "video_wine_tourism": "Tourisme viticole",
    "video_vinus_partys": "Fêtes Vinus",
    "watch_button": "REGARDER",
    "videos_title": "Section Vidéos",
    "videos_description": "Choisissez un thème pour explorer nos vidéos.",
    "partys_description": "Revivez les meilleurs moments des fêtes Vinus avec nos vidéos animées.",
    "education_description": "Découvrez des conseils et des faits intéressants sur le vin dans nos vidéos éducatives.",
    "tourism_description": "Suivez nos voyages à travers les plus belles régions viticoles.",
    "tasting_description": "Apprenez et savourez l'art de la dégustation de vin avec nos vidéos exclusives."
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
    "card1_text": "Entdecke unsere kuratierte Auswahl an Weinen.",
    "card2_title": "VIDEOS ANSEHEN",
    "card2_text": "Genieße informative und unterhaltsame Videos über Wein.",
    "card3_title": "ARTIKEL LESEN",
    "card3_text": "Bleib auf dem Laufenden mit unseren spannenden Artikeln über Wein.",
    "video_wine_education": "Weinbildung",
    "video_wine_tasting": "Weinverkostung",
    "video_wine_tourism": "Weintourismus",
    "video_vinus_partys": "Vinus-Partys",
    "watch_button": "ANSCHAUEN",
    "videos_title": "Videoabschnitt",
    "videos_description": "Wähle ein Thema, um unsere Videoinhalte zu entdecken.",
    "partys_description": "Erlebe die besten Momente der Vinus-Partys mit unseren mitreißenden Videos.",
    "education_description": "Entdecke Tipps, Kuriositäten und Weinwissen in unseren Lehrvideos.",
    "tourism_description": "Begleite uns auf Reisen durch die besten Weinregionen.",
    "tasting_description": "Lerne und genieße die Kunst der Weinverkostung mit unseren exklusiven Clips."
  }
};


document.getElementById("langSelect").addEventListener("change", function () {
  const lang = this.value;
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });
});

// Tradução inicial ao carregar a página
document.addEventListener("DOMContentLoaded", function () {
  const initialLang = document.getElementById("langSelect").value;
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (translations[initialLang] && translations[initialLang][key]) {
      el.textContent = translations[initialLang][key];
    }
  });
});
