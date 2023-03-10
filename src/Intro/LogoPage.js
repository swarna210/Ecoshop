import React from "react";
import {View,Text,StyleSheet,Image} from 'react-native'
export default function Logo({navigation}){
    return(
        <View style={Styles.container} >
          <View style={Styles.logocontainer} >
                <Image style={Styles.imageLogo} source={require('../../assets/logo1.png')}/>
          </View>
           <View style={Styles.textContainer}>

            <Image style={Styles.logo}
                onPress={()=> navigation.navigate('Intro1')}
                source={require('../../assets/logo3.png')}/> 
            {/* <Text style={Styles.headingText} >Eco shop</Text> */}
           </View>
           <View style={Styles.discriptionContainer}>
                    <Text style={Styles.discriptiontext} onPress={()=> navigation.navigate('Intro1')}>
                            Buy groceries and feed yourself</Text>
            </View>
        </View>
    )
}
const Styles = StyleSheet.create({
    container:{
       backgroundColor:"#006600",
       flex:1,
    //    alignItems:'center',
    //    justifyContent:"center"
    },
    imageLogo:{
        height:450,
        width:300
    },
    logo:{
        height:200,
        width:300
    },
    textContainer:{
        flexDirection:'row',
        height:'10%',
        width:"100%",
        alignItems:'center',
        justifyContent:'center',
        // backgroundColor:'red'
    },
    logocontainer:{
        height:'80%',
        width:"100%",
        alignItems:'center',
        justifyContent:'center',
    },
    discriptionContainer:{
        height:'10%',
        width:"100%",
        alignItems:'center'
        // backgroundColor:'yellow'
    },
    discriptiontext:{
        color:'white'
    }
})
