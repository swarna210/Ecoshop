import React from 'react'
import { Text, View } from 'react-native'
import Swiper from 'react-native-swiper'

var styles = {
  // wrapper: {},
  containerSlider:{
    height:400,
    width:'100%',
  },
  slide1: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB'
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5'
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9'
  },
  textSlider: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  }
}

export default () => (
  <View style={styles.containerSlider}>
        <Swiper style={styles.wrapper} >
    <View  style={styles.slide1}>
      <Text style={styles.textSlider}>Hello Swiper</Text>
    </View>
    <View  style={styles.slide2}>
      <Text style={styles.textSlider}>Beautiful</Text>
    </View>
    <View  style={styles.slide3}>
      <Text style={styles.textSlider}>And simple</Text>
    </View>
  </Swiper>
  </View>
  
)