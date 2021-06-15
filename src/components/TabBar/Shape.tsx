import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View } from 'react-native';
import { Svg, Path } from 'react-native-svg';

import { width } from '../../utils/constants';

import { curveLineGenerator, lineGenerator } from '../../utils/shapes';

const TabShape = ({ tabWidth }: { tabWidth: number }) => {
  const d = useMemo(() => {
    const left = lineGenerator([
      { x: 0, y: 0 },
      { x: tabWidth * 2, y: 0 },
    ]);
    const center = curveLineGenerator([
      { x: tabWidth * 2, y: 0 },
      { x: tabWidth * 2 + 5, y: 0 },
      { x: tabWidth * 2 + 15, y: 64 * 0.6 },
      { x: tabWidth * 3 - 15, y: 64 * 0.6 },
      { x: tabWidth * 3 - 5, y: 0 },
      { x: tabWidth * 3, y: 0 },
    ]);
    const right = lineGenerator([
      { x: tabWidth * 3, y: 0 },
      { x: width, y: 0 },
      { x: width, y: 64 },
      { x: 0, y: 64 },
      { x: 0, y: 0 },
    ]);
    return `${left} ${center} ${right}`;
  }, [tabWidth]);

  return (
    <View style={styles.container}>
      <Svg width={width + 1} {...{ height: 64 }}>
        <Path fill={'orange'} {...{ d }} />
      </Svg>
    </View>
  );
};

TabShape.propTypes = {
  tabWidth: PropTypes.number.isRequired,
};

const styles = StyleSheet.create({
  container: {
    width: width,
    position: 'absolute',
    top: -64,
    zIndex: 100,
    borderTopLeftRadius: 20,
  },
});

export default TabShape;
