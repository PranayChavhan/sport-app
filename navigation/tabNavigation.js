import * as React from "react";
import { Text, View, Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/Tabs/HomeScreen";
import CalenderScreen from "../screens/Tabs/CalenderScreen";
import TournamentScreen from "../screens/Tabs/TournamentScreen";
import TeamsScreen from "../screens/Tabs/TeamsScreen";
import AccountScreen from "../screens/Tabs/AccountScreen";

function Feed() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Feed!</Text>
    </View>
  );
}

function Profile() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Profile!</Text>
    </View>
  );
}

function Notifications() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Notifications!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();
const screenOptions = {
  tabBarShowLabel: false,
  headerShown: false,
  tabBarStyle: {
    position: "absolute",
    bottom: 0,
    right: 0,
    left: 0,
    elevation: 0,
    height: 80,
    background: "#ffff",
  },
};

export default function TabNavigation() {
  return (
    <Tab.Navigator initialRouteName="Home" screenOptions={screenOptions}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View style={{ alignItems: "center", justifyContent: "center" }}>
                {focused ? (
                  <Image
                    source={require("../assets/icons/h-filled.png")}
                    className="w-7 h-7"
                  />
                ) : (
                  <Image
                    source={require("../assets/icons/h-outline.png")}
                    className="w-7 h-7"
                  />
                )}
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Calender"
        component={CalenderScreen}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View style={{ alignItems: "center", justifyContent: "center" }}>
                {focused ? (
                  <Image
                    source={require("../assets/icons/c-filled.png")}
                    className="w-7 h-7"
                  />
                ) : (
                  <Image
                    source={require("../assets/icons/c-outline.png")}
                    className="w-7 h-7"
                  />
                )}
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Tournament"
        component={TournamentScreen}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View style={{ alignItems: "center", justifyContent: "center" }}>
                {focused ? (
                  <Image
                    source={require("../assets/icons/f-filled.png")}
                    className="w-7 h-7"
                  />
                ) : (
                  <Image
                    source={require("../assets/icons/f-outline.png")}
                    className="w-7 h-7"
                  />
                )}
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Teams"
        component={TeamsScreen}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View className=" ">
                {focused ? (
                  <Image
                    source={require("../assets/icons/t-filled.png")}
                    className="w-7 h-7"
                  />
                ) : (
                  <Image
                    source={require("../assets/icons/t-outline.png")}
                    className="w-7 h-7"
                  />
                )}
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Account"
        component={AccountScreen}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View>
                {focused ? (
                  <View className=" rounded-full p-[2px] border-black border">
                    <Image
                      source={require("../assets/icons/avatar.png")}
                      className="w-7 h-7"
                    />
                  </View>
                ) : (
                  <Image
                    source={require("../assets/icons/avatar.png")}
                    className="w-7 h-7"
                  />
                )}
              </View>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}
