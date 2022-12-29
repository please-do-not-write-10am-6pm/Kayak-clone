import React, { ReactElement } from 'react';
import { useLayer } from 'react-laag';
import { AnimatePresence } from 'framer-motion';
import styled from 'styled-components';

import Menu from './Menu';

interface Props {
  children: ReactElement;
  content: ReactElement;
  isOpen: boolean;
  trigger: React.Dispatch<React.SetStateAction<boolean>>;
}

export const PopoverContent = styled.div`
  display: flex;
  justify-content: left;
  cursor: pointer;
  align-items: center;
  .badge {
    margin-left: 10px;
  }
`;

export const PopoverIcon = styled.div`
  margin-left: 6px;
  margin-right: 6px;
`;

export function Popover({ content, children, isOpen, trigger }: Props) {
  const { triggerProps, layerProps, layerSide, renderLayer } = useLayer({
    isOpen: isOpen,
    placement: 'top-center',
    // triggerOffset: -40,
    onOutsideClick: () => {
      trigger(false);
    },
  });

  return (
    <div onClick={() => trigger(!isOpen)}>
      <div className="border-white border p-1" {...triggerProps}>
        {children}
      </div>
      {isOpen &&
        renderLayer(
          <AnimatePresence>
            <Menu className="tooltip" {...layerProps} layerSide={layerSide}>
              {content}
            </Menu>
          </AnimatePresence>,
        )}
    </div>
  );
}
