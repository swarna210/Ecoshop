import React from "react";
import {View,Text,StyleSheet,Image} from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign'

export default function Logo({navigation}){
    return(
        <View>
            <View style={Styles.headingContainer}>
                <View style={Styles.icon}>
                    <Icon name="left" size={25} onPress={()=>navigation.navigate('Home')}/>
                </View>
                <Text style={{fontWeight:'bold',fontSize:20,color:'black',marginLeft:80}}>All categories</Text>
            </View>
            {/* row starts */}
            <View style={Styles.container}>
                <View>
                    <View style={Styles.item}>
                        <Image style={Styles.imagestyle} source={require('../../assets/FRUITS.png')}/>
                    </View>
                    <Text style={{textAlign:'center'}}>Fruits</Text>
                </View>
                <View>
                    <View style={Styles.item}>
                        <Image style={Styles.imagestyle} source={require('../../assets/VEGETABLE.png')}/>
                    </View>
                    <Text style={{textAlign:'center'}}>Vegetables</Text>
                </View>
                <View>
                    <View style={Styles.item}>
                        <Image style={Styles.imagestyle} source={require('../../assets/BREAD.png')}/>
                    </View>
                    <Text style={{textAlign:'center'}}>Bread</Text>
                </View>
                <View>
                    <View style={Styles.item}>
                        <Image style={Styles.imagestyle} source={require('../../assets/JUICE.png')}/>
                    </View>
                    <Text style={{textAlign:'center'}}>Juice</Text>
                </View>
                <View>
                    <View style={Styles.item}>
                        <Image style={Styles.imagestyle} source={require('../../assets/BREAD.png')}/>
                    </View>
                    <Text style={{textAlign:'center'}}>Bread</Text>
                </View>
                <View>
                    <View style={Styles.item}>
                        <Image style={Styles.imagestyle} source={require('../../assets/MEAT.png')}/>
                    </View>
                    <Text style={{textAlign:'center'}}>Meat</Text>
                </View>
                <View>
                    <View style={Styles.item}>
                        <Image style={Styles.imagestyle} source={require('../../assets/COOLDRINKS.png')}/>
                    </View>
                    <Text style={{textAlign:'center'}}>Cool Drinks</Text>
                </View>
                
                <View>
                    <View style={Styles.item}>
                        <Image style={Styles.imagestyle} source={require('../../assets/FRUITS.png')}/>
                    </View>
                    <Text style={{textAlign:'center'}}>Fruits</Text>
                </View>
                <View>
                    <View style={Styles.item}>
                        <Image style={Styles.imagestyle} source={require('../../assets/VEGETABLE.png')}/>
                    </View>
                    <Text style={{textAlign:'center'}}>Vegetables</Text>
                </View>
                <View>
                    <View style={Styles.item}>
                        <Image style={Styles.imagestyle} source={require('../../assets/JUICE.png')}/>
                    </View>
                    <Text style={{textAlign:'center'}}>Juice</Text>
                </View>
                <View>
                    <View style={Styles.item}>
                        <Image style={Styles.imagestyle} source={require('../../assets/BREAD.png')}/>
                    </View>
                    <Text style={{textAlign:'center'}}>Bread</Text>
                </View>
                <View>
                    <View style={Styles.item}>
                        <Image style={Styles.imagestyle} source={require('../../assets/MEAT.png')}/>
                    </View>
                    <Text style={{textAlign:'center'}}>Meat</Text>
                </View>
                
               
        </View>
        
        </View>
    )
}
const Styles = StyleSheet.create({
    container:{
        flexDirection: 'row', 
        flexWrap: 'wrap',
        justifyContent:'center'
    },
    headingContainer:{
        height:50,
        alignItems:'center',
        flexDirection:'row'
    },
    imagestyle:{
        height:150,
        width:80
    },
    item: {
        backgroundColor: '#d9d9d9',
        margin: 3,
        width: 80,
        height:100,
        alignItems:'center',
        justifyContent:'center'
    },
    icon:{
        backgroundColor:'#006600',
        height:30,
        width:30,
        borderRadius:50,
        alignItems:'center',
        justifyContent:'center',
        marginLeft:10
    }
})