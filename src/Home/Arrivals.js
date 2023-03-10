import React, { useState } from 'react';
import { View, Text,StyleSheet ,ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign'
import { Dropdown } from "react-native-element-dropdown";

const data =[
    {label:'One',value:'One'},
    {label:'Two',value:'Two'},
    {label:'Three',value:'Three'},
    {label:'Four',value:'Four'},
]

export default function Arrivals(){
  return(
    <View>
          
          <View>
          <Text>New Arrivals</Text>
          <Dropdown data={data} style={Styles.dropdownStyle}
          containerStyle={StyleSheet.dropdownContainerStyle}
          itemContainerStyle={Styles.dropdownitemContainerStyle}
          dropdownContainerStyle={{position:'absolute',marginRight:200}}
          renderRightIcon={()=> null}
                        activeColor='#1F3341'
                        placeholder={<Icon name="menu-unfold" size={25} />}
                        labelField="label"
                        valueField="value"/>
          </View>
          {/* start of row */}
            <ScrollView>
              <View>
                
              </View>
            </ScrollView>
    </View>
  )
}

const Styles = StyleSheet.create({
  dropdownStyle:{
      backgroundColor:'red',
      height:40,
      width:40,
      // marginLeft:310,
    marginLeft:200
  },
  dropdownContainerStyle:{
      // width:200,
      backgroundColor:'green',
      
      // position:'absolute',
      // right:-300
  },
  dropdownitemContainerStyle:{
    height:50,
    width:450,
    // position:'relative',
    // right:30
  }
  // end of dropdown css
})