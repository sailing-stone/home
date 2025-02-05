interface Props {
  title: string;
  description: string;
}

const TBDInfoItem = ({ title, description }: Props) => {
  return (
    <li className='flex flex-col gap-[0.4rem]'>
      <h3 className='title-50 font-bold leading-[3.8rem] text-text-highlight'>
        {title}
      </h3>
      <p className='mobile:title-32 font-normal leading-[2.4rem] text-common-white'>
        {description}
      </p>
    </li>
  );
};

export default TBDInfoItem;
