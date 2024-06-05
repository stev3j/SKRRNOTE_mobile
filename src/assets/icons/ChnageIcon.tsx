import React from 'react';
import { SvgXml } from 'react-native-svg';

export const changeIconSvg = `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.6666 8.00016C14.6666 11.6802 11.68 14.6668 7.99998 14.6668C4.31998 14.6668 2.07331 10.9602 2.07331 10.9602M2.07331 10.9602H5.08665M2.07331 10.9602V14.2935M1.33331 8.00016C1.33331 4.32016 4.29331 1.3335 7.99998 1.3335C12.4466 1.3335 14.6666 5.04016 14.6666 5.04016M14.6666 5.04016V1.70683M14.6666 5.04016H11.7066" stroke="#292D32" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`

const ChangeIcon = () => {
  return <SvgXml xml={changeIconSvg} width="16" height="16" />;
};

export default ChangeIcon;
