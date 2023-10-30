import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { Icon } from "react-native-elements";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { selectOrigin } from '../slices/navSlice';

const data = [
    {
        id: "123",
        title: "Get a ride",
        image: "https://links.papareact.com/3pn",
        screen: "MapScreen",
    },
    {
        id: "456",
        title: "Order food",
        image: "https://links.papareact.com/28w",
        screen: "OrderScreen",
    },
]

const NavOptions = () => {
    const navigation = useNavigation();
    const origin = useSelector(selectOrigin);

    return (
        <FlatList
            data={data}
            keyExtractor={(item) => item.id}
            horizontal
            renderItem={({ item }) => (
                <TouchableOpacity
                    onPress={() => navigation.navigate(item.screen)}
                    className="w-40 bg-gray-200 p-2 pl-6 pb-8 pt-4 m-2"
                    disabled={!origin}
                >
                    <View
                        className={!origin ? "opacity-20" : ""}
                    >
                        <Image
                            style={{ width: 120, height: 120, resizeMode: "contain" }}
                            source={{ uri: item.image }}
                        />
                        <Text className="mt-2 text-lg font-semibold">{item.title}</Text>
                        <Icon className="w-10 bg-black rounded-full p-2 mt-4" name="arrowright" color="white" type="antdesign" />
                    </View>
                </TouchableOpacity>
            )}
        />
    )
}

export default NavOptions