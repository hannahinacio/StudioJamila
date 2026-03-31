export type StudioJamilaNavItem = {
  label: 'about' | 'services' | 'projects' | 'contact';
  href: string;
};

export const studioJamilaNav: StudioJamilaNavItem[] = [
  { label: 'about', href: '/about' },
  { label: 'services', href: '/services' },
  { label: 'projects', href: '/projects' },
  { label: 'contact', href: '/contact' },
];

export type StudioJamilaFooterSocial = {
  label: 'instagram' | 'tiktok';
  href: string;
};

export type StudioJamilaFooter = {
  email: string;
  socials: StudioJamilaFooterSocial[];
  siteBy: string;
  siteName: string;
  siteHref: string;
};

export const studioJamilaFooter: StudioJamilaFooter = {
  email: 'hi@studiojamila.com',
  socials: [
    { label: 'instagram', href: 'https://www.instagram.com/studiojamila/' },
    { label: 'tiktok', href: 'https://tiktok.com/@studiojamila' },
  ],
  siteBy: 'site by',
  siteName: 'VHAI',
  siteHref: 'https://vhaistudios.com',
};

export type StudioJamilaImage = {
  src: string;
  alt: string;
};

export type StudioJamilaProject = {
  slug: string;
  title: string;
  coverImage: StudioJamilaImage;
  heroImage: StudioJamilaImage;
  galleryImages: StudioJamilaImage[];
  client: string;
  projectType: string;
  location: string;
  year: number;
  services: string[];
  summary: string;
  description: string;
  narrative?: string;
  categoryLabel?: string;
};

export const studioJamilaHome = {
  fingerFoods: {
    title: '(finger foods)',
    images: [
      { src: '/finger-foods-home/IMG_8275.jpeg', alt: 'Finger food, editorial capture 1' },
      { src: '/finger-foods-home/IMG_5629.jpeg', alt: 'Finger food, editorial capture 2' },
      { src: '/finger-foods-home/IMG_3811.jpeg', alt: 'Finger food, editorial capture 3' },
      { src: '/finger-foods-home/IMG_6501.jpeg', alt: 'Finger food, editorial capture 4' },
      { src: '/finger-foods-home/IMG_1307.jpeg', alt: 'Finger food, editorial capture 5' },
      { src: '/finger-foods-home/IMG_3098.jpeg', alt: 'Finger food, editorial capture 6' },
      { src: '/finger-foods-home/IMG_9850.jpeg', alt: 'Finger food, editorial capture 7' },
      { src: '/finger-foods-home/BFC69BF5-9602-4F4B-BAB8-5DF6A34AA1A9.jpeg', alt: 'Finger food, editorial capture 8' },
      { src: '/finger-foods-home/IMG_5986.jpeg', alt: 'Finger food, editorial capture 9' },
      { src: '/finger-foods-home/IMG_3100.jpeg', alt: 'Finger food, editorial capture 10' },
      { src: '/finger-foods-home/IMG_7620.jpeg', alt: 'Finger food, editorial capture 11' },
      { src: '/finger-foods-home/IMG_6897.jpeg', alt: 'Finger food, editorial capture 12' },
      { src: '/finger-foods-home/IMG_3347.jpeg', alt: 'Finger food, editorial capture 13' },
      { src: '/finger-foods-home/IMG_8165.jpeg', alt: 'Finger food, editorial capture 14' },
      { src: '/finger-foods-home/IMG_5875.jpeg', alt: 'Finger food, editorial capture 15' },
      { src: '/finger-foods-home/IMG_7022.jpeg', alt: 'Finger food, editorial capture 16' },
      { src: '/finger-foods-home/IMG_6828.jpeg', alt: 'Finger food, editorial capture 17' },
      { src: '/finger-foods-home/IMG_6912.jpeg', alt: 'Finger food, editorial capture 18' },
      { src: '/finger-foods-home/IMG_8127.jpeg', alt: 'Finger food, editorial capture 19' },
      { src: '/finger-foods-home/IMG_3762.jpeg', alt: 'Finger food, editorial capture 20' },
      { src: '/finger-foods-home/IMG_2979.jpeg', alt: 'Finger food, editorial capture 21' },
      { src: '/finger-foods-home/IMG_8818.jpeg', alt: 'Finger food, editorial capture 22' },
    ] as StudioJamilaImage[],
  },
  sitdownDinners: {
    title: '(sitdown dinners)',
    images: [
      { src: '/sit-down-home/100B7E4F-CF18-4978-8F17-5FE5ED8D2D2F.jpeg', alt: 'Sitdown dinner, editorial capture 1' },
      { src: '/sit-down-home/FullSizeRender.jpeg', alt: 'Sitdown dinner, editorial capture 2' },
      { src: '/sit-down-home/IMG_2111.jpeg', alt: 'Sitdown dinner, editorial capture 3' },
      { src: '/sit-down-home/IMG_4142.jpeg', alt: 'Sitdown dinner, editorial capture 4' },
      { src: '/sit-down-home/IMG_4619.jpeg', alt: 'Sitdown dinner, editorial capture 5' },
      { src: '/sit-down-home/IMG_5004.jpeg', alt: 'Sitdown dinner, editorial capture 6' },
      { src: '/sit-down-home/IMG_5084.jpeg', alt: 'Sitdown dinner, editorial capture 7' },
      { src: '/sit-down-home/IMG_5116.jpeg', alt: 'Sitdown dinner, editorial capture 8' },
      { src: '/sit-down-home/IMG_5282.jpeg', alt: 'Sitdown dinner, editorial capture 9' },
      { src: '/sit-down-home/IMG_5352.jpeg', alt: 'Sitdown dinner, editorial capture 10' },
      { src: '/sit-down-home/IMG_5921.jpeg', alt: 'Sitdown dinner, editorial capture 11' },
      { src: '/sit-down-home/IMG_5972.jpeg', alt: 'Sitdown dinner, editorial capture 12' },
      { src: '/sit-down-home/IMG_6673.jpeg', alt: 'Sitdown dinner, editorial capture 13' },
      { src: '/sit-down-home/IMG_6800.jpeg', alt: 'Sitdown dinner, editorial capture 14' },
      { src: '/sit-down-home/IMG_7469.jpeg', alt: 'Sitdown dinner, editorial capture 15' },
      { src: '/sit-down-home/IMG_7553.jpeg', alt: 'Sitdown dinner, editorial capture 16' },
      { src: '/sit-down-home/IMG_7594.jpeg', alt: 'Sitdown dinner, editorial capture 17' },
      { src: '/sit-down-home/IMG_7649.jpeg', alt: 'Sitdown dinner, editorial capture 18' },
      { src: '/sit-down-home/IMG_7680.jpeg', alt: 'Sitdown dinner, editorial capture 19' },
      { src: '/sit-down-home/IMG_7717.jpeg', alt: 'Sitdown dinner, editorial capture 20' },
      { src: '/sit-down-home/IMG_7730.jpeg', alt: 'Sitdown dinner, editorial capture 21' },
      { src: '/sit-down-home/IMG_8073.jpeg', alt: 'Sitdown dinner, editorial capture 22' },
      { src: '/sit-down-home/IMG_8248.jpeg', alt: 'Sitdown dinner, editorial capture 23' },
      { src: '/sit-down-home/IMG_8319.jpeg', alt: 'Sitdown dinner, editorial capture 24' },
      { src: '/sit-down-home/IMG_9645.jpeg', alt: 'Sitdown dinner, editorial capture 25' },
    ] as StudioJamilaImage[],
  },
  setDesign: {
    title: '(set design & creative direction)',
    images: [
      { src: '/creative/2da850a3-0919-4285-8587-2bea8a68c39a.jpeg', alt: 'Set design, editorial capture 1' },
      { src: '/creative/3790BB16-0CEC-4092-B7D8-79800138FE17.jpeg', alt: 'Set design, editorial capture 2' },
      { src: '/creative/FED687DA-A32D-45C4-83D8-748F56CB5EC9.jpeg', alt: 'Set design, editorial capture 3' },
      { src: '/creative/FullSizeRender.jpeg', alt: 'Set design, editorial capture 4' },
      {
        src: '/creative/nikkmartin_studio-jamila_food-editorial_2025_berlin_5765-Bearbeitet_final-version_full-size.jpg',
        alt: 'Set design, editorial capture 5',
      },
      { src: '/creative/IMG_0467.jpeg', alt: 'Set design, editorial capture 5' },
      { src: '/creative/IMG_0518.jpeg', alt: 'Set design, editorial capture 6' },
      { src: '/creative/IMG_2058.jpeg', alt: 'Set design, editorial capture 7' },
      {
        src: '/creative/nikkmartin_studio-jamila_food-editorial_2025_berlin_6117-Bearbeitet_final-version_full-size.jpg',
        alt: 'Set design, editorial capture 8',
      },
      { src: '/creative/IMG_2349.jpeg', alt: 'Set design, editorial capture 8' },
      { src: '/creative/IMG_2369.jpeg', alt: 'Set design, editorial capture 9' },
      { src: '/creative/IMG_2385.jpeg', alt: 'Set design, editorial capture 10' },
      {
        src: '/creative/nikkmartin_studio-jamila_food-editorial_2025_berlin_6255-Bearbeitet_final-version_full-size.jpg',
        alt: 'Set design, editorial capture 11',
      },
      { src: '/creative/IMG_3026.jpeg', alt: 'Set design, editorial capture 11' },
      { src: '/creative/IMG_4108.jpeg', alt: 'Set design, editorial capture 12' },
      { src: '/creative/IMG_4196.jpeg', alt: 'Set design, editorial capture 13' },
      {
        src: '/creative/nikkmartin_studio-jamila_food-editorial_2025_berlin_6448-Bearbeitet_final-version_full-size.jpg',
        alt: 'Set design, editorial capture 14',
      },
      { src: '/creative/IMG_4202.jpeg', alt: 'Set design, editorial capture 14' },
      { src: '/creative/IMG_5206.jpeg', alt: 'Set design, editorial capture 15' },
      { src: '/creative/IMG_6496.jpeg', alt: 'Set design, editorial capture 16' },
      {
        src: '/creative/nikkmartin_studio-jamila_food-editorial_2025_berlin_6684-Bearbeitet_final-version_full-size.jpg',
        alt: 'Set design, editorial capture 17',
      },
      { src: '/creative/IMG_6497.jpeg', alt: 'Set design, editorial capture 17' },
      { src: '/creative/IMG_6661.jpeg', alt: 'Set design, editorial capture 18' },
      { src: '/creative/IMG_7624.jpeg', alt: 'Set design, editorial capture 19' },
      {
        src: '/creative/nikkmartin_studio-jamila_food-editorial_2025_berlin_6758-Bearbeitet_final-version_full-size.jpg',
        alt: 'Set design, editorial capture 20',
      },
      { src: '/creative/IMG_7865.jpeg', alt: 'Set design, editorial capture 20' },
      { src: '/creative/IMG_8513.jpeg', alt: 'Set design, editorial capture 21' },
      { src: '/creative/IMG_9059.jpeg', alt: 'Set design, editorial capture 22' },
      {
        src: '/creative/nikkmartin_studio-jamila_food-editorial_2025_berlin_6844-Bearbeitet_final-version_full-size.jpg',
        alt: 'Set design, editorial capture 23',
      },
      { src: '/creative/IMG_9159.jpeg', alt: 'Set design, editorial capture 23' },
    ] as StudioJamilaImage[],
  },
};

export const studioJamilaAbout = {
  title: '(about)',
  portrait: { src: '/Jamila-About.jpeg', alt: 'Studio Jamila portrait image' } as StudioJamilaImage,
  biography: [
    'I’m Jamila - born and raised in Cape Town, South Africa, with German roots on my mom’s side, so I’ve always felt a little bit Berlin, too :))',
    'My love for food started early. I was making my own lunch from the age of six - not because my mom couldn’t cook but because I was always a bit independent and curious. Growing up, things weren’t always easy financially, so I found my own way into the food world: working at markets, behind bars, waitressing, catering, and later consulting for cafés - all without formal training, apart from a short two-month online course.',
    'Eventually, I used my savings to move to London and take part in an intensive four-month course at Le Cordon Bleu. But honestly, my biggest lessons came from being in kitchens: working with a high-end catering company in Cape Town, creating recipes, training staff, and learning the rhythm of fine dining restaurants in Berlin. I’m constantly inspired - by eating out, cookbooks & the people around me.',
    'For the past year and a half, I’ve been creating food for fashion brands - designing dishes that reflect the story, mood, or essence of a product or collection. It’s something I truly love: collaborating with other creatives to bring a shared vision to life.',
    'Along the way, I’ve had both beautiful and challenging experiences in the industry. As a woman, it hasn’t always been easy - sometimes it felt like I had to prove myself more. But I’ve also met some of the kindest, most open-hearted people through food, many of whom I now call close friends.',
    'Studio Jamila is my space for creating and connecting - through food, through art, through shared moments. It’s about building safe, joyful environments where everyone feels welcome. No competition, no pressure - just a love for the craft and for each other.',
    'I’m really looking forward to creating something special for you and your brand, and to continue growing and sharing beautiful moments with all the inspiring creatives around me.',
    'With love,',
    'Jamila',
  ],
  team: {
    title: '(meet the team)',
    image: { src: '/Jamila-Team.jpeg', alt: 'Studio Jamila team, editorial portrait' } as StudioJamilaImage,
  },
  teamBios: [
    {
      name: '(anna)',
      text: 'Anna leads all things floral at the studio. She works closely with the seasons, creating arrangements that feel natural, thoughtful, and quietly expressive. Her flowers shape the atmosphere of every table and space we create.',
    },
    {
      name: '(nick)',
      text: 'Nick is responsible for the food. He develops menus and cooks with a focus on flavour, simplicity, and seasonality. His approach is thoughtful and precise, always centred around creating dishes people genuinely enjoy eating.',
    },
    {
      name: '(marie)',
      text: 'Marie is the calm in the middle of it all. She makes sure everything runs smoothly. She creates a warm, welcoming environment for guests while keeping the flow of each event effortless and calm.',
    },
  ],
  collaboratorsText:
    'Beyond our core team, Studio Jamila is supported by a wide circle of collaborators, creatives, and friends who all contribute their craft and care to each project.',
};

export const studioJamilaServices = {
  title: '(services)',
  intro: [
    'Studio Jamila provides tailored catering and event experiences for fashion brands, beauty brands, weddings, creative studios, and private events.',
    'We design food and drink concepts that align with the aesthetic and identity of each brand, combining taste, colour, texture, and presentation in a refined and stylish way.',
  ],
  seatedDinner: {
    title: '(seated dinner experiences)',
    images: [
      { src: '/sit-down/sitdown-1.jpeg', alt: 'Seated dinner experience image 1' },
      { src: '/sit-down/sitdown-2.jpeg', alt: 'Seated dinner experience image 2' },
      { src: '/sit-down/sitdown-3.jpeg', alt: 'Seated dinner experience image 3' },
      { src: '/sit-down/sitdown-4.jpeg', alt: 'Seated dinner experience image 4' },
      { src: '/sit-down/sitdown-5.jpeg', alt: 'Seated dinner experience image 5' },
    ] as StudioJamilaImage[],
    paragraph:
      'Our signature offering is curated seated dining experiences for brand events & special occasions.\n\nWe create the full atmosphere of the evening, including:',
    offerings: [
      '(crockery, cutlery & glassware)',
      '(table setting & design)',
      '(floral styling)',
      '(3-course menus or sharing-style dining)',
      '(wine pairing, cocktail pairing or alcohol-free pairings)',
    ],
    tail: 'Each menu and table design is tailored specifically to the brand or event concept.',
  },
  fingerFood: {
    title: '(finger foods & flying bites)',
    images: [
      { src: '/finger-foods/fingerfoods-1.jpeg', alt: 'Finger foods & flying bites image 1' },
      { src: '/finger-foods/fingerfoods-2.jpeg', alt: 'Finger foods & flying bites image 2' },
      { src: '/finger-foods/fingerfoods-3.jpeg', alt: 'Finger foods & flying bites image 3' },
      { src: '/finger-foods/fingerfoods-4.jpeg', alt: 'Finger foods & flying bites image 4' },
      { src: '/finger-foods/fingerfoods-5.jpeg', alt: 'Finger foods & flying bites image 5' },
    ] as StudioJamilaImage[],
    paragraph:
      'For busy brand events and launches, we offer elegant one-bite food experiences designed to be enjoyed easily while guests mingle.',
    offerings: ['(one-bite, no-mess creations)', '(no plates required)', '(served as flying service or as food installations)'],
    tail: 'Each menu and table design is tailored specifically to the brand or event concept.',
    tailSecondary: 'These are perfect for fashion launches, showroom events, and evening receptions.',
  },
  installations: {
    title: '(food installations)',
    images: [
      { src: '/food-installs/install-1.jpeg', alt: 'Food installation image 1' },
      { src: '/food-installs/install-2.jpeg', alt: 'Food installation image 2' },
      { src: '/food-installs/install-3.jpeg', alt: 'Food installation image 3' },
      { src: '/food-installs/install-4.jpeg', alt: 'Food installation image 4' },
      { src: '/food-installs/install-5.jpeg', alt: 'Food installation image 5' },
    ] as StudioJamilaImage[],
    paragraph:
      'We also design sculptural food installations and tables, working with different heights, materials, and props to integrate food and brand identity into the event space.',
  },
  drinksService: {
    title: '(drinks & service)',
    images: [
      { src: '/drinks/drinks-1.jpeg', alt: 'Drinks & service image 1' },
      { src: '/drinks/drinks-2.jpeg', alt: 'Drinks & service image 2' },
      { src: '/drinks/drinks-3.jpeg', alt: 'Drinks & service image 3' },
      { src: '/drinks/drinks-4.jpeg', alt: 'Drinks & service image 4' },
      { src: '/drinks/drinks-5.jpeg', alt: 'Drinks & service image 5' },
    ] as StudioJamilaImage[],
    introLine: 'We offer curated drink concepts, including:',
    offerings: ['(wine service)', '(cocktail menus tailored to the brand)', '(non-alcoholic pairings)', '(coffee and barista service)'],
    paragraphs: [
      'Our team includes chefs, runners, bartenders, and baristas, and we provide all necessary glassware and service equipment.',
      'Please note: we provide the drink service but do not supply full bar structures or furniture such as bar counters or seating.',
    ],
  },
  formats: {
    title: '(catering formats)',
    intro: 'We provide catering for:',
    items: ['(breakfast)', '(brunch)', '(lunch)', '(dinner)', '(evening receptions)'],
    closing: 'Our services are primarily based in Berlin, but we also travel across Europe & internationally.',
  },
};

export const studioJamilaContact = {
  title: '(ready to work together?)',
  intro: "Let’s chat about how Studio Jamila can bring your vision to life.",
  emailLabel: '(email)',
  email: 'hi@studiojamila.com',
  updatesLabel: '(updates)',
  updatesText: 'follow us on our socials to keep up to date with what we are working on!',
  handle: '@studiojamila',
  image: { src: '/contact-image.jpeg', alt: 'Studio Jamila contact image' } as StudioJamilaImage,
};

export const studioJamilaProjects: StudioJamilaProject[] = [
  {
    slug: 'on-x-fka-twigs-at-high-snobiety',
    title: 'On x FKA Twigs at High Snobiety',
    coverImage: { src: '/on-image.jpeg', alt: 'On x FKA Twigs at High Snobiety cover' },
    heroImage: { src: '/work/ainaj/ainaj-2.png', alt: 'On x FKA Twigs at High Snobiety hero image' },
    galleryImages: [
      { src: '/work/ainaj/ainaj-1.png', alt: 'Gallery image 1' },
      { src: '/work/ainaj/ainaj-2.png', alt: 'Gallery image 2' },
      { src: '/work/ainaj/ainaj-3.png', alt: 'Gallery image 3' },
      { src: '/work/kiko-vitals/kiko-1.png', alt: 'Gallery image 4' },
      { src: '/work/kiko-vitals/kiko-2.png', alt: 'Gallery image 5' },
      { src: '/work/kiko-vitals/kiko-3.png', alt: 'Gallery image 6' },
    ],
    client: 'On x FKA Twigs',
    projectType: 'launch catering + table design',
    location: 'Berlin',
    year: 2026,
    services: ['set & table design', 'finger foods', 'service coordination'],
    summary: 'A fashion-forward launch experience built around quiet precision and sculpted bite-sized moments.',
    description:
      'A refined hospitality concept designed to match the atmosphere of High Snobiety—elegant one-bite compositions, calm service pacing, and a table language that reads as intentional rather than decorative.',
    narrative:
      'The mood was minimal and kinetic: clean silhouettes, subtle textures, and food moments that felt like part of the editorial set.',
    categoryLabel: 'launch catering',
  },
  {
    slug: 'tommy-hilfiger',
    title: 'Tommy Hilfiger',
    coverImage: { src: '/tommy-image.jpg', alt: 'Tommy Hilfiger cover' },
    heroImage: { src: '/work/kiko-vitals/kiko-2.png', alt: 'Tommy Hilfiger hero image' },
    galleryImages: [
      { src: '/work/kiko-vitals/kiko-1.png', alt: 'Gallery image 1' },
      { src: '/work/motherland/motherland-1.png', alt: 'Gallery image 2' },
      { src: '/work/motherland/motherland-2.png', alt: 'Gallery image 3' },
      { src: '/work/pina-jewels/pina-1.png', alt: 'Gallery image 4' },
      { src: '/work/pina-jewels/pina-2.png', alt: 'Gallery image 5' },
      { src: '/work/pina-jewels/pina-3.png', alt: 'Gallery image 6' },
    ],
    client: 'Tommy Hilfiger',
    projectType: 'seated dinner experience',
    location: 'Europe',
    year: 2025,
    services: ['seated dining', 'table setting', 'floral styling', 'pairing concepts'],
    summary: 'A seated dinner composed with fashion-grade balance: texture, pacing, and refined presentation.',
    description:
      'From crockery selection to table setting and styling, the concept created a cohesive brand mood—matching the collection rhythm while keeping the experience calm and effortless for guests.',
    narrative:
      'Every course was designed like a paragraph: clear, measured, and deliberately spaced for conversation.',
    categoryLabel: 'seated dinner',
  },
  {
    slug: 'mugler',
    title: 'Mugler',
    coverImage: { src: '/Mugler-Image.jpg', alt: 'Mugler cover' },
    heroImage: { src: '/work/motherland/motherland-3.png', alt: 'Mugler hero image' },
    galleryImages: [
      { src: '/work/motherland/motherland-1.png', alt: 'Gallery image 1' },
      { src: '/work/motherland/motherland-2.png', alt: 'Gallery image 2' },
      { src: '/work/that-girl/TG-1.png', alt: 'Gallery image 3' },
      { src: '/work/that-girl/TG-2.png', alt: 'Gallery image 4' },
      { src: '/work/silent-songs/silentsongs-1.png', alt: 'Gallery image 5' },
      { src: '/work/silent-songs/silentsongs-2.png', alt: 'Gallery image 6' },
    ],
    client: 'Mugler',
    projectType: 'creative direction + dining',
    location: 'Berlin',
    year: 2024,
    services: ['creative direction', 'set design', 'food installations', 'service coordination'],
    summary: 'A creative direction-led dining experience with sculptural food language and quiet drama.',
    description:
      'The concept integrated food into the set—height, materials, and props arranged to feel intentional and fashion-forward. Service supported the pacing of the event without breaking immersion.',
    narrative:
      'Sculptural installations became the visual anchor—food as structure, rather than decoration.',
    categoryLabel: 'creative direction',
  },
  {
    slug: 'the-ordinary',
    title: 'The Ordinary',
    coverImage: { src: '/ordinary-image.jpeg', alt: 'The Ordinary cover' },
    heroImage: { src: '/work/pina-jewels/pina-2.png', alt: 'The Ordinary hero image' },
    galleryImages: [
      { src: '/work/pina-jewels/pina-1.png', alt: 'Gallery image 1' },
      { src: '/work/pina-jewels/pina-2.png', alt: 'Gallery image 2' },
      { src: '/work/pina-jewels/pina-3.png', alt: 'Gallery image 3' },
      { src: '/work/ainaj/ainaj-1.png', alt: 'Gallery image 4' },
      { src: '/work/kiko-vitals/kiko-1.png', alt: 'Gallery image 5' },
      { src: '/work/silent-songs/silentsongs-3.png', alt: 'Gallery image 6' },
    ],
    client: 'The Ordinary',
    projectType: 'brand event catering',
    location: 'Berlin',
    year: 2025,
    services: ['finger foods', 'table design', 'drink concepts'],
    summary: 'Minimal brand event catering with an editorial rhythm from first pour to final bite.',
    description:
      'A clean and refined concept designed to support the brand experience. Menus were curated for comfort and impact—presented with a restrained visual language and seamless service.',
    narrative:
      'Quiet luxury, clean composition, and a hospitality flow that let the brand moment lead.',
    categoryLabel: 'brand event',
  },
  {
    slug: 'byredo',
    title: 'Byredo',
    coverImage: { src: '/byredo-image.jpeg', alt: 'Byredo cover' },
    heroImage: { src: '/work/that-girl/TG-2.png', alt: 'Byredo hero image' },
    galleryImages: [
      { src: '/work/that-girl/TG-1.png', alt: 'Gallery image 1' },
      { src: '/work/that-girl/TG-2.png', alt: 'Gallery image 2' },
      { src: '/work/that-girl/TG-3.png', alt: 'Gallery image 3' },
      { src: '/work/ainaj/ainaj-4.png', alt: 'Gallery image 4' },
      { src: '/work/motherland/motherland-4.png', alt: 'Gallery image 5' },
      { src: '/work/pina-jewels/pina-4.png', alt: 'Gallery image 6' },
    ],
    client: 'Byredo',
    projectType: 'evening reception',
    location: 'Europe',
    year: 2026,
    services: ['flying service', 'drinks & pairings', 'table & design'],
    summary: 'An evening reception composed for mingling: smooth pacing, elevated bites, and curated drinks.',
    description:
      'The catering format focused on one-bite experiences and a cohesive table aesthetic. Drink concepts were curated to complement the mood and keep the event feeling continuous and calm.',
    narrative:
      'A sensory atmosphere—light, refined, and built for effortless conversation.',
    categoryLabel: 'reception',
  },
  {
    slug: 'exercere',
    title: 'Exercere',
    coverImage: { src: '/exercere-image.jpeg', alt: 'Exercere cover' },
    heroImage: { src: '/work/silent-songs/silentsongs-2.png', alt: 'Exercere hero image' },
    galleryImages: [
      { src: '/work/silent-songs/silentsongs-1.png', alt: 'Gallery image 1' },
      { src: '/work/silent-songs/silentsongs-2.png', alt: 'Gallery image 2' },
      { src: '/work/silent-songs/silentsongs-3.png', alt: 'Gallery image 3' },
      { src: '/work/ainaj/ainaj-3.png', alt: 'Gallery image 4' },
      { src: '/work/kiko-vitals/kiko-4.png', alt: 'Gallery image 5' },
      { src: '/work/motherland/motherland-2.png', alt: 'Gallery image 6' },
    ],
    client: 'Exercere',
    projectType: 'creative studio event',
    location: 'Berlin',
    year: 2024,
    services: ['finger foods', 'installation styling', 'service coordination'],
    summary: 'A creative studio event with install-led food moments and calm, premium hosting.',
    description:
      'Sculptural food pieces and elevated finger foods were designed to feel like part of the creative environment. Service supported the rhythm of the event while keeping the visual language restrained.',
    narrative:
      'Food as atmosphere—composed like an installation and served with quiet confidence.',
    categoryLabel: 'studio event',
  },
  {
    slug: 'xbox',
    title: 'XBox',
    coverImage: { src: '/xbox-image.jpeg', alt: 'XBox cover' },
    heroImage: { src: '/work/ainaj/ainaj-3.png', alt: 'XBox hero image' },
    galleryImages: [
      { src: '/work/ainaj/ainaj-1.png', alt: 'Gallery image 1' },
      { src: '/work/ainaj/ainaj-2.png', alt: 'Gallery image 2' },
      { src: '/work/motherland/motherland-1.png', alt: 'Gallery image 3' },
      { src: '/work/kiko-vitals/kiko-2.png', alt: 'Gallery image 4' },
      { src: '/work/pina-jewels/pina-1.png', alt: 'Gallery image 5' },
      { src: '/work/silent-songs/silentsongs-4.png', alt: 'Gallery image 6' },
    ],
    client: 'XBox',
    projectType: 'launch + mingling',
    location: 'Berlin',
    year: 2025,
    services: ['flying service', 'drink concepts', 'table design'],
    summary: 'A launch catering concept built for mingling: clean bites, quick flow, and curated drinks.',
    description:
      'The experience emphasized one-bite food moments, minimal table design, and drink concepts tailored to the brand mood. The result was premium hosting that kept the energy moving.',
    narrative:
      'Fast, refined, and intentionally composed for the pace of a brand launch.',
    categoryLabel: 'launch',
  },
  {
    slug: 'kiko-milano',
    title: 'KIKO Milano',
    coverImage: { src: '/Kiko-image.jpeg', alt: 'KIKO Milano cover' },
    heroImage: { src: '/work/kiko-vitals/kiko-3.png', alt: 'KIKO Milano hero image' },
    galleryImages: [
      { src: '/work/kiko-vitals/kiko-1.png', alt: 'Gallery image 1' },
      { src: '/work/kiko-vitals/kiko-2.png', alt: 'Gallery image 2' },
      { src: '/work/pina-jewels/pina-2.png', alt: 'Gallery image 3' },
      { src: '/work/ainaj/ainaj-2.png', alt: 'Gallery image 4' },
      { src: '/work/motherland/motherland-3.png', alt: 'Gallery image 5' },
      { src: '/work/that-girl/TG-4.png', alt: 'Gallery image 6' },
    ],
    client: 'KIKO Milano',
    projectType: 'beauty brand event',
    location: 'Europe',
    year: 2024,
    services: ['finger foods', 'table & design', 'wine & cocktail concepts'],
    summary: 'A beauty brand event with curated bites, refined presentation, and cohesive drink concepts.',
    description:
      'Menus were tailored to feel light and premium. Table design and service flow were developed to match the brand mood—minimal, quiet, and editorial.',
    narrative:
      'A gentle luxury: clean silhouettes, composed textures, and a host experience built for elegance.',
    categoryLabel: 'beauty event',
  },
  {
    slug: 'sol-de-janeiro',
    title: 'Sol De Janeiro',
    coverImage: { src: '/soldejanerio-image.jpg', alt: 'Sol De Janeiro cover' },
    heroImage: { src: '/work/motherland/motherland-4.png', alt: 'Sol De Janeiro hero image' },
    galleryImages: [
      { src: '/work/motherland/motherland-1.png', alt: 'Gallery image 1' },
      { src: '/work/motherland/motherland-2.png', alt: 'Gallery image 2' },
      { src: '/work/motherland/motherland-3.png', alt: 'Gallery image 3' },
      { src: '/work/pina-jewels/pina-4.png', alt: 'Gallery image 4' },
      { src: '/work/ainaj/ainaj-4.png', alt: 'Gallery image 5' },
      { src: '/work/silent-songs/silentsongs-1.png', alt: 'Gallery image 6' },
    ],
    client: 'Sol De Janeiro',
    projectType: 'evening reception',
    location: 'Europe',
    year: 2026,
    services: ['evening reception catering', 'drinks & pairings', 'service coordination'],
    summary: 'Evening reception catering with sculpted bites and curated drink moments.',
    description:
      'A clean reception concept designed for mingling. The menu and service flow were curated to feel smooth, premium, and aligned with the brand’s energy.',
    narrative:
      'A balanced tempo—bright moments, calm hosting, and an editorial finish.',
    categoryLabel: 'reception',
  },
  {
    slug: 'samsung',
    title: 'Samsung',
    coverImage: { src: '/samsung-image.jpeg', alt: 'Samsung cover' },
    heroImage: { src: '/work/that-girl/TG-1.png', alt: 'Samsung hero image' },
    galleryImages: [
      { src: '/work/that-girl/TG-1.png', alt: 'Gallery image 1' },
      { src: '/work/that-girl/TG-2.png', alt: 'Gallery image 2' },
      { src: '/work/ainaj/ainaj-2.png', alt: 'Gallery image 3' },
      { src: '/work/kiko-vitals/kiko-1.png', alt: 'Gallery image 4' },
      { src: '/work/silent-songs/silentsongs-2.png', alt: 'Gallery image 5' },
      { src: '/work/motherland/motherland-1.png', alt: 'Gallery image 6' },
    ],
    client: 'Samsung',
    projectType: 'launch reception',
    location: 'Berlin',
    year: 2025,
    services: ['flying service', 'drink concepts', 'table design'],
    summary: 'A refined launch reception with elevated one-bite catering and cohesive hosting.',
    description:
      'The concept focused on refined bites, clean table design, and curated drink moments—supporting the launch experience while keeping the atmosphere calm and premium.',
    narrative:
      'Precise, quiet, and editorial—designed for the moment a crowd arrives.',
    categoryLabel: 'launch reception',
  },
];

/**
 * Swap all Studio Jamila visuals to simple colored placeholders.
 * This keeps the layout/editorial rhythm intact while removing dependency on real photography.
 */
const STUDIO_JAMILA_PLACEHOLDERS: string[] = [
  '/placeholders/shape-1.svg',
  '/placeholders/shape-2.svg',
  '/placeholders/shape-3.svg',
  '/placeholders/shape-4.svg',
  '/placeholders/shape-5.svg',
  '/placeholders/shape-6.svg',
  '/placeholders/shape-7.svg',
  '/placeholders/shape-8.svg',
];

const placeholderSrc = (seed: number) => STUDIO_JAMILA_PLACEHOLDERS[seed % STUDIO_JAMILA_PLACEHOLDERS.length];

function placeholderizeImage(img: StudioJamilaImage, seed: number) {
  img.src = placeholderSrc(seed);
}

function placeholderizeImages(images: StudioJamilaImage[], baseSeed: number) {
  images.forEach((img, idx) => placeholderizeImage(img, baseSeed + idx));
}

// Home

// About (keep real provided images)

// Services
// Services

// Contact (keep real provided image)

// Projects
studioJamilaProjects.forEach((project, projectIdx) => {
  const base = 1000 + projectIdx * 100;
  placeholderizeImage(project.coverImage, base);
  placeholderizeImage(project.heroImage, base + 1);
  placeholderizeImages(project.galleryImages, base + 10);
});

// Keep a real selected-project cover image for projects index
studioJamilaProjects[0].coverImage.src = '/on-image.jpeg';
const muglerProject = studioJamilaProjects.find(project => project.slug === 'mugler');
if (muglerProject) muglerProject.coverImage.src = '/Mugler-Image.jpg';
const xboxProject = studioJamilaProjects.find(project => project.slug === 'xbox');
if (xboxProject) xboxProject.coverImage.src = '/xbox-image.jpeg';
const solDeJanerioProject = studioJamilaProjects.find(project => project.slug === 'sol-de-janeiro');
if (solDeJanerioProject) solDeJanerioProject.coverImage.src = '/soldejanerio-image.jpg';
const kikoProject = studioJamilaProjects.find(project => project.slug === 'kiko-milano');
if (kikoProject) kikoProject.coverImage.src = '/Kiko-image.jpeg';
const byredoProject = studioJamilaProjects.find(project => project.slug === 'byredo');
if (byredoProject) byredoProject.coverImage.src = '/byredo-image.jpeg';
const tommyProject = studioJamilaProjects.find(project => project.slug === 'tommy-hilfiger');
if (tommyProject) tommyProject.coverImage.src = '/tommy-image.jpg';
const ordinaryProject = studioJamilaProjects.find(project => project.slug === 'the-ordinary');
if (ordinaryProject) ordinaryProject.coverImage.src = '/ordinary-image.jpeg';
const exercereProject = studioJamilaProjects.find(project => project.slug === 'exercere');
if (exercereProject) exercereProject.coverImage.src = '/exercere-image.jpeg';
const samsungProject = studioJamilaProjects.find(project => project.slug === 'samsung');
if (samsungProject) samsungProject.coverImage.src = '/samsung-image.jpeg';
// Keep a real contact image
studioJamilaContact.image.src = '/contact-image.jpeg';

