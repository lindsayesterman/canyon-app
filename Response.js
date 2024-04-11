import React from "react";
import { Text, View, Pressable, TextInput } from "react-native";

export default function Response({ text, person }) {
  return (
    <View style={styles.input}>
      <Text style={styles.name}>{person}</Text>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
}

const styles = {
  input: {
    margin: 12,
    borderRadius: 4,
    backgroundColor: "#1E2029",
    padding: 15,
  },
  name:{
    color: "#6C6E77",
    marginBottom: 5,
  },
  text:{
    color: "#FFFFFF",
  }
};
