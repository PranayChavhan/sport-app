//import liraries
import React from 'react';
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, TouchableOpacity, Image,TextInput } from 'react-native';
import { ArrowLeftIcon } from "react-native-heroicons/solid";
import { useNavigation } from "@react-navigation/native";

const OTPScreen = () => {
    const navigation = useNavigation();
    return (
        <View className="flex-1 bg-white">
            <SafeAreaView className="flex flex-row items-center">
            <View className="flex-row justify-start">
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            className="bg-orange-500 p-2 rounded-tr-2xl rounded-bl-2xl ml-4"
          >
            <ArrowLeftIcon size="20" color="black" />

         

          </TouchableOpacity>
        </View>

        <View className="min-w-full ml-[135px]">
        <Text className="text-md font-bold">OTP</Text>
        </View>
        
            </SafeAreaView>

            <View className="flex-1 bg-white px-8 pt-8">
            <View className="flex-col items-center justify-center">
          <Image
            source={require("../../assets/images/otp.png")}
            style={{ width: 350, height: 350 }}
          />

<Text className="mb-2 mt-0 text-3xl font-bold leading-tight">
          Varification Code
        </Text>
        <Text className="mb-1 mt-1 font-medium text-gray-500 leading-tight flex items-center">
          We have send the code verification to
        </Text>
        <Text className="mb-5 -mt-1 font-medium text-gray-500 leading-tight flex items-center">
          Your Mobile Number
        </Text>

        <View className="flex flex-row gap-2 items-center">
            <Text className="text-lg font-semibold">+917774860123</Text>
            <TouchableOpacity
            onPress={() => navigation.goBack()}
             className="p-2 bg-gray-100 rounded-full">
            <Image
              source={require("../../assets/icons/pencile.png")}
              className="w-5 h-5"
            />
          </TouchableOpacity>
        </View>

<View className="flex flex-row  gap-3 mt-5">


        <TextInput
            className="p-4 bg-gray-100 text-gray-700 rounded-2xl mb-3"
            placeholder=""
            value=""
          />

<TextInput
            className="p-4 bg-gray-100 text-gray-700 rounded-2xl mb-3"
            placeholder=""
            value=""
          />

<TextInput
            className="p-4 bg-gray-100 text-gray-700 rounded-2xl mb-3"
            placeholder=""
            value=""
          />

<TextInput
            className="p-4 bg-gray-100 text-gray-700 rounded-2xl mb-3"
            placeholder=""
            value=""
          />
</View>

<TouchableOpacity
            onPress={() => navigation.navigate("Home")}
            className="py-3 bg-orange-500 rounded-xl min-w-full mt-5"
          >
            <Text className="text-lg font-semibold text-center text-gray-700">
             Submit
            </Text>
          </TouchableOpacity>
        </View>


            </View>
        </View>
    );
};

export default OTPScreen;
