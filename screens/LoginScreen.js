import { View, Text, TouchableOpacity, Image, TextInput } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { ArrowLeftIcon } from "react-native-heroicons/solid";
import { themeColors } from "../theme";
import { useNavigation } from "@react-navigation/native";

export default function LoginScreen() {
  const navigation = useNavigation();
  const [activeTab, setActiveTab] = useState("email");

  return (
    <View className="flex-1 bg-white">
      <SafeAreaView className="flex ">
        <View className="flex-row justify-start">
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            className="bg-orange-500 p-2 rounded-tr-2xl rounded-bl-2xl ml-4"
          >
            <ArrowLeftIcon size="20" color="black" />
          </TouchableOpacity>
        </View>

        
      </SafeAreaView>
      <View className="flex-1 bg-white px-8 pt-8">
        <Text className="mb-2 mt-0 text-2xl font-medium leading-tight">
          Login Account
        </Text>
        <Text className="mb-5 -mt-1 text-gray-500 leading-tight">
          Hello, welcome back to our account
        </Text>

        <View className="mb-10 rounded-2xl h-14 mt-4 flex flex-row p-1 items-center justify-between bg-gray-100">
          <TouchableOpacity
            className={` ${
              activeTab === "email"
                ? " bg-white px-14 py-3 rounded-2xl shadow-2xl shadow-black"
                : "px-16 py-3"
            }`}
            onPress={() => setActiveTab("email")}
          >
            <Text className="text-gray-500">Email</Text>
          </TouchableOpacity>
          <TouchableOpacity
            className={`${
              activeTab === "mobile"
                ? " bg-white px-8 py-3 rounded-2xl shadow-2xl shadow-black"
                : "px-10 py-3"
            }`}
            onPress={() => setActiveTab("mobile")}
          >
            <Text className="text-gray-500">Phone Number</Text>
          </TouchableOpacity>
        </View>

        {activeTab === "email" ? (
          <View>
            <View className="form space-y-2">
          <Text className="text-gray-700 font-medium ml-4">Email Address</Text>
          <TextInput
            className="p-4 bg-gray-100 text-gray-700 rounded-2xl mb-3"
            placeholder="example@email.com"
            value=""
          />
          <Text className="text-gray-700 font-medium ml-4">Password</Text>
          <TextInput
            className="p-4 bg-gray-100 text-gray-700 rounded-2xl"
            secureTextEntry
            placeholder="password"
            value=""
          />
          <TouchableOpacity className="flex items-end">
            <Text className="text-gray-500 mb-5 text-[12px]">
              Forgot Password?
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("Home")}
            className="py-3 bg-orange-500 rounded-xl"
          >
            <Text className="text-xl font-bold text-center text-gray-700">
              Login
            </Text>
          </TouchableOpacity>
        </View>

          </View>
        ) : (
          <View>
            <View className="form space-y-2">
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
            <Text className="text-lg font-semibold text-center text-gray-700">
              Request OTP
            </Text>
          </TouchableOpacity>
        </View>

          </View>
        )}

        
        <Text className="text-lg text-gray-700 font-bold text-center py-5">
          Or
        </Text>
        <View className="flex-row justify-center space-x-12">
          <TouchableOpacity className="p-2 bg-gray-100 rounded-2xl">
            <Image
              source={require("../assets/icons/google.png")}
              className="w-10 h-10"
            />
          </TouchableOpacity>
          <TouchableOpacity className="p-2 bg-gray-100 rounded-2xl">
            <Image
              source={require("../assets/icons/apple.png")}
              className="w-10 h-10"
            />
          </TouchableOpacity>
          <TouchableOpacity className="p-2 bg-gray-100 rounded-2xl">
            <Image
              source={require("../assets/icons/facebook.png")}
              className="w-10 h-10"
            />
          </TouchableOpacity>
        </View>
        <View className="flex-row justify-center mt-7">
          <Text className="text-gray-500 font-semibold">
            Don't have an account?
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
            <Text className="font-semibold text-orange-500"> Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
