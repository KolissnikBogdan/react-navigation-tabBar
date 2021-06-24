import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface ISection {
  borderStyle?: any;
  containerStyle?: any;
}

const Section: React.FC<ISection> = ({
  children,
  borderStyle,
  containerStyle,
}) => {
  return <View style={[containerStyle, borderStyle]}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
});

export default Section;
