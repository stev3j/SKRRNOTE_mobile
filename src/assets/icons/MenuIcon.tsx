import React from 'react';
import { SvgXml } from 'react-native-svg';

export const menuIconSvg = `<svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.5 18.4955L12.5 18.5045" stroke="black" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12.5 12.4955L12.5 12.5045" stroke="black" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12.5 6.4955L12.5 6.5045" stroke="black" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;

const MenuIcon = () => {
  return <SvgXml xml={menuIconSvg} width="25" height="25" />;
};

export const MenuIcon20 = () => {
  return <SvgXml xml={menuIconSvg} width="20" height="20" />;
};

export default MenuIcon;
