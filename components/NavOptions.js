import {
  StyleSheet,
  View,
  FlatList,
  TouchableOpacity,
  Image,
  Text,
} from "react-native";
import React from "react";
import { styled } from "nativewind";
import { Icon } from "@rneui/base";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { selectOrigin } from "../slices/navSlice";

const StyledTouchableOpacity = styled(TouchableOpacity);
const StyledText = styled(Text);
const StyledView = styled(View);
const StyledIcon = styled(Icon);

const data = [
  {
    id: "123",
    title: " Get a ride",
    image: "https://links.papareact.com/3pn",
    screen: "MapScreen",
  },
  {
    id: "456",
    title: " Order Food",
    image: "https://links.papareact.com/28w",
    screen: "EatsScreen",
  },
];

const NavOptions = () => {
  const navigation = useNavigation();
  const origin = useSelector(selectOrigin);

  return (
    <FlatList
      data={data}
      horizontal
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <StyledTouchableOpacity
          onPress={() => navigation.navigate(item.screen)}
          className="p-2 pb-8 pt-4 bg-gray-200 m-2 w-40"
          disabled={!origin}
        >
          <StyledView className={`${!origin && "opacity-20"}`}>
            <Image
              style={{
                width: 120,
                height: 120,
                resizeMode: "contain",
              }}
              source={{ uri: item.image }}
            />
            <StyledText className="mt-2 text-lg font-semibold">
              {item.title}
            </StyledText>
            <StyledIcon
              className="p-2 bg-black rounded-full w-10 mt-4"
              name="arrowright"
              color="white"
              type="antdesign"
            />
          </StyledView>
        </StyledTouchableOpacity>
      )}
    />
  );
};

export default NavOptions;

const styles = StyleSheet.create({});
