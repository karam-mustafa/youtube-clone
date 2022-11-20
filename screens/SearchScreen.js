import { View, Text, ActivityIndicator } from "react-native";
import React, { useState } from "react";
import Header from "../components/Header";
import Card from "../components/Card";
import { FlatList, ScrollView, TextInput } from "react-native-gesture-handler";
import { Entypo, Ionicons, MaterialIcons } from "@expo/vector-icons";
import Constant from "expo-constants";
import MiniCard from "../components/MiniCard";

const SearchScreen = ({ navigation }) => {
  const [value, setvalue] = useState("");
  const [miniCardData, setminiCardData] = useState([]);
  const [loading, setloading] = useState(false);
  const fetchData = () => {
    setloading(true);
    fetch(
      `https://youtube.googleapis.com/youtube/v3/search?maxResults=10&part=snippet&q=${value}&type=playlist&key=AIzaSyAF5bz7Y92OBWGzuAVnOYOzEGK2rlcu_M4`
    )
      .then((res) => res.json())
      .then((data) => {
        setloading(false);
        setminiCardData(data.items);
      });
  };
  return (
    <View style={{ flex: 1, marginTop: Constant.statusBarHeight }}>
      <View
        style={{
          padding: 5,
          flexDirection: "row",
          justifyContent: "space-between",
          elevation: 4,
          height: 60,
          alignItems: "center",
          backgroundColor: "white",
        }}
      >
        <Ionicons name="md-arrow-back" size={32}
        onPress={() => navigation.goBack()}
        ></Ionicons>
        <TextInput
          style={{ width: "70%", backgroundColor: "#e6e6e6", height: 50 }}
          value={value}
          onChangeText={(text) => setvalue(text)}
        />
        <Ionicons
          name="md-send"
          size={32}
          onPress={() => fetchData()}
        ></Ionicons>
      </View>
      {loading ? <ActivityIndicator size="large" color="red" /> : null}
      <FlatList
        data={miniCardData}
        renderItem={({ item }) => {
          console.log(item);
          return (
            <MiniCard
              videoId={item.id.videoId}
              title={item.snippet.title}
              channel={item.snippet.channelTitle}
              img={item.snippet.thumbnails.high.url}
            />
          );
        }}
      />
    </View>
  );
};

export default SearchScreen;
