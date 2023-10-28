import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { FlatList } from "react-native";
import { TouchableOpacity } from "react-native";
import { Icon } from "@rneui/base";
import { styled } from "nativewind";

const data = [
  {
    id: "123",
    icon: "home",
    location: "Home",
    destination: "Middle Class Houses, Passara",
  },
  {
    id: "456",
    icon: "briefcase",
    location: "Work",
    destination: "Altair, Colombo 7",
  },
];

const StyledTouchableOpacity = styled(TouchableOpacity);
const StyledText = styled(Text);
const StyledView = styled(View);
const StyledIcon = styled(Icon);

const NavFavorites = () => {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      ItemSeparatorComponent={() => (
        <StyledView className="bg-gray-200" style={{ height: 0.5 }} />
      )}
      renderItem={({ item }) => (
        <StyledTouchableOpacity className="flex-row items-center p-5">
          <StyledIcon
            className="mr-4 rounded-full bg-gray-300 p-3"
            name={item.icon}
            type="ionicon"
            color="white"
            size={18}
          />
          <View>
            <StyledText className="font-semibold text-lg">
              {item.location}
            </StyledText>
            <StyledText className="text-gray-500">
              {item.destination}
            </StyledText>
          </View>
        </StyledTouchableOpacity>
      )}
    />
  );
};

export default NavFavorites;

const styles = StyleSheet.create({});
