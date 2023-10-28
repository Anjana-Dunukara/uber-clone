import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { Icon } from "@rneui/base";
import { styled } from "nativewind";
import MapComponent from "../components/MapComponent";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import NavigateCard from "../components/NavigateCard";
import RideOptionsCard from "../components/RideOptionsCard";
import { useNavigation } from "@react-navigation/native";

const StyledView = styled(View);
const StyledTouchableOpacity = styled(TouchableOpacity);

const Stack = createNativeStackNavigator();

const MapScreen = () => {
  const navigation = useNavigation();
  return (
    <View>
      <StyledTouchableOpacity
        onPress={() => navigation.navigate("HomeScreen")}
        className="bg-gray-100 absolute top-16 left-8 z-50 p-3 rounded-full"
      >
        <Icon name="menu" />
      </StyledTouchableOpacity>
      <StyledView className="h-1/2">
        <MapComponent />
      </StyledView>
      <StyledView className="h-1/2">
        <Stack.Navigator>
          <Stack.Screen
            name="NavigateCard"
            component={NavigateCard}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="RideOptionsCard"
            component={RideOptionsCard}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </StyledView>
    </View>
  );
};

export default MapScreen;

const styles = StyleSheet.create({});
