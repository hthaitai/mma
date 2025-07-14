import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, Text, View } from "react-native";
import TabNavigation from "./src/navigation/TabNavigation";
import { AuthProvider } from "./src/contexts/AuthContext";

export default function App() {
  return (
    <AuthProvider>
      <NavigationContainer>
        <TabNavigation />
      </NavigationContainer>
    </AuthProvider>
  );
}
