import React from "react";
import {View,Text,StyleSheet,Image,TextInput,ScrollView,Button} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import {Badge} from 'react-native-elements'
import Entypo from 'react-native-vector-icons/Entypo'
import Swiper from 'react-native-swiper'

export default function Home({navigation}){
    return(
        <View style={Styles.maincontainer}>
           <View style={Styles.firstContainer}>
                <View style={Styles.logoContainer}>
                    <Image style={Styles.logo} source={require('../../assets/cartlogo.png')}/>
                     <Text style={Styles.logoStyle} >Eco Shop</Text>
                     <Icon style={Styles.cartIcon} 
                        name="cart" size={35} color="white"/>
                        <Badge value={3}  
                            badgeStyle={{backgroundColor:'#ffcc00',height:20,width:20,borderRadius:100}}
                            textStyle={{color:'black'}}
                            containerStyle={{ position: 'absolute', top: -2, right: 30 }}/>
                </View>
                <View style={Styles.searchContainer}>
                    <Icon name="search" size={25} style={Styles.searchbarIcon}/>
                    <TextInput placeholder="Search products"/>
                </View>
           </View>
           {/* top searchbar */}
           <ScrollView>
                    <View style={{flexDirection:'row'}}>
                        <Text style={{fontSize:20,fontWeight:'bold',color:'black',marginLeft:10}}>My Market catergory</Text>
                        <Text style={{marginLeft:100,marginTop:5}}
                            onPress={()=> navigation.navigate('Categories')}>See All</Text>
                    </View>
                    <ScrollView horizontal>
                        <View>
                        <View style={Styles.imageContainer}>
                            <Image style={Styles.categoryImage} source={require('../../assets/FRUITS.png')}/>
                        </View>
                            <Text style={{textAlign:'center'}}>Fruits </Text>
                        </View>
                        <View>
                        <View style={Styles.imageContainer}>
                            <Image style={Styles.categoryImage} source={require('../../assets/VEGETABLE.png')}/>
                        </View>
                            <Text style={{textAlign:'center'}}>Vegetables </Text>
                        </View>
                        <View>
                        <View style={Styles.imageContainer}>
                            <Image style={Styles.categoryImage} source={require('../../assets/MEAT.png')}/>
                        </View>
                            <Text style={{textAlign:'center'}}>Meat </Text>
                        </View>
                        <View>
                        <View style={Styles.imageContainer}>
                            <Image style={Styles.categoryImage} source={require('../../assets/JUICE.png')}/>
                        </View>
                            <Text style={{textAlign:'center'}}>Juice </Text>
                        </View>
                        <View>
                        <View style={Styles.imageContainer}>
                            <Image style={Styles.categoryImage} source={require('../../assets/COOLDRINKS.png')}/>
                        </View>
                            <Text style={{textAlign:'center'}}>Cool Drinks </Text>
                        </View>
                        <View>
                        <View style={Styles.imageContainer}>
                            <Image style={Styles.categoryImage} source={require('../../assets/FRUITS.png')}/>
                        </View>
                            <Text style={{textAlign:'center'}}>Fruits </Text>
                        </View>
                    </ScrollView>
                {/*  */}
            {/* market category ends */}
        
         <View style={Styles.containerSlider}>
                <Swiper style={Styles.wrapper} >
            <View  style={Styles.slide1}>
            <Text style={Styles.textSlider}>Eco Shop</Text>
            </View>
            <View  style={Styles.slide2}>
            {/* <Text style={Styles.textSlider}>Beautiful</Text> */}
            
            <View style={{flexDirection:'row'}}>
                <View style={{width:'50%'}}>
                    <Text style={{fontWeight:'bold',color:'#33cc33',marginLeft:10}}>Fresh Grocery</Text>
                    <Text style={{fontSize:18,fontWeight:'bold',color:'black',marginLeft:10}}>
                        There's you can buy all of your grocery products</Text>
                    <View style={{height:40,width:100,backgroundColor:'#e6c300',
                                  alignItems:'center',justifyContent:'center',
                                  marginTop:8,flexDirection:'row',marginLeft:10}}>
                        <Text style={{fontWeight:'bold',color:'black'}}
                        onPress={()=> navigation.navigate('Arrivals')}>Shop Now</Text>
                        <AntDesign name="right" size={20} color='black'/>
                    </View>
                </View>
               <View style={{height:100,width:'50%',marginTop:40}}>
                        <Image style={{height:"100%",width:"100%",resizeMode:'contain'}} 
                        source={require('../../assets/slider.png')}/>
               </View>
            </View>
            </View>
            <View  style={Styles.slide3}>
            <Text style={Styles.textSlider}>And simple</Text>
            </View>
        </Swiper>
        </View>
         {/* slider ends */}
            <ScrollView>
                <View style={{flexDirection:'row'}}>
                    <Text style={{fontWeight:'bold',color:'black',marginLeft:10,fontSize:25}}>Popular</Text>
                    <Text style={{marginLeft:200,marginTop:10}} 
                        onPress={()=> navigation.navigate('PopularSell')}>See All</Text>
                </View>
                <View style={{marginBottom:20}}>
                    <ScrollView horizontal>
                        <View style={{backgroundColor:'white',width:150,height:250,
                                margin:10}}>
                           <View style={{alignItems:'center',justifyContent:'center',
                                 height:150,width:130,}}>
                                <Image style={{height:'100%',width:'100%',resizeMode:'contain'}} 
                                        source={require('../../assets/tp.png')}/>
                           </View>
                            <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                                <Entypo name="star" color='#ffd700' size={20} />
                                <Entypo name="star" color='#ffd700' size={20} />
                                <Entypo name="star" color='#ffd700' size={20} />
                                <Entypo name="star" color='#ffd700' size={20} />
                                <Entypo name="star" color='#ffd700' size={20} />
                            </View>
                            <Text style={{textAlign:'center',fontSize:20,fontWeight:'bold',color:'black'}}>
                                Tomatoes</Text>
                        </View>
                        {/*  */}
                        <View style={{backgroundColor:'white',width:150,height:250,
                                margin:10}}>
                           <View style={{alignItems:'center',justifyContent:'center',
                                 height:150,width:130,}}>
                                <Image style={{height:'100%',width:'100%',resizeMode:'contain'}} 
                                        source={require('../../assets/tp.png')}/>
                           </View>
                            <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                                <Entypo name="star" color='#ffd700' size={20} />
                                <Entypo name="star" color='#ffd700' size={20} />
                                <Entypo name="star" color='#ffd700' size={20} />
                                <Entypo name="star" color='#ffd700' size={20} />
                                <Entypo name="star" color='#ffd700' size={20} />
                            </View>
                            <Text style={{textAlign:'center',fontSize:20,fontWeight:'bold',color:'black'}}>
                                Tomatoes</Text>
                        </View>
                        <View style={{backgroundColor:'white',width:150,height:250,
                                margin:10}}>
                           <View style={{alignItems:'center',justifyContent:'center',
                                 height:150,width:130,}}>
                                <Image style={{height:'100%',width:'100%',resizeMode:'contain'}} 
                                        source={require('../../assets/tp.png')}/>
                           </View>
                            <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                                <Entypo name="star" color='#ffd700' size={20} />
                                <Entypo name="star" color='#ffd700' size={20} />
                                <Entypo name="star" color='#ffd700' size={20} />
                                <Entypo name="star" color='#ffd700' size={20} />
                                <Entypo name="star" color='#ffd700' size={20} />
                            </View>
                            <Text style={{textAlign:'center',fontSize:20,fontWeight:'bold',color:'black'}}>
                                Tomatoes</Text>
                        </View>
                        <View style={{backgroundColor:'white',width:150,height:250,
                                margin:10}}>
                           <View style={{alignItems:'center',justifyContent:'center',
                                 height:150,width:130,}}>
                                <Image style={{height:'100%',width:'100%',resizeMode:'contain'}} 
                                        source={require('../../assets/tp.png')}/>
                           </View>
                            <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                                <Entypo name="star" color='#ffd700' size={20} />
                                <Entypo name="star" color='#ffd700' size={20} />
                                <Entypo name="star" color='#ffd700' size={20} />
                                <Entypo name="star" color='#ffd700' size={20} />
                                <Entypo name="star" color='#ffd700' size={20} />
                            </View>
                            <Text style={{textAlign:'center',fontSize:20,fontWeight:'bold',color:'black'}}>
                                Tomatoes</Text>
                        </View>
                        <View style={{backgroundColor:'white',width:150,height:250,
                                margin:10}}>
                           <View style={{alignItems:'center',justifyContent:'center',
                                 height:150,width:130,}}>
                                <Image style={{height:'100%',width:'100%',resizeMode:'contain'}} 
                                        source={require('../../assets/tp.png')}/>
                           </View>
                            <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                                <Entypo name="star" color='#ffd700' size={20} />
                                <Entypo name="star" color='#ffd700' size={20} />
                                <Entypo name="star" color='#ffd700' size={20} />
                                <Entypo name="star" color='#ffd700' size={20} />
                                <Entypo name="star" color='#ffd700' size={20} />
                            </View>
                            <Text style={{textAlign:'center',fontSize:20,fontWeight:'bold',color:'black'}}>
                                Tomatoes</Text>
                        </View>
                    </ScrollView>
                    
                        
                    
                </View>
            </ScrollView>
         {/* popular ends */}
           </ScrollView>
           

        </View>
    )
}
const Styles = StyleSheet.create({
    maincontainer:{
       flex:1,
    },
   firstContainer:{
        backgroundColor:'#006600',
        height:'25%',
        width:'100%',
        borderBottomRightRadius:20,
        borderBottomLeftRadius:20
    },
   
    
    logoContainer:{
        flexDirection:'row',
        marginTop:10,
        marginLeft:10
    },
    logo:{
        height:50,
        width:50
    },
    logoStyle:{
        color:'white',
        fontSize:20,
        marginTop:10,
        fontWeight:'bold'
    },
    cartIcon:{
        marginLeft:150,
        
    },
    searchContainer:{
        flexDirection:'row',
        backgroundColor:'white',
        width:'90%',
        marginLeft:18,
        marginTop:10
    },
    badgeStyle:{
        color:'black',
        backgroundColor:" #ffff1a",
        marginLeft:500
    },
    searchbarIcon:{
        marginTop:10,
        marginLeft:10
    },
    // catergory part
    categoryImage:{
        height:150,
        width:150
    },
    imageContainer:{
        backgroundColor:'#d9d9d9',
        height:90,
        width:90,
        alignItems:'center',
        justifyContent:"center",
        margin:10
    },
    // slider
    containerSlider:{
        height:200,
        width:'90%',
        marginLeft:20,
      },
      slide1: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffe6f2'
      },
      slide2: {
        flex: 1,
        backgroundColor: '#ffe6f2'
      },
      slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffe6f2'
      },
      textSlider: {
        color: 'black',
        fontSize: 30,
        fontWeight: 'bold'
      },
    //   popular container
})
