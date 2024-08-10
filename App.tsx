import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import {Home} from './src/screens/Home';
import {Login} from './src/screens/Login';
import {Registration} from './src/screens/Registration';
import {Confirmation} from './src/screens/Confirmation';

type RootStackParamList = {
  Home: undefined;
  Login: undefined;
  Registration: undefined;
  Confirmation: undefined;
};

export type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Home'
>;

export type RegistrationScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Registration'
>;

export type LoginScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Login'
>;

export type ConfirmationScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Confirmation'
>;

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Registration" component={Registration} />
        <Stack.Screen name="Confirmation" component={Confirmation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
