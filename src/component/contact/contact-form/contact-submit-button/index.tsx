import Text from '@/component/base/text';

const ContactSubmitButton = () => {
  return (
    <button
      type='button'
      className='shrink-0 rounded-[2.8rem] bg-submit px-48 py-6 shadow-button mobile:px-[4.6rem] mobile:py-4'
    >
      <Text
        as='p'
        variant='title20'
        strong={600}
        className='text-common-white'
      >
        문의하기
      </Text>
    </button>
  );
};

export default ContactSubmitButton;
