import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';
import BottomTabNavigation from './src/navigation/BottomTabNavigation';

export default function App() {
  return (
       <NavigationContainer>
      <BottomTabNavigation />
    </NavigationContainer>
  );
}
