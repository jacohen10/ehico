export interface Manufacturer {
  name: string;
  slug: string;
  description: string;
  website?: string;
  categories: string[];
}

export const manufacturers: Manufacturer[] = [
  {
    name: "LG",
    slug: "lg",
    description: "Commercial and residential displays, digital signage",
    website: "https://www.lg.com",
    categories: ["displays", "digital-signage"],
  },
  {
    name: "Samsung",
    slug: "samsung",
    description: "TVs, commercial displays, and digital signage solutions",
    website: "https://www.samsung.com",
    categories: ["displays", "digital-signage"],
  },
  {
    name: "Peerless-AV",
    slug: "peerless-av",
    description: "Professional AV mounting solutions and kiosks",
    website: "https://www.peerless-av.com",
    categories: ["mounts", "kiosks"],
  },
  {
    name: "Da-Lite",
    slug: "da-lite",
    description: "Projection screens for commercial and residential use",
    website: "https://www.legrandav.com/da-lite",
    categories: ["projection"],
  },
  {
    name: "RCA",
    slug: "rca",
    description: "Consumer electronics and hospitality displays",
    categories: ["displays"],
  },
  {
    name: "Amplivox",
    slug: "amplivox",
    description: "Portable sound systems and lecterns",
    website: "https://www.ampli.com",
    categories: ["audio"],
  },
  {
    name: "Vutech",
    slug: "vutech",
    description: "LED fixtures and lighting solutions",
    categories: ["led-fixtures"],
  },
  {
    name: "Cooltouch",
    slug: "cooltouch",
    description: "Interactive display and touch screen solutions",
    categories: ["displays", "interactive"],
  },
  {
    name: "Videotel",
    slug: "videotel",
    description: "Digital signage media players",
    website: "https://www.videoteldigital.com",
    categories: ["digital-signage"],
  },
  {
    name: "HCI",
    slug: "hci",
    description: "Healthcare and hospitality TV solutions",
    categories: ["displays", "healthcare"],
  },
  {
    name: "VTI",
    slug: "vti",
    description: "AV furniture and equipment racks",
    categories: ["furniture"],
  },
];
