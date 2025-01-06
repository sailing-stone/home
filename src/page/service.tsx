import ContactSection from '@/component/common/contact-section';
import Banner from '@/component/service/banner';
import BIConsulting from '@/component/service/bi-consulting';
import BIEducation from '@/component/service/bi-education';
import LocalNavigation from '@/component/service/local-navigation';

const ServicePage = () => {
  return (
    <div>
      <Banner />
      <LocalNavigation />
      <BIConsulting />
      <BIEducation />
      <ContactSection />
    </div>
  );
};

export default ServicePage;
