import React from "react";
import {View,Text,StyleSheet,Image} from 'react-native'
export default function Logo({navigation}){
    return(
        <View style={Styles.container} >
          <View style={Styles.logocontainer} >
                <Image style={Styles.imageLogo} source={require('../../assets/111.png')}/>
          </View>
           <View style={Styles.textContainer}>
            <Image style={Styles.logo} source={require('../../assets/cartlogo.png')}/> 
            <Text style={Styles.headingText} onPress={()=> navigation.navigate('Intro1')}>Eco shop</Text>
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
        height:200,
        width:250
    },
    logo:{
        height:50,
        width:50
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
        // backgroundColor:'blue'
    },
    discriptionContainer:{
        height:'10%',
        width:"100%",
        alignItems:'center'
        // backgroundColor:'yellow'
    },
    headingText:{
        color:'white',
        fontSize:25
    },
    discriptiontext:{
        color:'white'
    }
})
