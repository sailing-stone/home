import AIPortal from '@/component/solution/AI-portal';
import Banner from '@/component/solution/banner';
import Dashboard from '@/component/solution/dashboard';
import LocalNavigation from '@/component/solution/local-navigation';
import TBD from '@/component/solution/TBD';

const SolutionPage = () => {
  return (
    <div>
      <Banner />
      <LocalNavigation />
      <AIPortal />
      <Dashboard />
      <TBD />
    </div>
  );
};

export default SolutionPage;
