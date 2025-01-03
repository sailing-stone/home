import Banner from '@/component/main/banner';
import EnterprisePartner from '@/component/main/enterprise-partner';
import Intro from '@/component/main/intro';
import ServicePartner from '@/component/main/service-partner';

const MainPage = () => {
  return (
    <div>
      <Banner />
      <ServicePartner />
      <Intro />
      <EnterprisePartner />
    </div>
  );
};

export default MainPage;
