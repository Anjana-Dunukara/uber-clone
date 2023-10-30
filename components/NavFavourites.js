import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import React from 'react';
import { Icon } from 'react-native-elements/dist/icons/Icon';
import { useDispatch, useSelector } from "react-redux";
import { selectDestination, selectOrigin, setDestination, setOrigin } from '../slices/navSlice';
import { useNavigation } from '@react-navigation/native';

const data = [
    {
        id: '123',
        icon: 'home',
        description: 'Home',
        location: 'Code Street, London, UK',
    },
    {
        id: '456',
        icon: 'briefcase',
        description: 'Work',
        location: 'The Shard, London Bridge Street, London, UK',
    },
    {
        id: '789',
        icon: 'heart',
        description: 'Bambi\'s House',
        location: '15 Sakuru Road, Sagamu, Nigeria',
    },
];

const NavFavourites = () => {
    const dispatch = useDispatch();
    const navigation = useNavigation();

    const origin = useSelector(selectOrigin);
    const destination = useSelector(selectDestination);

    return (
        <FlatList
            data={data}
            keyExtractor={(item) => item.id}
            ItemSeparatorComponent={() => (
                <View
                    className="bg-gray-200 h-[0.5px]"
                />
            )}
            renderItem={({item: { location, description, icon } }) => (
                <TouchableOpacity
                    className="flex-row items-center p-5"
                    onPress={( item ) => {
                        if (!origin) {
                            dispatch(
                                setOrigin({
                                    location: location,
                                    description: description,
                                }),
                                
                                console.log(`Origin: ${location}`),
                            );
                            
                            navigation.navigate("MapScreen");
                        } else if (!destination) {
                            dispatch(
                                setDestination({
                                    location: location,
                                    description: description,
                                }),
        
                                console.log(`Destination: ${location} and ${description}`),
                            );
                            
                            navigation.navigate("RideOptionsCard");
                        }
                    }}
                >
                    <Icon
                        style={{
                            backgroundColor: "#dfdfdf",
                            padding: 6,
                            borderRadius: 100,
                            marginRight: 8,
                        }}
                        name={icon}
                        type="ionicon"
                        color="white"
                        size={18}
                    />
                    <View>
                        <Text className="font-semibold text-lg">{description}</Text>
                        <Text className="text-gray-500">{location}</Text>
                    </View>
                </TouchableOpacity>
            )}
        />
    )
}

export default NavFavourites