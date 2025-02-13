import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider, { Settings } from 'react-slick';
import Text from '@/component/base/text';

const settings: Settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
};

const TypedSlider = Slider as unknown as React.FC<any>;

const MobileCircleInfo = () => {
  return (
    <TypedSlider
      {...settings}
      className='flex h-auto w-full'
    >
      <div>
        <div className='m-auto flex w-fit items-center justify-center rounded-[50%] bg-primary-100 p-8'>
          <div className='flex size-[21rem] items-center justify-center rounded-[50%] border-2 border-dashed border-primary-main '>
            <Text
              as='h3'
              variant='title26'
              strong={500}
              align='center'
            >
              데이터 활용의
              <br />
              <Text
                as='span'
                variant='title26'
                strong={700}
                align='center'
              >
                효율성과 정확성
              </Text>
              <br />
              극대화
            </Text>
          </div>
        </div>
      </div>

      <div>
        <div className='m-auto flex w-fit items-center justify-center rounded-[50%] bg-primary-100 p-8'>
          <div className='flex size-[21rem] items-center justify-center rounded-[50%] border-2 border-dashed border-primary-main '>
            <Text
              as='h3'
              variant='title26'
              strong={500}
              align='center'
            >
              데이터 활용의
              <br />
              <Text
                as='span'
                variant='title26'
                strong={700}
                align='center'
              >
                효율성과 정확성
              </Text>
              <br />
              극대화
            </Text>
          </div>
        </div>
      </div>
    </TypedSlider>
  );
};

export default MobileCircleInfo;
