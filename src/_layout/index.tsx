import { ReactNode } from 'react';

import SideNavigation from './sidenavigation';
import DashboardProvider from './provider/context';
import MainPage from './main';

const style = {
  container: `h-screen overflow-hidden relative`,
};

interface Props {
  children: ReactNode;
}

const DashboardLayout = ({ children }: Props) => {
  return (
    <DashboardProvider>
      <div className={style.container}>
        <div className="flex items-start">
          <SideNavigation mobilePosition="right" />
          <MainPage children={children} />
        </div>
      </div>
    </DashboardProvider>
  );
};

export default DashboardLayout;
