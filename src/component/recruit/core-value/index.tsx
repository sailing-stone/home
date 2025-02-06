import Badge from '@/component/base/badge';
import CoreValueList from './core-value-list';

const CoreValue = () => {
  return (
    <section className='flex flex-col items-center justify-center pb-[35.5rem] pt-[16.1rem]'>
      <Badge>
        <h1 className='section-title'>핵심 가치</h1>
      </Badge>
      <CoreValueList />
    </section>
  );
};

export default CoreValue;
