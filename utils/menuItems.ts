import { MenuItemType, MenuItem } from '@/types/menu';

/**
 * Default menu items for the header
 */
export const defaultMenuItems: MenuItem[] = [
  {
    type: MenuItemType.DROPDOWN,
    label: 'Our Business',
    hasArrow: true,
    subItems: [
      {
        label: 'PERSOL Group<br/>Highlights',
        hasArrow: true,
        href: '/#our-business-highlights',
      },
      {
        label: 'Our Strength',
        hasArrow: true,
        href: '/#our-business-strength',
      },
      {
        label: 'Service & Product',
        hasArrow: true,
        href: '/#our-business-service',
      },
    ],
  },
  {
    type: MenuItemType.DROPDOWN,
    label: 'About Us',
    hasArrow: true,
    subItems: [
      {
        label: 'Company Profile',
        hasArrow: true,
        href: '/#about-us-profile',
      },
      { label: 'Message', hasArrow: true, href: '/#about-us-message' },
      { label: 'Our Mission', hasArrow: true, href: '/#about-us-mission' },
    ],
  },
  {
    type: MenuItemType.DROPDOWN,
    label: 'Careers',
    hasArrow: true,
    subItems: [
      {
        label: 'Open Positions',
        hasArrow: true,
        href: '/#career-open-positions',
      },
      {
        label: 'Career Path',
        hasArrow: true,
        href: '/#career-path',
      },
      {
        label: 'Employee Voices',
        hasArrow: true,
        href: '/#career-employee-voices',
      },
      {
        label: 'Human Resource<br/>Development Initiatives',
        hasArrow: true,
        href: '/#career-hr-development',
      },
      {
        label: 'Working Environment',
        hasArrow: true,
        href: '/#career-working-environment',
      },
      {
        label: 'Office Environment',
        hasArrow: true,
        href: '/#career-office-environment',
      },
    ],
  },
  {
    type: MenuItemType.SIMPLE,
    label: 'Access',
    hasArrow: false,
    href: '/#access',
  },
];

/**
 * Footer links
 */
export const footerLinks = [
  {
    text: 'Privacy Policy',
    url: 'https://www.persol-group.co.jp/en/corporate/governance/privacy_info/',
  },
  {
    text: 'Cookie Settings',
    url: 'https://www.persol-group.co.jp/en/corporate/governance/privacy_info/cookie/',
  },
  {
    text: 'PERSOL CAREER CO., LTD.',
    url: 'https://www.persol-career.co.jp/',
  },
  {
    text: "PERSOL Group's Corporate Philosophy and Group Vision",
    url: 'https://www.persol-group.co.jp/en/corporate/vision/',
  },
  {
    text: 'PERSOL GROUP',
    url: 'https://www.persol-group.co.jp/en/',
  },
];
