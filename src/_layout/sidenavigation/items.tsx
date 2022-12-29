import { Link, useLocation } from 'react-router-dom';

import { togglePanel, loginPanel, mainPanel, extraPanel } from './data';

const style = {
  title: `mx-4 text-sm`,
  inactive: `text-[#192024]`,
  active: `font-medium bg-[#e6ebef]`,
  link: `flex items-center justify-start my-2 w-full hover:bg-[#e6ebef]`,
  close: `lg:duration-500 lg:ease-out lg:invisible lg:opacity-0 lg:transition-all`,
  open: `lg:duration-500 lg:ease-in lg:h-auto lg:opacity-100 lg:transition-all lg:w-auto`,
};

const SidenavItems = ({ opened }: { opened: boolean }) => {
  const { pathname } = useLocation();

  return (
    <ul className="md:px-3">
      <li className="h-16">
        {togglePanel.map((item) => (
          <Link to={item.link} key={item.title}>
            <span
              className={`${style.link}
            ${item.link === pathname ? style.active : style.inactive}`}
            >
              {item.icon}
              <span
                className={`${style.title} ${
                  opened ? style.open : style.close
                }`}
              >
                {item.title}
              </span>
            </span>
          </Link>
        ))}
      </li>
      <li className="border-b">
        {loginPanel.map((item) => (
          <Link to={item.link} key={item.title}>
            <span
              className={`${style.link}
            ${item.link === pathname ? style.active : style.inactive}`}
            >
              {item.icon}
              <span
                className={`${style.title} ${
                  opened ? style.open : style.close
                }`}
              >
                {item.title}
              </span>
            </span>
          </Link>
        ))}
      </li>
      <li className="border-b">
        {mainPanel.map((item) => (
          <Link to={item.link} key={item.title}>
            <span
              className={`${style.link}
            ${item.link === pathname ? style.active : style.inactive}`}
            >
              {item.icon}
              <span
                className={`${style.title} ${
                  opened ? style.open : style.close
                }`}
              >
                {item.title}
              </span>
            </span>
          </Link>
        ))}
      </li>
      <li className="border-b">
        {extraPanel.map((item) => (
          <Link to={item.link} key={item.title}>
            <span
              className={`${style.link}
            ${item.link === pathname ? style.active : style.inactive}`}
            >
              {item.icon}
              <span
                className={`${style.title} ${
                  opened ? style.open : style.close
                }`}
              >
                {item.title}
              </span>
            </span>
          </Link>
        ))}
      </li>
    </ul>
  );
};

export default SidenavItems;
