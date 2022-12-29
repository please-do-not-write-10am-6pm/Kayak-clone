import { MenuItem } from '../popover/Menu';
import { PopoverContent } from '../popover';

export const base_flat_api = 'https://countryflagsapi.com/svg/';

export const countries = [
  {
    real_name: 'Argentina',
    en_name: 'Argentina',
  },
];

interface Props {
  changePriceUnitFilter: (priceUnit: string) => void;
}

const PriceUnitFooter = ({ changePriceUnitFilter }: Props) => {
  return (
    <div className="grid grid-cols-3 gap-4">
      <div>
        {countries.slice(0, 20).map((country, index) => (
          <MenuItem
            key={index}
            onClick={() => changePriceUnitFilter(country.real_name)}
          >
            <PopoverContent className="mx-none">
              <img
                className="mr-1"
                width="15px"
                height="15px"
                src={`${base_flat_api}${country.en_name}`}
                alt=""
              />
              <span>{country.real_name}</span>
            </PopoverContent>
          </MenuItem>
        ))}
      </div>
      <div>
        {countries.slice(20, 40).map((country, index) => (
          <MenuItem
            key={index}
            onClick={() => changePriceUnitFilter(country.real_name)}
          >
            <PopoverContent className="mx-none">
              <img
                className="mr-1"
                width="15px"
                height="15px"
                src={`${base_flat_api}${country.en_name}`}
                alt=""
              />
              <span>{country.real_name}</span>
            </PopoverContent>
          </MenuItem>
        ))}
      </div>
      <div>
        {countries.slice(40, 59).map((country, index) => (
          <MenuItem
            key={index}
            onClick={() => changePriceUnitFilter(country.real_name)}
          >
            <PopoverContent className="mx-none">
              <img
                className="mr-1"
                width="15px"
                height="15px"
                src={`${base_flat_api}${country.en_name}`}
                alt=""
              />
              <span>{country.real_name}</span>
            </PopoverContent>
          </MenuItem>
        ))}
      </div>
    </div>
  );
};

export default PriceUnitFooter;
