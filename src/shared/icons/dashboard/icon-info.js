import * as React from 'react';
import Svg, { Defs, G, Path } from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: style */

function SvgComponent(props) {
  return (
    <Svg
      width="30mm"
      height="40mm"
      viewBox="0 0 3000 4000"
      shapeRendering="geometricPrecision"
      textRendering="geometricPrecision"
      imageRendering="optimizeQuality"
      fillRule="evenodd"
      clipRule="evenodd"
      {...props}>
      <Defs></Defs>
      <G id="prefix__Capa_x0020_1">
        <G id="prefix___2268306175904">
          <Path className="prefix__fil0" d="M1350.46 1861.1h300v900h-300z" />
          <Path
            className="prefix__fil0"
            d="M1500.46 511.1c-828.75 0-1500 671.25-1500 1500s671.25 1500 1500 1500 1500-671.25 1500-1500-671.25-1500-1500-1500zm0 2700c-661.5 0-1200-538.5-1200-1200s538.5-1200 1200-1200 1200 538.5 1200 1200-538.5 1200-1200 1200z"
          />
          <Path className="prefix__fil0" d="M1350.46 1261.1h300v300h-300z" />
        </G>
      </G>
    </Svg>
  );
}

export default SvgComponent;
