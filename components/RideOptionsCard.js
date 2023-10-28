import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { styled } from "nativewind";
import { useNavigation } from "@react-navigation/native";
import { Icon } from "@rneui/base";
import { FlatList } from "react-native";
import { useSelector } from "react-redux";
import { selectTravelTimeInformation } from "../slices/navSlice";

const StyledTouchableOpacity = styled(TouchableOpacity);
const StyledText = styled(Text);
const StyledView = styled(View);
const StyledSafeAreaView = styled(SafeAreaView);
const StyledIcon = styled(Icon);

const data = [
  {
    id: "Uber-X-123",
    title: "UberX",
    multiplier: 1,
    image: "https://links.papareact.com/3pn",
  },
  {
    id: "Uber-XL-456",
    title: "Uber XL",
    multiplier: 1.2,
    image: "https://links.papareact.com/5w8",
  },
  {
    id: "Uber-LUX-789",
    title: "Uber LUX",
    multiplier: 1.75,
    image: "https://links.papareact.com/7pf",
  },
];

const RideOptionsCard = () => {
  const navigation = useNavigation();
  const [selected, setSelected] = useState(null);

  const travelTimeInformation = useSelector(selectTravelTimeInformation);

  return (
    <StyledSafeAreaView className="bg-white flex-grow">
      <View>
        <StyledTouchableOpacity
          onPress={() => navigation.navigate("NavigateCard")}
          className="absolute top-3 left-5 p-3 rounded-full"
        >
          <StyledIcon name="chevron-left" type="fontawesome" />
        </StyledTouchableOpacity>
        <StyledText className="text-center py-5 text-xl">
          Select a Ride - {travelTimeInformation?.distance.text}
        </StyledText>
      </View>

      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item: { id, image, title, multiplier }, item }) => (
          <StyledTouchableOpacity
            onPress={() => setSelected(item)}
            className={`flex-row justify-between items-center px-10 ${
              id === selected?.id && "bg-gray-200"
            }`}
          >
            <Image
              style={{
                width: 100,
                height: 85,
                resizeMode: "contain",
              }}
              source={{ uri: image }}
            />
            <StyledView className="-ml-6">
              <StyledText className="text-xl font-semibold">{title}</StyledText>
              <StyledText>
                {travelTimeInformation?.duration.text} Travel Time
              </StyledText>
            </StyledView>
            <StyledText className="text-xl">$69</StyledText>
          </StyledTouchableOpacity>
        )}
      />
      <StyledView>
        <StyledTouchableOpacity
          disabled={!selected}
          className={`bg-black py-3 m-3 ${!selected && "bg-gray-300"}`}
        >
          <StyledText className="text-center text-white text-xl">
            Choose {selected?.title}
          </StyledText>
        </StyledTouchableOpacity>
      </StyledView>
    </StyledSafeAreaView>
  );
};

export default RideOptionsCard;

const styles = StyleSheet.create({});
