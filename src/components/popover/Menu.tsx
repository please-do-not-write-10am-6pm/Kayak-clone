/* eslint-disable security/detect-object-injection */
import React, { CSSProperties, ReactElement } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

interface OutTransformType {
  [key: string]: object;
}

interface MenuProps {
  className?: string;
  style: CSSProperties;
  layerSide: string;
  children: ReactElement;
}

interface MenuItemProps {
  className?: string;
  style?: {
    [key: string]: string;
  };
  children: ReactElement | string;
  onClick?: () => any;
}

const outTransform: OutTransformType = {
  top: { x: 0, y: -20 },
  left: { x: -20, y: 0 },
  bottom: { x: 0, y: 20 },
  right: { x: 20, y: 0 },
};

const MenuBase = styled(motion.ul)`
  transition: color 0.15s, background-color 0.15s, width 0.25s ease-in-out;
  position: absolute;
  padding: 4px 0px;
  list-style: none;
  background-clip: padding-box;
  border-radius: 4px;
  box-shadow: 0 1px 15px rgba(27, 31, 35, 0.15);
  margin: 0;
  background-color: white;
  color: #333;
  border: 1px solid rgba(27, 31, 35, 0.15);
  z-index: 10;
`;

const Menu = React.forwardRef(function Menu(
  { className, style, layerSide, children }: MenuProps,
  ref: React.Ref<HTMLUListElement> | null,
) {
  return (
    <MenuBase
      ref={ref}
      className={className}
      style={style}
      initial={{ opacity: 0, scale: 0.85, ...outTransform[layerSide] }}
      animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
      exit={{ opacity: 0, scale: 0.85, ...outTransform[layerSide] }}
      transition={{
        type: 'spring',
        stiffness: 800,
        damping: 35,
      }}
    >
      {children}
    </MenuBase>
  );
});

export const ItemBase = styled.li`
  list-style: none;
  display: block;
  padding: 4px 8px 4px 16px;
  overflow: hidden;
  color: inherit;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 12px;
  line-height: 1.5;
  cursor: pointer;

  &:hover {
    background-color: #359ed0;
    color: white;
  }
`;

export function MenuItem({
  className,
  style,
  children,
  ...rest
}: MenuItemProps) {
  return (
    <ItemBase className={className} style={style} {...rest}>
      {children}
    </ItemBase>
  );
}

export default Menu;
