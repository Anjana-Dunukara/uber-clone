import { StyleSheet, Text, View } from "react-native";
import React from "react";
import MapView from "react-native-maps";
import { styled } from "nativewind";
import { useSelector } from "react-redux";
import { selectOrigin } from "../slices/navSlice";

const StyledMapview = styled(MapView);

const MapComponent = () => {
  const origin = useSelector(selectOrigin);

  return (
    <StyledMapview
      className="flex-1"
      mapType="mutedStandard"
      initialRegion={{
        latitude: origin.location.lat,
        longitude: origin.location.lng,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
      }}
    />
  );
};

export default MapComponent;

const styles = StyleSheet.create({});
