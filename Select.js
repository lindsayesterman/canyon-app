import React, { useState, useEffect } from "react";
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

export default Select = () => {
  const [data, setData] = React.useState(questionsData);
  const [selectedQuestions, setSelectedQuestions] = React.useState([]);

  useEffect(() => {
    setData(questionsData);
  }, []);

  // const onchecked = (id) => {
  //   const newData = data.map((item) => {
  //     if (item.id === id) {
  //       setSelectedQuestions(selectedQuestions.push(item));
  //       return { ...item, checked: !item.checked };
  //     }
  //     return item;
  //   });
  //   setData(newData);
  //   console.log(data);
  // };

  const onchecked = (id) => {
    const newData = data.map((item) => {
      if (item.id === id) {
        // Toggle the checked state
        const updatedItem = { ...item, checked: !item.checked };
        setData((prevData) =>
          prevData.map((dataItem) =>
            dataItem.id === id ? updatedItem : dataItem
          )
        );

        if (updatedItem.checked) {
          // If the item is now checked, add it to the selectedQuestions
          setSelectedQuestions((prevSelected) => [
            ...prevSelected,
            updatedItem,
          ]);
        } else {
          // If the item is now unchecked, remove it from the selectedQuestions
          setSelectedQuestions((prevSelected) =>
            prevSelected.filter((question) => question.id !== id)
          );
        }
        return updatedItem;
      }
      return item;
    });
  };

  renderQuestions = () => {
    return data.map((item, key) => {
      return (
        <TouchableOpacity
          key={key}
          style={{ flexDirection: "row", alignItems: "center" }}
          onPress={() => {
            onchecked(item.id);
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
  };

  getSelectedQuestions = () => {
    // Filter out the selected questions based on their checked status
    const selected = data.filter((item) => item.checked);
    setSelectedQuestions(selected); // Assuming you want to update the state as well
    console.log("yo yo" + selected)
    return selected;
  };

  return (
    <View>
      <Text style={styles.textStyle}>
        Select 3 new questions for this week!
      </Text>
      {this.renderQuestions()}
      {/* <TouchableOpacity onPress={this.getSelectedQuestions}></TouchableOpacity> */}
      <Modal questions={selectedQuestions} />
    </View>
  );
};

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
