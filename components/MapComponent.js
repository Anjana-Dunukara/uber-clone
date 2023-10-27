import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import MapView, { Marker } from "react-native-maps";
import { styled } from "nativewind";
import { useSelector } from "react-redux";
import { selectOrigin } from "../slices/navSlice";

const StyledMapView = styled(MapView);

const MapComponent = () => {
  const origin = useSelector(selectOrigin);

  const [initialRegion, setInitialRegion] = useState({
    latitude: origin.location.lat,
    longitude: origin.location.lng,
    latitudeDelta: 0.005,
    longitudeDelta: 0.005,
  });

  return (
    <StyledMapView
      className="flex-1"
      mapType="mutedStandard"
      initialRegion={initialRegion}
      onRegionChangeComplete={(region) => setInitialRegion(region)}
    >
      {origin?.location && (
        <Marker
          coordinate={{
            latitude: origin.location.lat,
            longitude: origin.location.lng,
          }}
          title="Origin"
          description={origin.description}
          identifier="origin"
        />
      )}
    </StyledMapView>
  );
};

export default MapComponent;

const styles = StyleSheet.create({});
