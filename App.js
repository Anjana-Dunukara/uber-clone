import { StatusBar } from "expo-status-bar";
import { Text, View, KeyboardAvoidingView, Platform } from "react-native";
import { Provider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { TailwindProvider } from "tailwindcss-react-native";
import HomeScreen from "./screens/HomeScreen";
import { store } from "./store";
import MapScreen from "./screens/MapScreen";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaProvider>
          <TailwindProvider>
            <KeyboardAvoidingView
              behavior={Platform.OS === "ios" ? "padding" : "height"}
              style={{ flex: 1 }}
              keyboardVerticalOffset={Platform.OS === "ios" ? -64 : 0}
            >
              <Stack.Navigator>
                <Stack.Screen
                  name="HomeScreen"
                  component={HomeScreen}
                  options={{
                    headerShown: false,
                  }}
                />
                <Stack.Screen
                  name="MapScreen"
                  component={MapScreen}
                  options={{
                    headerShown: false,
                  }}
                />
              </Stack.Navigator>
            </KeyboardAvoidingView>
          </TailwindProvider>
        </SafeAreaProvider>
      </NavigationContainer>
    </Provider>
  );
}
