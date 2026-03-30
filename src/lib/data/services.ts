export interface ServiceSection {
  heading: string;
  body: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface Service {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  heroHeading: string;
  heroSubheading: string;
  icon: string;
  sections: ServiceSection[];
  features: string[];
  faqs: FAQ[];
  relatedServices: string[];
}

export const services: Service[] = [
  {
    slug: "tv-installation",
    title: "TV Installation Services in Hampton Roads",
    shortTitle: "TV Installation",
    description:
      "Professional TV mounting and installation for homes and businesses in Norfolk, Virginia Beach, and Hampton Roads. Expert HDTV, LED, and OLED installation since 1977.",
    heroHeading: "Professional TV Installation",
    heroSubheading:
      "Expert mounting and setup for residential and commercial spaces across Hampton Roads.",
    icon: "tv",
    sections: [
      {
        heading: "Residential TV Installation",
        body: "Transform your living space with a professionally mounted TV. Whether it's above your fireplace, in the bedroom, kitchen, or a dedicated home theater room, our team handles every detail — from choosing the right mount to concealing all cables for a clean, polished look. We work with all TV brands and sizes, including the latest OLED, QLED, and LED displays.",
      },
      {
        heading: "Commercial Display Installation",
        body: "Elevate your business with professionally installed displays. We set up TVs and digital signage in conference rooms, lobbies, waiting areas, restaurants, and retail spaces. Our commercial installations include proper cable management, network connectivity, and integration with your existing AV systems.",
      },
      {
        heading: "Our Installation Process",
        body: "Every installation begins with a free consultation to assess your space and needs. We help you choose the ideal mounting location, recommend the right hardware, and schedule installation at your convenience. Our technicians arrive on time, protect your space during work, and leave everything clean and fully operational.",
      },
    ],
    features: [
      "Wall mounting on any surface — drywall, brick, stone, concrete",
      "Above-fireplace installations with heat management",
      "In-wall cable concealment for a clean look",
      "Multi-room and whole-home setups",
      "Soundbar and surround sound integration",
      "Smart home and streaming device setup",
    ],
    faqs: [
      {
        question: "How long does a TV installation take?",
        answer:
          "Most residential TV installations take 1-2 hours. More complex setups with in-wall cable routing or multi-room systems may take 3-4 hours.",
      },
      {
        question: "Can you mount a TV on a brick or stone fireplace?",
        answer:
          "Yes. We have specialized tools and anchors for mounting on brick, stone, concrete, and other masonry surfaces.",
      },
      {
        question: "Do you provide the TV mount?",
        answer:
          "We can supply professional-grade mounts or work with one you've already purchased. We'll recommend the best mount type for your TV size and wall material.",
      },
    ],
    relatedServices: ["commercial-av", "security-cameras"],
  },
  {
    slug: "commercial-av",
    title: "Commercial AV Installation in Hampton Roads",
    shortTitle: "Commercial AV",
    description:
      "Professional commercial audio visual installation for offices, conference rooms, and businesses in Norfolk and Hampton Roads. Digital signage, video walls, and AV systems.",
    heroHeading: "Commercial AV Solutions",
    heroSubheading:
      "Complete audio visual systems for offices, conference rooms, and commercial spaces.",
    icon: "building",
    sections: [
      {
        heading: "Conference Room Systems",
        body: "Equip your meeting spaces with reliable, easy-to-use AV technology. We install displays, projectors, video conferencing systems, and audio solutions that help your team collaborate effectively. From a single conference room to an entire corporate campus, we design and install systems that work.",
      },
      {
        heading: "Digital Signage",
        body: "Capture attention and communicate effectively with professional digital signage. We install and configure display networks for lobbies, retail environments, restaurants, and public spaces. Our solutions support remote content management so you can update your messaging from anywhere.",
      },
      {
        heading: "Complete AV Integration",
        body: "We design integrated AV environments that bring together displays, audio, lighting, and control systems. Our solutions are built for reliability and ease of use, with training provided to ensure your team can operate everything confidently.",
      },
    ],
    features: [
      "Conference room display and projector installation",
      "Video conferencing system setup (Zoom, Teams, etc.)",
      "Digital signage networks",
      "Audio systems for meeting rooms and open spaces",
      "Centralized AV control systems",
      "Ongoing maintenance and support",
    ],
    faqs: [
      {
        question: "Do you work with existing AV equipment?",
        answer:
          "Yes. We can integrate new equipment with your existing systems or upgrade individual components as needed.",
      },
      {
        question: "Can you install AV systems in multiple locations?",
        answer:
          "Absolutely. We serve businesses throughout Hampton Roads and have completed multi-site installations across the region.",
      },
    ],
    relatedServices: ["tv-installation", "healthcare-av"],
  },
  {
    slug: "healthcare-av",
    title: "Healthcare AV Installation in Hampton Roads",
    shortTitle: "Healthcare AV",
    description:
      "Professional AV installation for hospitals, clinics, and healthcare facilities in Norfolk and Hampton Roads. Patient room TVs, waiting area displays, and digital signage.",
    heroHeading: "Healthcare AV Installation",
    heroSubheading:
      "Specialized audio visual solutions for hospitals, clinics, and healthcare facilities.",
    icon: "heart",
    sections: [
      {
        heading: "Patient Room Entertainment",
        body: "Improve the patient experience with professionally installed TVs in patient rooms. We handle mounting, cable management, and integration with hospital pillow speaker systems. Our installations meet healthcare facility standards and are designed for easy maintenance.",
      },
      {
        heading: "Waiting Area & Common Spaces",
        body: "Keep patients and visitors informed and comfortable with displays in waiting rooms, lobbies, and common areas. We install digital signage for wayfinding, health education, and entertainment throughout your facility.",
      },
      {
        heading: "Clinical & Administrative Displays",
        body: "Support your clinical staff with displays for consultations, imaging review, and telemedicine. We install monitors and video systems in exam rooms, offices, and collaboration spaces.",
      },
    ],
    features: [
      "Patient room TV mounting and integration",
      "Waiting room and lobby display systems",
      "Digital wayfinding and information displays",
      "Telemedicine and consultation room setups",
      "Infection control-compliant installations",
      "Minimal disruption to facility operations",
    ],
    faqs: [
      {
        question: "Can you work around hospital schedules?",
        answer:
          "Yes. We schedule installations during off-peak hours and coordinate with facility management to minimize disruption to patient care.",
      },
      {
        question: "Do your installations meet healthcare standards?",
        answer:
          "Our installations comply with healthcare facility requirements including proper mounting, cable management, and infection control considerations.",
      },
    ],
    relatedServices: ["commercial-av", "tv-installation"],
  },
  {
    slug: "led-fixtures",
    title: "LED Fixture Installation in Hampton Roads",
    shortTitle: "LED Fixtures",
    description:
      "Professional LED lighting fixture installation and retrofit services in Norfolk and Hampton Roads. Energy-efficient, TAA compliant commercial LED solutions.",
    heroHeading: "LED Fixture Installation",
    heroSubheading:
      "Energy-efficient LED lighting solutions for commercial and residential spaces.",
    icon: "lightbulb",
    sections: [
      {
        heading: "Commercial LED Solutions",
        body: "Reduce your energy costs and improve lighting quality with our commercial LED fixture installations. We install new LED fixtures and retrofit existing fluorescent systems for offices, retail spaces, warehouses, and more. Our LED fixtures are fully sealed, dimmable, and available in multiple color temperatures.",
      },
      {
        heading: "LED Retrofit Services",
        body: "Upgrade your existing lighting without replacing entire fixtures. Our LED retrofit solutions convert fluorescent and HID fixtures to efficient LED technology, often qualifying for utility rebates. We handle everything from assessment to installation to rebate paperwork.",
      },
      {
        heading: "TAA Compliant Products",
        body: "We supply TAA compliant LED fixtures for government facilities and contractors. As a GSA contract holder, we understand federal procurement requirements and can provide compliant products with proper documentation.",
      },
    ],
    features: [
      "Energy-efficient LED fixtures",
      "Fully sealed fixture design",
      "Available in multiple color temperatures",
      "Dimmable options",
      "High luminous output",
      "TAA compliant products available",
    ],
    faqs: [
      {
        question: "How much can I save by switching to LED?",
        answer:
          "Most businesses see 40-60% reduction in lighting energy costs after switching to LED, with fixtures lasting 50,000+ hours compared to 10,000 for fluorescent.",
      },
      {
        question: "Do you handle disposal of old fixtures?",
        answer:
          "Yes. We remove and properly dispose of old fixtures including fluorescent tubes, following all environmental regulations.",
      },
    ],
    relatedServices: ["commercial-av", "shade-installation"],
  },
  {
    slug: "shade-installation",
    title: "Motorized Shade Installation in Hampton Roads",
    shortTitle: "Shade Installation",
    description:
      "Professional motorized shade and smart blind installation in Norfolk and Hampton Roads. Automated window treatments for homes and businesses.",
    heroHeading: "Motorized Shade Installation",
    heroSubheading:
      "Smart window treatments that combine comfort, style, and energy efficiency.",
    icon: "blinds",
    sections: [
      {
        heading: "Residential Motorized Shades",
        body: "Add convenience and elegance to your home with motorized window treatments. We install smart blinds and shades that can be controlled via remote, smartphone, or voice assistant. Our solutions integrate with popular smart home platforms including Alexa, Google Home, and Apple HomeKit.",
      },
      {
        heading: "Commercial Window Solutions",
        body: "Improve comfort and reduce energy costs in your commercial space with automated shading. We install motorized systems for offices, conference rooms, and storefronts that can be programmed to adjust based on time of day or sunlight levels.",
      },
      {
        heading: "Smart Home Integration",
        body: "Our motorized shades work seamlessly with your existing smart home ecosystem. We configure schedules, scenes, and automation routines so your shades adjust automatically — improving comfort while reducing heating and cooling costs.",
      },
    ],
    features: [
      "Motorized roller, cellular, and roman shades",
      "Voice control via Alexa, Google, and Siri",
      "Smartphone and remote control operation",
      "Scheduled automation and sun tracking",
      "Integration with smart home systems",
      "Wide selection of fabrics and styles",
    ],
    faqs: [
      {
        question: "Do motorized shades need to be plugged in?",
        answer:
          "Many motorized shades run on rechargeable batteries that last 6-12 months per charge. Hardwired options are also available for permanent installations.",
      },
      {
        question: "Can you automate my existing window shades?",
        answer:
          "In some cases, yes. We can assess your current window treatments and recommend motorization options or suggest replacements if needed.",
      },
    ],
    relatedServices: ["tv-installation", "led-fixtures"],
  },
  {
    slug: "security-cameras",
    title: "Security Camera Installation in Hampton Roads",
    shortTitle: "Security Cameras",
    description:
      "Professional security camera and surveillance system installation in Norfolk and Hampton Roads. Home and commercial CCTV, IP cameras, and monitoring solutions.",
    heroHeading: "Security Camera Installation",
    heroSubheading:
      "Protect your property with professionally installed surveillance systems.",
    icon: "camera",
    sections: [
      {
        heading: "Home Security Cameras",
        body: "Protect your home and family with a professionally designed and installed security camera system. We assess your property, recommend optimal camera placement, and install everything with clean cable routing. View your cameras from anywhere with smartphone apps.",
      },
      {
        heading: "Commercial Surveillance",
        body: "Secure your business with a comprehensive surveillance system. We install IP camera networks for offices, retail stores, warehouses, and construction sites. Our commercial systems include high-resolution cameras, NVR recording, and remote monitoring capabilities.",
      },
      {
        heading: "System Design & Consultation",
        body: "Every property is different. We start with a site survey to identify vulnerable areas and recommend the right cameras, recording equipment, and monitoring setup for your specific needs and budget.",
      },
    ],
    features: [
      "Indoor and outdoor camera installation",
      "High-resolution IP and CCTV cameras",
      "Night vision and wide-angle options",
      "NVR/DVR recording system setup",
      "Remote viewing via smartphone",
      "Motion detection and alert configuration",
    ],
    faqs: [
      {
        question: "How many cameras do I need?",
        answer:
          "It depends on your property. Most homes need 4-8 cameras for comprehensive coverage. We provide a free site survey to recommend the right number and placement.",
      },
      {
        question: "Can I view my cameras remotely?",
        answer:
          "Yes. All our camera systems include remote viewing capability through smartphone apps, so you can check on your property from anywhere.",
      },
    ],
    relatedServices: ["commercial-av", "tv-installation"],
  },
  {
    slug: "digital-signage",
    title: "Digital Signage Installation in Hampton Roads",
    shortTitle: "Digital Signage",
    description:
      "Professional digital signage installation for restaurants, retail, offices, and healthcare facilities in Norfolk and Hampton Roads. Menu boards, video walls, and display networks.",
    heroHeading: "Digital Signage Solutions",
    heroSubheading:
      "Engage customers, inform visitors, and modernize your business with professional digital displays.",
    icon: "signage",
    sections: [
      {
        heading: "Restaurant & Cafe Menu Boards",
        body: "Replace printed menus with vibrant digital displays that are easy to update. Change prices, add daily specials, feature seasonal items, and display high-quality food photography — all from your phone or computer. Digital menu boards have been shown to increase average order value by drawing attention to high-margin items and promotions. We install indoor counter displays, drive-through boards, and window-facing screens.",
      },
      {
        heading: "Retail & Storefront Displays",
        body: "Capture foot traffic and drive sales with eye-catching digital displays. Promote sales, highlight new arrivals, display social media feeds, or run branded content in your storefront windows and throughout your store. Our retail signage solutions support scheduled content so your promotions change automatically by time of day or day of week.",
      },
      {
        heading: "Office & Corporate Signage",
        body: "Make a strong first impression with lobby displays showing company news, welcome messages, and brand content. Keep your team informed with internal dashboards, KPI displays, and meeting room schedules. We install everything from single lobby screens to multi-floor display networks with centralized management.",
      },
      {
        heading: "Healthcare & Waiting Room Displays",
        body: "Improve the patient experience with displays showing wait times, health education content, wayfinding information, and entertainment. Digital signage in healthcare settings has been shown to reduce perceived wait times and improve patient satisfaction. We design solutions that are easy for staff to manage.",
      },
      {
        heading: "Content Management & Remote Updates",
        body: "Every digital signage system we install includes content management software so you can update your displays from anywhere. Schedule content in advance, create playlists, and manage multiple screens from a single dashboard. We set everything up, train your staff, and provide ongoing support.",
      },
    ],
    features: [
      "Commercial-grade displays rated for 16+ hours daily operation",
      "Indoor and outdoor digital signage options",
      "Cloud-based content management — update from anywhere",
      "Scheduled content playlists and dayparting",
      "Video wall and multi-screen configurations",
      "Menu board systems with POS integration options",
      "Portrait and landscape orientations",
      "Professional mounting and cable concealment",
    ],
    faqs: [
      {
        question: "How much does a digital signage setup cost?",
        answer:
          "A single-screen setup typically runs $1,000–$3,500 including a commercial display, media player, content management software, and professional installation. Multi-screen networks and video walls are quoted per project.",
      },
      {
        question: "Can I use a regular TV instead of a commercial display?",
        answer:
          "For screens running less than 8 hours a day in non-customer-facing areas, a consumer TV can work. For anything customer-facing or running extended hours, commercial displays are worth the investment — they're brighter, more durable, and designed for continuous operation.",
      },
      {
        question: "How do I update the content on my digital signs?",
        answer:
          "Through a web-based content management platform. You can upload images, videos, and text from any computer or smartphone. Most changes go live within seconds.",
      },
      {
        question: "Do you provide the content design?",
        answer:
          "We focus on the hardware and installation side. We can recommend content design partners, and many content management platforms include built-in templates that make it easy to create professional-looking content yourself.",
      },
      {
        question: "Can digital menu boards integrate with my POS system?",
        answer:
          "Yes, many digital signage platforms support POS integration so your menu and pricing stay in sync automatically. We can discuss compatibility with your specific POS during consultation.",
      },
    ],
    relatedServices: ["commercial-av", "tv-installation", "led-fixtures"],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
