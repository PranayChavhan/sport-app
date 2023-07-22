//import liraries
import React from "react";
import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import Topbar from "../../components/TopBar";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
const AccountScreen = () => {
  return (
    <View className=" flex-1">
      <Topbar />
      <ScrollView>
        <View className="p-3">
          <View className="bg-white rounded-sm p-2 py-4">
            <View className="w-[30%]">
              <TouchableOpacity className="rounded-full ">
                <Image
                  source={require("../../assets/images/Pranay.jpg")}
                  className="w-32 h-32 rounded-full"
                />
              </TouchableOpacity>
            </View>
            <View className="flex flex-row items-center gap-2 my-0">
              <Text className="border-r border-gray-400 pr-2 text-[12px] font-semibold text-gray-500">
                He/Him/His
              </Text>

              <Text className="text-[12px] font-semibold text-gray-500">
                @ImPranay
              </Text>
            </View>
            <Text className="text-[24px] font-semibold text-gray-700 mt-3 mb-2">
              Pranay Chavhan
            </Text>
            <View className="flex flex-row items-center gap-5">
              <Text className="text-[12px] font-semibold text-gray-500">
                chavhanpranay48@gmail.com
              </Text>
              <TouchableOpacity>
                <Image
                  source={require("../../assets/icons/pencile.png")}
                  className="w-3 h-3"
                />
              </TouchableOpacity>
            </View>
            <View className="flex flex-row gap-5 mt-0 items-center justify-start">
              <TouchableOpacity className="bg-orange-500 rounded-full px-5 py-2 flex flex-row items-center">
                <Image
                  source={require("../../assets/icons/share.png")}
                  className="w-5 h-5"
                />
                <Text className="text-white ml-2 font-semibold text-[16px]">
                  Share Profile
                </Text>
              </TouchableOpacity>

              <TouchableOpacity className="border border-gray-400 rounded-full px-6 justify-center py-2 flex flex-row items-center">
                <Image
                  source={require("../../assets/icons/pencile.png")}
                  className="w-4 h-4"
                />
                <Text className="text-gray-700 ml-3 font-semibold text-[16px]">
                  Edit Profile
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          <Text className="text-[14px] font-semibold text-gray-700 p-2">
            For Users
          </Text>
          <View className="bg-white rounded-sm pb-4 pt-3">
            <View className="flex gap-4">
              <TouchableOpacity className="flex flex-row items-center gap-3">
                <Ionicons name="person-outline" size={18} color="black" />
                <Text className="text-[14px] font-semibold text-gray-700">
                  Personal Information
                </Text>
              </TouchableOpacity>
              <TouchableOpacity className="flex flex-row items-center gap-3 my-0">
                <MaterialIcons name="payment" size={18} color="black" />
                <Text className="text-[14px] font-semibold text-gray-700">
                  Update Payment Details
                </Text>
              </TouchableOpacity>
              <TouchableOpacity className="flex flex-row items-center gap-3 my-0">
                <AntDesign name="hearto" size={18} color="black" />
                <Text className="text-[14px] font-semibold text-gray-700">
                  Watchlist
                </Text>
              </TouchableOpacity>
              <TouchableOpacity className="flex flex-row items-center gap-3 my-0">
                <FontAwesome5 name="history" size={18} color="black" />
                <Text className="text-[14px] font-semibold text-gray-700">
                  Recently Viewed
                </Text>
              </TouchableOpacity>

              <TouchableOpacity className="flex flex-row items-center gap-3 my-0">
                <Ionicons name="ios-settings-outline" size={18} color="black" />
                <Text className="text-[14px] font-semibold text-gray-700">
                  Settings
                </Text>
              </TouchableOpacity>
              <TouchableOpacity className="flex flex-row items-center gap-3 my-0">
                <MaterialIcons name="security" size={18} color="black" />
                <Text className="text-[14px] font-semibold text-gray-700">
                  Permission
                </Text>
              </TouchableOpacity>
              <TouchableOpacity className="flex flex-row items-center gap-3 my-0">
                <Ionicons
                  name="ios-notifications-outline"
                  size={18}
                  color="black"
                />
                <Text className="text-[14px] font-semibold text-gray-700">
                  Email Notification
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          <Text className="text-[14px] font-semibold text-gray-700 p-2">
            For Organizers
          </Text>
          <View className="bg-white rounded-sm pb-4 pt-3 mb-20">
            <View className="flex gap-4">
              <TouchableOpacity className="flex flex-row items-center gap-3 my-0">
                <Ionicons name="ios-settings-outline" size={18} color="black" />
                <Text className="text-[14px] font-semibold text-gray-700">
                  Manage Turnaments
                </Text>
              </TouchableOpacity>
              <TouchableOpacity className="flex flex-row items-center gap-3 my-0">
                <Entypo name="tools" size={18} color="black" />
                <Text className="text-[14px] font-semibold text-gray-700">
                  Turnaments
                </Text>
              </TouchableOpacity>
              <TouchableOpacity className="flex flex-row items-center gap-3 my-0">
                <FontAwesome name="rupee" size={18} color="black" />
                <Text className="text-[14px] font-semibold text-gray-700">
                  Plans & Billing
                </Text>
              </TouchableOpacity>

              <View className="px-4">
                <View className="border-t border-gray-300">
                  <TouchableOpacity className="border border-gray-400 mt-4 rounded-lg p-3 flex flex-row items-center justify-center">
                    <Text className="text-[14px] font-semibold text-gray-700 mr-2">
                      Logout
                    </Text>
                    <MaterialIcons name="logout" size={18} color="black" />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default AccountScreen;
