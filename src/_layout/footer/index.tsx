import React from 'react';
import { Link } from 'react-router-dom';
import { GoChevronDown } from 'react-icons/go';

import FooterImg from '../../components/footer/FooterImg';
import { Popover, PopoverContent, PopoverIcon } from '../../components/popover';
import PriceUnitFooter from '../../components/footer/PriceUnitFooter';
import SiteFooter, {
  base_flat_api,
  countries,
} from '../../components/footer/SiteFooter';

interface Country {
  real_name: string;
  en_name: string;
}

const Footer: React.FC = () => {
  const [siteFilter, setSiteFilter] = React.useState('');
  const [priceUnitFilter, setPriceUnitFilter] = React.useState('');
  const [isOpen, trigger] = React.useState(false);
  const [enName, setEnName] = React.useState('');

  const changeCountryFilter = (filter: string) => {
    setSiteFilter(filter);
    const country: Country = countries.filter(
      (item) => item.real_name === filter,
    )[0];
    setEnName(country.en_name);
  };

  const changePriceUnitFilter = (filter: string) => {
    setPriceUnitFilter(filter);
  };

  return (
    <footer className="bg-[#212a30] px-7 items-center w-full">
      <div className="container max-w-[67.5rem] mx-auto">
        <div className="grid grid-cols-2 gap-8 py-8 px-6 md:grid-cols-4">
          <div>
            <h6 className="mb-6 text-sm font-semibold text-white">Company</h6>
            <ul className="text-white font-normal text-xs">
              <li className="mb-2">
                <Link to="#" className="hover:underline">
                  About
                </Link>
              </li>
              <li className="mb-2">
                <Link to="#" className="hover:underline">
                  Careers
                </Link>
              </li>
              <li className="mb-2">
                <Link to="#" className="hover:underline">
                  Mobile
                </Link>
              </li>
              <li className="mb-2">
                <Link to="#" className="hover:underline">
                  How we work
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-white">Contract</h2>
            <ul className="text-white font-normal text-xs">
              <li className="mb-2">
                <Link to="#" className="hover:underline">
                  Help/FAQ
                </Link>
              </li>
              <li className="mb-2">
                <Link to="#" className="hover:underline">
                  Press
                </Link>
              </li>
              <li className="mb-2">
                <Link to="#" className="hover:underline">
                  Affiliates
                </Link>
              </li>
              <li className="mb-2">
                <Link to="#" className="hover:underline">
                  Hotel owners
                </Link>
              </li>
              <li className="mb-2">
                <Link to="#" className="hover:underline">
                  Partners
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-white">More</h2>
            <ul className="text-white font-normal text-xs">
              <li className="mb-2">
                <Link to="#" className="hover:underline">
                  Airline fees
                </Link>
              </li>
              <li className="mb-2">
                <Link to="#" className="hover:underline">
                  Airlines
                </Link>
              </li>
              <li className="mb-2">
                <Link to="#" className="hover:underline">
                  Low fare tips
                </Link>
              </li>
              <li className="mb-2">
                <Link to="#" className="hover:underline">
                  Badges & Certificates
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-white">
              Site / Currency
            </h2>
            <ul className="text-white space-y-2 text-xs">
              <Popover
                content={
                  <SiteFooter changeCountryFilter={changeCountryFilter} />
                }
                trigger={trigger}
                isOpen={isOpen}
              >
                <PopoverContent>
                  <img
                    className="ml-4 mr-2"
                    width="15px"
                    height="15px"
                    src={`${base_flat_api}${enName}`}
                    alt=""
                  />
                  <span className="mr-auto">
                    {siteFilter === '' ? 'Hong kong' : siteFilter}
                  </span>
                  <PopoverIcon>
                    <GoChevronDown />
                  </PopoverIcon>
                </PopoverContent>
              </Popover>
              <Popover
                content={
                  <PriceUnitFooter
                    changePriceUnitFilter={changePriceUnitFilter}
                  />
                }
                trigger={trigger}
                isOpen={isOpen}
              >
                <PopoverContent>
                  <img
                    className="ml-4 mr-2"
                    width="15px"
                    height="15px"
                    src={`${base_flat_api}${enName}`}
                    alt=""
                  />
                  <span className="mr-auto">
                    {priceUnitFilter === ''
                      ? 'United Status Dollars'
                      : priceUnitFilter}
                  </span>
                  <PopoverIcon>
                    <GoChevronDown />
                  </PopoverIcon>
                </PopoverContent>
              </Popover>
            </ul>
          </div>
        </div>
        <div className="text-[#a0afba]">
          <div className="justify-center font-normal text-xs flex pt-10 pr-0 pb-4 pl-0">
            <Link to="/privacy" className="hover:underline mx-3">
              Privacy
            </Link>
            <Link to="/terms-of-use" className="hover:underline mx-3">
              Terms & Conditions
            </Link>
            <Link to="/privacy#trackingtools" className="hover:underline mx-3">
              Ad Choices
            </Link>
            <span>©2022 KAYAK</span>
          </div>
        </div>
        <div className="text-[#a0afba] text-center font-normal text-[10px] leading-[14px]">
          <p className="pb-3">
            Search cheap flights with KAYAK. Search for the cheapest airline
            tickets for all the top <Link to="/airlines">airlines</Link> around
            the world and the{' '}
            <Link to="/Top-Flight-Routes.tfr.html">
              top international flight routes
            </Link>
            . KAYAK searches hundreds of travel sites to help you find cheap
            airfare and book a flight that suits you best. Since KAYAK searches
            many plane tickets sites at once, you can find cheap tickets from
            cheap airlines quickly.
          </p>
          <p className="pb-3">
            KAYAK also helps you find the right <Link to="/hotels">hotels</Link>{' '}
            for your needs.
          </p>
        </div>
        <FooterImg />
      </div>
    </footer>
  );
};

export default Footer;
