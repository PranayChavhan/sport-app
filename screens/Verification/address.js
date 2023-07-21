import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, TouchableOpacity, Image, TextInput } from "react-native";
import { ArrowLeftIcon } from "react-native-heroicons/solid";
import { useNavigation } from "@react-navigation/native";

// create a component
const Address = () => {
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
      </SafeAreaView>
      <View className="flex-1 bg-white px-4 pt-8">
        <Image
          source={require("../../assets/images/address.png")}
          style={{ width: 250, height: 250 }}
        />

        <Text className="mb-2 mt-0 text-3xl font-medium leading-tight">
          Proof of address
        </Text>
        <Text className="-mt-1 text-gray-400 leading-tight">
          We need to see your address and your name clearly printed on an
          official document.
        </Text>

        <Text className="mt-10 mb-2  font-semibold">
          TYPES OF ID YOU CAN UPLOAD
        </Text>

        <TouchableOpacity
        onPress={() => navigation.navigate("UploadDoc")}
         className="h-14 border-t-[0.5px] border-b-[0.5px] border-gray-400 flex flex-row items-center justify-between">
          <View className="flex flex-row items-center gap-4">
            <Text className="font-semibold text-gray-600">Aadhar card</Text>

            <View className="bg-orange-200 rounded-[5px] py-[6px] px-1">
              <Text className="text-[10px] font-semibold">Recommended</Text>
            </View>
          </View>

          <View>
            <Image
              source={require("../../assets/icons/arrow-right.png")}
              className="w-8 h-8"
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity
        onPress={() => navigation.navigate("UploadDoc")}
         className="h-14 border-t-[0.5px] border-b-[0.5px] border-gray-400 flex flex-row items-center justify-between">
          <View className="flex flex-row items-center gap-4">
            <Text className="font-semibold text-gray-600">PAN card</Text>
          </View>

          <View>
            <Image
              source={require("../../assets/icons/arrow-right.png")}
              className="w-8 h-8"
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity
         onPress={() => navigation.navigate("UploadDoc")}
         className="h-14 border-t-[0.5px] border-b-[0.5px] border-gray-400 flex flex-row items-center justify-between">
          <View className="flex flex-row items-center gap-4">
            <Text className="font-semibold text-gray-600">School ID</Text>
          </View>

          <View>
            <Image
              source={require("../../assets/icons/arrow-right.png")}
              className="w-8 h-8"
            />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Address;
