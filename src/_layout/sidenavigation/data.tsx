import ToggleIcon from './icons/toggle';
import UserAvatarIcon from '././icons/user';
import FlightsIcon from './icons/flights';
import StaysIcon from './icons/stays';
import CarsIcon from './icons/cars';
import ThingsToDoIcon from './icons/thingsTodo';
import FlightHotelIcon from './icons/flightHotel';
import ExploreIcon from './icons/explore';
import FlightTrackerIcon from './icons/flightTracker';
import TravelRestrictionsIcon from './icons/travelRestrictions';

export const extraPanel = [
  {
    title: 'Explore',
    icon: <ExploreIcon />,
    link: '/explore/from-to',
  },
  {
    title: 'FlightTracker',
    icon: <FlightTrackerIcon />,
    link: '/tracker',
  },
  {
    title: 'TravelRestrictions',
    icon: <TravelRestrictionsIcon />,
    link: '/travel-restrictions?',
  },
];

export const togglePanel = [
  {
    title: '',
    icon: <ToggleIcon />,
    link: '',
  },
];

export const loginPanel = [
  {
    title: 'Sign in',
    icon: <UserAvatarIcon />,
    link: '/login',
  },
];

export const mainPanel = [
  {
    title: 'Flights',
    icon: <FlightsIcon />,
    link: '/flights',
  },
  {
    title: 'Stays',
    icon: <StaysIcon />,
    link: '/stays',
  },
  {
    title: 'Cars',
    icon: <CarsIcon />,
    link: '/cars',
  },
  {
    title: 'ThingsToDo',
    icon: <ThingsToDoIcon />,
    link: '/things-to-do',
  },
  {
    title: 'Flight+Hotel',
    icon: <FlightHotelIcon />,
    link: '/packages',
  },
];
