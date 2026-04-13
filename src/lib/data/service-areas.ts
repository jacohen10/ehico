export interface ServiceArea {
  slug: string;
  city: string;
  state: string;
  description: string;
  heroHeading: string;
  highlights: string[];
  nearbyAreas: string[];
  localDetails: string;
}

export const serviceAreas: ServiceArea[] = [
  {
    slug: "norfolk",
    city: "Norfolk",
    state: "VA",
    description:
      "EHI provides professional AV installation, LED fixtures, and security cameras in Norfolk, VA. Serving the Norfolk community since 1977.",
    heroHeading: "AV Installation Services in Norfolk, VA",
    highlights: [
      "Our home base since 1977",
      "Naval Station Norfolk support",
      "Downtown commercial installations",
    ],
    nearbyAreas: ["virginia-beach", "chesapeake", "portsmouth"],
    localDetails:
      "Based on Granby Street in the heart of Norfolk, EHI has been serving the local community for nearly 50 years. From the Naval Station to downtown businesses and Ghent residences, we know Norfolk inside and out.",
  },
  {
    slug: "virginia-beach",
    city: "Virginia Beach",
    state: "VA",
    description:
      "Professional TV installation, LED fixtures, and security cameras in Virginia Beach, VA. Residential and commercial AV services from EHI.",
    heroHeading: "AV Installation Services in Virginia Beach, VA",
    highlights: [
      "Oceanfront hotel and resort installations",
      "Town Center commercial projects",
      "Residential service throughout all neighborhoods",
    ],
    nearbyAreas: ["norfolk", "chesapeake"],
    localDetails:
      "Virginia Beach is our largest residential market. From oceanfront condos to family homes in Great Neck and Kempsville, we provide expert installation services across the city.",
  },
  {
    slug: "chesapeake",
    city: "Chesapeake",
    state: "VA",
    description:
      "Professional AV installation and security camera services in Chesapeake, VA. Serving homes and businesses from EHI in Norfolk.",
    heroHeading: "AV Installation Services in Chesapeake, VA",
    highlights: [
      "Greenbrier and Battlefield area commercial work",
      "New construction installations",
      "Growing residential community",
    ],
    nearbyAreas: ["norfolk", "virginia-beach", "suffolk", "portsmouth"],
    localDetails:
      "Chesapeake's rapid growth means new homes and businesses that need professional AV installation. We serve the entire city from Greenbrier to Deep Creek.",
  },
  {
    slug: "newport-news",
    city: "Newport News",
    state: "VA",
    description:
      "Professional TV mounting, commercial AV, and security camera installation in Newport News, VA from EHI.",
    heroHeading: "AV Installation Services in Newport News, VA",
    highlights: [
      "City Center and Oyster Point commercial district",
      "Shipyard-adjacent commercial properties",
      "Peninsula residential coverage",
    ],
    nearbyAreas: ["hampton", "williamsburg"],
    localDetails:
      "We serve the Peninsula with the same expertise we bring to the Southside. Newport News businesses and homeowners trust EHI for reliable, professional installations.",
  },
  {
    slug: "hampton",
    city: "Hampton",
    state: "VA",
    description:
      "Professional AV installation services in Hampton, VA. TV mounting, LED fixtures, and security cameras from EHI.",
    heroHeading: "AV Installation Services in Hampton, VA",
    highlights: [
      "Coliseum Central commercial district",
      "Langley AFB area support",
      "Fort Monroe and downtown revitalization",
    ],
    nearbyAreas: ["newport-news", "norfolk"],
    localDetails:
      "Hampton's mix of military, educational, and residential properties makes it a diverse market we know well. From Langley area homes to downtown businesses, we're ready to help.",
  },
  {
    slug: "suffolk",
    city: "Suffolk",
    state: "VA",
    description:
      "Professional AV installation and security camera services in Suffolk, VA. Serving homes and businesses from EHI.",
    heroHeading: "AV Installation Services in Suffolk, VA",
    highlights: [
      "Harbour View growth corridor",
      "Downtown historic district",
      "New development installations",
    ],
    nearbyAreas: ["chesapeake", "portsmouth"],
    localDetails:
      "Suffolk is one of the fastest-growing cities in Hampton Roads. We help new homeowners and businesses get set up with professional AV installations from day one.",
  },
  {
    slug: "portsmouth",
    city: "Portsmouth",
    state: "VA",
    description:
      "Professional TV installation, LED lighting, and security cameras in Portsmouth, VA from EHI in Norfolk.",
    heroHeading: "AV Installation Services in Portsmouth, VA",
    highlights: [
      "Olde Towne commercial and residential",
      "Naval Medical Center area",
      "Waterfront development projects",
    ],
    nearbyAreas: ["norfolk", "chesapeake", "suffolk"],
    localDetails:
      "Just across the Elizabeth River from our Norfolk headquarters, Portsmouth is a community we serve daily. From Olde Towne to the Naval Medical Center area, we're always nearby.",
  },
  {
    slug: "williamsburg",
    city: "Williamsburg",
    state: "VA",
    description:
      "Professional AV installation services in Williamsburg, VA. TV mounting, commercial AV, and security cameras from EHI.",
    heroHeading: "AV Installation Services in Williamsburg, VA",
    highlights: [
      "College of William & Mary area",
      "Tourism and hospitality installations",
      "New Town and Settlers Market commercial",
    ],
    nearbyAreas: ["newport-news", "hampton"],
    localDetails:
      "Williamsburg's unique blend of historic charm and modern development creates interesting AV challenges we enjoy solving. We serve both residential and commercial clients throughout the area.",
  },
];

export function getServiceAreaBySlug(slug: string): ServiceArea | undefined {
  return serviceAreas.find((a) => a.slug === slug);
}
