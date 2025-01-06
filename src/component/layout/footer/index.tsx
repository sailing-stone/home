import LogoWithTitle from '@/component/common/logo-with-title';

const Footer = () => {
  return (
    <footer className='flex flex-col gap-12 bg-contrast-200 px-[10.1rem] py-[8.5rem] pb-[16.4rem] text-[1.5rem] font-medium text-text-footer'>
      <LogoWithTitle
        src='/image/logo-with-title-white.png'
        className='h-[5.5rem] w-[13.1rem]'
      />
      <p>
        (주) 세일링스톤 | 사업자등록번호 : 873-870-1280 | 대표이사 : 강동석,
        김봉군 | 개인정보보호책임자 : 강동석, 김봉군
        <br />
        주소 : 서울특별시 강서구 마곡중앙로 161-8 두산더랜드 B동 1312호 |
        대표번호 : | 이메일 :
      </p>
      <p>© Sailingstone All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
