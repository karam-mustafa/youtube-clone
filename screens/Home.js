import { View, Text } from "react-native";
import React from "react";
import Header from "../components/Header";
import Card from "../components/Card";
import { ScrollView } from "react-native-gesture-handler";
import Constant from "expo-constants";

const Home = ({ navigation }) => {
  return (
    <View style={{ flex: 1, marginTop: Constant.statusBarHeight }}>
      <Header navigation={navigation} />
      <ScrollView>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </ScrollView>
    </View>
  );
};

export default Home;
