import { useToggle } from '../../provider/context';

const ToggleIcon = () => {
  const { toggle } = useToggle();
  return (
    <svg
      type="button"
      aria-expanded="false"
      aria-label="Toggle sidenav"
      onClick={() => {
        toggle();
      }}
      className="w-10 h-10 flex items-center fill-[#8796a1] text-[#8796a1] flex-shrink-0 p-2 active:bg-gray-200"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 200"
    >
      <path d="M20 153.333h160v-17.778H20v17.778zm0-44.444h160V91.111H20v17.778zm0-62.222v17.778h160V46.667H20z"></path>
    </svg>
  );
};

export default ToggleIcon;
