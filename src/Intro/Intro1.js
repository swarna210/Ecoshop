import React from 'react';
import { View, Text, StyleSheet,Image} from 'react-native';

const Intro1 = ({navigation}) => {
  return (

    <View style={Styles.container}>
      <Text style={Styles.skip} onPress={()=> navigation.navigate('Bottom')}>Skip</Text>
      <View style={Styles.container1}>
      <Image style={Styles.productImage} source={require('../../assets/product.jpg')}/>
      <Text style={Styles.heading}>Choose Product</Text>
      <Text style={Styles.discription}>Top commerce is a online store.brings a whopping 20000+ products 
      with more than 1000 brands, to over 4 million happy customers</Text>
      </View>
        <View style={Styles.container2}>
              <View style={Styles.circle} />
              <Text style={Styles.text} onPress={()=> navigation.navigate('Intro2')}>Next</Text>
        </View>
      
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    backgroundColor:"white"
  },
  container1: {
   height:'70%',
   width:'100%',
   alignItems:"center",
   justifyContent:'center'
  },
  container2: {
    height:'30%',
   width:'100%',
   alignItems:"center",
   justifyContent:'center',
  },
  circle: {
    marginTop:45,
    width: 200,
    height: 200,
    backgroundColor: '#339933',
    borderRadius: 100,
    overflow: 'hidden',
  },
  text: {
    position: 'absolute',
    textAlign: 'center',
    width: 200,
    height: 65,
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  productImage:{
    height:300,
    width:250
  },
  heading:{
    fontSize:30,
    fontWeight:'bold',
    color:'black',
    marginTop:20
  },
  discription:{
    color:'#b3b3b3',
    marginLeft:10,
    marginRight:10,
    textAlign:'center',
    marginTop:10
  },
  skip:{
    color:'black',
    fontSize:20,
    fontWeight:'bold',
    marginTop:10,
    marginLeft:300
  }
});

export default Intro1;
