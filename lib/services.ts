import type { Locale } from "@/lib/site";

type L = Record<Locale, string>;
type LL = Record<Locale, string[]>;

export type ServiceGroup = "marketing" | "creative" | "tech";

export type ServiceIconName =
  | "strategy"
  | "ads"
  | "social"
  | "video"
  | "design"
  | "whatsapp"
  | "email"
  | "web"
  | "mobile"
  | "software";

export interface Service {
  slug: string;
  group: ServiceGroup;
  icon: ServiceIconName;
  /** Two hex colours used for the card accent gradient */
  accent: [string, string];
  title: L;
  short: L;
  description: L;
  features: LL;
  steps: { title: L; text: L }[];
  idealFor: LL;
  tools: string[];
}

export const services: Service[] = [
  {
    slug: "digital-marketing",
    group: "marketing",
    icon: "strategy",
    accent: ["#0B6BFF", "#00D1FF"],
    title: { en: "Digital Marketing & Strategy", ar: "التسويق الرقمي والاستراتيجية" },
    short: {
      en: "Full-funnel growth strategy, from positioning to performance.",
      ar: "استراتيجية نمو متكاملة، من التموضع إلى الأداء.",
    },
    description: {
      en: "Great marketing starts with a plan. We study your market, audience and competitors, then build a channel strategy that connects brand, content and conversion — and run it end to end.",
      ar: "التسويق الناجح يبدأ بخطة. ندرس سوقك وجمهورك ومنافسيك، ثم نبني استراتيجية قنوات تربط العلامة التجارية والمحتوى والتحويل — وننفذها من البداية إلى النهاية.",
    },
    features: {
      en: [
        "Market, audience and competitor research",
        "Positioning, messaging and offer design",
        "Channel strategy and media planning",
        "Funnel design and conversion tracking",
        "Monthly growth roadmap and KPIs",
        "Live performance dashboard",
      ],
      ar: [
        "بحث السوق والجمهور والمنافسين",
        "التموضع والرسائل وتصميم العروض",
        "استراتيجية القنوات والتخطيط الإعلامي",
        "تصميم مسار التحويل وتتبع النتائج",
        "خارطة طريق شهرية للنمو ومؤشرات أداء",
        "لوحة متابعة مباشرة للأداء",
      ],
    },
    steps: [
      { title: { en: "Audit", ar: "التدقيق" }, text: { en: "We benchmark your current presence and find the quickest wins.", ar: "نقيّم حضورك الحالي ونحدد أسرع المكاسب." } },
      { title: { en: "Plan", ar: "التخطيط" }, text: { en: "A 90-day roadmap with channels, budgets and targets.", ar: "خارطة طريق لـ 90 يوماً مع القنوات والميزانيات والأهداف." } },
      { title: { en: "Execute & optimise", ar: "التنفيذ والتحسين" }, text: { en: "We run the plan, report weekly and double down on what works.", ar: "ننفذ الخطة، نقدم تقارير أسبوعية، ونركّز على ما يحقق النتائج." } },
    ],
    idealFor: {
      en: ["New brands entering the Qatari market", "Businesses with ads that are not converting", "Teams that need a clear growth plan"],
      ar: ["العلامات الجديدة التي تدخل السوق القطري", "الشركات التي لا تحقق إعلاناتها تحويلات", "الفرق التي تحتاج خطة نمو واضحة"],
    },
    tools: ["Google Analytics 4", "Meta Business Suite", "Google Ads", "Looker Studio", "HubSpot"],
  },
  {
    slug: "paid-advertising",
    group: "marketing",
    icon: "ads",
    accent: ["#7C5CFF", "#0B6BFF"],
    title: { en: "Paid Social & Digital Ads", ar: "الإعلانات الممولة والرقمية" },
    short: {
      en: "Meta, Google, TikTok and Snapchat campaigns built to convert.",
      ar: "حملات على ميتا وجوجل وتيك توك وسناب شات مصممة للتحويل.",
    },
    description: {
      en: "We plan, launch and optimise paid campaigns across the platforms your customers actually use. Creative, targeting, bidding and landing pages are managed together so every riyal works harder.",
      ar: "نخطط ونطلق ونحسّن الحملات الممولة عبر المنصات التي يستخدمها عملاؤك فعلاً. ندير الإبداع والاستهداف والمزايدة وصفحات الهبوط معاً ليعمل كل ريال بكفاءة أعلى.",
    },
    features: {
      en: [
        "Campaign strategy and audience research",
        "Ad creative: static, carousel and video",
        "Pixel, conversion API and tracking setup",
        "Daily bid and budget optimisation",
        "A/B testing of creative and landing pages",
        "Transparent weekly reporting",
      ],
      ar: [
        "استراتيجية الحملات وبحث الجمهور",
        "تصميم الإعلانات: ثابتة، دوّارة، وفيديو",
        "إعداد البكسل وواجهة التحويلات والتتبع",
        "تحسين يومي للمزايدة والميزانية",
        "اختبارات A/B للإبداع وصفحات الهبوط",
        "تقارير أسبوعية شفافة",
      ],
    },
    steps: [
      { title: { en: "Setup", ar: "الإعداد" }, text: { en: "Accounts, tracking and audiences configured correctly from day one.", ar: "إعداد الحسابات والتتبع والجماهير بشكل صحيح منذ اليوم الأول." } },
      { title: { en: "Launch", ar: "الإطلاق" }, text: { en: "Multiple creative angles tested across placements.", ar: "اختبار عدة زوايا إبداعية عبر المواضع المختلفة." } },
      { title: { en: "Scale", ar: "التوسع" }, text: { en: "Winning ads get more budget, losers get cut — every day.", ar: "الإعلانات الرابحة تحصل على ميزانية أكبر، والخاسرة تُوقف — يومياً." } },
    ],
    idealFor: {
      en: ["E-commerce and retail", "Restaurants, clinics and services", "Real estate and lead-generation businesses"],
      ar: ["التجارة الإلكترونية والتجزئة", "المطاعم والعيادات والخدمات", "العقارات وأعمال توليد العملاء المحتملين"],
    },
    tools: ["Meta Ads", "Google Ads", "TikTok Ads", "Snapchat Ads", "LinkedIn Ads", "X Ads"],
  },
  {
    slug: "social-media-management",
    group: "marketing",
    icon: "social",
    accent: ["#FF4D8D", "#FF8A3D"],
    title: { en: "Social Media Management", ar: "إدارة حسابات التواصل الاجتماعي" },
    short: {
      en: "Instagram, Facebook, TikTok and LinkedIn — managed like a brand should be.",
      ar: "إنستجرام وفيسبوك وتيك توك ولينكدإن — إدارة احترافية تليق بعلامتك.",
    },
    description: {
      en: "We take full ownership of your social presence: content calendars, bilingual copywriting, design, reels, community management and growth. Consistent, on-brand and always measured.",
      ar: "نتولى حضورك على منصات التواصل بالكامل: تقويم المحتوى، كتابة النصوص بالعربية والإنجليزية، التصميم، الريلز، إدارة المجتمع، والنمو. حضور متسق وعلى هوية علامتك ومقاس دائماً.",
    },
    features: {
      en: [
        "Monthly content strategy and calendar",
        "Bilingual (Arabic & English) copywriting",
        "Post, story and reel design and production",
        "Community management and inbox replies",
        "Influencer and collaboration coordination",
        "Monthly performance report",
      ],
      ar: [
        "استراتيجية وتقويم محتوى شهري",
        "كتابة نصوص بالعربية والإنجليزية",
        "تصميم وإنتاج المنشورات والقصص والريلز",
        "إدارة المجتمع والرد على الرسائل",
        "تنسيق التعاون مع المؤثرين",
        "تقرير أداء شهري",
      ],
    },
    steps: [
      { title: { en: "Brand voice", ar: "صوت العلامة" }, text: { en: "We define your tone, pillars and visual style.", ar: "نحدد نبرتك ومحاور محتواك وأسلوبك البصري." } },
      { title: { en: "Monthly calendar", ar: "التقويم الشهري" }, text: { en: "Content planned and approved in advance — no surprises.", ar: "محتوى مخطط ومعتمد مسبقاً — بلا مفاجآت." } },
      { title: { en: "Publish & engage", ar: "النشر والتفاعل" }, text: { en: "Daily publishing, replies and growth tactics.", ar: "نشر يومي وردود وتكتيكات نمو." } },
    ],
    idealFor: {
      en: ["Brands that want a consistent, premium presence", "Companies without an in-house content team", "Businesses launching in Qatar"],
      ar: ["العلامات التي تريد حضوراً متسقاً وراقياً", "الشركات بدون فريق محتوى داخلي", "الأعمال التي تنطلق في قطر"],
    },
    tools: ["Instagram", "Facebook", "TikTok", "LinkedIn", "X", "Snapchat", "YouTube"],
  },
  {
    slug: "whatsapp-marketing",
    group: "marketing",
    icon: "whatsapp",
    accent: ["#25D366", "#00B8A9"],
    title: { en: "WhatsApp Marketing", ar: "التسويق عبر واتساب" },
    short: {
      en: "Broadcasts, automation and chatbots on the channel everyone reads.",
      ar: "رسائل جماعية وأتمتة وروبوتات محادثة على القناة التي يقرأها الجميع.",
    },
    description: {
      en: "WhatsApp is the most-opened channel in the region. We set up the official WhatsApp Business API, design compliant campaigns, build automated flows and connect it to your CRM so every conversation becomes a sale.",
      ar: "واتساب هو القناة الأكثر فتحاً في المنطقة. نقوم بإعداد واجهة واتساب بزنس الرسمية، ونصمم حملات متوافقة مع السياسات، ونبني مسارات آلية، ونربطها بنظام CRM لديك لتتحول كل محادثة إلى عملية بيع.",
    },
    features: {
      en: [
        "WhatsApp Business API setup and verification",
        "Broadcast campaigns and message templates",
        "Automated flows, catalogues and order updates",
        "AI chatbot for FAQs and lead qualification",
        "CRM integration and lead routing",
        "Campaign analytics and opt-in management",
      ],
      ar: [
        "إعداد وتوثيق واجهة واتساب بزنس",
        "حملات جماعية وقوالب رسائل",
        "مسارات آلية وكتالوجات وتحديثات الطلبات",
        "روبوت محادثة ذكي للأسئلة الشائعة وتأهيل العملاء",
        "ربط مع نظام CRM وتوجيه العملاء المحتملين",
        "تحليلات الحملات وإدارة الموافقات",
      ],
    },
    steps: [
      { title: { en: "Connect", ar: "الربط" }, text: { en: "Official API, verified business profile and number.", ar: "واجهة رسمية وملف تجاري ورقم موثّقان." } },
      { title: { en: "Design flows", ar: "تصميم المسارات" }, text: { en: "Welcome, follow-up, reminder and re-order journeys.", ar: "رحلات الترحيب والمتابعة والتذكير وإعادة الطلب." } },
      { title: { en: "Launch & measure", ar: "الإطلاق والقياس" }, text: { en: "Campaigns go out, replies get handled, results get tracked.", ar: "تُرسل الحملات، تُعالج الردود، وتُتتبع النتائج." } },
    ],
    idealFor: {
      en: ["Retail and e-commerce", "Clinics, salons and appointment businesses", "Any brand with a customer list"],
      ar: ["التجزئة والتجارة الإلكترونية", "العيادات والصالونات وأعمال المواعيد", "أي علامة لديها قائمة عملاء"],
    },
    tools: ["WhatsApp Business API", "Meta Cloud API", "Twilio", "Zoko", "HubSpot"],
  },
  {
    slug: "email-marketing",
    group: "marketing",
    icon: "email",
    accent: ["#F59E0B", "#FF5E62"],
    title: { en: "Email Marketing & Automation", ar: "التسويق عبر البريد الإلكتروني والأتمتة" },
    short: {
      en: "Newsletters, lifecycle flows and campaigns that people actually open.",
      ar: "نشرات بريدية ومسارات دورة حياة وحملات يفتحها الناس فعلاً.",
    },
    description: {
      en: "Email remains the highest-ROI channel when done well. We design beautiful bilingual templates, build automated lifecycle journeys and segment your audience so the right message lands at the right moment.",
      ar: "لا يزال البريد الإلكتروني القناة ذات العائد الأعلى عندما يُنفَّذ بإتقان. نصمم قوالب جميلة ثنائية اللغة، ونبني رحلات آلية لدورة حياة العميل، ونقسّم جمهورك لتصل الرسالة المناسبة في اللحظة المناسبة.",
    },
    features: {
      en: [
        "Platform setup, domain authentication and deliverability",
        "Responsive bilingual email templates",
        "Welcome, nurture, cart-recovery and win-back flows",
        "Audience segmentation and personalisation",
        "Monthly newsletters and promotional campaigns",
        "A/B testing and revenue attribution",
      ],
      ar: [
        "إعداد المنصة وتوثيق النطاق وضمان الوصول",
        "قوالب بريد متجاوبة ثنائية اللغة",
        "مسارات الترحيب والرعاية واسترداد السلة واستعادة العملاء",
        "تقسيم الجمهور والتخصيص",
        "نشرات شهرية وحملات ترويجية",
        "اختبارات A/B وإسناد الإيرادات",
      ],
    },
    steps: [
      { title: { en: "Foundation", ar: "الأساس" }, text: { en: "Clean list, authenticated domain, branded templates.", ar: "قائمة نظيفة ونطاق موثّق وقوالب بهوية علامتك." } },
      { title: { en: "Automate", ar: "الأتمتة" }, text: { en: "Journeys that run 24/7 and grow revenue on autopilot.", ar: "رحلات تعمل على مدار الساعة وتنمّي الإيرادات تلقائياً." } },
      { title: { en: "Campaigns", ar: "الحملات" }, text: { en: "Regular sends, tested and optimised for opens and clicks.", ar: "إرسال منتظم، مختبر ومحسّن لمعدلات الفتح والنقر." } },
    ],
    idealFor: {
      en: ["E-commerce and subscription businesses", "B2B companies with long sales cycles", "Brands with a growing customer database"],
      ar: ["التجارة الإلكترونية وأعمال الاشتراكات", "شركات B2B ذات دورات بيع طويلة", "العلامات ذات قاعدة عملاء متنامية"],
    },
    tools: ["Klaviyo", "Mailchimp", "Brevo", "HubSpot", "Resend"],
  },
  {
    slug: "ai-video-production",
    group: "creative",
    icon: "video",
    accent: ["#FF2D55", "#7C5CFF"],
    title: { en: "AI Video Production", ar: "إنتاج الفيديو بالذكاء الاصطناعي" },
    short: {
      en: "Cinematic ads, product films and reels — produced with AI, finished by humans.",
      ar: "إعلانات سينمائية وأفلام منتجات وريلز — منتَجة بالذكاء الاصطناعي، ومُتقنة بأيدٍ بشرية.",
    },
    description: {
      en: "Our studio combines the latest generative video, voice and motion tools with real creative direction. The result: broadcast-quality videos in days, not months — in Arabic and English, in any format your channels need.",
      ar: "يجمع استوديونا بين أحدث أدوات توليد الفيديو والصوت والحركة وبين إخراج إبداعي حقيقي. النتيجة: فيديوهات بجودة البث خلال أيام لا شهور — بالعربية والإنجليزية، وبأي صيغة تحتاجها قنواتك.",
    },
    features: {
      en: [
        "Concept, script and storyboard",
        "AI-generated scenes, avatars and voice-over (Arabic & English)",
        "Product and brand films, ads and explainers",
        "Reels, TikToks and short-form series",
        "Motion graphics, subtitles and sound design",
        "All formats: 16:9, 9:16, 1:1 — in 4K",
      ],
      ar: [
        "الفكرة والسيناريو واللوحة القصصية",
        "مشاهد وشخصيات وتعليق صوتي بالذكاء الاصطناعي (عربي وإنجليزي)",
        "أفلام المنتجات والعلامات والإعلانات والفيديوهات التوضيحية",
        "ريلز وتيك توك وسلاسل قصيرة",
        "موشن جرافيك وترجمة وتصميم صوتي",
        "جميع الصيغ: 16:9 و9:16 و1:1 — بدقة 4K",
      ],
    },
    steps: [
      { title: { en: "Concept", ar: "الفكرة" }, text: { en: "We write the story and plan every shot.", ar: "نكتب القصة ونخطط كل لقطة." } },
      { title: { en: "Generate & craft", ar: "التوليد والصقل" }, text: { en: "AI generation, human editing, colour and sound.", ar: "توليد بالذكاء الاصطناعي، ومونتاج بشري، وتلوين وصوت." } },
      { title: { en: "Deliver", ar: "التسليم" }, text: { en: "Every format and length, ready to publish.", ar: "كل الصيغ والأطوال، جاهزة للنشر." } },
    ],
    idealFor: {
      en: ["Brands that need high-volume video content", "Product launches and campaigns", "Real estate, hospitality, retail and education"],
      ar: ["العلامات التي تحتاج كمية كبيرة من محتوى الفيديو", "إطلاق المنتجات والحملات", "العقارات والضيافة والتجزئة والتعليم"],
    },
    tools: ["Veo", "Runway", "Kling", "ElevenLabs", "After Effects", "DaVinci Resolve"],
  },
  {
    slug: "design-branding",
    group: "creative",
    icon: "design",
    accent: ["#00D1FF", "#7C5CFF"],
    title: { en: "Graphic Design & Branding", ar: "التصميم الجرافيكي والهوية البصرية" },
    short: {
      en: "Logos, identities, social visuals and campaigns that look world-class.",
      ar: "شعارات وهويات وتصاميم سوشال ميديا وحملات بمستوى عالمي.",
    },
    description: {
      en: "From a complete brand identity to daily social visuals, our designers create work that is beautiful, consistent and built to perform. Bilingual typography and cultural fluency come standard.",
      ar: "من الهوية البصرية الكاملة إلى تصاميم السوشال ميديا اليومية، يبتكر مصممونا أعمالاً جميلة ومتسقة ومصممة لتحقيق النتائج. الطباعة ثنائية اللغة والفهم الثقافي جزء أساسي من عملنا.",
    },
    features: {
      en: [
        "Logo and visual identity systems",
        "Brand guidelines, Arabic & English typography",
        "Social media templates and campaign visuals",
        "Packaging, print, signage and stationery",
        "Pitch decks, brochures and company profiles",
        "AI-assisted image generation and retouching",
      ],
      ar: [
        "الشعارات وأنظمة الهوية البصرية",
        "دليل الهوية والطباعة العربية والإنجليزية",
        "قوالب السوشال ميديا وتصاميم الحملات",
        "التغليف والمطبوعات واللافتات والقرطاسية",
        "العروض التقديمية والكتيبات والملفات التعريفية",
        "توليد الصور ومعالجتها بمساعدة الذكاء الاصطناعي",
      ],
    },
    steps: [
      { title: { en: "Discovery", ar: "الاستكشاف" }, text: { en: "Brand workshop, references and direction.", ar: "ورشة العلامة والمراجع والاتجاه." } },
      { title: { en: "Design", ar: "التصميم" }, text: { en: "Concepts, iterations and a system that scales.", ar: "مفاهيم وتكرارات ونظام قابل للتوسع." } },
      { title: { en: "Hand-over", ar: "التسليم" }, text: { en: "Source files, guidelines and templates — all yours.", ar: "الملفات المصدرية والدليل والقوالب — كلها ملكك." } },
    ],
    idealFor: {
      en: ["New businesses and rebrands", "Brands that need consistent social visuals", "Campaign and product launches"],
      ar: ["الأعمال الجديدة وإعادة بناء الهويات", "العلامات التي تحتاج تصاميم سوشال متسقة", "إطلاق الحملات والمنتجات"],
    },
    tools: ["Figma", "Adobe Illustrator", "Photoshop", "Midjourney", "Canva"],
  },
  {
    slug: "web-development",
    group: "tech",
    icon: "web",
    accent: ["#0B6BFF", "#7C5CFF"],
    title: { en: "Website Development", ar: "تطوير المواقع الإلكترونية" },
    short: {
      en: "Blazing-fast, bilingual websites and e-commerce stores that convert.",
      ar: "مواقع ومتاجر إلكترونية ثنائية اللغة، فائقة السرعة، ومصممة للتحويل.",
    },
    description: {
      en: "We design and build websites that load instantly, rank on Google and turn visitors into customers. Corporate sites, landing pages and full e-commerce — Arabic and English, with RTL done right.",
      ar: "نصمم ونبني مواقع تُحمَّل فوراً، وتتصدر نتائج جوجل، وتحوّل الزوار إلى عملاء. مواقع الشركات وصفحات الهبوط والمتاجر الإلكترونية الكاملة — بالعربية والإنجليزية، مع دعم صحيح للاتجاه من اليمين لليسار.",
    },
    features: {
      en: [
        "UX/UI design and prototyping",
        "Next.js, WordPress or Shopify builds",
        "Bilingual (AR/EN) with full RTL support",
        "Technical SEO, Core Web Vitals and analytics",
        "E-commerce with local payment gateways",
        "Hosting, security and ongoing maintenance",
      ],
      ar: [
        "تصميم تجربة وواجهة المستخدم والنماذج الأولية",
        "بناء بـ Next.js أو WordPress أو Shopify",
        "ثنائي اللغة (عربي/إنجليزي) مع دعم كامل لـ RTL",
        "تحسين محركات البحث التقني ومؤشرات الويب الأساسية والتحليلات",
        "تجارة إلكترونية مع بوابات دفع محلية",
        "الاستضافة والحماية والصيانة المستمرة",
      ],
    },
    steps: [
      { title: { en: "Design", ar: "التصميم" }, text: { en: "Wireframes and pixel-perfect UI you approve first.", ar: "مخططات وواجهة دقيقة تعتمدها أولاً." } },
      { title: { en: "Build", ar: "البناء" }, text: { en: "Clean, fast code with SEO and analytics baked in.", ar: "كود نظيف وسريع مع تحسين محركات البحث والتحليلات مدمجة." } },
      { title: { en: "Launch & support", ar: "الإطلاق والدعم" }, text: { en: "Deployment, training and a support plan.", ar: "النشر والتدريب وخطة دعم." } },
    ],
    idealFor: {
      en: ["Companies that need a modern corporate site", "Retailers moving to e-commerce", "Campaign landing pages"],
      ar: ["الشركات التي تحتاج موقعاً مؤسسياً حديثاً", "تجار التجزئة المتجهون للتجارة الإلكترونية", "صفحات هبوط للحملات"],
    },
    tools: ["Next.js", "React", "Shopify", "WordPress", "Vercel", "AWS"],
  },
  {
    slug: "mobile-apps",
    group: "tech",
    icon: "mobile",
    accent: ["#00B8A9", "#0B6BFF"],
    title: { en: "Mobile App Development", ar: "تطوير تطبيقات الجوال" },
    short: {
      en: "iOS and Android apps your customers love to use.",
      ar: "تطبيقات iOS وأندرويد يحب عملاؤك استخدامها.",
    },
    description: {
      en: "From idea to App Store, we design and build native-quality mobile apps with a single codebase. Delivery, booking, loyalty, marketplace or internal tools — launched fast and built to scale.",
      ar: "من الفكرة إلى متجر التطبيقات، نصمم ونبني تطبيقات جوال بجودة التطبيقات الأصلية بقاعدة كود واحدة. توصيل أو حجز أو ولاء أو سوق إلكتروني أو أدوات داخلية — تُطلق بسرعة وتُبنى للتوسع.",
    },
    features: {
      en: [
        "Product discovery and UX design",
        "Cross-platform apps (React Native / Flutter)",
        "Backend, APIs and admin dashboards",
        "Payments, notifications, maps and chat",
        "App Store and Google Play publishing",
        "Analytics, crash monitoring and updates",
      ],
      ar: [
        "اكتشاف المنتج وتصميم تجربة المستخدم",
        "تطبيقات متعددة المنصات (React Native / Flutter)",
        "الخلفية البرمجية والواجهات ولوحات الإدارة",
        "المدفوعات والإشعارات والخرائط والمحادثة",
        "النشر على App Store وGoogle Play",
        "التحليلات ومراقبة الأعطال والتحديثات",
      ],
    },
    steps: [
      { title: { en: "Scope", ar: "النطاق" }, text: { en: "Features, flows and a fixed timeline.", ar: "الميزات والمسارات وجدول زمني محدد." } },
      { title: { en: "Design & develop", ar: "التصميم والتطوير" }, text: { en: "Weekly builds you can test on your phone.", ar: "إصدارات أسبوعية يمكنك تجربتها على هاتفك." } },
      { title: { en: "Publish & grow", ar: "النشر والنمو" }, text: { en: "Store launch, marketing assets and iteration.", ar: "الإطلاق في المتاجر ومواد التسويق والتطوير المستمر." } },
    ],
    idealFor: {
      en: ["Startups launching a product", "Retail, F&B and service businesses", "Enterprises digitising operations"],
      ar: ["الشركات الناشئة التي تطلق منتجاً", "أعمال التجزئة والمطاعم والخدمات", "المؤسسات التي ترقمن عملياتها"],
    },
    tools: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase", "Supabase"],
  },
  {
    slug: "custom-software-crm-erp",
    group: "tech",
    icon: "software",
    accent: ["#7C5CFF", "#FF4D8D"],
    title: { en: "Custom Software, CRM & ERP", ar: "البرمجيات المخصصة وأنظمة CRM وERP" },
    short: {
      en: "Systems built around how your business actually runs.",
      ar: "أنظمة مبنية حول الطريقة التي تعمل بها شركتك فعلاً.",
    },
    description: {
      en: "Off-the-shelf tools rarely fit. We build CRM, ERP, booking, inventory and workflow systems tailored to your processes — or customise and integrate the platforms you already use. Secure, scalable and yours.",
      ar: "نادراً ما تناسبك الأدوات الجاهزة. نبني أنظمة CRM وERP والحجوزات والمخزون وسير العمل مصممة حول عملياتك — أو نخصص وندمج المنصات التي تستخدمها بالفعل. آمنة، قابلة للتوسع، وملك لك.",
    },
    features: {
      en: [
        "Custom CRM: leads, pipelines, WhatsApp and email integration",
        "ERP modules: sales, inventory, HR, finance and reporting",
        "Booking, POS, delivery and operations systems",
        "Dashboards, automation and AI assistants",
        "Integrations with payment, accounting and government portals",
        "Cloud hosting, security, backups and SLAs",
      ],
      ar: [
        "نظام CRM مخصص: العملاء المحتملون، مسارات البيع، تكامل واتساب والبريد",
        "وحدات ERP: المبيعات والمخزون والموارد البشرية والمالية والتقارير",
        "أنظمة الحجوزات ونقاط البيع والتوصيل والعمليات",
        "لوحات متابعة وأتمتة ومساعدون بالذكاء الاصطناعي",
        "تكامل مع أنظمة الدفع والمحاسبة والبوابات الحكومية",
        "استضافة سحابية وحماية ونسخ احتياطي واتفاقيات مستوى خدمة",
      ],
    },
    steps: [
      { title: { en: "Process mapping", ar: "رسم العمليات" }, text: { en: "We document how work flows today and where it breaks.", ar: "نوثق كيف يسير العمل اليوم وأين يتعثر." } },
      { title: { en: "Build in sprints", ar: "البناء على مراحل" }, text: { en: "Working software every two weeks, with your feedback.", ar: "برمجيات عاملة كل أسبوعين، مع ملاحظاتك." } },
      { title: { en: "Roll out", ar: "التشغيل" }, text: { en: "Data migration, training and long-term support.", ar: "نقل البيانات والتدريب والدعم طويل الأمد." } },
    ],
    idealFor: {
      en: ["Growing businesses drowning in spreadsheets", "Companies with sales teams that need a real CRM", "Operations that need custom workflows"],
      ar: ["الشركات النامية الغارقة في جداول البيانات", "الشركات ذات فرق المبيعات التي تحتاج CRM حقيقياً", "العمليات التي تحتاج سير عمل مخصص"],
    },
    tools: ["Node.js", "PostgreSQL", "Odoo", "HubSpot", "Zoho", "AWS"],
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export function servicesByGroup(group: ServiceGroup): Service[] {
  return services.filter((s) => s.group === group);
}

export const serviceGroups: ServiceGroup[] = ["marketing", "creative", "tech"];
