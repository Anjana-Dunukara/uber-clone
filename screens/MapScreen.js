import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { Icon } from "@rneui/base";
import { styled } from "nativewind";
import MapComponent from "../components/MapComponent";

const StyledView = styled(View);
const StyledTouchableOpacity = styled(TouchableOpacity);
const StyledText = styled(Text);
const StyledIcon = styled(Icon);

const MapScreen = () => {
  return (
    <View>
      <StyledView className="h-1/2">
        <MapComponent />
      </StyledView>
      <StyledView className="h-1/2"></StyledView>
    </View>
  );
};

export default MapScreen;

const styles = StyleSheet.create({});
