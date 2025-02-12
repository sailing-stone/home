import Text from '@/component/base/text';

interface Props {
  title: string;
  description: string;
}

const TBDInfoItem = ({ title, description }: Props) => {
  return (
    <li className='flex flex-col gap-4'>
      <Text
        as='h3'
        variant='title30'
        strong={700}
        className='text-text-highlight'
      >
        {title}
      </Text>
      <Text
        as='p'
        variant='body20'
        strong={400}
        className='text-common-white'
      >
        {description}
      </Text>
    </li>
  );
};

export default TBDInfoItem;
