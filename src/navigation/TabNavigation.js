import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";
import LoginScreen from "../screens/LoginScreen";
import Icon from "react-native-vector-icons/Ionicons";
import { useAuth } from "../contexts/AuthContext";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import GuestProfileScreen from "../screens/GuestProfileScreen";
import RegisterScreen from "../screens/RegisterScreen";
import SubscriptionScreen from "../screens/SubscriptionScreen";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const ProfileStack = () => {
  const { userToken } = useAuth();

  return (
 <Stack.Navigator screenOptions={{ headerShown: false }}>
  {userToken ? (
    <>
      <Stack.Screen name="ProfileMain" component={ProfileScreen} />
      <Stack.Screen name="Subscription" component={SubscriptionScreen} />
    </>
  ) : (
    <>
      <Stack.Screen name="GuestProfile" component={GuestProfileScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
    </>
  )}
</Stack.Navigator>
  );
};

const BottomTabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: "#4CAF50",
        tabBarInactiveTintColor: "gray",
        headerShown: false,
        tabBarIcon: ({ color, size }) => {
          let iconName;

          switch (route.name) {
            case "Home":
              iconName = "home-outline";
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
      <Tab.Screen name="Profile" component={ProfileStack} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigation;
