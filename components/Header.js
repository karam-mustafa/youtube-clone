import React from "react";
import { View, Text } from "react-native";
import { Entypo, Ionicons, MaterialIcons } from "@expo/vector-icons";

export default function Header({ navigation }) {
  return (
    <View
      style={{
        height: 60,
        paddingHorizontal:10,
        backgroundColor: "white",
        elevation:4,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <View
        style={{
          flexDirection: "row",
        }}
      >
        <Entypo name="youtube" size={24} color="red" />
        <Text style={{ fontSize: 16, color: "black", fontWeight: "bold", marginHorizontal: 5 }}>Youtube</Text>
      </View>
      <View
        style={{
          flexDirection: "row",
        }}
      >
        <Ionicons style={{paddingHorizontal: 13}} name="md-videocam" size={24} color="red" />
        <Ionicons style={{paddingHorizontal: 13}} name="md-search" size={24} color="red" onPress={() => navigation.navigate('SearchScreen')} />
        <MaterialIcons style={{paddingHorizontal: 13}} name="account-circle" size={24} color="red" />
      </View>
    </View>
  );
}
