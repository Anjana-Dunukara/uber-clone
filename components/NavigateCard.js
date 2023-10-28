import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { styled } from "nativewind";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_MAPS_APIKEY } from "@env";
import { setDestination } from "../slices/navSlice";
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import NavFavorites from "./NavFavorites";
import { Icon } from "@rneui/base";

const StyledSafeAreaView = styled(SafeAreaView);
const StyledText = styled(Text);
const StyledView = styled(View);
const StyledTouchableOpacity = styled(TouchableOpacity);

const NavigateCard = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  return (
    <StyledSafeAreaView className="bg-white flex-1">
      <StyledText className="text-center py-5 text-xl">
        Good Morning, Anjana
      </StyledText>
      <StyledView className="flex-shrink ">
        <GooglePlacesAutocomplete
          styles={styles}
          nearbyPlacesAPI="GooglePlacesSearch"
          debounce={400}
          placeholder="Where To?"
          onPress={(data, details = null) => {
            dispatch(
              setDestination({
                location: details.geometry.location,
                description: data.description,
              })
            );

            navigation.navigate("RideOptionsCard");
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
        <NavFavorites />
      </StyledView>
      <StyledView
        className="flex-row bg-white justify-evenly py-2 mt-auto border-gray-100"
        style={{ borderTop: 0.5 }}
      >
        <StyledTouchableOpacity
          className="felx flex-row justify-between bg-black w-24 px-4 py-3 rounded-full"
          onPress={() => navigation.navigate("RideOptionsCard")}
        >
          <Icon name="car" type="font-awesome" color="white" size={16}></Icon>
          <StyledText className="text-white text-center">Rides</StyledText>
        </StyledTouchableOpacity>
        <StyledTouchableOpacity className="felx flex-row justify-between w-24 px-4 py-3 rounded-full">
          <Icon
            name="fast-food-outline"
            type="ionicon"
            color="black"
            size={16}
          ></Icon>
          <StyledText className="text-center">Eats</StyledText>
        </StyledTouchableOpacity>
      </StyledView>
    </StyledSafeAreaView>
  );
};

export default NavigateCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    borderRadius: 0,
    flex: 0,
  },
  textInput: {
    backgroundColor: "#DDDDDF",
    borderRadius: 0,
    fontSize: 18,
  },
  textInputContainer: {
    paddingHorizontal: 20,
    paddingBottom: 0,
  },
});
