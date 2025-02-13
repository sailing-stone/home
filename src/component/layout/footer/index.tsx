import LogoImage from '@/asset/image/logo-footer.png';
import LogoWithTitle from '@/component/common/logo-with-title';

const Footer = () => {
  return (
    <footer className='flex flex-col gap-[2.4rem] bg-contrast-200 px-40 pb-32 pt-16 mobile:gap-[1.6rem] mobile:px-[2.4rem] mobile:pb-12 mobile:pt-8 tablet:gap-8 tablet:px-[2.4rem] tablet:pb-16 tablet:pt-12'>
      <LogoWithTitle
        src={LogoImage}
        className='mobile:w-40: h-auto w-52 tablet:w-40'
      />
      <div className='title-16 font-medium leading-[2.4rem] text-text-footer mobile:leading-[2.1rem] tablet:leading-[2.1rem]'>
        <p>(주) 세일링스톤 </p>
        <p>
          | 사업자등록번호 : 873-87-01280 <br className='hidden mobile:block' />
          | 대표 이사 및 개인정보책임자: 강동석, 김봉군
        </p>
        <p>
          | 주소 : 서울특별시 강서구 마곡중앙로 161-8
          <br className='hidden mobile:block' />
          두산더랜드 B동 1312호
        </p>
        <p>
          | 사무실번호 : 02-2039-9268 <br className='hidden mobile:block' />|
        </p>
      </div>
    </footer>
  );
};

export default Footer;
