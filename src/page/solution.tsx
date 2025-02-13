// import ContactSection from '@/component/common/contact-section';
import SubLNBNavigation from '@/component/common/sub-lnb-navigation';
import AIPortal from '@/component/solution/AI-portal';
import Banner from '@/component/solution/banner';
// import Dashboard from '@/component/solution/dashboard';
// import TBD from '@/component/solution/TBD';
import { SOLUTION_NAVIGATION_LIST } from '@/constant/navigation-list';

const SolutionPage = () => {
  return (
    <div>
      <Banner />
      <SubLNBNavigation navigationList={SOLUTION_NAVIGATION_LIST} />
      <AIPortal />
      {/* <Dashboard />
      <TBD />
      <ContactSection /> */}
    </div>
  );
};

export default SolutionPage;
