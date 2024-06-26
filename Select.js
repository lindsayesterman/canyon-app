import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import {
  Text,
  StyleSheet,
  View,
  ScrollView,
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
    const url = "http://joincanyon.org/groups";
    const options = {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
        Authorization:
          "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImYyOThjZDA3NTlkOGNmN2JjZTZhZWNhODExNmU4ZjYzMDlhNDQwMjAiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vY2FueW9uLTUyZDY2IiwiYXVkIjoiY2FueW9uLTUyZDY2IiwiYXV0aF90aW1lIjoxNzEzMDI4NzQ2LCJ1c2VyX2lkIjoiZzIzS01kZXJHOVVjZ2QySWhYbkhFMTBUeVBVMiIsInN1YiI6ImcyM0tNZGVyRzlVY2dkMkloWG5IRTEwVHlQVTIiLCJpYXQiOjE3MTMwMjg3NDYsImV4cCI6MTcxMzAzMjM0NiwiZW1haWwiOiJhbmRyZXdsdWx1MjAxMkBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiYW5kcmV3bHVsdTIwMTJAZ21haWwuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.O6MsDbPxzOhNsc0bjurJEysb_7I-8_qDXYqkTFImCF3a_KfXr-r9aT_2xQPgMk1zupaV_bOK0MfEMvVcWKVPuKxz_cBRGVC6jYa9JTpXFiSjEMWsOGkqNhBxOCH6jR0VMe88lmwvakVltt5m8UPu4i8aXKmeSif8E7Qo6XZ1YkXvcAbUEkuhdWZaVgRWntGYiBqlrZqU0ooAmS506qPYInwse3dWeqC99lDYxIIrDIfcu5UYd55SNEhFf6-VH7h1G3tFkW7yWZpw2ZV2GpfUoKCA9gxZxyZHezJaolJyNoFe_oE8tF15VULT7kD6nR21muRDdYXbx6-Tu6LnLdtWyA",
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
        console.log("asdfads" + data[0].name);
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
          style={!item.checked ? styles.box : styles.boxChecked}
          onPress={() => {
            onchecked(item.id);
          }}
        >
          {/* <Image
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
          /> */}
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
    <ScrollView style={styles.container}>
      <Text style={[styles.textStyle, { paddingTop: 70 }]}>
        Julia, it's your turn! 🎉 🙌
      </Text>
      <Text style={styles.subTextStyle}> Pick this week's questions!</Text>
      {this.renderQuestions()}
      <Modal questions={selectedQuestions} />
    </ScrollView>
  );
};

const styles = {
  container: {
    backgroundColor: "#121418",
    flex: 1,
  },
  box: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#1E2029",
    margin: 10,
    padding: 10,
    paddingBottom: 10,
    borderRadius: 4,
  },
  boxChecked: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#8296E1",
    margin: 10,
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 4,
    paddingLeft: 10,
  },
  textStyle: {
    fontWeight: "bold",
    paddingBottom: 20,
    paddingLeft: 10,
    fontSize: 18,
    color: "#FFFFFF",
  },
  subTextStyle: {
    paddingBottom: 20,
    paddingLeft: 10,
    fontSize: 18,
    color: "#FFFFFF",
  },
  tinyImg: {
    width: 18,
    height: 18,
    margin: 5,
    marginLeft: 10,
    marginRight: 10,
  },
  options: {
    marginRight: 20,
    fontSize: 16,
    color: "#FFFFFF",
  },
};
