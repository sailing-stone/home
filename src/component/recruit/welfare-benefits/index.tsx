import Badge from '@/component/base/badge';
import WelfareBenefitsList from './welfare-benefits-list';

const WelfareBenefits = () => {
  return (
    <section className='flex flex-col items-center justify-center gap-12'>
      <Badge>
        <h1 className='section-h1'>복리후생</h1>
      </Badge>
      <small className='section-small'>
        Invite shadow community opacity variant. Outline blur subtract content
        ellipse.
      </small>
      <WelfareBenefitsList />
    </section>
  );
};

export default WelfareBenefits;
