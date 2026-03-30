export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export const mainNavigation: NavItem[] = [
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "TV Installation", href: "/services/tv-installation" },
      { label: "Commercial AV", href: "/services/commercial-av" },
      { label: "Healthcare AV", href: "/services/healthcare-av" },
      { label: "LED Fixtures", href: "/services/led-fixtures" },
      { label: "Shade Installation", href: "/services/shade-installation" },
      { label: "Security Cameras", href: "/services/security-cameras" },
    ],
  },
  {
    label: "Government",
    href: "/government",
    children: [
      { label: "GSA Contract", href: "/government/gsa-contract" },
      { label: "Capabilities", href: "/government/capabilities" },
    ],
  },
  { label: "Service Areas", href: "/service-areas" },
  { label: "Manufacturers", href: "/manufacturers" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const footerNavigation = {
  services: [
    { label: "TV Installation", href: "/services/tv-installation" },
    { label: "Commercial AV", href: "/services/commercial-av" },
    { label: "Healthcare AV", href: "/services/healthcare-av" },
    { label: "LED Fixtures", href: "/services/led-fixtures" },
    { label: "Shade Installation", href: "/services/shade-installation" },
    { label: "Security Cameras", href: "/services/security-cameras" },
  ],
  company: [
    { label: "About", href: "/about" },
    { label: "Manufacturers", href: "/manufacturers" },
    { label: "GSA Contract", href: "/government/gsa-contract" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ],
  serviceAreas: [
    { label: "Norfolk", href: "/service-areas/norfolk" },
    { label: "Virginia Beach", href: "/service-areas/virginia-beach" },
    { label: "Chesapeake", href: "/service-areas/chesapeake" },
    { label: "Newport News", href: "/service-areas/newport-news" },
    { label: "Hampton", href: "/service-areas/hampton" },
    { label: "Suffolk", href: "/service-areas/suffolk" },
    { label: "Portsmouth", href: "/service-areas/portsmouth" },
    { label: "Williamsburg", href: "/service-areas/williamsburg" },
  ],
};
