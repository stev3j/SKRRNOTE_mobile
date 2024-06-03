import React from 'react';
import { SvgXml } from 'react-native-svg';

export const penIconSvg = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.05 3.00002L4.20834 10.2417C3.95 10.5167 3.7 11.0584 3.65 11.4334L3.34167 14.1333C3.23334 15.1083 3.93334 15.775 4.9 15.6084L7.58334 15.15C7.95834 15.0834 8.48334 14.8084 8.74167 14.525L15.5833 7.28335C16.7667 6.03335 17.3 4.60835 15.4583 2.86668C13.625 1.14168 12.2333 1.75002 11.05 3.00002Z" stroke="black" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9.90834 4.20831C10.2667 6.50831 12.1333 8.26665 14.45 8.49998" stroke="black" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M2.5 18.3333H17.5" stroke="black" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`

const PenIcon = () => {
  return <SvgXml xml={penIconSvg} width="20" height="20" />;
};

export default PenIcon;
