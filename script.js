const droplets = document.querySelector(".droplets");
const form = document.querySelector("#fluForm");
const note = document.querySelector("#formNote");
const languageButtons = document.querySelectorAll(".lang-button");

const translations = {
  cs: {
    metaTitle: "Adoptuj Chřipku",
    brand: "Adoptuj Chřipku",
    navHome: "Home",
    navAbout: "About",
    navOrder: "Objednat",
    eyebrow: "Sezónní mazlíček pro odvážné domácnosti",
    heroTitle: "Adoptuj Chřipku",
    heroBody:
      "Malá zelená společnice, která se drží nablízku. Neštěká, nežere boty a vždycky přinese důvod zůstat doma pod dekou.",
    heroPrimary: "Chci chřipku až domů",
    heroSecondary: "Zjistit nesmysly",
    heroAlt: "Veselá zelená chřipka v doručovací krabici",
    cardOneTitle: "Doma hned",
    cardOneBody:
      "Vyberete intenzitu, přidáte kapesníčky a náš kurýr zazvoní přesně ve chvíli, kdy jste si chtěli dát klidný víkend.",
    cardTwoTitle: "Silná vazba",
    cardTwoBody:
      "Chřipka je věrná. Drží se člověka, odpovídá na každý plán a nikdy neposílá formální omluvenku.",
    cardThreeTitle: "Bez papírů",
    cardThreeBody:
      "Žádný rodokmen, žádné očkovací průkazy, jen měkká deka, čaj a absurdní pocit, že tohle je opravdu landing page.",
    season: "Období: listopad až kdykoliv se to nehodí",
    aboutEyebrow: "About",
    aboutTitle: "Co vlastně adoptujete?",
    aboutBody:
      "Satirický produkt, který neexistuje, ale tváří se podezřele přesvědčivě. Každá chřipka je ručně imaginární, lokálně nepěstovaná a dodává se s doporučenou dávkou humoru.",
    stickersAlt: "Tři veselé ilustrace zelené chřipky, balíčku a čaje",
    orderEyebrow: "Kontakt / porta",
    orderTitle: "Objednejte si chřipku až domů",
    orderBody:
      "Formulář je samozřejmě parodie. Po odeslání vám nic nepřijde, což je pravděpodobně nejlepší možný zdravotní výsledek.",
    nameLabel: "Jméno adoptivního rodiče",
    namePlaceholder: "Např. Pan Kapesníček",
    addressLabel: "Doručovací adresa",
    addressPlaceholder: "Gauč, deka, levý roh",
    packageLabel: "Balíček chřipky",
    packageEmpty: "Vyberte variantu",
    packageOne: "Lehké popotahování",
    packageTwo: "Rodinný víkend u čaje",
    packageThree: "Premium: ruším všechny plány",
    extrasLegend: "Doplňky do pelechu",
    extraOne: "Kapesníčky v nekonečném režimu",
    extraTwo: "Čaj, citron a dramatické vzdychání",
    submit: "Odeslat adopci",
    footer: "Satira. Neobjednávejte choroby, objednejte si radši odpočinek.",
    fallbackName: "Adoptivní hrdina",
    fallbackPackage: "tajemný balíček",
    confirmation:
      '{name}, vaše adopce "{pack}" byla z hygienických důvodů okamžitě zrušena. Gratulujeme ke zdraví.',
  },
  ja: {
    metaTitle: "インフルエンザを養子に",
    brand: "インフル養子センター",
    navHome: "ホーム",
    navAbout: "詳細",
    navOrder: "注文",
    eyebrow: "勇敢な家庭のための季節限定ペット",
    heroTitle: "インフルエンザを養子に",
    heroBody:
      "小さな緑の相棒は、いつも近くにいます。吠えず、靴もかじらず、家で毛布にくるまる理由だけを届けます。",
    heroPrimary: "家までインフルを届けて",
    heroSecondary: "ばかばかしさを見る",
    heroAlt: "配送箱に入った陽気な緑のインフルエンザ",
    cardOneTitle: "すぐ家に",
    cardOneBody:
      "強さを選び、ティッシュを追加すると、静かな週末を始めようとした瞬間に配達員が鳴らします。",
    cardTwoTitle: "強いきずな",
    cardTwoBody:
      "インフルは忠実です。人にぴったり寄り添い、予定すべてに返事をし、正式な欠席届は送りません。",
    cardThreeTitle: "書類なし",
    cardThreeBody:
      "血統書も予防接種証明もなし。柔らかい毛布、お茶、そしてこれが本当にランディングページだという不条理だけ。",
    season: "シーズン: 11月から、都合が悪い時ならいつでも",
    aboutEyebrow: "詳細",
    aboutTitle: "何を養子にするの？",
    aboutBody:
      "存在しないのに妙に説得力のある風刺商品です。各インフルは手作業で想像され、地元では栽培されず、推奨量のユーモア付きで届きます。",
    stickersAlt: "緑のインフル、箱、お茶の三つの楽しいイラスト",
    orderEyebrow: "連絡先 / ポータル",
    orderTitle: "インフルエンザを家まで注文",
    orderBody:
      "このフォームはもちろん冗談です。送信しても何も届きません。それがおそらく最高の健康結果です。",
    nameLabel: "養親の名前",
    namePlaceholder: "例: ティッシュさん",
    addressLabel: "配送先住所",
    addressPlaceholder: "ソファ、毛布、左の角",
    packageLabel: "インフルのパッケージ",
    packageEmpty: "種類を選択",
    packageOne: "軽い鼻すすり",
    packageTwo: "お茶付き家族週末",
    packageThree: "プレミアム: 全予定キャンセル",
    extrasLegend: "寝床の追加品",
    extraOne: "無限モードのティッシュ",
    extraTwo: "お茶、レモン、劇的なため息",
    submit: "養子縁組を送信",
    footer: "風刺です。病気を注文せず、休息を注文しましょう。",
    fallbackName: "養子縁組の勇者",
    fallbackPackage: "謎のパッケージ",
    confirmation:
      '{name}さん、あなたの「{pack}」の養子縁組は衛生上の理由で即時キャンセルされました。健康おめでとうございます。',
  },
  tlh: {
    metaTitle: "ropHom yI'ang",
    brand: "ropHom yI'ang",
    navHome: "juH",
    navAbout: "De'",
    navOrder: "yIje'",
    eyebrow: "qorDu' yoHvaD DIS poH Saj",
    heroTitle: "ropHom yI'ang",
    heroBody:
      "boch 'ej SuD SajHomvam. SumtaH, vIngbe', waq Sopbe', 'ej reH juHDaq bIrmoHmeH meq nob.",
    heroPrimary: "juHwIjDaq ropHom yIngeH",
    heroSecondary: "Doghghach yIlegh",
    heroAlt: "ngeHmeH ngaSwI'Daq ropHom SuD Quch",
    cardOneTitle: "SIbI' juHDaq",
    cardOneBody:
      "HoS DawIv, DIr SoDmeH navmey Dachel, vaj leS jaj DanejtaHvIS lojmIt qIp ngeHwI'.",
    cardTwoTitle: "rarghach HoS",
    cardTwoBody:
      "matlh ropHom. nuv tlhejtaH, Hoch nab jang, 'ej not tlhIngan Hol DIvI' HItlh ngeH.",
    cardThreeTitle: "navmey Hutlh",
    cardThreeBody:
      "tuq De' ghajbe', Hergh QIn ghajbe'. neH bIQ'a' tun, Dargh, 'ej landing pagevam teHlaw'qu' Doghqu'.",
    season: "poH: november, pagh not poH QaQ",
    aboutEyebrow: "De'",
    aboutTitle: "nuq Da'angtaH?",
    aboutBody:
      "Dogh Dochvam: tu'lu'be', 'ach teHlaw'. ropHom Hoch qellu', naDev nenchoHbe', 'ej HaghmeH luch noblu'.",
    stickersAlt: "ropHom SuD, ngaSwI', Dargh je mIllogh wej",
    orderEyebrow: "rI' / lojmIt",
    orderTitle: "juHlIjDaq ropHom yIje'",
    orderBody:
      "Formvam lut tlhaQ neH. DangeHchugh pagh DapIHlaH; ropHa'choHmeH wanI' Dun law' Hoch Dun puS.",
    nameLabel: "qorghwI' pong",
    namePlaceholder: "ghItlh: joH nav",
    addressLabel: "ngeHmeH Daq",
    addressPlaceholder: "quS'a', DIr, poS Dop",
    packageLabel: "ropHom ngaSwI'",
    packageEmpty: "Segh yIwIv",
    packageOne: "ghIch wab mach",
    packageTwo: "qorDu' Dargh jajmey",
    packageThree: "Premium: Hoch nabmey qIl",
    extrasLegend: "QongDaq latlh Dochmey",
    extraOne: "not mev navmey",
    extraTwo: "Dargh, na'ran, 'ej tlhIj wab'a'",
    submit: "'angmeH yIngeH",
    footer: "lut tlhaQ neH. rop yIje'Qo'; leS yIje'.",
    fallbackName: "qorghwI' Sub",
    fallbackPackage: "ngaSwI' pegh",
    confirmation:
      '{name}, "{pack}" Da\'angmeH Qu\' teqpu\' Say\'moHmeH ra\'wI\'. pIvmo\' majQa\'.',
  },
  "ms-jawi": {
    metaTitle: "امبيل سليسما سباݢاي انق اڠکت",
    brand: "ادوفسي سليسما",
    navHome: "لامن اوتاما",
    navAbout: "تنتڠ",
    navOrder: "ڤسن",
    eyebrow: "هايواݢ ڤليهارا موسيمي اونتوق رومه يڠ براني",
    heroTitle: "امبيل سليسما سباݢاي انق اڠکت",
    heroBody:
      "کوان کچيل هيجاو اين سنتياس دکت. دياد تيدق مڽالق، تيدق مڠوڽه کاسوت، دان سنتياس ممباوا السبب اونتوق دودوق دي رومه باوه سليموت.",
    heroPrimary: "هنتار سليسما ک رومه",
    heroSecondary: "ليهت کلاکرنيا",
    heroAlt: "سليسما هيجاو يڠ چريا دالم کوتيق ڤڠهنترن",
    cardOneTitle: "تروس ک رومه",
    cardOneBody:
      "ڤيليه تاهاڤ، تمبه تيسو، دان کورير کامي اکن منekan لوچڠ ڤد ماس اندا هندق برهوجوڠ ميڠݢو دڠن تنڠ.",
    cardTwoTitle: "ايکتن کوات",
    cardTwoBody:
      "سليسما اين ستيا. دياد منمڤل ڤد مانوسيا، منجاوب ستيڤ رانچڠن، دان تيدق ڤرنه مڠهنتر سورات معاف رسمي.",
    cardThreeTitle: "تنڤا کاغذ",
    cardThreeBody:
      "تيادا سلسيله، تيادا سيجيل واکسين، هاڽ سليموت لمبوت، چاي، دان راس اݢن يڠ اين ممڠ لامن ڤندراتن.",
    season: "موسيم: نوۏيمبر اتاو بيلا-بيلا ماس يڠ تيدق سسواي",
    aboutEyebrow: "تنتڠ",
    aboutTitle: "اڤاکه يڠ اندا امبيل؟",
    aboutBody:
      "اين ڤرودوک ساتيرا يڠ تيدق وجود، تتاڤي نامڤق مشکوککن مڠقنعکن. ستيڤ سليسما دبوات سخارا خيالي، تيدق دتانم ستمڤت، دان دداتڠکن دڠن دوس هومور يڠ دچادڠکن.",
    stickersAlt: "تيݢ ايلوستراسي چريا: سليسما هيجاو، کوتيق، دان چاي",
    orderEyebrow: "کونتک / ڤورتل",
    orderTitle: "ڤسن سليسما ک رومه",
    orderBody:
      "بورڠ اين سوده تنتو ڤارودي. سلڤس دهنتر، تيادا اڤ-اڤ اکن سمڤاي کڤد اندا؛ ايتو موڠکين کڤوتوسن کصيحتن ترباءيق.",
    nameLabel: "نام ايبو باڤ ادوفسي",
    namePlaceholder: "چونتوه: توان تيسو",
    addressLabel: "علامت ڤڠهنترن",
    addressPlaceholder: "سوفا، سليموت، سوده کيري",
    packageLabel: "ڤاکيج سليسما",
    packageEmpty: "ڤيليه ڤيليهن",
    packageOne: "هيدوڠ براير ريڠن",
    packageTwo: "هوجوڠ ميڠݢو برسام کلوارݢ دان چاي",
    packageThree: "ڤريميوم: ممباتلکن سموا رانچڠن",
    extrasLegend: "تمبهن اونتوق تمڤت ربه",
    extraOne: "تيسو دالم مود تنڤا هنتي",
    extraTwo: "چاي، ليمون، دان مڠله دراماتيک",
    submit: "هنتار ادوفسي",
    footer: "ساتيرا. جاڠن ڤسن ڤڽاکيت؛ ڤسنله ريحت.",
    fallbackName: "ويرا ادوفسي",
    fallbackPackage: "ڤاکيج رهسيا",
    confirmation:
      '{name}، ادوفسي "{pack}" اندا تلح دباتلکن سرتا-مرتا اتس سبب کبرسيهن. تهنيه کران کصيحتن اندا.',
  },
  groot: {
    metaTitle: "Já jsem Groot",
    brand: "Já jsem Groot",
    navHome: "Já jsem Groot",
    navAbout: "Já jsem Groot?",
    navOrder: "Já jsem Groot!",
    eyebrow: "Já jsem Groot. Já jsem Groot.",
    heroTitle: "Já jsem Groot",
    heroBody:
      "Já jsem Groot. Já jsem Groot, já jsem Groot. Já jsem Groot... já jsem Groot.",
    heroPrimary: "Já jsem Groot až domů",
    heroSecondary: "Já jsem Groot?",
    heroAlt: "Já jsem Groot v krabici",
    cardOneTitle: "Já jsem Groot hned",
    cardOneBody:
      "Já jsem Groot, já jsem Groot. Já jsem Groot přesně ve chvíli, kdy já jsem Groot.",
    cardTwoTitle: "Já jsem Groot",
    cardTwoBody:
      "Já jsem Groot. Já jsem Groot u člověka, já jsem Groot u plánů, já jsem Groot bez omluvenky.",
    cardThreeTitle: "Já jsem Groot bez papírů",
    cardThreeBody:
      "Já jsem Groot, já jsem Groot, jen deka, čaj a hluboké přesvědčení, že já jsem Groot.",
    season: "Období: Já jsem Groot až kdykoliv",
    aboutEyebrow: "Já jsem Groot",
    aboutTitle: "Co vlastně Grootujete?",
    aboutBody:
      "Já jsem Groot je satirický produkt, který neexistuje, ale velmi sebevědomě říká: já jsem Groot.",
    stickersAlt: "Já jsem Groot, já jsem Groot a já jsem Groot",
    orderEyebrow: "Já jsem Groot / porta",
    orderTitle: "Objednejte si Groota až domů",
    orderBody:
      "Formulář je samozřejmě Groot. Po odeslání vám nic nepřijde, protože já jsem Groot.",
    nameLabel: "Jméno adoptivního Groota",
    namePlaceholder: "Např. Pan Groot",
    addressLabel: "Grootovací adresa",
    addressPlaceholder: "Gauč, deka, levý Groot",
    packageLabel: "Balíček Groot",
    packageEmpty: "Vyberte Groot",
    packageOne: "Já jsem Groot",
    packageTwo: "Já jsem Groot u čaje",
    packageThree: "Premium: Já jsem Groot všechny plány",
    extrasLegend: "Doplňky do Grootu",
    extraOne: "Já jsem Groot v nekonečném režimu",
    extraTwo: "Čaj, citron a dramatické: Já jsem Groot",
    submit: "Odeslat Groota",
    footer: "Satira. Já jsem Groot. Objednejte si radši odpočinek.",
    fallbackName: "Adoptivní Groot",
    fallbackPackage: "tajemný Groot",
    confirmation:
      '{name}, vaše adopce "{pack}" byla okamžitě zrušena. Já jsem Groot. Gratulujeme ke zdraví.',
  },
};

function createDroplets() {
  const count = window.matchMedia("(max-width: 700px)").matches ? 24 : 42;

  for (let index = 0; index < count; index += 1) {
    const droplet = document.createElement("span");
    const size = Math.floor(Math.random() * 34) + 14;
    const drift = Math.floor(Math.random() * 120) - 60;
    const duration = (Math.random() * 10 + 9).toFixed(1);
    const delay = (Math.random() * -18).toFixed(1);

    droplet.className = "droplet";
    droplet.style.setProperty("--size", `${size}px`);
    droplet.style.setProperty("--left", `${Math.random() * 100}%`);
    droplet.style.setProperty("--drift", `${drift}px`);
    droplet.style.setProperty("--duration", `${duration}s`);
    droplet.style.setProperty("--delay", `${delay}s`);
    droplets.append(droplet);
  }
}

function applyLanguage(language) {
  const copy = translations[language] || translations.cs;
  document.documentElement.lang = language;
  document.documentElement.dir = language === "ms-jawi" ? "rtl" : "ltr";
  document.body.dataset.lang = language;
  document.title = copy.metaTitle;
  note.textContent = "";

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    if (copy[key]) {
      element.textContent = copy[key];
    }
  });

  document.querySelectorAll("[data-i18n-attr]").forEach((element) => {
    element.dataset.i18nAttr.split(";").forEach((pair) => {
      const [attribute, key] = pair.split(":");
      if (attribute && key && copy[key]) {
        element.setAttribute(attribute, copy[key]);
      }
    });
  });

  languageButtons.forEach((button) => {
    const active = button.dataset.lang === language;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-pressed", String(active));
  });
}

function handleSubmit(event) {
  event.preventDefault();
  const language = document.body.dataset.lang || "cs";
  const copy = translations[language] || translations.cs;
  const data = new FormData(form);
  const name = data.get("name") || copy.fallbackName;
  const pack = data.get("package") || copy.fallbackPackage;

  note.textContent = copy.confirmation
    .replace("{name}", name)
    .replace("{pack}", pack);
  form.reset();
}

createDroplets();
applyLanguage("cs");
form.addEventListener("submit", handleSubmit);
languageButtons.forEach((button) => {
  button.addEventListener("click", () => applyLanguage(button.dataset.lang));
});
