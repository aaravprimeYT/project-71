import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import firebase from "firebase";
import db from "../config";
import { Header } from "react-native-elements";


export default class WriteStoryScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "",
      author: "",
      story: "",
    };
  }

  submitStory = () => {
    db.collection("Stories").add({
      "title": this.state.title,
      "author": this.state.author,
      "story": this.state.story,
    });

    this.setState({
      title: "",
      author: "",
      story: "",
    });
  };

  render() {
    return (
        <View style={styles.container}>
          <Header
          backgroundColor={"#f38181"}
          centerComponent={{
            text: "Create Your Own Story",
            style: { fontSize: 28, color: "#fff" },
          }}
        />
          <TextInput
            style={styles.Title}
            placeholder="Title of the Story"
            placeholderTextColor="black"
            onChangeText={(text) => {
              this.setState({ title: text });
            }}
            value={this.state.title}
          />
          <TextInput
            style={styles.Author}
            placeholder="Author of the Story"
            placeholderTextColor="black"
            onChangeText={(text) => {
              this.setState({ author: text });
            }}
            value={this.state.author}
          />
          <TextInput
            style={styles.Story}
            placeholder="Story"
            placeholderTextColor="black"
            multiline={true}
            onChangeText={(text) => {
              this.setState({ story: text });
            }}
            value={this.state.story}
          />
          <TouchableOpacity style={styles.button} onPress={this.submitStory}>
            <Text style={styles.buttonText}>Submit Story</Text>
          </TouchableOpacity>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fce38a",
  },

  Title: {
    height: 40,
    width: 300,
    borderColor: "black",
    borderWidth: 2,
    fontWeight: "bold",
    marginTop: 100,
    color: "black",
    outline: "none",
    alignSelf:"center"
  },

  Author:{
    height: 40,
    width: 300,
    borderColor: "black",
    borderWidth: 2,
    fontWeight: "bold",
    marginTop: 100,
    color: "black",
    outline: "none",
    alignSelf:"center"
  },

  Story: {
    height: 120,
    width: 300,
    borderColor: "black",
    borderWidth: 2,
    marginTop: 100,
    color: "black",
    textAlignVertical: "center",
    outline: "none",
    alignSelf:"center",
    fontWeight:"bold"
  },

  button: {
    alignSelf: "center",
    width: 115,
    height: 40,
    borderRadius: 10,
    borderColor: "black",
    marginTop: 20,
    backgroundColor: "black",
  },

  buttonText: {
    alignSelf: "center",
    color: "pink",
    fontWeight: "bold",
    justifyContent: "center",
    alignItems: "center",
    textAlignVertical: "center",
    marginTop: 9,
  },
});