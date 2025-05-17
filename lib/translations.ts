export type Language = "en" | "uz" | "ru"

export interface Translations {
  [key: string]: {
    [key in Language]: string
  }
}

export const translations: Translations = {
  // Navigation
  "nav.home": {
    en: "Home",
    uz: "Bosh sahifa",
    ru: "Главная",
  },
  "nav.features": {
    en: "Features",
    uz: "Imkoniyatlar",
    ru: "Возможности",
  },
  "nav.about": {
    en: "About",
    uz: "Biz haqimizda",
    ru: "О нас",
  },
  "nav.contact": {
    en: "Contact",
    uz: "Aloqa",
    ru: "Контакты",
  },

  // Hero section
  "hero.title": {
    en: "Your Guide to Quality Education",
    uz: "Sifatli ta'lim uchun yo'riqnoma",
    ru: "Ваш гид по качественному образованию",
  },
  "hero.subtitle": {
    en: "Discover, Connect, and Learn with Trusted Education Centers",
    uz: "Ishonchli ta'lim markazlari bilan kashf qiling, bog'laning va o'rganing",
    ru: "Откройте для себя, общайтесь и учитесь с проверенными образовательными центрами",
  },
  "hero.search.placeholder": {
    en: "Search for education centers or tutors...",
    uz: "Ta'lim markazlari yoki o'qituvchilarni qidirish...",
    ru: "Поиск образовательных центров или преподавателей...",
  },
  "hero.search.button": {
    en: "Search",
    uz: "Qidirish",
    ru: "Поиск",
  },
  "hero.tag.mathematics": {
    en: "Mathematics",
    uz: "Matematika",
    ru: "Математика",
  },
  "hero.tag.english": {
    en: "English",
    uz: "Ingliz tili",
    ru: "Английский",
  },
  "hero.tag.ielts": {
    en: "IELTS",
    uz: "IELTS",
    ru: "IELTS",
  },
  "hero.tag.science": {
    en: "Science",
    uz: "Fan",
    ru: "Наука",
  },

  // App Screens section
  "appScreens.title": {
    en: "Experience EduMarkaz",
    uz: "EduMarkaz tajribasi",
    ru: "Опыт работы с EduMarkaz",
  },
  "appScreens.subtitle": {
    en: "Our platform provides a seamless experience for students, parents, teachers, and education centers",
    uz: "Platformamiz o'quvchilar, ota-onalar, o'qituvchilar va ta'lim markazlari uchun qulay tajriba taqdim etadi",
    ru: "Наша платформа обеспечивает удобный опыт для студентов, родителей, учителей и образовательных центров",
  },
  "appScreens.learn": {
    en: "Learn",
    uz: "O'rganish",
    ru: "Учиться",
  },
  "appScreens.learn.subtitle": {
    en: "Enroll, attend, and achieve your academic dreams",
    uz: "Ro'yxatdan o'ting, qatnashing va akademik orzularingizga erishing",
    ru: "Записывайтесь, посещайте и достигайте своих академических целей",
  },
  "appScreens.connect": {
    en: "Connect",
    uz: "Bog'lanish",
    ru: "Связь",
  },
  "appScreens.connect.subtitle": {
    en: "Connect with teachers and fellow students",
    uz: "O'qituvchilar va boshqa talabalar bilan bog'laning",
    ru: "Общайтесь с преподавателями и другими студентами",
  },
  "appScreens.discover": {
    en: "Discover",
    uz: "Kashf qilish",
    ru: "Открывать",
  },
  "appScreens.discover.subtitle": {
    en: "Explore a wide range of trusted education centers",
    uz: "Ishonchli ta'lim markazlarining keng doirasini o'rganing",
    ru: "Исследуйте широкий спектр проверенных образовательных центров",
  },
  "appScreens.compare": {
    en: "Compare",
    uz: "Taqqoslash",
    ru: "Сравнить",
  },
  "appScreens.compare.subtitle": {
    en: "Evaluate courses, reviews, and ratings side by side",
    uz: "Kurslar, sharhlar va reytinglarni yonma-yon baholang",
    ru: "Оценивайте курсы, отзывы и рейтинги бок о бок",
  },
  "appScreens.achieve": {
    en: "Achieve",
    uz: "Erishish",
    ru: "Достигать",
  },
  "appScreens.achieve.subtitle": {
    en: "Reach your academic and professional goals",
    uz: "Akademik va kasbiy maqsadlaringizga erishing",
    ru: "Достигайте своих академических и профессиональных целей",
  },

  // Problem section
  "problem.title": {
    en: "The Problem",
    uz: "Muammo",
    ru: "Проблема",
  },
  "problem.subtitle": {
    en: "Parents and students face major challenges when choosing the right education center",
    uz: "Ota-onalar va talabalar to'g'ri ta'lim markazini tanlashda katta qiyinchiliklarga duch kelishadi",
    ru: "Родители и студенты сталкиваются с серьезными проблемами при выборе правильного образовательного центра",
  },
  "problem.unknowns.title": {
    en: "Too many unknowns",
    uz: "Juda ko'p noma'lumlar",
    ru: "Слишком много неизвестных",
  },
  "problem.unknowns.description": {
    en: "Hard to evaluate quality of teaching or legitimacy of centers",
    uz: "O'qitish sifatini yoki markazlarning qonuniyligini baholash qiyin",
    ru: "Трудно оценить качество преподавания или легитимность центров",
  },
  "problem.transparency.title": {
    en: "Lack of transparency",
    uz: "Shaffoflik yo'qligi",
    ru: "Отсутствие прозрачности",
  },
  "problem.transparency.description": {
    en: "No centralized info about pricing, location, or real student results",
    uz: "Narxlar, joylashuv yoki haqiqiy talaba natijalari haqida markazlashtirilgan ma'lumot yo'q",
    ru: "Нет централизованной информации о ценах, местоположении или реальных результатах студентов",
  },
  "problem.reviews.title": {
    en: "No trusted review system",
    uz: "Ishonchli sharh tizimi yo'q",
    ru: "Нет надежной системы отзывов",
  },
  "problem.reviews.description": {
    en: "Most reviews are informal and unverified",
    uz: "Ko'pgina sharhlar norasmiy va tasdiqlanmagan",
    ru: "Большинство отзывов неформальны и не проверены",
  },
  "problem.insight.title": {
    en: "Limited insight",
    uz: "Cheklangan tushuncha",
    ru: "Ограниченное представление",
  },
  "problem.insight.description": {
    en: "No way to preview classes, teachers, or learning environment",
    uz: "Sinflar, o'qituvchilar yoki o'quv muhitini oldindan ko'rish imkoni yo'q",
    ru: "Нет возможности предварительно просмотреть классы, учителей или учебную среду",
  },
  "problem.decision.title": {
    en: "Frustrating decision-making",
    uz: "Jirkanch qaror qabul qilish",
    ru: "Разочаровывающее принятие решений",
  },
  "problem.decision.description": {
    en: "Students often rely on word-of-mouth or guesswork",
    uz: "Talabalar ko'pincha og'zaki ma'lumotlarga yoki taxminlarga tayanishadi",
    ru: "Студенты часто полагаются на устную информацию или догадки",
  },

  // About section
  "about.title": {
    en: "About Us",
    uz: "Biz haqimizda",
    ru: "О нас",
  },
  "about.paragraph1": {
    en: "Around a year ago, while working at an education center, I noticed a big gap: many parents were searching for the best education centers but lacked a reliable source to find them.",
    uz: "Taxminan bir yil oldin, ta'lim markazida ishlayotganimda, men katta bo'shliqni sezdim: ko'p ota-onalar eng yaxshi ta'lim markazlarini qidirishardi, lekin ularni topish uchun ishonchli manba yo'q edi.",
    ru: "Около года назад, работая в образовательном центре, я заметил большой пробел: многие родители искали лучшие образовательные центры, но не имели надежного источника для их поиска.",
  },
  "about.paragraph2": {
    en: "Driven by this need, I teamed up with my closest friend of 14 years to create EduMarkaz — a platform dedicated to connecting families with the top education centers quickly and easily.",
    uz: "Bu ehtiyoj tufayli men 14 yillik eng yaqin do'stim bilan birlashib, EduMarkaz yaratdim - oilalarni eng yaxshi ta'lim markazlari bilan tez va oson bog'laydigan platforma.",
    ru: "Движимый этой потребностью, я объединился с моим ближайшим другом, с которым мы знакомы 14 лет, чтобы создать EduMarkaz — платформу, предназначенную для быстрого и легкого соединения семей с лучшими образовательными центрами.",
  },
  "about.founder": {
    en: "Co-Founder",
    uz: "Hammuassis",
    ru: "Соучредитель",
  },

  // Mission & Vision section
  "mission.title": {
    en: "Our Mission",
    uz: "Bizning vazifamiz",
    ru: "Наша миссия",
  },
  "mission.point1": {
    en: "Empower every student and parent to confidently shape their educational journey by providing trusted, transparent, and verified information.",
    uz: "Har bir o'quvchi va ota-onaga ishonchli, shaffof va tasdiqlangan ma'lumotlarni taqdim etish orqali o'zlarining ta'lim yo'llarini ishonch bilan shakllantirishga imkon berish.",
    ru: "Дать возможность каждому студенту и родителю уверенно формировать свой образовательный путь, предоставляя надежную, прозрачную и проверенную информацию.",
  },
  "mission.point2": {
    en: "Help them make informed decisions",
    uz: "Ularga ma'lumotli qarorlar qabul qilishga yordam berish",
    ru: "Помочь им принимать обоснованные решения",
  },
  "vision.title": {
    en: "Our Vision",
    uz: "Bizning ko'rinishimiz",
    ru: "Наше видение",
  },
  "vision.content": {
    en: "To become the most trusted platform for verified insights on education centers, teachers, and courses — redefining how families choose education and setting a new standard of excellence.",
    uz: "Ta'lim markazlari, o'qituvchilar va kurslar haqida tasdiqlangan ma'lumotlar uchun eng ishonchli platformaga aylanish - oilalar ta'limni qanday tanlashini qayta belgilash va mukammallikning yangi standartini o'rnatish.",
    ru: "Стать самой надежной платформой для проверенной информации об образовательных центрах, учителях и курсах — переопределяя, как семьи выбирают образование и устанавливая новый стандарт качества.",
  },

  // Features section
  "features.title": {
    en: "Key Features",
    uz: "Asosiy xususiyatlar",
    ru: "Ключевые особенности",
  },
  "features.subtitle": {
    en: "EduMarkaz provides powerful tools to connect students with the best educational resources",
    uz: "EduMarkaz talabalarga eng yaxshi ta'lim resurslarini bog'lash uchun kuchli vositalarni taqdim etadi",
    ru: "EduMarkaz предоставляет мощные инструменты для связи студентов с лучшими образовательными ресурсами",
  },
  "features.verified.title": {
    en: "Verified Education Centers",
    uz: "Tasdiqlangan ta'lim markazlari",
    ru: "Проверенные образовательные центры",
  },
  "features.verified.description": {
    en: "Every profile goes through a verification process to ensure trust, legitimacy, and professionalism",
    uz: "Har bir profil ishonch, qonuniylik va professionallikni ta'minlash uchun tekshirish jarayonidan o'tadi",
    ru: "Каждый профиль проходит процесс проверки, чтобы обеспечить доверие, легитимность и профессионализм",
  },
  "features.rankings.title": {
    en: "Real Data-Driven Rankings",
    uz: "Haqiqiy ma'lumotlarga asoslangan reytinglar",
    ru: "Рейтинги на основе реальных данных",
  },
  "features.rankings.description": {
    en: "Teachers and courses are ranked based on verified performance metrics and learner outcomes",
    uz: "O'qituvchilar va kurslar tasdiqlangan ishlash ko'rsatkichlari va o'rganuvchilar natijalari asosida baholanadi",
    ru: "Учителя и курсы ранжируются на основе проверенных показателей эффективности и результатов учащихся",
  },
  "features.rscore.title": {
    en: "R-Score Rating System",
    uz: "R-Score reyting tizimi",
    ru: "Рейтинговая система R-Score",
  },
  "features.rscore.description": {
    en: "A powerful analytics score reflecting an education center's performance based on verified outcomes",
    uz: "Tasdiqlangan natijalarga asoslangan ta'lim markazining ishlashini aks ettiruvchi kuchli tahliliy ball",
    ru: "Мощный аналитический показатель, отражающий эффективность образовательного центра на основе проверенных результатов",
  },
  "features.quality.title": {
    en: "Transparent Quality",
    uz: "Shaffof sifat",
    ru: "Прозрачное качество",
  },
  "features.quality.description": {
    en: "Listings show objective signals of quality, including ratings, engagement data, and performance insights",
    uz: "Ro'yxatlar reytinglar, ishtiroklarning ma'lumotlari va ishlash tushunchalari kabi sifatning ob'ektiv signallarini ko'rsatadi",
    ru: "Списки показывают объективные сигналы качества, включая рейтинги, данные о вовлеченности и информацию о производительности",
  },

  // How It Works section
  "howItWorks.title": {
    en: "How It Works",
    uz: "Bu qanday ishlaydi",
    ru: "Как это работает",
  },
  "howItWorks.subtitle": {
    en: "Follow these simple steps to find the perfect educational match",
    uz: "Mukammal ta'lim mosligini topish uchun ushbu oddiy bosqichlarni bajaring",
    ru: "Следуйте этим простым шагам, чтобы найти идеальное образовательное соответствие",
  },
  "howItWorks.step1.title": {
    en: "Create an Account",
    uz: "Hisob yarating",
    ru: "Создайте аккаунт",
  },
  "howItWorks.step1.description": {
    en: "Sign up and select your role as a student, parent, teacher, or education center",
    uz: "Ro'yxatdan o'ting va o'quvchi, ota-ona, o'qituvchi yoki ta'lim markazi sifatida rolingizni tanlang",
    ru: "Зарегистрируйтесь и выберите свою роль как студент, родитель, учитель или образовательный центр",
  },
  "howItWorks.step2.title": {
    en: "Find Education Centers",
    uz: "Ta'lim markazlarini toping",
    ru: "Найдите образовательные центры",
  },
  "howItWorks.step2.description": {
    en: "Search for education centers or tutors based on your location and needs",
    uz: "Joylashuvingiz va ehtiyojlaringizga qarab ta'lim markazlari yoki repetitorlarni qidiring",
    ru: "Ищите образовательные центры или репетиторов в зависимости от вашего местоположения и потребностей",
  },
  "howItWorks.step3.title": {
    en: "Compare Options",
    uz: "Variantlarni taqqoslang",
    ru: "Сравните варианты",
  },
  "howItWorks.step3.description": {
    en: "View ratings, reviews, and detailed information to make the best choice",
    uz: "Eng yaxshi tanlovni qilish uchun reytinglar, sharhlar va batafsil ma'lumotlarni ko'ring",
    ru: "Просмотрите рейтинги, отзывы и подробную информацию, чтобы сделать лучший выбор",
  },
  "howItWorks.step4.title": {
    en: "Start Learning",
    uz: "O'rganishni boshlang",
    ru: "Начните обучение",
  },
  "howItWorks.step4.description": {
    en: "Connect with your chosen education center or tutor and begin your journey",
    uz: "Tanlagan ta'lim markazingiz yoki repetitoringiz bilan bog'laning va sayohatingizni boshlang",
    ru: "Свяжитесь с выбранным образовательным центром или репетитором и начните свой путь",
  },

  // Map section
  "map.title": {
    en: "Find Education Centers Near You",
    uz: "Yaqin atrofdagi ta'lim markazlarini toping",
    ru: "Найдите образовательные центры рядом с вами",
  },
  "map.subtitle": {
    en: "Explore our interactive map to discover top-rated education centers in your area",
    uz: "Hududingizdagi eng yuqori baholangan ta'lim markazlarini kashf qilish uchun interaktiv xaritamizni o'rganing",
    ru: "Исследуйте нашу интерактивную карту, чтобы найти высокорейтинговые образовательные центры в вашем районе",
  },

  // Subjects section
  "subjects.title": {
    en: "Explore Subject Categories",
    uz: "Mavzu toifalarini o'rganing",
    ru: "Изучите категории предметов",
  },
  "subjects.subtitle": {
    en: "Browse through our wide range of subjects and find the perfect course for you",
    uz: "Bizning keng mavzularimizni ko'rib chiqing va o'zingiz uchun mukammal kursni toping",
    ru: "Просмотрите наш широкий спектр предметов и найдите идеальный курс для вас",
  },

  // Testimonials section
  "testimonials.title": {
    en: "What Our Users Say",
    uz: "Foydalanuvchilarimiz nima deyishadi",
    ru: "Что говорят наши пользователи",
  },
  "testimonials.subtitle": {
    en: "Hear from students, parents, and teachers who have found success with EduMarkaz",
    uz: "EduMarkaz bilan muvaffaqiyatga erishgan talabalar, ota-onalar va o'qituvchilardan eshiting",
    ru: "Услышьте от студентов, родителей и учителей, которые добились успеха с EduMarkaz",
  },

  // Target Audience section
  "audience.title": {
    en: "Who We're Solving This For",
    uz: "Biz buni kim uchun hal qilmoqdamiz",
    ru: "Для кого мы решаем эту проблему",
  },
  "audience.subtitle": {
    en: "EduMarkaz is designed to help everyone in the educational ecosystem",
    uz: "EduMarkaz ta'lim ekotizimidagi hamma odamlarga yordam berish uchun mo'ljallangan",
    ru: "EduMarkaz разработан, чтобы помочь всем в образовательной экосистеме",
  },
  "audience.students.title": {
    en: "Students & Parents",
    uz: "Talabalar va ota-onalar",
    ru: "Студенты и родители",
  },
  "audience.students.description": {
    en: "Who need a clear, trustworthy platform to discover quality education opportunities without confusion or misinformation.",
    uz: "Chalkashlik yoki noto'g'ri ma'lumotsiz sifatli ta'lim imkoniyatlarini kashf qilish uchun aniq, ishonchli platformaga muhtoj bo'lganlar.",
    ru: "Которым нужна четкая, надежная платформа для поиска качественных образовательных возможностей без путаницы или дезинформации.",
  },
  "audience.centers.title": {
    en: "Education Centers",
    uz: "Ta'lim markazlari",
    ru: "Образовательные центры",
  },
  "audience.centers.description": {
    en: "That want to showcase their true impact, build credibility, and attract the right learners in a competitive space.",
    uz: "O'zlarining haqiqiy ta'sirini ko'rsatmoqchi, ishonchlilikni shakllantirmoqchi va raqobatbardosh maydonda to'g'ri o'rganuvchilarni jalb qilmoqchi bo'lganlar.",
    ru: "Которые хотят продемонстрировать свое истинное влияние, создать доверие и привлечь правильных учащихся в конкурентном пространстве.",
  },
  "audience.teachers.title": {
    en: "Teachers & Tutors",
    uz: "O'qituvchilar va repetitorlar",
    ru: "Учителя и репетиторы",
  },
  "audience.teachers.description": {
    en: "Looking to grow their reputation, present verified achievements, and access better career or teaching opportunities.",
    uz: "O'z obro'sini oshirish, tasdiqlangan yutuqlarni taqdim etish va yaxshiroq karyera yoki o'qitish imkoniyatlariga ega bo'lishni istaydiganlar.",
    ru: "Стремящиеся повысить свою репутацию, представить проверенные достижения и получить доступ к лучшим карьерным или преподавательским возможностям.",
  },

  // CTA section
  "cta.title": {
    en: "Ready to Start Your Learning Journey?",
    uz: "O'rganish sayohatingizni boshlashga tayyormisiz?",
    ru: "Готовы начать свой путь обучения?",
  },
  "cta.subtitle": {
    en: "Join thousands of students who have found their perfect educational match with EduMarkaz",
    uz: "EduMarkaz bilan mukammal ta'lim mosligini topgan minglab talabalarga qo'shiling",
    ru: "Присоединяйтесь к тысячам студентов, которые нашли свое идеальное образовательное соответствие с EduMarkaz",
  },
  "cta.button": {
    en: "Explore Map",
    uz: "Xaritani o'rganing",
    ru: "Исследовать карту",
  },

  // Footer
  "footer.about": {
    en: "About Us",
    uz: "Biz haqimizda",
    ru: "О нас",
  },
  "footer.features": {
    en: "Features",
    uz: "Xususiyatlar",
    ru: "Функции",
  },
  "footer.howItWorks": {
    en: "How It Works",
    uz: "Bu qanday ishlaydi",
    ru: "Как это работает",
  },
  "footer.contact": {
    en: "Contact",
    uz: "Aloqa",
    ru: "Контакты",
  },
  "footer.privacy": {
    en: "Privacy Policy",
    uz: "Maxfiylik siyosati",
    ru: "Политика конфиденциальности",
  },
  "footer.terms": {
    en: "Terms of Service",
    uz: "Xizmat ko'rsatish shartlari",
    ru: "Условия использования",
  },
  "footer.rights": {
    en: "All rights reserved.",
    uz: "Barcha huquqlar himoyalangan.",
    ru: "Все права защищены.",
  },
  "footer.contact.text": {
    en: "Contact us at:",
    uz: "Biz bilan bog'laning:",
    ru: "Свяжитесь с нами:",
  },
}
