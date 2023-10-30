import { View, Text, SafeAreaView, TouchableOpacity, FlatList, Image } from 'react-native';
import React, { useState } from 'react';
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { selectTravelTimeInformation } from '../slices/navSlice';

const data = [
    {
        id: "Uber-X-123",
        title: "Uber X",
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

const SURGE_CHARGE_PRICE = 1.5;

const RideOptionsCard = () => {
    const navigation = useNavigation();
    const [selected, setSelected] = useState(null);
    const travelTimeInformation = useSelector(selectTravelTimeInformation);

    return (
        <SafeAreaView className="bg-white flex-grow">
            <View>
                <TouchableOpacity onPress={() => { console.log("😡😡😡"); navigation.navigate("NavigateCard"); }} className="absolute p-3 rounded-full top-3 left-5 z-50" >
                    <Icon name="chevron-left" type="font-awesome" size={14} />
                </TouchableOpacity>
                <Text className="text-center text-xl py-5">
                    Select a Ride — {travelTimeInformation?.distance?.text}
                </Text>
            </View>
            <FlatList
                data={data}
                keyExtractor={(item) => item.id}
                ItemSeparatorComponent={() => (
                    <View className="bg-gray-200 h-[0.5px]" />
                )}
                renderItem={({ item: { id, title, multiplier, image }, item }) => (
                    <TouchableOpacity
                        className="flex-row justify-between items-center px-10"
                        onPress={() => {
                            if (!selected) {
                                setSelected(item);
                            } else {
                                setSelected(null);
                            }
                        }}
                        style={ id === selected?.id ? { backgroundColor: '#d9d9d9' } : null }
                    >
                        <Image
                            style={{
                                width: 100,
                                height: 100,
                                resizeMode: 'contain',
                            }}
                            source={{ uri: image }}
                        />
                        <View className="-ml-6">
                            <Text className="text-xl font-semibold">{title}</Text>
                            <Text>{travelTimeInformation?.duration?.text}  Travel Time</Text>
                        </View>
                        <Text className="text-xl">
                            {new Intl.NumberFormat('en-gb', {
                                style: 'currency',
                                currency: 'GBP'
                            }).format(
                                (travelTimeInformation?.duration?.value * SURGE_CHARGE_PRICE * multiplier) / 100,
                            )}
                        </Text>
                    </TouchableOpacity>
                )}
            />

            <View className="mt-auto border-t border-gray-200">
                <TouchableOpacity disabled={!selected} className="bg-black py-3 m-3" style={ !selected ? { backgroundColor: '#cacaca' } : null }>
                    <Text className="text-center text-white text-xl">Choose {selected?.title}</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default RideOptionsCard