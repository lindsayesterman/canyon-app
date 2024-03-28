import React, { Component } from "react";
import { StatusBar } from "expo-status-bar";
import {
  Text,
  StyleSheet,
  View,
  FlatList,
  TouchableOpacity,
  CheckBox,
  Button,
  Image,
  Pressable,
} from "react-native";
import { Modal } from "./Modal";

const questionsData = require("./Questions.json");

export default class Select extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: questionsData,
      selectedQuestions: [],
    };
  }
  onchecked(id) {
    const data = this.state.data;
    const index = data.findIndex((x) => x.id === id);
    data[index].checked = !data[index].checked;
    this.setState(data);
  }
  renderQuestions() {
    return this.state.data.map((item, key) => {
      return (
        <TouchableOpacity
          key={key}
          style={{ flexDirection: "row", alignItems: "center" }}
          onPress={() => {
            this.onchecked(item.id);
          }}
        >
          <Image
            style={styles.tinyImg}
            source={
              !item.checked
                ? require("./assets/uncheckedImg.png")
                : require("./assets/checkedImg.png")
            }
            value={item.checked}
            onValueChange={() => {
              this.onchecked(item.id);
            }}
          />
          <Text style={styles.options}>{item.key}</Text>
        </TouchableOpacity>
      );
    });
  }

  getSelectedQuestions() {
    var keys = this.state.data.map((t) => t.key);
    // var checks = this.state.data.map((t) => t.checked);
    let Selected = [];
    for (let i = 0; i < checks.length; i++) {
      Selected.push(keys[i]);
    }
    console.log(Selected);
  }

  render() {
    return (
      <View>
        <Text style={styles.textStyle}>
          Select 3 new questions for this week!
        </Text>
        {this.renderQuestions()}
        <TouchableOpacity onPress={this.getSelectedQuestions}>
        </TouchableOpacity>
        <Modal questions={this.getSelectedQuestions} />
        {console.log(this.getSelectedQuestions)}
      </View>
    );
  }
}

const styles = {
  textStyle: {
    fontWeight: "bold",
    paddingTop: 70,
    paddingBottom: 20,
    paddingLeft: 30,
    fontSize: 18,
  },
  tinyImg: {
    width: 18,
    height: 18,
    margin: 5,
    marginLeft: 30,
  },
  options: {
    marginRight: 60,
    fontSize: 16,
  },
};