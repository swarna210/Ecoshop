import React from "react";
import {View,Text,StyleSheet} from 'react-native'

export default function Discription(){
    return(
        <View>
            <Text style={Styles.text}>Introduction</Text>
        </View>
    )
}
const Styles = StyleSheet.create({
    text:{
        fontSize:50,
        marginTop:100
    }
})