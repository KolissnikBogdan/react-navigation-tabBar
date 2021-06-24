import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: style, title */

function Close(props) {
  return (
    <Svg
      viewBox="0 0 64 64"
      xmlSpace="preserve"
      width="25"
      height="25"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G id="prefix__Icon-Close" fill="#fff" transform="translate(381 231)">
        <Path
          className="prefix__st0"
          d="M-370.7-174.7l-2.3-2.3 46-46 2.3 2.3-46 46"
        />
        <Path
          className="prefix__st0"
          d="M-327-174.7l-46-46 2.3-2.3 46 46-2.3 2.3"
        />
      </G>
    </Svg>
  );
}

export default Close;
