import React from "react";
import { StyleSheet, Text, View, Pressable, TextInput } from "react-native";

export default function Submitted() {
  return (
    <View>
      <Text style={styles.thankYou}>
        Thank you for submitting this week's questions.
      </Text>
      {/* {Array.isArray(data) &&
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
      <Pressable style={styles.sched} onPress={handleSubmitClicked}>
        <Text style={{ textAlign: "center" }}>Submit</Text>
      </Pressable> */}
    </View>
  );
}

const styles = {
  thankYou: {
    fontWeight: "bold",
    paddingTop: 70,
    paddingBottom: 20,
    paddingLeft: 10,
    fontSize: 18,
  },
};
