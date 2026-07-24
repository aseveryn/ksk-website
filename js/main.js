/* KSK Consulting Group — interactions & i18n */

(function () {
  "use strict";

  /* ── i18n ─────────────────────────────────────────────── */
  const I18N = {
    ka: {
      nav_about: "ჩვენ შესახებ",
      nav_practice: "მიმართულებები",
      nav_services: "მომსახურება",
      nav_team: "გუნდი",
      nav_contact: "კონტაქტი",
      nav_cta: "კონსულტაცია",
      tr_1: "ვმუშაობთ 24/7",
      tr_2: "ინდივიდუალური მიდგომა",
      tr_3: "სრული კონფიდენციალურობა",
      proc_title: "როგორ ვმუშაობთ",
      proc_sub: "სამი მარტივი ნაბიჯი თქვენი საკითხის გადასაჭრელად.",
      pr1_t: "დაგვიკავშირდით",
      pr1_d: "დაგვირეკეთ ან მოგვწერეთ — მოკლედ აღწერეთ თქვენი სიტუაცია.",
      pr2_t: "სამართლებრივი ანალიზი",
      pr2_d: "შევისწავლით საქმეს და შემოგთავაზებთ მოქმედების კონკრეტულ გეგმას.",
      pr3_t: "თქვენი ინტერესების დაცვა",
      pr3_d: "წარმოგადგენთ მოლაპარაკებებში და სასამართლოში — შედეგამდე.",
      band_title: "გჭირდებათ სამართლებრივი დახმარება?",
      band_sub: "დაგვიკავშირდით ნებისმიერ დროს — ვმუშაობთ 24/7.",
      band_cta: "მოგვწერეთ",
      form_name: "სახელი",
      form_phone: "ტელეფონი",
      form_msg: "აღწერეთ თქვენი საკითხი",
      form_send: "გაგზავნა",
      form_success: "მადლობა! თქვენი შეტყობინება გაიგზავნა — მალე დაგიკავშირდებით.",
      form_note: "ან დაგვიკავშირდით პირდაპირ",
      ct_hours: "ღია ვართ 24/7",
      fab_call: "დარეკვა",
      hero_kicker: "იურიდიული კომპანია · თბილისი",
      hero_l1: "თქვენი უფლებები.",
      hero_l2: "ჩვენი საქმე.",
      hero_sub: "სრული სამართლებრივი მხარდაჭერა სამოქალაქო, ადმინისტრაციული და სისხლის სამართლის მიმართულებით — ბიზნესის სტრატეგიული დაგეგმარება და კორპორატიული მხარდაჭერა.",
      hero_cta1: "კონსულტაცია",
      hero_cta2: "მომსახურება",
      strip_1: "სამოქალაქო სამართალი",
      strip_2: "ადმინისტრაციული სამართალი",
      strip_3: "სისხლის სამართალი",
      strip_4: "ბიზნესის იურიდიული აუთსორსი",
      about_title: "კომპანია, რომელიც თქვენს მხარეს დგას",
      about_lead: "KSK Consulting Group არის იურიდიული კომპანია, რომელიც უზრუნველყოფს სრულ სამართლებრივ მხარდაჭერას სამოქალაქო, ადმინისტრაციული და სისხლის სამართლის მიმართულებით, ასევე გთავაზობთ ბიზნესის სტრატეგიულ დაგეგმარებასა და კორპორატიულ მხარდაჭერას.",
      pt1_t: "სასამართლო წარმომადგენლობა",
      pt1_d: "დაცვა და წარმომადგენლობა ყველა ინსტანციის სასამართლოში",
      pt2_t: "ბიზნესის მხარდაჭერა",
      pt2_d: "იურიდიული აუთსორსი და კორპორატიული მომსახურება კომპანიებისთვის",
      pt3_t: "ხელმისაწვდომობა 24/7",
      pt3_d: "ვმუშაობთ შეუსვენებლად — თქვენი საქმე ლოდინს არ ითმენს",
      practice_title: "პრაქტიკის მიმართულებები",
      pa1_t: "სამოქალაქო სამართალი",
      pa1_d: "ქონებრივი და სახელშეკრულებო დავები, ვალდებულებითი სამართალი, ზიანის ანაზღაურება, საოჯახო და მემკვიდრეობის საქმეები.",
      pa2_t: "ადმინისტრაციული სამართალი",
      pa2_d: "დავები ადმინისტრაციულ ორგანოებთან, ლიცენზიები და ნებართვები, წარმომადგენლობა საჯარო დაწესებულებებში.",
      pa3_t: "სისხლის სამართალი",
      pa3_d: "დაცვა გამოძიებისა და სასამართლო განხილვის ყველა ეტაპზე — მოწმის, ბრალდებულისა და დაზარალებულის ინტერესების დაცვა.",
      pa4_t: "ბიზნესის მხარდაჭერა",
      pa4_d: "სრული იურიდიული აუთსორსი, კორპორატიული სამართალი, კომპანიების რეგისტრაცია, შერწყმა და რეორგანიზაცია.",
      services_title: "რას გთავაზობთ",
      services_sub: "მომსახურება ფიზიკური და იურიდიული პირებისთვის — სისხლის, ადმინისტრაციული და სამოქალაქო მიმართულებით.",
      sv1: "ნებისმიერი იურიდიული დოკუმენტის შედგენა და მომზადება",
      sv2: "წარმომადგენლობა საჯარო და კერძო დაწესებულებებთან",
      sv3: "ლიცენზიებისა და ნებართვების მოპოვება",
      sv4: "მოლაპარაკებების წარმართვა კომპანიის სახელით ფიზიკურ და იურიდიულ პირებთან",
      sv5: "დებიტორული დავალიანების ამოღების წარმოება",
      sv6: "სამართლებრივი პრობლემის იდენტიფიცირება და გადაჭრის გზების პოვნა",
      sv7: "კომერციული მოლაპარაკების წარმართვა პარტნიორებთან",
      sv8: "მოლაპარაკება კონტრაჰენტებთან და მომხმარებლებთან",
      sv9: "მორიგება და მედიაცია",
      sv10: "ბიზნეს პროექტებში სამართლებრივ საკითხებზე მოლაპარაკების წარმოება",
      sv11: "დოკუმენტაციის მომზადება ქართულ და ინგლისურ ენებზე",
      sv12: "იურიდიული პირის რეგისტრაცია; შერწყმის, რეორგანიზაციისა და შეძენის სამართლებრივი უზრუნველყოფა",
      sv13: "პარტნიორთა კრების ჩატარების ორგანიზება",
      sv14: "სამართლებრივი დოკუმენტების რეგისტრაცია სახელმწიფო ორგანოებში",
      results_title: "წარმატებით დასრულებული საქმეები",
      results_body: "ჩვენი გუნდის მიერ წარმოებული საქმეები წარმატებით სრულდება საქართველოს სასამართლოებში — მათ შორის თბილისისა და რუსთავის საქალაქო სასამართლოების სამოქალაქო და სისხლის სამართლის კოლეგიებში. თითოეული საქმე ჩვენთვის პასუხისმგებლობაა და თითოეული შედეგი — ნდობის საფუძველი.",
      results_cta: "გაეცანით სიახლეებს Facebook-ზე",
      team_title: "გუნდი",
      team_sub: "გამოცდილი ადვოკატები, რომლებიც თქვენს ინტერესებს იცავენ.",
      tm1_n: "ლაზარე კაკუშაძე",
      tm1_r: "მმართველი პარტნიორი · ადვოკატი",
      tm2_n: "ვახტანგ კვიჟინაძე",
      tm2_r: "მმართველი პარტნიორი · ადვოკატი",
      tm2_s: "სპეციალობა — სისხლის, სამოქალაქო და ადმინისტრაციული სამართალი",
      tm3_n: "გიორგი სამუშია",
      tm3_r: "მმართველი პარტნიორი · ადვოკატი",
      tm3_s: "სპეციალობა — სისხლის სამართალი",
      contact_title: "მიიღეთ კონსულტაცია",
      contact_sub: "აღწერეთ თქვენი საკითხი — დაგიკავშირდებით უმოკლეს დროში. ვმუშაობთ 24/7.",
      ct_phone: "ტელეფონი",
      ct_mail: "ელფოსტა",
      ct_addr: "მისამართი",
      ct_addr_v: "ლუარსაბ ანდრონიკაშვილის ქ. №1ა",
      ct_city: "თბილისი, საქართველო",
      ct_fb: "გამოგვყევით სიახლეებისთვის",
      footer_tag: "სრული სამართლებრივი მხარდაჭერა — სამოქალაქო · ადმინისტრაციული · სისხლის სამართალი",
      contact_write: "მოგვწერეთ",
      ft_nav: "ნავიგაცია",
      ft_contact: "კონტაქტი",
      ft_rights: "ყველა უფლება დაცულია",
      doc_title: "KSK Consulting Group — იურიდიული კომპანია | თბილისი"
    },
    en: {
      nav_about: "About",
      nav_practice: "Practice Areas",
      nav_services: "Services",
      nav_team: "Team",
      nav_contact: "Contact",
      nav_cta: "Consultation",
      tr_1: "Available 24/7",
      tr_2: "Individual approach",
      tr_3: "Full confidentiality",
      proc_title: "How we work",
      proc_sub: "Three simple steps to resolve your matter.",
      pr1_t: "Get in touch",
      pr1_d: "Call or write to us — briefly describe your situation.",
      pr2_t: "Legal analysis",
      pr2_d: "We study your case and propose a concrete plan of action.",
      pr3_t: "Protecting your interests",
      pr3_d: "We represent you in negotiations and in court — through to the result.",
      band_title: "Need legal help?",
      band_sub: "Reach us any time — we work 24/7.",
      band_cta: "Write to us",
      form_name: "Name",
      form_phone: "Phone",
      form_msg: "Describe your matter",
      form_send: "Send request",
      form_success: "Thank you! Your message has been sent — we will contact you shortly.",
      form_note: "Or reach us directly",
      ct_hours: "Open 24/7",
      fab_call: "Call",
      hero_kicker: "Law Firm · Tbilisi",
      hero_l1: "Your rights.",
      hero_l2: "Our case.",
      hero_sub: "Full legal support in civil, administrative and criminal law — alongside strategic business planning and corporate support.",
      hero_cta1: "Get a consultation",
      hero_cta2: "Our services",
      strip_1: "Civil law",
      strip_2: "Administrative law",
      strip_3: "Criminal law",
      strip_4: "Legal outsourcing for business",
      about_title: "A firm that stands on your side",
      about_lead: "KSK Consulting Group is a law firm providing full legal support in civil, administrative and criminal matters, along with strategic business planning and corporate support.",
      pt1_t: "Court representation",
      pt1_d: "Defence and representation before courts of all instances",
      pt2_t: "Business support",
      pt2_d: "Legal outsourcing and corporate services for companies",
      pt3_t: "Available 24/7",
      pt3_d: "We work around the clock — your case cannot wait",
      practice_title: "Practice areas",
      pa1_t: "Civil law",
      pa1_d: "Property and contract disputes, law of obligations, damages, family and inheritance matters.",
      pa2_t: "Administrative law",
      pa2_d: "Disputes with administrative bodies, licences and permits, representation before public institutions.",
      pa3_t: "Criminal law",
      pa3_d: "Defence at every stage of investigation and trial — protecting the interests of witnesses, defendants and victims.",
      pa4_t: "Business support",
      pa4_d: "Full legal outsourcing, corporate law, company registration, mergers and reorganisation.",
      services_title: "What we offer",
      services_sub: "Services for individuals and legal entities — in criminal, administrative and civil matters.",
      sv1: "Drafting and preparation of any legal document",
      sv2: "Representation before public and private institutions",
      sv3: "Obtaining licences and permits",
      sv4: "Negotiating on the company's behalf with individuals and legal entities",
      sv5: "Debt recovery proceedings",
      sv6: "Identifying legal problems and finding ways to resolve them",
      sv7: "Conducting commercial negotiations with partners",
      sv8: "Negotiations with contractors and customers",
      sv9: "Settlement and mediation",
      sv10: "Negotiating legal matters in business projects",
      sv11: "Preparation of documentation in Georgian and English",
      sv12: "Company registration; legal support for mergers, reorganisations and acquisitions",
      sv13: "Organising shareholders' meetings",
      sv14: "Registration of legal documents with state authorities",
      results_title: "Successfully closed cases",
      results_body: "Cases handled by our team are successfully concluded in the courts of Georgia — including the civil and criminal chambers of the Tbilisi and Rustavi City Courts. Every case is a responsibility, and every result — a foundation of trust.",
      results_cta: "Follow our news on Facebook",
      team_title: "Our team",
      team_sub: "Experienced advocates who protect your interests.",
      tm1_n: "Lazare Kakushadze",
      tm1_r: "Managing Partner · Advocate",
      tm2_n: "Vakhtang Kvizhinadze",
      tm2_r: "Managing Partner · Advocate",
      tm2_s: "Specialisation — Criminal, Civil and Administrative Law",
      tm3_n: "Giorgi Samushia",
      tm3_r: "Managing Partner · Advocate",
      tm3_s: "Specialisation — Criminal Law",
      contact_title: "Request a consultation",
      contact_sub: "Describe your matter — we will get back to you promptly. We work 24/7.",
      ct_phone: "Phone",
      ct_mail: "Email",
      ct_addr: "Address",
      ct_addr_v: "1a Luarsab Andronikashvili St.",
      ct_city: "Tbilisi, Georgia",
      ct_fb: "Follow us for updates",
      footer_tag: "Full legal support — civil · administrative · criminal law",
      contact_write: "Write to us",
      ft_nav: "Navigation",
      ft_contact: "Contact",
      ft_rights: "All rights reserved",
      doc_title: "KSK Consulting Group — Law Firm | Tbilisi"
    },
    ru: {
      nav_about: "О нас",
      nav_practice: "Направления",
      nav_services: "Услуги",
      nav_team: "Команда",
      nav_contact: "Контакты",
      nav_cta: "Консультация",
      tr_1: "Работаем 24/7",
      tr_2: "Индивидуальный подход",
      tr_3: "Полная конфиденциальность",
      proc_title: "Как мы работаем",
      proc_sub: "Три простых шага для решения вашего вопроса.",
      pr1_t: "Свяжитесь с нами",
      pr1_d: "Позвоните или напишите — кратко опишите вашу ситуацию.",
      pr2_t: "Правовой анализ",
      pr2_d: "Изучим дело и предложим конкретный план действий.",
      pr3_t: "Защита ваших интересов",
      pr3_d: "Представляем вас на переговорах и в суде — до результата.",
      band_title: "Нужна юридическая помощь?",
      band_sub: "Свяжитесь с нами в любое время — работаем 24/7.",
      band_cta: "Напишите нам",
      form_name: "Имя",
      form_phone: "Телефон",
      form_msg: "Опишите ваш вопрос",
      form_send: "Отправить",
      form_success: "Спасибо! Ваше сообщение отправлено — мы скоро свяжемся с вами.",
      form_note: "Или свяжитесь напрямую",
      ct_hours: "Открыты 24/7",
      fab_call: "Позвонить",
      hero_kicker: "Юридическая компания · Тбилиси",
      hero_l1: "Ваши права.",
      hero_l2: "Наше дело.",
      hero_sub: "Полное правовое сопровождение по гражданским, административным и уголовным делам — а также стратегическое планирование бизнеса и корпоративная поддержка.",
      hero_cta1: "Консультация",
      hero_cta2: "Наши услуги",
      strip_1: "Гражданское право",
      strip_2: "Административное право",
      strip_3: "Уголовное право",
      strip_4: "Юридический аутсорсинг для бизнеса",
      about_title: "Компания, которая на вашей стороне",
      about_lead: "KSK Consulting Group — юридическая компания, обеспечивающая полное правовое сопровождение по гражданским, административным и уголовным делам, а также предлагающая стратегическое планирование бизнеса и корпоративную поддержку.",
      pt1_t: "Представительство в суде",
      pt1_d: "Защита и представительство в судах всех инстанций",
      pt2_t: "Поддержка бизнеса",
      pt2_d: "Юридический аутсорсинг и корпоративные услуги для компаний",
      pt3_t: "Доступность 24/7",
      pt3_d: "Работаем круглосуточно — ваше дело не терпит ожидания",
      practice_title: "Направления практики",
      pa1_t: "Гражданское право",
      pa1_d: "Имущественные и договорные споры, обязательственное право, возмещение ущерба, семейные и наследственные дела.",
      pa2_t: "Административное право",
      pa2_d: "Споры с административными органами, лицензии и разрешения, представительство в государственных учреждениях.",
      pa3_t: "Уголовное право",
      pa3_d: "Защита на всех этапах следствия и судебного разбирательства — защита интересов свидетелей, обвиняемых и потерпевших.",
      pa4_t: "Поддержка бизнеса",
      pa4_d: "Полный юридический аутсорсинг, корпоративное право, регистрация компаний, слияния и реорганизация.",
      services_title: "Что мы предлагаем",
      services_sub: "Услуги для физических и юридических лиц — по уголовным, административным и гражданским делам.",
      sv1: "Составление и подготовка любых юридических документов",
      sv2: "Представительство в государственных и частных учреждениях",
      sv3: "Получение лицензий и разрешений",
      sv4: "Ведение переговоров от имени компании с физическими и юридическими лицами",
      sv5: "Взыскание дебиторской задолженности",
      sv6: "Выявление правовых проблем и поиск путей их решения",
      sv7: "Ведение коммерческих переговоров с партнёрами",
      sv8: "Переговоры с контрагентами и клиентами",
      sv9: "Мировое соглашение и медиация",
      sv10: "Ведение переговоров по правовым вопросам в бизнес-проектах",
      sv11: "Подготовка документации на грузинском и английском языках",
      sv12: "Регистрация юридических лиц; правовое сопровождение слияний, реорганизаций и поглощений",
      sv13: "Организация проведения собраний партнёров",
      sv14: "Регистрация юридических документов в государственных органах",
      results_title: "Успешно завершённые дела",
      results_body: "Дела, которые ведёт наша команда, успешно завершаются в судах Грузии — в том числе в гражданской и уголовной коллегиях городских судов Тбилиси и Рустави. Каждое дело для нас — ответственность, а каждый результат — основа доверия.",
      results_cta: "Следите за новостями на Facebook",
      team_title: "Команда",
      team_sub: "Опытные адвокаты, защищающие ваши интересы.",
      tm1_n: "Лазаре Какушадзе",
      tm1_r: "Управляющий партнёр · Адвокат",
      tm2_n: "Вахтанг Квижинадзе",
      tm2_r: "Управляющий партнёр · Адвокат",
      tm2_s: "Специализация — уголовное, гражданское и административное право",
      tm3_n: "Гиорги Самушия",
      tm3_r: "Управляющий партнёр · Адвокат",
      tm3_s: "Специализация — уголовное право",
      contact_title: "Получите консультацию",
      contact_sub: "Опишите ваш вопрос — мы свяжемся с вами в кратчайшие сроки. Работаем 24/7.",
      ct_phone: "Телефон",
      ct_mail: "Эл. почта",
      ct_addr: "Адрес",
      ct_addr_v: "ул. Луарсаба Андроникашвили, №1а",
      ct_city: "Тбилиси, Грузия",
      ct_fb: "Подписывайтесь на новости",
      footer_tag: "Полное правовое сопровождение — гражданское · административное · уголовное право",
      contact_write: "Напишите нам",
      ft_nav: "Навигация",
      ft_contact: "Контакты",
      ft_rights: "Все права защищены",
      doc_title: "KSK Consulting Group — Юридическая компания | Тбилиси"
    }
  };

  const LANGS = ["ka", "en", "ru"];
  let lang = localStorage.getItem("ksk-lang");
  if (LANGS.indexOf(lang) === -1) lang = "ka";

  function applyLang(next) {
    lang = next;
    localStorage.setItem("ksk-lang", lang);
    const dict = I18N[lang];
    document.documentElement.lang = lang;
    document.title = dict.doc_title;
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      const key = el.getAttribute("data-i18n");
      if (dict[key]) el.textContent = dict[key];
    });
    document.querySelectorAll(".lang-opt").forEach(function (el) {
      el.classList.toggle("is-active", el.getAttribute("data-lang") === lang);
    });
  }

  document.getElementById("langToggle").addEventListener("click", function (e) {
    const opt = e.target.closest(".lang-opt");
    if (opt) {
      applyLang(opt.getAttribute("data-lang"));
    } else {
      // click on the button but not on a specific option → cycle
      applyLang(LANGS[(LANGS.indexOf(lang) + 1) % LANGS.length]);
    }
  });

  if (lang !== "ka") applyLang(lang);

  /* ── header state on scroll ───────────────────────────── */
  const header = document.querySelector(".site-header");
  function onScroll() {
    header.classList.toggle("is-scrolled", window.scrollY > 40);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ── mobile nav ───────────────────────────────────────── */
  const burger = document.getElementById("navBurger");
  const nav = document.getElementById("siteNav");
  burger.addEventListener("click", function () {
    nav.classList.toggle("is-open");
  });
  nav.querySelectorAll("a").forEach(function (a) {
    a.addEventListener("click", function () { nav.classList.remove("is-open"); });
  });

  /* ── active nav link ──────────────────────────────────── */
  const sections = Array.prototype.slice.call(document.querySelectorAll("section[id]"));
  const navLinks = Array.prototype.slice.call(nav.querySelectorAll("a"));
  const sectionObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      navLinks.forEach(function (a) {
        a.classList.toggle("is-active", a.getAttribute("href") === "#" + entry.target.id);
      });
    });
  }, { rootMargin: "-40% 0px -55% 0px" });
  sections.forEach(function (s) { sectionObserver.observe(s); });

  /* ── scroll reveal (staggered within viewport batches) ── */
  const revealObserver = new IntersectionObserver(function (entries) {
    let batch = 0;
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      entry.target.style.setProperty("--rd", (batch * 0.08) + "s");
      entry.target.classList.add("is-in");
      revealObserver.unobserve(entry.target);
      batch++;
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -6% 0px" });
  document.querySelectorAll(".reveal").forEach(function (el) { revealObserver.observe(el); });

  /* ── form: show success note after redirect back ──────── */
  if (new URLSearchParams(location.search).has("sent")) {
    var ok = document.getElementById("formSuccess");
    if (ok) {
      ok.hidden = false;
      var form = document.getElementById("consultForm");
      if (form) form.reset();
    }
  }

  /* ── footer year ──────────────────────────────────────── */
  document.getElementById("year").textContent = new Date().getFullYear();
})();
