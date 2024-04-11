import React, { useState, useEffect } from "react";
import { Text, View, ScrollView, Pressable, TextInput } from "react-native";
import questionsData from "./Questions.json";
import Submitted from "./Submitted.js";
import Response from "./Response.js";

export default Answer = () => {
  const [data, setData] = React.useState(null);
  // const [answers, setAnswers] = React.useState(["hey", "hi", "hola"]);
  const [answers, setAnswers] = React.useState([
    [
      {
        person: "Julia",
        text: "Going to the park and swinging as high as I could.",
      },
      { person: "James", text: "All areas lol" },
      {
        person: "Jerry",
        text: "My brother Jeramayah and I have such a good relationship. Thankful for you bro.",
      },
    ],
    [
      {
        person: "Test",
        text: "Yes.",
      },
      { person: "adfs", text: "Aadsfa" },
      {
        person: "afsd",
        text: "Masadf",
      },
    ],
  ]);

  // {
  //   "lindsay":["hi","hey","huh"],
  //   "name":["hi","hey","huh"],
  // }


  useEffect(() => {
    setData(questionsData);
    // const initialTextInputs = {};
    // questionsData.forEach((question) => {
    //   initialTextInputs[question.id] = "";
    // });
    // setTextInputs(initialTextInputs);
  }, []);

  return (
    <ScrollView>
      <Text style={styles.textStyle}>Responses</Text>
      <Text style={styles.sub}>Shoutout to Miles for selecting these Qs!</Text>
      {/* {Array.isArray(data) &&
        data.slice(0, 3).map((item) => (
          <View key={item.id}>
            <Text style={styles.options}>{item.key}</Text>
            <Response
              person={answers[0][item.id].person}
              text={answers[0][item.id].text}
            />
          </View>
        ))} */}
      {Array.isArray(data) &&
        data.slice(0, answers.length).map((dataItem, dataIndex) => (
          <React.Fragment key={dataItem.id}>
            <View>
              <Text style={styles.options}>{dataItem.key}</Text>
              {/* Access the corresponding array of answers using dataIndex */}
              {answers[dataIndex] &&
                answers[dataIndex].map((answer, answerIndex) => (
                  <View key={answerIndex}>
                    <Response person={answer.person} text={answer.text} />
                  </View>
                ))}
            </View>
          </React.Fragment>
        ))}
    </ScrollView>
  );
};

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
    margin: 12,
    fontSize: 15,
    fontWeight: "bold",
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
};
