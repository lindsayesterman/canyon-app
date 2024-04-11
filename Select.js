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
  const [selectedQuestions, setSelectedQuestions] = React.useState([
    // { id: 1, key: "What is your earliest memory?" },
  ]);

  useEffect(() => {
    getDataFromBackend();
    setData(questionsData);
  }, []);

  // useEffect(() => {
  //   fetch('54.210.61.111/auth')
  //     .then(response => response.json())
  //     // set variables to the response from the server
  //     .then((data) => {
  //       setData(questionsData);
  //       console.log(data.token)
  //     })
  // }, [])

  async function getDataFromBackend() {
    const url = "54.210.61.111:80/groups";
    const options = {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
        Authorization:
          "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImYyOThjZDA3NTlkOGNmN2JjZTZhZWNhODExNmU4ZjYzMDlhNDQwMjAiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vY2FueW9uLTUyZDY2IiwiYXVkIjoiY2FueW9uLTUyZDY2IiwiYXV0aF90aW1lIjoxNzEyNjkxMTczLCJ1c2VyX2lkIjoiZzIzS01kZXJHOVVjZ2QySWhYbkhFMTBUeVBVMiIsInN1YiI6ImcyM0tNZGVyRzlVY2dkMkloWG5IRTEwVHlQVTIiLCJpYXQiOjE3MTI2OTExNzMsImV4cCI6MTcxMjY5NDc3MywiZW1haWwiOiJhbmRyZXdsdWx1MjAxMkBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiYW5kcmV3bHVsdTIwMTJAZ21haWwuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.dYeeUpc4qIDG1B80_3ANumgt1GM42x5Hq4Vi6xvo23krpYRob4iDGM91vND1tkZew5uDdnYnmJioOcXCcdefSfQ6QpiZ-0CHSYfME7XUFIWJxfI9oPMs8klJ3dwSriINkuKGSsw_xqvmJpgZUF0DcfHZfqnxlItZ8HBY7_N2OwKtUTLG67Y0G0qBO1UXthiT_QN7QWf0JlEQavFBzoNoy1znxTDhTciyzxu_P4dXw_ghcnJ3y3S__3rdaXuZLFXnZ0blpe8ciuDSXNKavpF_zyVYYWDalxPVcBw07dzIWSzoX5tzQldvHR7QEUQC_vYtvD-b3XhO3BlifroqJp_rTg",
      },
    };
    fetch(url, options)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log(data.status);
        console.log("hello");
      })
      .catch((e) => {
        console.error(e);
      });
    console.log("yep");
  }

  const onchecked = (id) => {
    const newData = data.map((item) => {
      if (item.id === id) {
        const updatedItem = { ...item, checked: !item.checked };
        setData((prevData) =>
          prevData.map((dataItem) =>
            dataItem.id === id ? updatedItem : dataItem
          )
        );

        if (updatedItem.checked) {
          setSelectedQuestions((prevSelected) => [
            ...prevSelected,
            updatedItem,
          ]);
        } else {
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
      // getDataFromBackend();
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
    console.log("hey" + selected);
    return selected;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>
        Select 3 new questions for next week!
      </Text>
      {this.renderQuestions()}
      <Modal questions={selectedQuestions} />
    </View>
  );
};

const styles = {
  container: {
    // backgroundColor: "#1E2029",
    // flex: 1,
  },
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
