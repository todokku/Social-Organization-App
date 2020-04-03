import React from "react";
import { NavigationContainer} from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import auth from '@react-native-firebase/auth';


import Login from './screens/login';
import Register from './screens/register';
import Loading from './screens/loading';
import Home from "./screens/tabs/home";
import Veterans from './screens/veterans';
import Feed from './screens/feed';
import Chat from './screens/chat';
import Profile from './screens/profile';

import Screen1 from './screens/drawer/screen1';
import Screen2 from './screens/drawer/screen2';
import Screen3 from './screens/drawer/screen3';
import Tab2 from './screens/tabs/Tab2';
import Tab3 from './screens/tabs/Tab3';



const Authstack = createStackNavigator();
const HomeStack = createStackNavigator();
const SearchStack = createStackNavigator();
const PlusStack = createStackNavigator();
const ChatStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const MaterialBottomTabs = createMaterialBottomTabNavigator();
const MaterialTopTabs = createMaterialTopTabNavigator();


const HomeStackScreen = () => (
  <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={Home} />
  </HomeStack.Navigator>
);
const VeteransStackScreen = () => (
  <SearchStack.Navigator>
  <SearchStack.Screen name="Veterans" component={Veterans} />
  </SearchStack.Navigator>
);
const PlusStackScreen = () => (
  <PlusStack.Navigator>
      <PlusStack.Screen name="Feed" component={Feed} />
  </PlusStack.Navigator>
)
const ChatStackScreen = () => (
  <ChatStack.Navigator>
      <ChatStack.Screen name="Chat" component={Chat} />
  </ChatStack.Navigator>
);
const ProfileStackScreen = () => (
  <ProfileStack.Navigator>
      <ProfileStack.Screen name="Profile" component={Profile} />
  </ProfileStack.Navigator>
);

const MaterialBottomTabsScreen = () => (
<MaterialBottomTabs.Navigator>
<MaterialBottomTabs.Screen name="Home" component={HomeStackScreen} />
        <MaterialBottomTabs.Screen name="Veterans" component={MaterialTopTabsScreen} />
        <MaterialBottomTabs.Screen name="Feed" component={PlusStackScreen} />
        <MaterialBottomTabs.Screen name="Chat" component={ChatStackScreen} />
        <MaterialBottomTabs.Screen name="Profile" component={ProfileStackScreen} />
</MaterialBottomTabs.Navigator>
);
const MaterialTopTabsScreen = () => (
  <MaterialTopTabs.Navigator>
  <MaterialTopTabs.Screen name="Veterans" component={VeteransStackScreen} />
  <MaterialTopTabs.Screen name="Members" component={Tab2} />
  <MaterialTopTabs.Screen name="Tags" component={Tab2} />
  <MaterialTopTabs.Screen name="Groups" component={Tab3} />
  <MaterialTopTabs.Screen name="Trending" component={Tab3} />
  </MaterialTopTabs.Navigator>
  
);

const Drawer = createDrawerNavigator();

export default () => {
  const [isLoading, setIsLoading ] = React.useState(true);
  const [userToken, setUserToken] = React.useState(null);
  React.useEffect(() => {
    setTimeout (() => {
        setIsLoading(false);
    },  1000);
}, []);

if(isLoading) {
    return <Loading />
}
 

return (
 <NavigationContainer>
   {userToken ? (
<Drawer.Navigator>
        <Drawer.Screen name="Home" component={MaterialBottomTabsScreen} />
        <Drawer.Screen name="Contacts" component={Screen1} />
        <Drawer.Screen name="Favorites" component={Screen2} />
        <Drawer.Screen name="Settings" component={Screen3} />
      </Drawer.Navigator>
     ) : (
      <Authstack.Navigator>
      <Authstack.Screen name="Login" component={Login} />
      <Authstack.Screen name="Register" component={Register} />
  </Authstack.Navigator>
     )}
 </NavigationContainer>
  )
};
