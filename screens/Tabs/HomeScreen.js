import React from "react";

import { View, Text, TouchableOpacity, Image, TextInput } from "react-native";

import { useNavigation } from "@react-navigation/native";
import Topbar from "../../components/TopBar";
// create a component
const HomeScreen = () => {
  const navigation = useNavigation();
    return (
      <View className="flex-1 bg-white">
        <Topbar/>

      <View className="flex-1 bg-white px-4 pt-8">
      <Text className="mb-2 mt-0 text-3xl font-medium leading-tight">
          Let's get you verified
        </Text>
     


      </View>
    </View>
    );
};

export default HomeScreen;
