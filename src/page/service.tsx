import ContactSection from '@/component/common/contact-section';
import SubLNBNavigation from '@/component/common/sub-lnb-navigation';
import AIService from '@/component/service/AI-service';
import Banner from '@/component/service/banner';
import BIConsulting from '@/component/service/bi-consulting';
import BIEducation from '@/component/service/bi-education';
import TBD from '@/component/service/TBD';
import { SERVICE_NAVIGATION_LIST } from '@/constant/navigation-list';

const ServicePage = () => {
  return (
    <div>
      <Banner />
      <SubLNBNavigation navigationList={SERVICE_NAVIGATION_LIST} />
      <BIConsulting />
      <BIEducation />
      <TBD />
      <AIService />
      <ContactSection />
    </div>
  );
};

export default ServicePage;
