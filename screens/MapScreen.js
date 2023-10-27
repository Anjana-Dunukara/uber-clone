import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { Icon } from "@rneui/base";
import { styled } from "nativewind";
import MapComponent from "../components/MapComponent";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import NavigateCard from "../components/NavigateCard";
import RideOptionsCard from "../components/RideOptionsCard";

const StyledView = styled(View);
const StyledTouchableOpacity = styled(TouchableOpacity);
const StyledText = styled(Text);
const StyledIcon = styled(Icon);

const Stack = createNativeStackNavigator();

const MapScreen = () => {
  return (
    <View>
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
