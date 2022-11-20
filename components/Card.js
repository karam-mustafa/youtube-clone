import { View, Text, Image, Dimensions } from "react-native";
import React from "react";
import { Entypo, Ionicons, MaterialIcons } from "@expo/vector-icons";

const Card = () => {
  return (
    <View style={{marginBottom: 5 }}>
      <Image
        source={{
          uri: "https://images.unsplash.com/photo-1550113697-1e5bb76700ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        }}
        style={{ width: "100%", height: 200 }}
      />
      <View style={{ flexDirection: "row", marginTop: 15 }}>
        <MaterialIcons
          name="account-circle"
          size={32}
          color="#212121"
        ></MaterialIcons>
        <View style={{ marginLeft: 10 }}>
          <Text
            style={{ fontSize: 18, width: Dimensions.get("screen").width - 50 }}
            ellipsizeMode="tail"
            numberOfLines={2}
          >
            This is an example of react native application This is an example of
            react native application
          </Text>
          <Text>karam1</Text>
        </View>
      </View>
    </View>
  );
};

export default Card;
