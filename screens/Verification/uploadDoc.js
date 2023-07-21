import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, TouchableOpacity, Image, TextInput } from "react-native";
import { ArrowLeftIcon } from "react-native-heroicons/solid";
import { useNavigation } from "@react-navigation/native";

const UploadDoc = () => {
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
          source={require("../../assets/images/document.png")}
          style={{ width: 250, height: 250 }}
        />

        <Text className="mb-2 mt-0 text-3xl font-medium leading-tight">
          Upload Document
        </Text>
        <Text className="-mt-1 text-gray-400 leading-tight ">
          We need to see your address and your name clearly printed on an
          official document.
        </Text>

        <TouchableOpacity
          onPress={() => navigation.navigate("SignUp")}
          className="py-5 bg-orange-200 mt-6 rounded-xl flex items-center justify-center flex-row"
        >
          <Image
            source={require("../../assets/icons/upload.png")}
            className="w-6 h-6"
          />
          <Text className="text-[18px] ml-3 text-orange-400 font-semibold text-center">
            Add a file
          </Text>
        </TouchableOpacity>

        <View className="flex flex-row justify-between items-center my-4">
          <View className="flex flex-row items-center gap-5">
            <Image
              source={require("../../assets/icons/correct.png")}
              className="w-6 h-6"
            />

            <Text className="text-gray-600 font-semibold">image 001.jpg</Text>
          </View>
          <View>
            <TouchableOpacity>
              <Image
                source={require("../../assets/icons/delete.png")}
                className="w-7 h-7"
              />
            </TouchableOpacity>
          </View>
        </View>

        <View className="flex flex-row justify-between items-center my-4">
          <View className="flex flex-row items-center gap-5">
            <Image
              source={require("../../assets/icons/correct.png")}
              className="w-6 h-6"
            />

            <Text className="text-gray-600 font-semibold">image 002.jpg</Text>
          </View>
          <View>
            <TouchableOpacity>
              <Image
                source={require("../../assets/icons/delete.png")}
                className="w-7 h-7"
              />
            </TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity
            onPress={() => navigation.navigate("Verification")}
            className="py-3 bg-orange-500 rounded-xl mt-32"
          >
            <Text className="text-lg font-semibold text-center text-white">
              Submit for review
            </Text>
          </TouchableOpacity>
      </View>
    </View>
  );
};

export default UploadDoc;
