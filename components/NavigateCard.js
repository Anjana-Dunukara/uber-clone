import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import React from "react";
import { styled } from "nativewind";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_MAPS_APIKEY } from "@env";

const StyledSafeAreaView = styled(SafeAreaView);
const StyledText = styled(Text);
const StyledView = styled(View);

const NavigateCard = () => {
  return (
    <StyledSafeAreaView className="bg-white flex-1">
      <StyledText className="text-center py-5 text-xl">
        Good Morning, Anjana
      </StyledText>
      <StyledView className="flex-shrink" style={{ borderColor: "gray-200" }}>
        <GooglePlacesAutocomplete
          styles={{
            container: {
              flex: 0,
            },
            textInput: {
              fontSize: 18,
            },
          }}
          nearbyPlacesAPI="GooglePlacesSearch"
          debounce={400}
          placeholder="Where To?"
          onPress={(data, details = null) => {
            dispatch(
              setOrigin({
                location: details.geometry.location,
                description: data.description,
              })
            );

            dispatch(setDestination(null));
          }}
          fetchDetails={true}
          returnKeyType={"search"}
          enablePoweredByContainer={false}
          minLength={2}
          query={{
            key: GOOGLE_MAPS_APIKEY,
            language: "en",
          }}
        />
      </StyledView>
    </StyledSafeAreaView>
  );
};

export default NavigateCard;

const styles = StyleSheet.create({});
