import React from "react";
import {View,Text,StyleSheet,Image,TextInput,ScrollView,Button,ImageBackground} from 'react-native'
import { Badge } from "react-native-elements";
import Icon from 'react-native-vector-icons/AntDesign'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import AntDesign from 'react-native-vector-icons/AntDesign'


// import Tab from './Tab'

export default function PopularSell({navigation}){
    return(
        <View style={Styles.maincontainer}>
           <ImageBackground style={Styles.backgroundImage} source={require('../../assets/bg.png')}>
        <View style={{flexDirection:'row',marginBottom:10,marginTop:10}}>
            <View style={Styles.leftIcon}>
                <Icon name="left" size={25} color="white" />
            </View>
            <Text style={{fontWeight:'bold',fontSize:20,color:'black',marginLeft:70}}>Popular Sells</Text>
            <Icon name="heart" size={25} color='red' style={Styles.heartIcon}/>
        </View>
        <View style={{height:150,width:180,marginLeft:80}}>
            <Image style={{height:'100%',width:'100%'}} source={require('../../assets/tp.png')}/>
            <Badge value='-50%'  
                            badgeStyle={{backgroundColor:'#ffcc00',height:55,width:55,borderRadius:100}}
                            textStyle={{color:'black',fontSize:15}}
                            containerStyle={{ position: 'absolute', top: -2, right: -60 }}/>
        </View>
        {/* end of product view */}
        <View style={Styles.imageContainer}>
            <View style={Styles.imageTypes0}>
                <Image style={Styles.imageSize} 
                     source={require('../../assets/tomatoo.png')}/>
            </View>
            <View style={Styles.imageTypes}>
                <Image style={Styles.imageSize} source={require('../../assets/TOMATO.png')}/>
            </View>
            <View style={Styles.imageTypes}>
                <Image style={Styles.imageSize} source={require('../../assets/tomatoo.png')}/>
            </View>
        </View>
        {/* end of image view in 3 container */}
        <ScrollView>
            {/*  */}
            <View style={{flexDirection:'row'}}>
                <View>
                    <Text>VEGETABLE</Text>
                    <Text>Tomato Long Sweet (Local) 500kg</Text>
                </View>

            </View>
            {/*  */}
            {/* <Tab/> */}
        </ScrollView>
        {/* bottom container starts */}
           <View  style={Styles.bottom}>
            <View style={Styles.shoppingCart}>
                 <FontAwesome name="shopping-cart" size={30} color="black"/>
                 <Badge value={3} 
                            badgeStyle={{backgroundColor:'#339933',height:25,width:25,borderRadius:100}}
                            textStyle={{color:'white',fontSize:15}}
                            containerStyle={{ position: 'absolute', top: -6, right: -8 }}/>
            </View>
            <View style={Styles.addcart}>
                <AntDesign name="plus" size={25} color="white"/>
                <Text style={Styles.cartText}>Add to cart</Text>
            </View>
           </View>
             {/* bottom container ends */}
           </ImageBackground>
        </View>
    )
}
const Styles = StyleSheet.create({
    maincontainer:{
        flex:1
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover', 
      },
      leftIcon:{
        height:30,
        width:30,
        backgroundColor:'#00e64d',
        borderRadius:50,
        alignItems:'center',
        justifyContent:'center',
        marginLeft:10
      },
      heartIcon:{
        marginLeft:80,
        marginTop:20
      },
      imageContainer:{
        height:110,
        width:'100%',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'
      },
      imageTypes:{
            height:110,
            width:100,
            backgroundColor:"white",
            marginLeft:10,
            borderColor:'#d9d9d9',
            borderWidth:1,
            borderRadius:10
      },
      imageTypes0:{
        height:110,
        width:100,
        backgroundColor:"white",
        marginLeft:10,
        borderColor:'#66cc66',
        borderWidth:1.5,
        borderRadius:10
  },
      imageSize:{
            height:'100%',
            width:'100%',
            resizeMode:'cover'
          },
          
    //   bottom container starts
      bottom: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        paddingVertical: 20,
        flexDirection:'row',
        backgroundColor:'white',
        height:60,
        alignItems:'center',
      },
      addcart:{
        flexDirection:'row',
        marginLeft:20,
        backgroundColor:'#39ac39',
        height:50,
        width:260,
        borderRadius:10,
        alignItems:'center',
        justifyContent:'center',
      },
      shoppingCart:{
        height:40,
        width:40,
        backgroundColor:'#d9f2e6',
        marginLeft:20,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:5
      },
      cartText:{
        color:'white',
        fontSize:15,
        marginLeft:10
      }
       //   bottom container ends
})
