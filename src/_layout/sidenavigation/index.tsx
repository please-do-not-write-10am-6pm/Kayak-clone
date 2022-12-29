import SidenavItems from './items';
// import SidenavHeader from './header';
import css from './style.module.css';
import { useToggle } from '../provider/context';
import { useState } from 'react';

interface MobilePosition {
  [index: string]: string;
}

interface Style {
  mobilePosition: MobilePosition;
  container: string;
  close: string;
  default: string;
  open: string;
}

const style: Style = {
  mobilePosition: {
    left: 'left-0 ',
    right: 'right-0 lg:left-0',
  },
  container: `pb-32 lg:pb-12`,
  close: `duration-100 ease-out hidden transition-all lg:w-[69px]`,
  default: `h-screen overflow-y-auto top-0 lg:absolute lg:block lg:z-40 bg-white border-r`,
  open: `absolute duration-100 ease-in transition-all w-8/12 z-40 sm:w-5/12 md:w-[240px]`,
};

interface Props {
  mobilePosition: string;
}

const SideNavigation = ({ mobilePosition }: Props) => {
  const { open, ref } = useToggle();
  const [hovered, setHovered] = useState(false);

  return (
    <aside
      ref={ref}
      className={`${style.default} ${style.mobilePosition[mobilePosition]} 
        ${hovered || open ? style.open : style.close} ${css.scrollbar}`}
      onMouseEnter={() => {
        setHovered(true);
      }}
      onMouseLeave={() => {
        setHovered(false);
      }}
    >
      <div className={style.container}>
        {/* <SidenavHeader /> */}
        <SidenavItems opened={hovered || open} />
      </div>
    </aside>
  );
};

export default SideNavigation;
