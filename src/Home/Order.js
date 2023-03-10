import React from 'react';
import { View, ScrollView, Text, StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  page: {
    width,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const PagingScrollViewExample = () => {
  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
      >
        <View style={[styles.page, { backgroundColor: 'white' }]}>
          <Text>Order</Text>
        </View>
        <View style={[styles.page, { backgroundColor: 'green' }]}>
          <Text>Page 2</Text>
        </View>
        <View style={[styles.page, { backgroundColor: 'blue' }]}>
          <Text>Page 3</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default PagingScrollViewExample;
