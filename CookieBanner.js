function CookieBanner(placeholder, templateUrl) {

    var cookieBannerTranslations = {
        "en": {
            "cookie_banner_text": "This website uses cookies to ensure you get the best experience on our website.",
            "learn_more": "Learn More",
            "accept_cookies": "Accept Cookies"
        },
        "cs": {
            "cookie_banner_text": "Tato webová stránka používá soubory cookie, aby zajistila nejlepší zážitek na našich webových stránkách.",
            "learn_more": "Víc se uč",
            "accept_cookies": "Přijímejte soubory cookie"
        },
        "da": {
            "cookie_banner_text": "Denne hjemmeside bruger cookies til at sikre, at du får den bedste oplevelse på vores hjemmeside.",
            "learn_more": "Lær mere",
            "accept_cookies": "Accepter cookies"
        },
        "de": {
            "cookie_banner_text": "Diese Website verwendet Cookies, um sicherzustellen, dass Sie die beste Erfahrung auf unserer Website erhalten.",
            "learn_more": "Weitere Informationen",
            "accept_cookies": "Cookies akzeptieren"
        },
        "el": {
            "cookie_banner_text": "Αυτός ο ιστότοπος χρησιμοποιεί cookies για να διασφαλίσει ότι θα έχετε την καλύτερη εμπειρία στον ιστότοπό μας.",
            "learn_more": "Μάθε περισσότερα",
            "accept_cookies": "Αποδοχή cookies"
        },
        "es": {
            "cookie_banner_text": "Este sitio web utiliza cookies para garantizar que obtenga la mejor experiencia en nuestro sitio web.",
            "learn_more": "Aprende más",
            "accept_cookies": "Aceptar cookies"
        },
        "et": {
            "cookie_banner_text": "See veebisait kasutab küpsiseid, et tagada teile parim kogemus meie veebisaidil.",
            "learn_more": "Lisateave",
            "accept_cookies": "Nõustu küpsistega"
        },
        "fi": {
            "cookie_banner_text": "Tämä verkkosivusto käyttää evästeitä varmistaakseen, että saat parhaan kokemuksen verkkosivustollamme.",
            "learn_more": "Opi lisää",
            "accept_cookies": "Hyväksy evästeet"
        },
        "fr": {
            "cookie_banner_text": "Ce site Web utilise des cookies pour vous assurer la meilleure expérience sur notre site Web.",
            "learn_more": "Pour en savoir plus",
            "accept_cookies": "Accepter les cookies"
        },
        "he": {
            "cookie_banner_text": "אתר זה משתמש בעוגיות כדי להבטיח שתקבל את החוויה הטובה ביותר באתר שלנו.",
            "learn_more": "למד עוד",
            "accept_cookies": "קבל עוגיות"
        },
        "hr": {
            "cookie_banner_text": "Ova web stranica koristi kolačiće kako bi vam osigurala najbolje iskustvo na našoj web stranici.",
            "learn_more": "Uči više",
            "accept_cookies": "Prihvati kolačiće"
        },
        "hu": {
            "cookie_banner_text": "Ez a weboldal cookie-kat használ annak biztosítására, hogy a legjobb élményt kapja weboldalunkon.",
            "learn_more": "Tudj meg többet",
            "accept_cookies": "Cookie-k elfogadása"
        },
        "is": {
            "cookie_banner_text": "Þessi vefsíða notar vafrakökur til að tryggja að þú fáir bestu upplifunina á vefsíðu okkar.",
            "learn_more": "Læra meira",
            "accept_cookies": "Samþykkja smákökur"
        },
        "it": {
            "cookie_banner_text": "Questo sito Web utilizza i cookie per assicurarti di ottenere la migliore esperienza sul nostro sito Web.",
            "learn_more": "Ulteriori informazioni",
            "accept_cookies": "Accetta i cookie"
        },
        "lv": {
            "cookie_banner_text": "Šī vietne izmanto sīkdatnes, lai nodrošinātu, ka jūs iegūstat vislabāko pieredzi mūsu tīmekļa vietnē.",
            "learn_more": "Apgūt vairāk",
            "accept_cookies": "Akceptēt sīkfailus"
        },
        "nb": {
            "cookie_banner_text": "Dette nettstedet bruker informasjonskapsler for å sikre at du får den beste opplevelsen på nettstedet vårt.",
            "learn_more": "Få mer informasjon",
            "accept_cookies": "Godta informasjonskapsler"
        },
        "nl": {
            "cookie_banner_text": "Deze website maakt gebruik van cookies om ervoor te zorgen dat u de beste ervaring op onze website krijgt.",
            "learn_more": "Meer informatie",
            "accept_cookies": "Cookies accepteren"
        },
        "pt": {
            "cookie_banner_text": "Este site usa cookies para garantir que você obtenha a melhor experiência em nosso site.",
            "learn_more": "Saiba Mais",
            "accept_cookies": "Aceitar Cookies"
        },
        "ru": {
            "cookie_banner_text": "Этот веб-сайт использует файлы cookie, чтобы обеспечить вам лучший опыт на нашем веб-сайте.",
            "learn_more": "Подробнее",
            "accept_cookies": "Принять файлы cookie"
        },
        "sk": {
            "cookie_banner_text": "Táto webová stránka používa súbory cookie, aby zabezpečila, že získate čo najlepší zážitok na našich webových stránkach.",
            "learn_more": "Zistiť viac",
            "accept_cookies": "Prijať súbory cookie"
        },
        "sl": {
            "cookie_banner_text": "Ta spletna stran uporablja piškotke, s katerimi vam zagotavljamo najboljšo izkušnjo na naši spletni strani.",
            "learn_more": "Več",
            "accept_cookies": "Sprejmi piškotke"
        },
        "sv": {
            "cookie_banner_text": "Denna webbplats använder cookies för att säkerställa att du får den bästa upplevelsen på vår webbplats.",
            "learn_more": "Lära sig mer",
            "accept_cookies": "Acceptera cookies"
        },
        "uk": {
            "cookie_banner_text": "Цей веб-сайт використовує файли cookie, щоб гарантувати, що ви отримаєте найкращий досвід роботи на нашому веб-сайті.",
            "learn_more": "Дізнатися більше",
            "accept_cookies": "Прийняти файли cookie"
        }
    };

    
    $.get(templateUrl,
        function (template) {
            var language = getBrowserLanguage();
            template = template.replace("{{cookie_banner_text}}", cookieBannerTranslations[language].cookie_banner_text);
            template = template.replace("{{learn_more}}", cookieBannerTranslations[language].learn_more);
            template = template.replace("{{accept_cookies}}", cookieBannerTranslations[language].accept_cookies);
            $(placeholder).html(template);
            $("#btnAcceptCookies").bind("click", function () {
                $(placeholder).hide();
            });
        });
    


    function getBrowserLanguage() {
        var culture = navigator.languages
        ? navigator.languages[0]
        : (navigator.language || navigator.userLanguage);
        return culture.split("-")[0];
    }
}
