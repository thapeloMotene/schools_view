import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';

import colors from '../config/colors';
import { ListItem } from '../components/ListItem';

import api from '../config/api';



class Schools extends Component{
   handleRowPress= (school)=>{
       this.props.navigation.navigate('Details',school);
    }
        constructor(props){
            super(props);
            this.state = {
                schools :[]
        }
    }
    
        componentWillMount(){
            api.getSchools().then((res)=> { 
                this.setState({
                    schools: res
                })
            })
    }
  
    render(){
   

       console.log('schools', this.state.schools);
    
        return(

            <FlatList style ={{backgroundColor: colors.background}}
            data= {this.state.schools}
            renderItem= {({item})=> <ListItem school={item} onPress={()=> this.handleRowPress(item)} /> }
            keyExtractor = {(school)=> school._id}
            />
             
              )
    }

}

export default Schools;