interface Props {
  title: string;
  description: string;
}

const TBDInfoItem = ({ title, description }: Props) => {
  return (
    <li>
      <h3 className='text-[3.2rem] font-bold text-text-highlight'>{title}</h3>
      <p className='text-[2rem] font-normal text-common-white'>{description}</p>
    </li>
  );
};

export default TBDInfoItem;
