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
  "nav.howItWorks": {
    en: "How it works",
    uz: "Qanday ishlaydi",
    ru: "Как это работает",
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
  "nav.map": {
    en: "Fing courses using interactive map",
    uz: "Interaktiv xarita yordamida kurslarni toping",


    ru: "Найдите курсы с помощью интерактивной карты",
  },
  "nav.contact": {
    en: "Contact",
    uz: "Aloqa",
    ru: "Контакты",
  },

  // Hero section
  "hero.title": {
    en: "Your Guide to Quality Education",
    uz: "Sifatli ta'limga yo'lboshchi",
    ru: "Ваш путеводитель к качественному образованию",
  },
  "hero.subtitle": {
    en: "Discover, Connect, and Learn with Trusted Education Centers",
    uz: "Ishonchli ta'lim markazlari bilan kashf eting, bog'laning va o'rganing",
    ru: "Открывайте, общайтесь и учитесь с проверенными образовательными центрами",
  },
  "hero.search.placeholder": {
    en: "Search for education centers or tutors...",
    uz: "Ta'lim markazlari yoki ustozlarni qidiring...",
    ru: "Поиск образовательных центров или репетиторов...",
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
    ru: "Английский язык",
  },
  "hero.tag.ielts": {
    en: "IELTS",
    uz: "IELTS",
    ru: "IELTS",
  },
  "hero.tag.science": {
    en: "Science",
    uz: "Fan",
    ru: "Естественные науки",
  },

  // App Screens section
  "appScreens.title": {
    en: "Experience EduMarkaz",
    uz: "EduMarkaz tajribasini his eting",
    ru: "Познакомьтесь с EduMarkaz",
  },
  "appScreens.subtitle": {
    en: "Our platform provides a seamless experience for students, parents, teachers, and education centers",
    uz: "Bizning platformamiz o'quvchilar, ota-onalar, o'qituvchilar va ta'lim markazlari uchun qulay tajriba taqdim etadi",
    ru: "Наша платформа обеспечивает удобный опыт для студентов, родителей, преподавателей и образовательных центров",
  },
  "appScreens.learn": {
    en: "Learn",
    uz: "O'rganing",
    ru: "Учитесь",
  },
  "appScreens.learn.subtitle": {
    en: "Enroll, attend, and achieve your academic dreams",
    uz: "Ro'yxatdan o'ting, qatnashing va akademik orzularingizga erishing",
    ru: "Записывайтесь, посещайте и достигайте академических целей",
  },
  "appScreens.connect": {
    en: "Connect",
    uz: "Bog'laning",
    ru: "Общайтесь",
  },
  "appScreens.connect.subtitle": {
    en: "Connect with teachers and fellow students",
    uz: "O'qituvchilar va boshqa talabalar bilan bog'laning",
    ru: "Общайтесь с преподавателями и другими студентами",
  },
  "appScreens.discover": {
    en: "Discover",
    uz: "Kashf eting",
    ru: "Открывайте",
  },
  "appScreens.discover.subtitle": {
    en: "Explore a wide range of trusted education centers",
    uz: "Ishonchli ta'lim markazlarining keng tanlovini o'rganing",
    ru: "Исследуйте широкий выбор проверенных образовательных центров",
  },
  "appScreens.compare": {
    en: "Compare",
    uz: "Taqqoslang",
    ru: "Сравнивайте",
  },
  "appScreens.compare.subtitle": {
    en: "Evaluate courses, reviews, and ratings side by side",
    uz: "Kurslar, sharhlar va reytinglarni yonma-yon taqqoslang",
    ru: "Сравнивайте курсы, отзывы и рейтинги",
  },
  "appScreens.achieve": {
    en: "Achieve",
    uz: "Erishing",
    ru: "Достигайте",
  },
  "appScreens.achieve.subtitle": {
    en: "Reach your academic and professional goals",
    uz: "Akademik va kasbiy maqsadlaringizga erishing",
    ru: "Достигайте академических и профессиональных целей",
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
    ru: "Родители и студенты сталкиваются с серьезными трудностями при выборе подходящего образовательного центра",
  },
  "problem.unknowns.title": {
    en: "Too many unknowns",
    uz: "Juda ko'p noma'lum holatlar",
    ru: "Слишком много неизвестного",
  },
  "problem.unknowns.description": {
    en: "Hard to evaluate quality of teaching or legitimacy of centers",
    uz: "O'qitish sifati yoki markazlarning ishonchliligini baholash qiyin",
    ru: "Сложно оценить качество преподавания или надежность центров",
  },
  "problem.transparency.title": {
    en: "Lack of transparency",
    uz: "Ochiqlik etishmasligi",
    ru: "Недостаток прозрачности",
  },
  "problem.transparency.description": {
    en: "No centralized info about pricing, location, or real student results",
    uz: "Narxlar, joylashuv yoki haqiqiy talaba natijalari haqida yagona ma'lumot yo'q",
    ru: "Нет централизованной информации о ценах, местоположении или реальных результатах студентов",
  },
  "problem.reviews.title": {
    en: "No trusted review system",
    uz: "Ishonchli baholash tizimi yo'q",
    ru: "Отсутствие надежной системы отзывов",
  },
  "problem.reviews.description": {
    en: "Most reviews are informal and unverified",
    uz: "Ko'pgina sharhlar norasmiy va tasdiqlanmagan",
    ru: "Большинство отзывов неформальны и не проверены",
  },
  "problem.insight.title": {
    en: "Limited insight",
    uz: "Cheklangan ma'lumot",
    ru: "Ограниченная информация",
  },
  "problem.insight.description": {
    en: "No way to preview classes, teachers, or learning environment",
    uz: "Darslar, o'qituvchilar yoki o'quv muhitini oldindan ko'rish imkoni yo'q",
    ru: "Нет возможности предварительно ознакомиться с занятиями, преподавателями или учебной средой",
  },
  "problem.decision.title": {
    en: "Frustrating decision-making",
    uz: "Qiyin qaror qabul qilish",
    ru: "Сложное принятие решений",
  },
  "problem.decision.description": {
    en: "Students often rely on word-of-mouth or guesswork",
    uz: "Talabalar ko'pincha og'zaki ma'lumotlar yoki taxminlarga tayanishadi",
    ru: "Студенты часто полагаются на слухи или догадки",
  },

  // About section
  "about.title": {
    en: "About Us",
    uz: "Biz haqimizda",
    ru: "О нас",
  },
  "about.paragraph1": {
    en: "Around a year ago, while working at an education center, I noticed a big gap: many parents were searching for the best education centers but lacked a reliable source to find them.",
    uz: "Taxminan bir yil oldin ta'lim markazida ishlayotganimda katta muammoni payqadim: ko'plab ota-onalar eng yaxshi ta'lim markazlarini qidirishardi, lekin ularni topish uchun ishonchli manba yo'q edi.",
    ru: "Около года назад, работая в образовательном центре, я заметил серьезную проблему: многие родители искали лучшие образовательные центры, но не имели надежного источника для их поиска.",
  },
  "about.paragraph2": {
    en: "Driven by this need, I teamed up with my closest friend of 14 years to create EduMarkaz — a platform dedicated to connecting families with the top education centers quickly and easily.",
    uz: "Bu ehtiyojdan kelib chiqqan holda, men 14 yillik eng yaqin do'stim bilan hamkorlikda EduMarkaz yaratdim — oilalarni eng yaxshi ta'lim markazlari bilan tez va oson bog'laydigan platforma.",
    ru: "Руководствуясь этой потребностью, я объединился с моим ближайшим другом, с которым мы дружим уже 14 лет, чтобы создать EduMarkaz — платформу для быстрого и легкого соединения семей с лучшими образовательными центрами.",
  },
  "about.founder": {
    en: "Co-Founder",
    uz: "Hammuassis",
    ru: "Соучредитель",
  },

  // Mission & Vision section
  "mission.title": {
    en: "Our Mission",
    uz: "Bizning missiyamiz",
    ru: "Наша миссия",
  },
  "mission.point1": {
    en: "Empower every student and parent to confidently shape their educational journey by providing trusted, transparent, and verified information.",
    uz: "Har bir o'quvchi va ota-onaga ishonchli, ochiq va tasdiqlangan ma'lumotlar berish orqali o'zlarining ta'lim yo'lini ishonch bilan shakllantirishga imkon yaratish.",
    ru: "Дать возможность каждому студенту и родителю уверенно формировать свой образовательный путь, предоставляя надежную, прозрачную и проверенную информацию.",
  },
  "mission.point2": {
    en: "Help them make informed decisions",
    uz: "Ularga ongli qarorlar qabul qilishda yordam berish",
    ru: "Помочь им принимать осознанные решения",
  },
  "vision.title": {
    en: "Our Vision",
    uz: "Bizning vazifamiz",
    ru: "Наше видение",
  },
  "vision.content": {
    en: "To become the most trusted platform for verified insights on education centers, teachers, and courses — redefining how families choose education and setting a new standard of excellence.",
    uz: "Ta'lim markazlari, o'qituvchilar va kurslar haqida tasdiqlangan ma'lumotlar uchun eng ishonchli platformaga aylanish — oilalar ta'limni qanday tanlashini qayta belgilash va mukammallikning yangi standartini o'rnatish.",
    ru: "Стать самой надежной платформой для проверенной информации об образовательных центрах, преподавателях и курсах — переосмысливая то, как семьи выбирают образование, и устанавливая новый стандарт качества.",
  },

  // Features section
  "features.title": {
    en: "Key Features",
    uz: "Asosiy imkoniyatlar",
    ru: "Ключевые возможности",
  },
  "features.subtitle": {
    en: "EduMarkaz provides powerful tools to connect students with the best educational resources",
    uz: "EduMarkaz talabalarni eng yaxshi ta'lim resurslari bilan bog'lash uchun kuchli vositalar taqdim etadi",
    ru: "EduMarkaz предоставляет мощные инструменты для связи студентов с лучшими образовательными ресурсами",
  },
  "features.verified.title": {
    en: "Verified Education Centers",
    uz: "Tasdiqlangan ta'lim markazlari",
    ru: "Проверенные образовательные центры",
  },
  "features.verified.description": {
    en: "Every profile goes through a verification process to ensure trust, legitimacy, and professionalism",
    uz: "Har bir profil ishonch, ishonchlilik va professionallikni ta'minlash uchun tekshirish jarayonidan o'tadi",
    ru: "Каждый профиль проходит процесс проверки для обеспечения доверия, надежности и профессионализма",
  },
  "features.rankings.title": {
    en: "Real Data-Driven Rankings",
    uz: "Haqiqiy ma'lumotlarga asoslangan reytinglar",
    ru: "Рейтинги на основе реальных данных",
  },
  "features.rankings.description": {
    en: "Teachers and courses are ranked based on verified performance metrics and learner outcomes",
    uz: "O'qituvchilar va kurslar tasdiqlangan samaradorlik ko'rsatkichlari va o'quvchilar natijalari asosida baholanadi",
    ru: "Преподаватели и курсы ранжируются на основе проверенных показателей эффективности и результатов учащихся",
  },
  "features.rscore.title": {
    en: "R-Score Rating System",
    uz: "R-Score baholash tizimi",
    ru: "Рейтинговая система R-Score",
  },
  "features.rscore.description": {
    en: "A powerful analytics score reflecting an education center's performance based on verified outcomes",
    uz: "Tasdiqlangan natijalarga asoslangan ta'lim markazining samaradorligini aks ettiruvchi kuchli tahliliy ball",
    ru: "Мощный аналитический показатель, отражающий эффективность образовательного центра на основе проверенных результатов",
  },
  "features.quality.title": {
    en: "Transparent Quality",
    uz: "Ochiq sifat",
    ru: "Прозрачное качество",
  },
  "features.quality.description": {
    en: "Listings show objective signals of quality, including ratings, engagement data, and performance insights",
    uz: "Ro'yxatlar reytinglar, faollik ma'lumotlari va samaradorlik ko'rsatkichlari kabi sifatning ob'ektiv belgilarini ko'rsatadi",
    ru: "Списки показывают объективные показатели качества, включая рейтинги, данные о вовлеченности и аналитику эффективности",
  },

  // How It Works section
  "howItWorks.title": {
    en: "How It Works",
    uz: "Qanday ishlaydi",
    ru: "Как это работает",
  },
  "howItWorks.subtitle": {
    en: "Follow these simple steps to find the perfect educational match",
    uz: "Mukammal ta'lim tanlovini topish uchun ushbu oddiy qadamlarni bajaring",
    ru: "Следуйте этим простым шагам, чтобы найти идеальный образовательный выбор",
  },
  "howItWorks.step1.title": {
    en: "Create an Account",
    uz: "Hisob yarating",
    ru: "Создайте аккаунт",
  },
  "howItWorks.step1.description": {
    en: "Sign up and select your role as a student, parent, teacher, or education center",
    uz: "Ro'yxatdan o'ting va o'quvchi, ota-ona, o'qituvchi yoki ta'lim markazi sifatida rolingizni tanlang",
    ru: "Зарегистрируйтесь и выберите свою роль: студент, родитель, преподаватель или образовательный центр",
  },
  "howItWorks.step2.title": {
    en: "Find Education Centers",
    uz: "Ta'lim markazlarini toping",
    ru: "Найдите образовательные центры",
  },
  "howItWorks.step2.description": {
    en: "Search for education centers or tutors based on your location and needs",
    uz: "Joylashuvingiz va ehtiyojlaringizga qarab ta'lim markazlari yoki ustozlarni qidiring",
    ru: "Ищите образовательные центры или репетиторов в зависимости от вашего местоположения и потребностей",
  },
  "howItWorks.step3.title": {
    en: "Compare Options",
    uz: "Variantlarni taqqoslang",
    ru: "Сравните варианты",
  },
  "howItWorks.step3.description": {
    en: "View ratings, reviews, and detailed information to make the best choice",
    uz: "Eng yaxshi tanlov qilish uchun reytinglar, sharhlar va batafsil ma'lumotlarni ko'ring",
    ru: "Просматривайте рейтинги, отзывы и подробную информацию для принятия лучшего решения",
  },
  "howItWorks.step4.title": {
    en: "Start Learning",
    uz: "O'rganishni boshlang",
    ru: "Начните обучение",
  },
  "howItWorks.step4.description": {
    en: "Connect with your chosen education center or tutor and begin your journey",
    uz: "Tanlagan ta'lim markazingiz yoki ustozingiz bilan bog'laning va o'z yo'lingizni boshlang",
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
    uz: "Hududingizdagi eng yuqori baholangan ta'lim markazlarini topish uchun interaktiv xaritamizni o'rganing",
    ru: "Исследуйте нашу интерактивную карту, чтобы найти высокорейтинговые образовательные центры в вашем районе",
  },

  // Subjects section
  "subjects.title": {
    en: "Explore Subject Categories",
    uz: "Fan yo'nalishlarini o'rganing",
    ru: "Изучите категории предметов",
  },
  "subjects.subtitle": {
    en: "Browse through our wide range of subjects and find the perfect course for you",
    uz: "Bizning keng fan yo'nalishlarimizni ko'rib chiqing va o'zingiz uchun ideal kursni toping",
    ru: "Просмотрите наш широкий спектр предметов и найдите идеальный курс для себя",
  },

  // Testimonials section
  "testimonials.title": {
    en: "What Our Users Say",
    uz: "Foydalanuvchilarimiz fikri",
    ru: "Отзывы наших пользователей",
  },
  "testimonials.subtitle": {
    en: "Hear from students, parents, and teachers who have found success with EduMarkaz",
    uz: "EduMarkaz bilan muvaffaqiyatga erishgan talabalar, ota-onalar va o'qituvchilarning fikrlarini eshiting",
    ru: "Узнайте мнения студентов, родителей и преподавателей, которые добились успеха с EduMarkaz",
  },

  // Target Audience section
  "audience.title": {
    en: "Who We're Solving This For",
    uz: "Biz kimlar uchun bu muammoni hal qilmoqdamiz",
    ru: "Для кого мы решаем эту проблему",
  },
  "audience.subtitle": {
    en: "EduMarkaz is designed to help everyone in the educational ecosystem",
    uz: "EduMarkaz ta'lim tizimidagi barcha ishtirokchilar uchun mo'ljallangan",
    ru: "EduMarkaz создан для помощи всем участникам образовательной экосистемы",
  },
  "audience.students.title": {
    en: "Students & Parents",
    uz: "Talabalar va ota-onalar",
    ru: "Студенты и родители",
  },
  "audience.students.description": {
    en: "Who need a clear, trustworthy platform to discover quality education opportunities without confusion or misinformation.",
    uz: "Chalkashlik yoki noto'g'ri ma'lumotsiz sifatli ta'lim imkoniyatlarini topish uchun aniq va ishonchli platformaga muhtoj bo'lganlar.",
    ru: "Которым нужна четкая и надежная платформа для поиска качественных образовательных возможностей без путаницы или дезинформации.",
  },
  "audience.centers.title": {
    en: "Education Centers",
    uz: "Ta'lim markazlari",
    ru: "Образовательные центры",
  },
  "audience.centers.description": {
    en: "That want to showcase their true impact, build credibility, and attract the right learners in a competitive space.",
    uz: "O'zlarining haqiqiy ta'sirini ko'rsatish, ishonchlilik qurish va raqobatbardosh muhitda to'g'ri o'quvchilarni jalb qilishni istaydiganlar.",
    ru: "Которые хотят продемонстрировать свое реальное влияние, создать доверие и привлечь подходящих учащихся в конкурентной среде.",
  },
  "audience.teachers.title": {
    en: "Teachers & Tutors",
    uz: "O'qituvchilar va ustozlar",
    ru: "Преподаватели и репетиторы",
  },
  "audience.teachers.description": {
    en: "Looking to grow their reputation, present verified achievements, and access better career or teaching opportunities.",
    uz: "O'z obro'sini oshirish, tasdiqlangan yutuqlarni taqdim etish va yaxshiroq karyera yoki o'qitish imkoniyatlariga ega bo'lishni istaydiganlar.",
    ru: "Стремящиеся повысить свою репутацию, представить проверенные достижения и получить доступ к лучшим карьерным или преподавательским возможностям.",
  },

  // CTA section
  "cta.title": {
    en: "Ready to Start Your Learning Journey?",
    uz: "O'rganish yo'lingizni boshlashga tayyormisiz?",
    ru: "Готовы начать свой образовательный путь?",
  },
  "cta.subtitle": {
    en: "Join thousands of students who have found their perfect educational match with EduMarkaz",
    uz: "EduMarkaz bilan o'zlariga mos ta'lim topgan minglab talabalar qatoriga qo'shiling",
    ru: "Присоединяйтесь к тысячам студентов, которые нашли свое идеальное образовательное решение с EduMarkaz",
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
    uz: "Imkoniyatlar",
    ru: "Возможности",
  },
  "footer.howItWorks": {
    en: "How It Works",
    uz: "Qanday ishlaydi",
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
    uz: "Foydalanish shartlari",
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