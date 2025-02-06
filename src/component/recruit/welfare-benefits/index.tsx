import Badge from '@/component/base/badge';
import WelfareBenefitsList from './welfare-benefits-list';

const WelfareBenefits = () => {
  return (
    <section className='flex flex-col items-center justify-center gap-12 pb-[24.5rem]'>
      <Badge>
        <h1 className='section-title'>복리후생</h1>
      </Badge>
      <WelfareBenefitsList />
    </section>
  );
};

export default WelfareBenefits;
