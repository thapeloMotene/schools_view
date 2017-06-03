import React from 'react';

import {View, Text, TouchableHighlight, Platform, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import styles, {CHEVRON_SIZE} from './styles';
import {capitalizeFirstLetter} from '../../helpers/string';
import colors from '../../config/colors';

const ListItem = ({school ,onPress}) =>{
    const iconName = Platform.OS === 'ios' ? 'ios-arrow-forward' : 'md-arrow-forward';
    
    
    return (
    <TouchableHighlight onPress = {onPress} underlayColor= {colors.rowUderlay}>
            <View style = {styles.row} >
            <View>
                <Text style = {styles.name}>{school.Institution_Name} </Text>
                <Text style = {styles.email}>{school.E_Mail} </Text>
            </View>
            <View style={styles.chevronContainer}>
            <Icon 
                name={iconName}
                size ={CHEVRON_SIZE}
                color ={colors.subtileText} 
                style={styles.chevron}
                />
            </View>
             </View>
    </TouchableHighlight>
         )
   
}

export default ListItem;