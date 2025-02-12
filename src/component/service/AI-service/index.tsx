import Badge from '@/component/base/badge';
import Text from '@/component/base/text';
import useIntersectingNavigation from '@/hook/useIntersectingNavigation';

const AIService = () => {
  const ref = useIntersectingNavigation('태블로 생성형 AI 기반 BI 서비스');

  return (
    <section
      ref={ref}
      className='flex flex-col items-center pb-20 pt-40'
    >
      <Badge>
        <Text
          id='AI'
          as='h1'
          variant='title70'
          strong={700}
          align='center'
        >
          생성형 AI 기반
          <br className='hidden mobile:block' />
          BI 서비스
        </Text>
      </Badge>
      <Text
        as='p'
        variant='body20'
        align='center'
        className='mt-4'
      >
        기업 데이터를 활용한 분석 및 인사이트 생성을 자동화하여
        <br />
        비즈니스 비즈니스 효율성을 극대화하는 서비스입니다.
      </Text>
    </section>
  );
};

export default AIService;
