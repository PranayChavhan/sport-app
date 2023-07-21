import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, TouchableOpacity, Image, TextInput } from "react-native";
import { ArrowLeftIcon } from "react-native-heroicons/solid";
import { useNavigation } from "@react-navigation/native";
// create a component
const HomeScreen = () => {
  const navigation = useNavigation();
    return (
      <View className="flex-1 bg-white">
         <SafeAreaView className="flex flex-row items-center">
         <View className="flex-row items-center justify-between w-full">
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            className=" p-2 ml-4"
          >
            <Image
              source={require("../../assets/icons/logo.png")}
              className="w-10 h-10"
            />
          </TouchableOpacity>

          <View className="flex flex-row items-center justify-center mr-4 gap-2">
          <TouchableOpacity className="p-2 bg-gray-100 rounded-2xl">
            <Image
              source={require("../../assets/icons/search.png")}
              className="w-5 h-5"
            />
          </TouchableOpacity>

          <TouchableOpacity className=" rounded-2xl">
            <Image
              source={require("../../assets/icons/msg.png")}
              className="w-[28px] h-[28px]"
            />
          </TouchableOpacity>
          <TouchableOpacity className="rounded-2xl">
            <Image
              source={require("../../assets/icons/notification.png")}
              className="w-[28px] h-[28px]"
            />
          </TouchableOpacity>
          <TouchableOpacity className="p-1 bg-gray-100 rounded-2xl">
            <Image
              source={require("../../assets/icons/avatar.png")}
              className="w-[28px] h-[28px]"
            />
          </TouchableOpacity>
          <TouchableOpacity className="rounded-2xl">
            <Image
              source={require("../../assets/icons/hamburger.png")}
              className="w-[28px] h-[28px]"
            />
          </TouchableOpacity>

          </View>
        </View>
      </SafeAreaView>

      <View className="flex-1 bg-white px-4 pt-8">
      <Text className="mb-2 mt-0 text-3xl font-medium leading-tight">
          Let's get you verified
        </Text>
     


      </View>
    </View>
    );
};

export default HomeScreen;
