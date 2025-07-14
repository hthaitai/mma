import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import Icon from 'react-native-vector-icons/Ionicons';
import Header from '../components/header';
import CoachChatScreen from "../screens/CoachChatScreen";
import NotificationsScreen from "../screens/NotificationsScreen";
import DashboardScreen from "../screens/DashboardScreen";

const Tab = createBottomTabNavigator();

const BottomTabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route, navigation }) => ({
        tabBarActiveTintColor: '#4CAF50',
        tabBarInactiveTintColor: 'gray',
        header: () => <Header title={route.name} />, // Set header chung tại đây
        tabBarIcon: ({ color, size }) => {
          let iconName;

          switch (route.name) {
            case "Home":
              iconName = "home-outline";
              break;
            case "Dashboard":
              iconName = "stats-chart-outline";
              break;
            case "Coach":
              iconName = "chatbubble-ellipses-outline";
              break;
            case "Notifications":
              iconName = "notifications-outline";
              break;
            case "Plan":
              iconName = "list-outline";
              break;
            case "Progress":
              iconName = "bar-chart-outline";
              break;
            case "Blog":
              iconName = "newspaper-outline";
              break;
            case "Profile":
              iconName = "person-outline";
              break;
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Dashboard" component={DashboardScreen} />
      <Tab.Screen name="Coach" component={CoachChatScreen} options={{ title: 'Tư vấn' }} />
      <Tab.Screen name="Notifications" component={NotificationsScreen} options={{ title: 'Thông báo' }} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigation;
