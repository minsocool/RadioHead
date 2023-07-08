import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'; // bottomTab
import {
  HomeScreen,
  SearchingListScreen,
  LibraryScreen,
  AlbumSongs,
} from '../screens'; // Screen
import Ionicons from 'react-native-vector-icons/Ionicons';
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const LibraryStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Your Library" component={LibraryScreen} />
      <Stack.Screen name="AlbumSongDetails" component={AlbumSongs} />
    </Stack.Navigator>
  );
};

function MainContainer(props) {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarActiveTintColor: 'white',
        tabBarInactiveTintColor: '#8E93A1',
        tabBarLabelStyle: {
          paddingBottom: 10,
          fontSize: 12,
          fontFamily: 'SFProText-Bold',
        },
        tabBarStyle: {
          backgroundColor: 'black',
          padding: 10,
          width: 375,
          height: 70,
        },
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          let rn = route.name;

          if (rn === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (rn === 'Searching') {
            iconName = focused ? 'search' : 'search-outline';
          } else if (rn === 'Library') {
            iconName = focused ? 'albums' : 'albums-outline';
          }

          return <Ionicons name={iconName} color={color} size={size} />;
        },
      })}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Searching" component={SearchingListScreen} />
      <Tab.Screen
        name="Library"
        component={LibraryStack}
        options={{
          tabBarBadge: 3,
          tabBarBadgeStyle: {backgroundColor: 'red'},
        }}
      />
    </Tab.Navigator>
  );
}

export default MainContainer;
