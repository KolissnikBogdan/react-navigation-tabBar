import React, { useMemo } from 'react';
import { FlatList, SafeAreaView, StyleSheet, View } from 'react-native';
import { generateColor } from '../../utils/colors';

const EmptyScreen = () => {
  const colors = useMemo(
    () => [...new Array(20)].map(() => generateColor()),
    [],
  );

  const renderItem = ({ item: color }) => {
    return (
      <View
        style={[
          styles.item,
          {
            backgroundColor: color,
          },
        ]}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        contentContainerStyle={{
          paddingBottom: 80,
        }}
        data={colors}
        renderItem={renderItem}
        keyExtractor={(item: any, idx: any) => `item_${idx}`}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F7EB',
  },
  item: {
    margin: 10,
    height: 90,
    borderRadius: 10,
  },
});

export default EmptyScreen;
