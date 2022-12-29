import { MenuItem } from '../popover/Menu';
import { PopoverContent } from '../popover';

export const base_flat_api = 'https://countryflagsapi.com/svg/';

export const countries = [
  {
    real_name: 'Argentina',
    en_name: 'Argentina',
  },
  {
    real_name: 'Australia',
    en_name: 'Australia',
  },
  {
    real_name: 'België',
    en_name: 'Belgium',
  },
  {
    real_name: 'Bolivia',
    en_name: 'Bolivia',
  },
  {
    real_name: 'Brasil',
    en_name: 'Brazil',
  },
  {
    real_name: 'Canada',
    en_name: 'Canada',
  },
  {
    real_name: 'Chile',
    en_name: 'Chile',
  },
  {
    real_name: '中国',
    en_name: 'China',
  },
  {
    real_name: 'Colombia',
    en_name: 'Colombia',
  },
  {
    real_name: 'Costa Rica',
    en_name: 'Costa Rica',
  },
  {
    real_name: 'Denmark',
    en_name: 'Denmark',
  },
  {
    real_name: 'Deutschland',
    en_name: 'Germany',
  },
  {
    real_name: 'Ecuador',
    en_name: 'Ecuador',
  },
  {
    real_name: 'El Salvador',
    en_name: 'El Salvador',
  },
  {
    real_name: 'España',
    en_name: 'Spain',
  },
  {
    real_name: 'France',
    en_name: 'France',
  },
  {
    real_name: 'Ελλάδα',
    en_name: 'Greece',
  },
  {
    real_name: 'Guatemaia',
    en_name: 'Guatemala',
  },
  {
    real_name: 'Honduras',
    en_name: 'Honduras',
  },
  {
    real_name: '香港',
    en_name: 'Hong Kong',
  },
  {
    real_name: 'India',
    en_name: 'India',
  },
  {
    real_name: 'Indonesia',
    en_name: 'Indonesia',
  },
  {
    real_name: 'Ireland',
    en_name: 'Ireland',
  },
  {
    real_name: 'Israel',
    en_name: 'Israel',
  },
  {
    real_name: 'Italia',
    en_name: 'Italy',
  },
  {
    real_name: '日本',
    en_name: 'Japan',
  },
  {
    real_name: 'Malaysia',
    en_name: 'Malaysia',
  },
  {
    real_name: 'México',
    en_name: 'Mexico',
  },
  {
    real_name: 'Nederland',
    en_name: 'Netherlands',
  },
  {
    real_name: 'New Zealand',
    en_name: 'New Zealand',
  },
  {
    real_name: 'Nicaragua',
    en_name: 'Nicaragua',
  },
  {
    real_name: 'Norge',
    en_name: 'Norway',
  },
  {
    real_name: 'Panamá',
    en_name: 'Panama',
  },
  {
    real_name: 'Paraguay',
    en_name: 'Paraguay',
  },
  {
    real_name: 'Perú',
    en_name: 'Peru',
  },
  {
    real_name: 'Philippines',
    en_name: 'Philippines',
  },
  {
    real_name: 'Polska',
    en_name: 'Poland',
  },
  {
    real_name: 'Portugal',
    en_name: 'Portugal',
  },
  {
    real_name: 'Puerto Rico',
    en_name: 'Puerto Rico',
  },
  {
    real_name: 'República Dominicana',
    en_name: 'Dominican Republic',
  },
  {
    real_name: 'România',
    en_name: 'Romania',
  },
  {
    real_name: 'Schweiz',
    en_name: 'Switzerland',
  },
  {
    real_name: 'Singapore',
    en_name: 'Singapore',
  },
  {
    real_name: 'South Africa',
    en_name: 'South Africa',
  },
  {
    real_name: '대한민국',
    en_name: 'The Republic Of Korea',
  },
  {
    real_name: 'Suomi',
    en_name: 'Finland',
  },
  {
    real_name: 'Sverige',
    en_name: 'Sweden',
  },
  {
    real_name: '台灣',
    en_name: 'Taiwan',
  },
  {
    real_name: 'Türkiye',
    en_name: 'Turkey',
  },
  {
    real_name: 'United Arab Emirates',
    en_name: 'United Arab Emirates',
  },
  {
    real_name: 'United Kingdom',
    en_name: 'United Kingdom',
  },
  {
    real_name: 'United States',
    en_name: 'United States',
  },
  {
    real_name: 'Uruguay',
    en_name: 'Uruguay',
  },
  {
    real_name: 'Việt Nam',
    en_name: 'Vietnam',
  },
  {
    real_name: 'Österreich',
    en_name: 'Austria',
  },
  {
    real_name: 'Česká republika',
    en_name: 'Czechia',
  },
  {
    real_name: 'Україна',
    en_name: 'Ukraine',
  },
  {
    real_name: 'Saudi Arabia',
    en_name: 'Saudi Arabia',
  },
  {
    real_name: 'ประเทศไทย',
    en_name: 'Thailand',
  },
];

interface Props {
  changeCountryFilter: (site: string) => void;
}

const SiteFooter = ({ changeCountryFilter }: Props) => {
  return (
    <div className="grid grid-cols-3 gap-4">
      <div>
        {countries.slice(0, 20).map((country, index) => (
          <MenuItem
            key={index}
            onClick={() => changeCountryFilter(country.real_name)}
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
            onClick={() => changeCountryFilter(country.real_name)}
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
            onClick={() => changeCountryFilter(country.real_name)}
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

export default SiteFooter;
