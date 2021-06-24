import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: title */

function SignOut(props) {
  return (
    <Svg viewBox="0 0 32 32" width={25} height={25} fill={'black'} {...props}>
      <Path d="M27 3v26a1 1 0 01-1 1H6a1 1 0 01-1-1v-2h2v1h18V4H7v3H5V3a1 1 0 011-1h20a1 1 0 011 1zM10.71 20.29L7.41 17H18v-2H7.41l3.3-3.29-1.42-1.42-5 5a1 1 0 000 1.42l5 5z" />
    </Svg>
  );
}

export default SignOut;
