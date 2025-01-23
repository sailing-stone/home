import ContactSection from '@/component/common/contact-section';
import Banner from '@/component/main/banner';
import EnterprisePartner from '@/component/main/enterprise-partner';
import Intro from '@/component/main/intro';
import ServicePartner from '@/component/main/service-partner';

const MainPage = () => {
  return (
    <div className='pt-[6.2rem]'>
      <Banner />
      <ServicePartner />
      <Intro />
      <EnterprisePartner />
      <ContactSection />
    </div>
  );
};

export default MainPage;
