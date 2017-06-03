import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {Button} from 'react-native';
//importing navigator types
import {StackNavigator, TabNavigator, DrawerNavigator}  from 'react-navigation';

//screens
import Schools from '../screens/schools';
import Details from '../screens/Details';
import MapScreen from '../screens/map';




export const SchoolStack  = StackNavigator({
Contacts:{
    screen: Schools,
    navigationOptions: ({navigation})=>({
        title: 'Schools',
       
    })
},
Details:{
    screen: Details,
   navigationOptions: ({navigation}) =>({
       title: 'School Details'
   }),
},
});


export const MapViewStack = StackNavigator({
NewContact:{
    screen: MapScreen,
       navigationOptions: ({navigation})=>({
        title: 'Map View',
   
    })
}
});




export const Tabs = TabNavigator({
    Contacts:{
        screen: SchoolStack,
        navigationOptions:{
            tabBarLabel:'Schools',
            tabBarIcon: ({tintColor})=> <Icon name="ios-list" size={35}  color ={tintColor} />
        }
    },
    NewContact:{
        screen:MapViewStack,
          navigationOptions:{
            tabBarLabel:'Map View',
            tabBarIcon: ({tintColor})=> <Icon name="ios-pin" size={35}  color ={tintColor} />
        }
    }
   
})

