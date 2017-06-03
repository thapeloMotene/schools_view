import React from 'react';
import {Platform} from 'react-native';

import { Tabs} from './config/router.js';


const App = ()=>{
    
if (Platform.OS =='ios')
{
    return <tabs />
}
    return <Tabs/>;
}

export default App;
