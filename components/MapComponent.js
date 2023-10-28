import { StyleSheet, Dimensions } from "react-native";
import React, { useState } from "react";
import MapView, { Marker } from "react-native-maps";
import { styled } from "nativewind";
import { useSelector } from "react-redux";
import { selectOrigin, selectDestination } from "../slices/navSlice";
import MapViewDirections from "react-native-maps-directions";
import { GOOGLE_MAPS_APIKEY } from "@env";

const StyledMapView = styled(MapView);
const screenHeight = Dimensions.get("window").height;

const MapComponent = () => {
  const origin = useSelector(selectOrigin);
  const destination = useSelector(selectDestination);

  const [initialRegion, setInitialRegion] = useState({
    latitude: origin.location.lat,
    longitude: origin.location.lng,
    latitudeDelta: 0.005,
    longitudeDelta: 0.005,
  });

  return (
    <StyledMapView
      className="flex-1"
      style={{ minHeight: screenHeight * 0.5 }}
      mapType="mutedStandard"
      initialRegion={initialRegion}
      onRegionChangeComplete={(region) => setInitialRegion(region)}
    >
      {origin && destination && (
        <MapViewDirections
          origin={origin.description}
          destination={destination.description}
          apikey={GOOGLE_MAPS_APIKEY}
          strokeWidth={3}
          strokeColor="black"
        />
      )}

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
