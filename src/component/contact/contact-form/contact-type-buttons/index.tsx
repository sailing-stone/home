const ContactTypeButtons = () => {
  return (
    <div className='flex justify-center gap-[6.3rem] text-[2rem] font-bold leading-[2.4rem] text-common-black mobile:flex-col'>
      <button
        type='button'
        className='w-[31rem] rounded-[2.8rem] bg-primary-main px-40 py-[1.7rem] shadow-button'
      >
        태블로 서비스
      </button>
      <button
        type='button'
        className='w-[31rem] rounded-[2.8rem] border border-primary-main bg-common-white px-40 py-[1.7rem] shadow-button'
      >
        솔루션
      </button>
    </div>
  );
};

export default ContactTypeButtons;
