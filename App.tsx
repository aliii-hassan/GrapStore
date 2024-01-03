
import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Splash,Onboarding,Login,RegisterOnBoarding,
  RegisterSignup,MainPage,Cart,Schedule
,Account
} from './src/screens'

const stack= createNativeStackNavigator();
 const App =()=>
 {
  return(
<NavigationContainer>
<stack.Navigator screenOptions={{headerShown:false}} >
              
              <stack.Screen name="Splash" component={Splash} />
              <stack.Screen name="Onboarding" component={Onboarding} />
              <stack.Screen name="Login" component={Login} />
              <stack.Screen name="RegisterOnBoarding" component={RegisterOnBoarding} />
              <stack.Screen name="RegisterSignup" component={RegisterSignup} />
              <stack.Screen name="MainPage" component={MainPage} />
              <stack.Screen name="Cart" component={Cart} />
              <stack.Screen name="Schedule" component={Schedule} />
              <stack.Screen name="Account" component={Account} />
              
            </stack.Navigator>
</NavigationContainer>
  )
 }

export default App;
