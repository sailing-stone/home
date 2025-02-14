const LAZY_PAGE: Record<
  string,
  () => Promise<{ default: React.ComponentType }>
> = {
  '/': () => import('@/page/main'),
  '/service': () => import('@/page/service'),
  '/solution': () => import('@/page/solution'),
  '/recruit': () => import('@/page/recruit'),
  '/contact': () => import('@/page/contact'),
  '/introduce': () => import('@/page/introduce'),
};

export default LAZY_PAGE;
