import URL from '@/constant/url';

export const SERVICE_NAVIGATION_LIST = [
  { id: 1, hash: 'consulting', text: 'BI 컨설팅', href: URL.SERVICE },
  { id: 2, hash: 'education', text: 'Self-BI 교육 지원', href: URL.SERVICE },
  { id: 3, hash: 'TBD', text: 'Tableau Expertise 서비스', href: URL.SERVICE },
  {
    id: 4,
    hash: 'AI',
    text: '태블로 생성형 AI 기반 BI 서비스',
    href: URL.SERVICE,
  },
];

export const SOLUTION_NAVIGATION_LIST = [
  { id: 1, hash: 'aiPortal', text: '데이터 AI 포털', href: URL.SOLUTION },
  { id: 2, hash: 'dashboard', text: '대시보드 on TV', href: URL.SOLUTION },
  { id: 3, text: 'AI Agent', href: URL.SOLUTION },
  { id: 4, text: 'Stone Excel', href: URL.SOLUTION },
  { id: 5, text: '웹 / 모바일', href: URL.SOLUTION },
  { id: 6, text: '커스텀 데이터 커넥터', href: URL.SOLUTION },
  { id: 7, text: 'RPA', href: URL.SOLUTION },
  { id: 8, text: 'Tableau Extension', href: URL.SOLUTION },
];

export const GNB_LIST = [
  // { id: 1, href: URL.INTRODUCE, text: '회사 소개' },
  { id: 1, href: URL.SOLUTION, text: '솔루션' },
  { id: 2, href: URL.RECRUIT, text: '리쿠르트' },
  { id: 3, href: URL.CONTACT, text: '문의하기' },
];

export const CONTACT_NAVIGATION_LIST = [
  { id: 1, hash: 'contact', text: '문의하기', href: URL.CONTACT },
  { id: 2, hash: 'location', text: '찾아오시는 길', href: URL.CONTACT },
];
