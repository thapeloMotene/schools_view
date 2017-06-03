import React, { Component } from 'react';
import { View, Text } from 'react-native';
//import GoogleMap from 'react-native-maps-google';

class NewContact extends Component{
    render(){
        return(
            <View>
            <Text> Map View </Text>
            {/*
               <GoogleMap style={{ flex:1, alignItems: 'center', justifyContent:'center' }}
                    cameraPosition={{auto: true, zoom: 10}}
                    showsUserLocation={true}
                    scrollGestures={true}
                    zoomGestures={true}
                    tiltGestures={true}
                    rotateGestures={true}
                    consumesGesturesInView={true}
                    compassButton={true}
                    myLocationButton={true}
                    indoorPicker={true}
                    allowScrollGesturesDuringRotateOrZoom={true}
                /> */}
         
            </View>
              )
    }

}

export default NewContact;