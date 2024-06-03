import React from 'react';
import { SvgXml } from 'react-native-svg';

export const addIconSvg = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.66667 10H13.3333" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10 13.3334V6.66669" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7.5 18.3334H12.5C16.6667 18.3334 18.3333 16.6667 18.3333 12.5V7.50002C18.3333 3.33335 16.6667 1.66669 12.5 1.66669H7.5C3.33334 1.66669 1.66667 3.33335 1.66667 7.50002V12.5C1.66667 16.6667 3.33334 18.3334 7.5 18.3334Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;

const AddIcon = () => {
  return <SvgXml xml={addIconSvg} width="20" height="20" />;
};

export default AddIcon;
