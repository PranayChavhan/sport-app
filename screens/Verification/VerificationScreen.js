import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, TouchableOpacity, Image, TextInput } from "react-native";
import { ArrowLeftIcon } from "react-native-heroicons/solid";
import { useNavigation } from "@react-navigation/native";
// create a component
const VerificationScreen = () => {
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
      <Text className="mb-2 mt-0 text-3xl font-medium leading-tight">
          Let's get you verified
        </Text>
        <Text className="mt-1 text-gray-400 leading-tight">
          We need to check that you're really you. It helps us fight fraud and keep our business secure.
        </Text>

        <Image
            source={require("../../assets/images/verification.png")}
            style={{ width: 300, height: 300 }}
          />

        <TouchableOpacity onPress={() => navigation.navigate("Address")}

        className="h-[110px] shadow-xl shadow-black flex flex-row items-center justify-center p-2 px-4 rounded-lg bg-white">
          <View className="flex flex-row items-center gap-5 p-2">
        
            <Image
              source={require("../../assets/icons/home.png")}
              className="w-8 h-8"
            />
        

            <View className=" mr-[86px]">
            <Text className="text-lg font-semibold">Proof of address</Text>
            <Text className="text-gray-400">Upload a utility bill, bank statement...</Text>
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
        onPress={() => navigation.navigate("Identity")}
         className="h-[110px] mt-2 shadow-xl shadow-black flex flex-row items-center justify-center p-2 px-4 rounded-lg bg-white">
          <View className="flex flex-row items-center gap-5 p-2">
        
            <Image
              source={require("../../assets/icons/id-card.png")}
              className="w-8 h-8"
            />
        

            <View className="mr-[86px]">
            <Text className="text-lg font-semibold">Proof of identity</Text>
            <Text className="text-gray-400">Upload a utility bill, bank statement...</Text>
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
        // disabled={true}
            onPress={() => navigation.navigate("Success")}
            className="py-3 bg-orange-300 rounded-xl min-w-full mt-5"
          >
            <Text className="text-lg font-semibold text-center text-white">
              Continue
            </Text>
          </TouchableOpacity>

      </View>
    </View>
    );
};

export default VerificationScreen;
