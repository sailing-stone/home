import ContactSection from '@/component/common/contact-section';
import AIService from '@/component/service/AI-service';
import Banner from '@/component/service/banner';
import BIConsulting from '@/component/service/bi-consulting';
import BIEducation from '@/component/service/bi-education';
import LocalNavigation from '@/component/service/local-navigation';
import TBD from '@/component/service/TBD';

const ServicePage = () => {
  return (
    <div>
      <Banner />
      <LocalNavigation />
      <BIConsulting />
      <BIEducation />
      <TBD />
      <AIService />
      <ContactSection />
    </div>
  );
};

export default ServicePage;
