import React, { useState, useEffect } from "react";
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
  TextInput,
} from "react-native";
import { Modal } from "./Modal";
import questionsData from "./Questions.json";

export default Answer = () => {
  const [data, setData] = React.useState(null);
  const [textInputs, setTextInputs] = React.useState({});

  useEffect(() => {
    setData(questionsData);
    const initialTextInputs = {};
    questionsData.forEach((question) => {
      initialTextInputs[question.id] = "";
    });
    setTextInputs(initialTextInputs);
  }, []);

  const onChangeText = (id, newText) => {
    setTextInputs((prevTextInputs) => ({
      ...prevTextInputs,
      [id]: newText,
    }));
  };

  return (
    <View>
      <Text style={styles.textStyle}>Answer this week’s questions</Text>
      {Array.isArray(data) &&
        data.slice(0, 3).map((item) => (
          <View key={item.id}>
            <Text style={styles.options}>{item.key}</Text>
            <TextInput
              style={styles.input}
              onChangeText={(newText) => onChangeText(item.id, newText)}
              value={textInputs[item.id]}
              placeholder="Enter answer here"
            />
          </View>
        ))}
      <Pressable style={styles.sched}>
        <Text style={{ textAlign: "center" }}>Submit</Text>
      </Pressable>
    </View>
  );
};

const styles = {
  textStyle: {
    fontWeight: "bold",
    paddingTop: 70,
    paddingBottom: 20,
    paddingLeft: 10,
    fontSize: 18,
  },
  options: {
    marginRight: 10,
    marginTop: 10,
    marginLeft: 10,
    fontSize: 16,
  },
  input: {
    height: 35,
    margin: 12,
    padding: 10,
    borderRadius: 4,
    backgroundColor: "#E5E4E2",
  },
  sched: {
    padding: 10,
    color: "black",
    borderRadius: 8,
    marginLeft: "auto",
    marginTop: 20,
    marginRight: 10,
    width: 120,
    backgroundColor: "#C9DBC9",
  },
};
