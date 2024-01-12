import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from '../screens/LoginScreen';
import RegistroScreen from '../screens/RegistroScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import PerfilScreen from '../screens/PerfilScreen';
import BienvenidaScreen from '../screens/BienvenidaScreen';

const Stack = createStackNavigator();

function MyStack() {
    //screenOptions={{headerShown:false}} quita el encabezado del stack
    return (
      <Stack.Navigator > 
         <Stack.Screen name="Bienvenida" component={BienvenidaScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Registro" component={RegistroScreen} />
        <Stack.Screen name="Top_Welcome" component={MyTabs} />
      </Stack.Navigator>
    );
  }

  const Tab = createMaterialTopTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator initialRouteName='Welcome'>
      <Tab.Screen name="Welcome" component={WelcomeScreen} />
      <Tab.Screen name="Perfil" component={PerfilScreen} />
    </Tab.Navigator>
  );
}

export default function MainNavigator(){
    return(
        <NavigationContainer>
            <MyStack/>
        </NavigationContainer>
    )
}

