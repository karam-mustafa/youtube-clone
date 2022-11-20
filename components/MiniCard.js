import { View, Text, Image, Dimensions } from "react-native";
import React from "react";
import { Entypo, Ionicons, MaterialIcons } from "@expo/vector-icons";

const MiniCard = (props) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
        marginBottom: 10,
      }}
    >
      <View style={{ width: "50%" }}>
        <Image
          source={{
            uri: props.img,
          }}
          style={{ width: "100%", height: 150 }}
        />
      </View>
      <View style={{ flexDirection: "column", marginTop: 15, width: "50%", paddingLeft: 7 }}>
        <Text
          style={{ fontSize: 13, width: "100%" }}
          ellipsizeMode="tail"
          numberOfLines={5}
        >
          {props.title}
        </Text>
        <Text>{props.channel}</Text>
      </View>
    </View>
  );
};

export default MiniCard;
