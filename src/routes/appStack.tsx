import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Landing from '../pages/Landing';
import StudyTabs from './StudyTabs';
import LegacyFN from '../pages/LegacyFN';
import T1a_legacy from '../pages/T1a_legacy';
import T1b_legacy from '../pages/T1b_legacy';
import T2a_legacy from '../pages/T2a_legacy';
import T2b_legacy from '../pages/T2b_legacy';
import T3a_legacy from '../pages/T3a_legacy';
import T3b_legacy from '../pages/T3b_legacy';

const { Navigator, Screen } = createStackNavigator();

function AppStack() { 
    return (
        <NavigationContainer>
          <Navigator screenOptions={{ headerShown: false }}>

            <Screen name="Landing" component={Landing}/>
            
            <Screen name="Study" component={StudyTabs} />
            <Screen name="LegacyFN" component={LegacyFN} />
            <Screen name="T1a_legacy" component={T1a_legacy}/>
            <Screen name="T1b_legacy" component={T1b_legacy}/>
            <Screen name="T2a_legacy" component={T2a_legacy}/>
            <Screen name="T2b_legacy" component={T2b_legacy}/>
            <Screen name="T3a_legacy" component={T3a_legacy}/>
            <Screen name="T3b_legacy" component={T3b_legacy}/>
          </Navigator>
        </NavigationContainer>
    )
}

export default AppStack;