import React from "react";
import { StyleSheet, Text, View, Pressable, TextInput } from "react-native";

export default function Submitted({ data, textInputs, onChangeText }) {
  const [onEdit, setOnEdit] = React.useState(false);

  return (
    <View>
      <View>
        <Text style={styles.thankYou}>
          Thank you for submitting this week's questions.
        </Text>
        {data.slice(0, 3).map((item) => (
          <View key={item.id}>
            <Text style={styles.options}>{item.key}</Text>
            <TextInput
              style={onEdit ? styles.editable : styles.input}
              onChangeText={(newText) => onChangeText(item.id, newText)}
              value={textInputs[item.id]}
              placeholder="Enter answer here"
              editable={!onEdit ? false : true}
            />
          </View>
        ))}
      </View>
      {onEdit ? (
        <Pressable style={styles.sched} onPress={() => setOnEdit(false)}>
          <Text style={{ textAlign: "center" }}>Save</Text>
        </Pressable>
      ) : (
        <Pressable style={styles.sched} onPress={() => setOnEdit(true)}>
          <Text style={{ textAlign: "center" }}>Edit</Text>
        </Pressable>
      )}
    </View>
  );
}

const styles = {
  textStyle: {
    fontWeight: "bold",
    paddingTop: 70,
    paddingBottom: 10,
    paddingLeft: 10,
    fontSize: 19,
  },
  sub: {
    paddingBottom: 10,
    paddingLeft: 10,
    fontSize: 16,
  },
  options: {
    marginRight: 10,
    marginTop: 10,
    marginLeft: 10,
    fontSize: 15,
  },
  input: {
    height: 35,
    margin: 12,
    borderRadius: 4,
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
  thankYou: {
    fontWeight: "bold",
    paddingTop: 70,
    paddingBottom: 20,
    paddingLeft: 10,
    fontSize: 18,
  },
  editable: {
    height: 35,
    margin: 12,
    padding: 10,
    borderRadius: 4,
    backgroundColor: "#E5E4E2",
  },
};
