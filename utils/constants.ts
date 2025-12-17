import { GroupHighlightsCardProps } from '@/types';

const highlightsCards: GroupHighlightsCardProps[] = [
  {
    title: 'Global Locations',
    value: '143',
    description: 'As of February 2025',
    imageName: 'location.svg',
  },
  {
    title: 'Total Employees \n (Group-wide)',
    value: '70,000',
    prefix: 'Over',
    description: 'As of the end of March 2024, including temporary employees.',
    imageName: 'employees.svg',
  },
  {
    title: 'Membership of \njob-change services',
    subtitle: 'Approximately',
    value: '9.43',
    suffix: 'million people',
    description: 'As of the end of January 2025.',
    imageName: 'membership.svg',
  },
  {
    title: 'Revenue',
    subtitle: 'Approximately',
    value: '1.3',
    suffix: 'trillion JPY',
    description: 'For the fiscal year ended March 2024 (IFRS)',
    imageName: 'revenue.svg',
  },
];

const productsAndServices = [
  {
    title: 'doda',
    imgName: 'doda',
    description:
      'This is a leading mid-career job change platform in Japan, boasting one of the highest numbers of users in the industry. As of the end of January 2025, it has 9.43 million registered members and is widely used by people primarily in their 20s to 30s. It serves as PERSOL CAREER’s core service, addressing the needs of both individuals seeking new career opportunities and companies advancing their hiring activities.',
    url: 'https://doda.jp/',
  },
  {
    title: 'HiPro',
    imgName: 'hipro',
    description:
      'It connects individuals working as freelancers or side-job professionals with companies seeking specialized skills. It supports individuals in pursuing flexible work styles and helps companies secure talent capable of solving their business challenges.',
    url: 'https://hipro-job.jp/',
  },
  {
    title: 'PERSOL MIRAIZ',
    imgName: 'miraiz',
    description:
      'This is a free reskilling support service for individuals aiming to advance their careers. It offers video-based learning, practical training programs, and career consultations, and is also linked to job change support services.',
    url: 'https://miraiz-persol.jp/',
  },
  {
    title: 'HR Spanner',
    imgName: 'spanner',
    description:
      "By monitoring new hires' conditions within the first three months and thoroughly tracking their status from the fourth month onward, the service ensures effective onboarding, prevents early turnover, and supports employees in becoming fully productive within a year.",
    url: 'https://hr-spanner.jp/lp/',
  },
  {
    title: 'HR forecaster',
    imgName: 'forecaster',
    description:
      'By leveraging over 2 million market data points from doda, the service enables strategic recruitment activities. It provides insights such as average annual salaries for competing job postings, suggestions to enhance job descriptions, and reports on broader market trends—offering comprehensive support throughout the hiring process.',
    url: 'https://hr-forecaster.jp/',
  },
];

export default {
  highlightsCards,
  productsAndServices,
};
