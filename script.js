
document.addEventListener("DOMContentLoaded", () => {
  const selector = document.getElementById("langSelect");
  if (!selector) return;

  const langData = {
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
      "shop_title": "Our Wine Collection",
      "shop_description": "Browse and discover your next favorite bottle.",
      "shop_back_button": "Back to Home",
      "videos_title": "Videos Section",
      "videos_description": "Fun and educational wine content coming soon.",
      "videos_back_button": "Back to Home",
      "articles_title": "Articles Section",
      "articles_description": "Read about wine trends, tips and more.",
      "articles_back_button": "Back to Home"
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
      "shop_title": "A Nossa Coleção de Vinhos",
      "shop_description": "Explora e descobre a tua próxima garrafa favorita.",
      "shop_back_button": "Voltar ao Início",
      "videos_title": "Secção de Vídeos",
      "videos_description": "Conteúdos divertidos e educativos sobre vinho brevemente.",
      "videos_back_button": "Voltar ao Início",
      "articles_title": "Secção de Artigos",
      "articles_description": "Lê sobre tendências do vinho, dicas e muito mais.",
      "articles_back_button": "Voltar ao Início"
    }
  };

  function updateLanguage(lang) {
    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.getAttribute("data-i18n");
      if (langData[lang] && langData[lang][key]) {
        el.textContent = langData[lang][key];
      }
    });
  }

  selector.addEventListener("change", e => {
    updateLanguage(e.target.value);
  });

  updateLanguage(selector.value);
});
