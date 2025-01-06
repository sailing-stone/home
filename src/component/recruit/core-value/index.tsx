import Badge from '@/component/base/badge';
import CoreValueList from './core-value-list';

const CoreValue = () => {
  return (
    <section className='flex flex-col items-center justify-center py-40'>
      <Badge>
        <h1 className='text-[7rem] font-bold'>핵심 가치</h1>
      </Badge>
      <small className='text-[2rem] font-normal'>
        Invite shadow community opacity variant. Outline blur subtract content
        ellipse.
      </small>
      <CoreValueList />
    </section>
  );
};

export default CoreValue;
