import { View, Text, TouchableOpacity, Image, TextInput } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { ArrowLeftIcon } from "react-native-heroicons/solid";
import { useNavigation } from "@react-navigation/native";

// subscribe for more videos like this :)
export default function SignUpScreen() {
  const navigation = useNavigation();
  return (
    <View
      className="flex-1 bg-white"
     
    >
      <SafeAreaView className="flex">
        <View className="flex-row justify-start">
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            className="bg-orange-500 p-2 rounded-tr-2xl rounded-bl-2xl ml-4"
          >
            <ArrowLeftIcon size="20" color="black" />
          </TouchableOpacity>
        </View>

      </SafeAreaView>
      <View
        className="flex-1 bg-white px-8 pt-8"
      >
        <Text className="mb-2 mt-0 text-2xl font-medium leading-tight">
          Create Account
        </Text>
        <Text className="mb-5 -mt-1 text-gray-500 leading-tight">
          Welcome to app name
        </Text>


        <View className="form space-y-2">
          <Text className="text-gray-700 font-medium ml-4">Full Name</Text>
          <TextInput
            className="p-4 bg-gray-100 text-gray-700 rounded-2xl mb-3"
            value=""
            placeholder="Enter Name"
          />
          <Text className="text-gray-700 font-medium ml-4">Email Address</Text>
          <TextInput
            className="p-4 bg-gray-100 text-gray-700 rounded-2xl mb-3"
            value=""
            placeholder="Enter Email"
          />
          <Text className="text-gray-700 font-medium ml-4">Password</Text>
          <TextInput
            className="p-4 bg-gray-100 text-gray-700 rounded-2xl mb-3"
            secureTextEntry
            value=""
            placeholder="Enter Password"
          />
<Text className="text-gray-700 font-medium ml-4">Phone Number</Text>
          <TextInput
            className="p-4 bg-gray-100 text-gray-700 rounded-2xl mb-3"
            placeholder="000 000 000"
            value=""
          />
          <TouchableOpacity
            onPress={() => navigation.navigate("OTP")}
            className="py-3 bg-orange-500 rounded-xl"
          >
            <Text className="font-2xl font-bold text-center text-white">
              Request OTP
            </Text>
          </TouchableOpacity>
        </View>
        <Text className="text-md text-gray-700 font-bold text-center py-5">
          Or
        </Text>
        <View className="flex-row justify-center space-x-12">
          <TouchableOpacity className="p-2 bg-gray-100 rounded-2xl">
            <Image
              source={require("../../assets/icons/google.png")}
              className="w-10 h-10"
            />
          </TouchableOpacity>
          <TouchableOpacity className="p-2 bg-gray-100 rounded-2xl">
            <Image
              source={require("../../assets/icons/apple.png")}
              className="w-10 h-10"
            />
          </TouchableOpacity>
          <TouchableOpacity className="p-2 bg-gray-100 rounded-2xl">
            <Image
              source={require("../../assets/icons/facebook.png")}
              className="w-10 h-10"
            />
          </TouchableOpacity>
        </View>
        <View className="flex-row justify-center mt-7">
          <Text className="text-gray-500 font-semibold">
            Already have an account?
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Text className="font-semibold text-orange-400"> Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
