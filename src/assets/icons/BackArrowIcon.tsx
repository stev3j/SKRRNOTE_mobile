import React from 'react';
import { SvgXml } from 'react-native-svg';

export const backArrowIconSvg = `<svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.625 20.75L8.83333 13.9583C8.03124 13.1562 8.03124 11.8438 8.83333 11.0417L15.625 4.25" stroke="black" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;

const BackArrowIcon = () => {
  return <SvgXml xml={backArrowIconSvg} width="25" height="25" />;
};

export default BackArrowIcon;

