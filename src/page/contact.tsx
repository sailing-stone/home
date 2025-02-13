import SubLNBNavigation from '@/component/common/sub-lnb-navigation';
import Banner from '@/component/contact/banner';
import ContactForm from '@/component/contact/contact-form';
import Location from '@/component/contact/location';
import { CONTACT_NAVIGATION_LIST } from '@/constant/navigation-list';

const ContactPage = () => {
  return (
    <div>
      <Banner />
      <SubLNBNavigation navigationList={CONTACT_NAVIGATION_LIST} />
      <ContactForm />
      <Location />
    </div>
  );
};

export default ContactPage;
