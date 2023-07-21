import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, TouchableOpacity, Image, TextInput } from "react-native";
import { ArrowLeftIcon } from "react-native-heroicons/solid";
import { useNavigation } from "@react-navigation/native";

// create a component
const Success = () => {
  const navigation = useNavigation();
  return (
    <View className="flex-1 bg-white">

<SafeAreaView className="flex flex-row items-center">
       
      </SafeAreaView>
     
      <View className="flex-1 bg-white px-6 ">
       

        <Text className="mb-2  mt-20 text-3xl font-bold leading-tight">
         Thank you!
        </Text>
        <Text className="-mt-1 mb-5 text-gray-400 leading-tight text-[15px]">
          Your documents are now under review.
          We will get back to you in one working day. 
          You may continue as usual!
        </Text>
        <View className="flex justify-center w-full items-center">
        <Image
          source={require("../../assets/images/success.png")}
          style={{ width: 250, height: 250 }}
        />
        
        </View>
       
        <TouchableOpacity
            onPress={() => navigation.navigate("Tab")}
            className="py-3 bg-orange-500 rounded-xl min-w-full mt-40"
          >
            <Text className="text-lg font-semibold text-center text-white">
              Proceed
            </Text>
          </TouchableOpacity>

      </View>
    </View>
  );
};

export default Success;
