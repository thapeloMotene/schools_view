import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';

import  {Row } from '../components/UserDetails';
import colors from '../config/colors';
import styles from '../config/styles';

class Details extends Component{
   
    render(){
         const school = this.props.navigation.state.params;
        return(
            <ScrollView style={ styles.container}>

              <Row 
                    label="SCHOOL"
                    body ={ school.Institution_Name }
                    
            />
                <Row 
                    label="Type Of School"
                    body ={ school.Phase }
                   
            />
                <Row 
                    label="Principal"
                    body ={ school.Addressee }
                  
            />
                <Row 
                    label="Municipal"
                    body ={ school.DMunName }
                
            />

            <Row 
                    label="Street Address "
                    body ={ school.StreetAddress }
                   
            />


            <Row 
                    label="Email"
                    body ={ school.E_Mail }
                    actions ={[
                        {
                            onPress: () => null,
                            iosIcon: 'ios-mail',
                            androidIcon:'md-mail'
                        },
                    ]} />
            <Row 
                    label="Telephone"
                    body ={ '0'+school.Telephone }
                    actions ={[
                        {
                            onPress: () => null,
                            iosIcon: 'ios-call',
                            androidIcon:'md-call'
                        },
                    ]} />
              
              
            </ScrollView>
              )
    }
}
export default Details; 