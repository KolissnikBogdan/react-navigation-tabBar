import * as React from 'react';
import Svg, { Circle, Path } from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: title */

function Danger(props) {
  return (
    <Svg
      data-name="Livello 1"
      viewBox="0 0 151.57 151.57"
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="25"
      {...props}
    >
      <Circle
        cx={75.78}
        cy={75.78}
        r={72.28}
        fill="#da2244"
        stroke="#f2f2f2"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={7}
      />
      <Path
        fill="none"
        stroke="#f2f2f2"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={5}
        d="M35.2 104.37h81.17M116.37 104.37L75.78 35.2M35.2 104.37L75.78 35.2"
      />
      <Path
        fill="none"
        stroke="#f2f2f2"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M75.78 57.32v25.86"
      />
      <Circle cx={75.78} cy={91.63} r={2.62} fill="#fcfbf2" />
    </Svg>
  );
}

export default Danger;
