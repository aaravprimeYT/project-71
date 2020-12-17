import * as React from "react";
import { Header } from "react-native-elements";
import { View, StyleSheet, Text } from "react-native";

export default class ReadStoryScreen extends React.Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "#fce38a",
        }}
      >
        <Header
          backgroundColor={"#f38181"}
          centerComponent={{
            text: "Story Hub",
            style: { fontSize: 28, color: "#fff" },
          }}
        />
        <Text>Books Coming Soon!!!</Text>
      </View>
    );
  }
}