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
        <div className='title-28 flex items-center justify-center gap-4 pl-6 font-bold text-common-black'>
          <p>{title}</p>
          {isToggle ? (
            <Right className='mobile:h-6' />
          ) : (
            <Down className='mobile: w-10' />
          )}
        </div>
      }
    >
      <NavigationList
        list={navigationList}
        activeText={navigationItem}
        className='title-26 flex-col gap-2 pt-4 font-medium'
      />
    </Accordion>
  );
};

export default AccordionTriggerButton;
