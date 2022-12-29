import TopNavigation from '../topnavigation';
import Footer from '../footer';
import { ReactNode } from 'react';
import { useToggle } from '../provider/context';

const style = {
  main: `h-screen overflow-auto pb-36 pt-4 px-2 md:pb-8 lg:px-4`,
  mainContainer: `flex flex-col h-screen pl-0 w-full lg:pl-[69px] lg:space-y-4`,
  mainToggleContainer: `flex flex-col h-screen pl-0 w-full lg:pl-[240px] lg:space-y-4`,
};

interface Props {
  children: ReactNode;
}

const MainPage = ({ children }: Props) => {
  const { open } = useToggle();

  return (
    <div className={open ? style.mainToggleContainer : style.mainContainer}>
      <TopNavigation />
      <main className={style.main}>{children}</main>
      <Footer />
    </div>
  );
};

export default MainPage;
