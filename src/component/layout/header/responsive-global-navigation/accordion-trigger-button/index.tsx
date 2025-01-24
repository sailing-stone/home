import Accordion from '@/component/base/accordion';
import Down from '@/component/common/icon/down.svg?react';
import Right from '@/component/common/icon/right.svg?react';
import NavigationList from '@/component/common/navigation-list';
import { useLocalNavigation } from '@/context/local-navigation-context';
import useToggle from '@/hook/useToggle';

interface Props {
  title: string;
  navigationList: {
    id: number | string;
    href: string;
    text: string;
    hash?: string;
  }[];
}

const AccordionTriggerButton = ({ title, navigationList }: Props) => {
  const { isToggle, handleToggle } = useToggle(true);
  const { navigationItem } = useLocalNavigation();

  return (
    <Accordion
      defaultVisible
      onToggle={handleToggle}
      header={
        <div className='title-28 flex items-center gap-4 pl-6 font-bold leading-[1.9rem] text-common-black'>
          {title}
          {isToggle ? <Right /> : <Down />}
        </div>
      }
    >
      <NavigationList
        list={navigationList}
        activeText={navigationItem}
        className='title-26 flex-col gap-2 font-medium leading-[1.7rem]'
      />
    </Accordion>
  );
};

export default AccordionTriggerButton;
