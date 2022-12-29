import React, { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface ContextType {
  open: boolean;
  ref: React.MutableRefObject<HTMLInputElement | null> | null;
  toggle: () => void;
}

const Context = React.createContext<ContextType>({
  open: false,
  ref: null,
  toggle: () => {
    return;
  },
});

const DashboardProvider = ({ children }: Props) => {
  const [open, setOpen] = React.useState(false);
  const ref = React.useRef<HTMLInputElement | null>(null);

  const toggle = React.useCallback(() => {
    setOpen((prevState) => !prevState);
  }, []);

  // On outside click, hide sidebar
  // React.useEffect(() => {
  //   const handleOutsideClick: EventListenerOrEventListenerObject = (event) => {
  //     if (event.target && !ref.current?.contains(event.target as HTMLElement)) {
  //       setOpen(false);
  //     }
  //   };
  //   if (!open) return;
  //   window.addEventListener('click', handleOutsideClick);
  //   return () => window.removeEventListener('click', handleOutsideClick);
  // }, [open, ref]);

  return (
    <Context.Provider value={{ open, ref, toggle }}>
      {children}
    </Context.Provider>
  );
};

export function useToggle() {
  return React.useContext(Context);
}

export default DashboardProvider;
