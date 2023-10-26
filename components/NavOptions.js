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

const StyledTouchableOpacity = styled(TouchableOpacity);
const StyledText = styled(Text);

const data = [
  {
    id: "123",
    title: " Get a ride",
    image: "https://links.papareact.com/3pn",
    screen: "MapScrren",
  },
  {
    id: "456",
    title: " Order Food",
    image: "https://links.papareact.com/28w",
    screen: "EatsScreen",
  },
];

const NavOptions = () => {
  return (
    <FlatList
      data={data}
      horizontal
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <StyledTouchableOpacity className="p-2 pb-8 pt-4 bg-gray-200 m-2 w-40">
          <View>
            <Image
              style={{
                width: 120,
                height: 120,
                resizeMode: "contain",
              }}
              source={{ uri: item.image }}
            />
          </View>
          <StyledText className="mt-2 text-lg font-semibold">
            {item.title}
          </StyledText>
        </StyledTouchableOpacity>
      )}
    />
  );
};

export default NavOptions;

const styles = StyleSheet.create({});
