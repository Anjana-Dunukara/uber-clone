import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { styled } from "nativewind";
import NavOptions from "../components/NavOptions";

const StyledView = styled(View);

const HomeScreen = () => {
  return (
    <StyledView className="bg-white h-full">
      <StyledView className="p-5">
        <Image
          style={{
            width: 100,
            height: 100,
            resizeMode: "contain",
          }}
          source={{
            uri: "https://links.papareact.com/gzs",
          }}
        />
        <NavOptions />
      </StyledView>
    </StyledView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
