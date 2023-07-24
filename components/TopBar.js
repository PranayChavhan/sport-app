//import liraries
import React from 'react';
import { View, Text, TouchableOpacity, Image, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ArrowLeftIcon } from "react-native-heroicons/solid";
import { useNavigation } from "@react-navigation/native";


const Topbar = () => {
    const navigation = useNavigation();
    return (
        <SafeAreaView className="flex flex-row items-center bg-white">
        <View className="flex-row items-center justify-between w-full">
         <TouchableOpacity
           onPress={() => navigation.goBack()}
           className=" p-2 ml-4"
         >
           <Image
             source={require("../assets/icons/logo.png")}
             className="w-10 h-10"
           />
         </TouchableOpacity>

         <View className="flex flex-row items-center justify-center mr-4 gap-2">
         <TouchableOpacity className="p-2 bg-orange-100 rounded-2xl">
           <Image
             source={require("../assets/icons/search.png")}
             className="w-5 h-5"
           />
         </TouchableOpacity>

         <TouchableOpacity className=" rounded-2xl">
           <Image
             source={require("../assets/icons/msg.png")}
             className="w-[28px] h-[28px]"
           />
         </TouchableOpacity>
         <TouchableOpacity className="rounded-2xl">
           <Image
             source={require("../assets/icons/notification.png")}
             className="w-[28px] h-[28px]"
           />
         </TouchableOpacity>
         {/* <TouchableOpacity className="rounded-2xl">
           <Image
             source={require("../assets/icons/hamburger.png")}
             className="w-[28px] h-[28px]"
           />
         </TouchableOpacity> */}

         </View>
       </View>
     </SafeAreaView>
    );
};

export default Topbar;
