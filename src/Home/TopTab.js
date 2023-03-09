import React from "react";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Discription from "./TopTab/Discription";
import Reviews from "./TopTab/Reviews";
import SellerInfo from "./TopTab/SellerInfo";

const Tab = createMaterialTopTabNavigator();

export default function MyTab(){
    return(
        <Tab.Navigator>
            <Tab.Screen name='Discription' component={Discription}/>
            <Tab.Screen name='Reviews' component={Reviews}/>
            <Tab.Screen name='SellerInfo' component={SellerInfo}/>
        </Tab.Navigator>
    )
}
 