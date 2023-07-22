//import liraries
import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import Topbar from '../../components/TopBar';

// create a component
const AccountScreen = () => {
    return (
        <View className=" flex-1">
            <Topbar/>
            <View className="p-3">
                <View className="bg-white rounded-sm p-2">
                    <TouchableOpacity className="rounded-full">
                    <Image
              source={require("../../assets/images/Pranay.jpg")}
              className="w-32 h-32 rounded-full"
            />
                    </TouchableOpacity>
                    <View className="flex flex-row items-center gap-2 my-0">
                        <Text className="border-r border-gray-400 pr-2 text-[12px] font-semibold text-gray-500">He/Him/His</Text>

                        <Text className="text-[12px] font-semibold text-gray-500">@ImPranay</Text>
                    </View>
                    <Text className="text-[24px] font-semibold text-gray-700 mt-3 mb-2">Pranay Chavhan</Text>
                    <View className="flex flex-row items-center gap-5">
                    <Text className="text-[12px] font-semibold text-gray-500">chavhanpranay48@gmail.com</Text>
                    <TouchableOpacity>
                    <Image
              source={require("../../assets/icons/pencile.png")}
              className="w-3 h-3"
            />
                    </TouchableOpacity>
                    </View>
                    <View className="flex flex-row gap-5 mt-0 items-center justify-start">
                        <TouchableOpacity className="bg-orange-500 rounded-full px-5 py-2 flex flex-row items-center">
                        <Image
              source={require("../../assets/icons/share.png")}
              className="w-5 h-5"
            />
                        <Text className="text-white ml-2 font-semibold text-[16px]">Share Profile</Text>
                        </TouchableOpacity>




                        <TouchableOpacity className="border border-gray-400 rounded-full px-6 justify-center py-2 flex flex-row items-center">
                        <Image
              source={require("../../assets/icons/pencile.png")}
              className="w-4 h-4"
            />
                        <Text className="text-gray-700 ml-3 font-semibold text-[16px]">Edit Profile</Text>
                        </TouchableOpacity>
                        
                       
                    </View>
                </View>
            </View>
        </View>
    );
};

export default AccountScreen;
