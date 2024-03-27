import React, { useState } from "react";
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
  SafeAreaView,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

export const Modal = () => {
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);
  const [showDate, setShowDate] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow(false);
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode("date");
    setShowDate(true);
  };

  const showTimepicker = () => {
    showMode("time");
    setShowDate(true);
  };

  const getCurrentDate = () => {
    var date = new Date().getDate();
    var month = new Date().getMonth() + 1;
    var year = new Date().getFullYear();
    return month + "/" + date + "/" + year;
  };

  return (
    <SafeAreaView>
      <View style={{ flexDirection: "row" }}>
        <Pressable
          onPress={showDatepicker}
          style={[styles.date, { marginLeft: 35 }]}
        >
          <Text style={{ textAlign: "center" }}>Select Date</Text>
        </Pressable>
        <Pressable onPress={showTimepicker} style={styles.date}>
          <Text style={{ textAlign: "center" }}>Select Time</Text>
        </Pressable>
      </View>
      <View
        style={{ flexDirection: "row", alignItems: "center", marginTop: 20 }}
      >
        {showDate && (
          <Text style={styles.selectedDate}>{date.toLocaleString()}</Text>
        )}
        {show && (
          <DateTimePicker
            style={styles.picker}
            testID="dateTimePicker"
            value={date}
            mode={mode}
            is24Hour={true}
            onChange={onChange}
          />
        )}
      </View>
      <Pressable
        // style={styles.sched}
        style={[
          styles.sched,
          showDate
            ? { backgroundColor: "#C9DBC9" }
            : { backgroundColor: "whitesmoke" },
        ]}
        onPress={() => {
          showDate && this.props.questions;
        }}
      >
        <Text style={{ textAlign: "center" }}>Schedule</Text>
      </Pressable>
    </SafeAreaView>
  );
};

const styles = {
  date: {
    backgroundColor: "#FFB77A",
    padding: 10,
    color: "black",
    borderRadius: 8,
    marginLeft: 10,
    marginTop: 10,
  },
  picker: {
    // marginBottom: 20,
  },
  selectedDate: {
    marginLeft: 35,
    fontSize: 16,
  },
  sched: {
    backgroundColor: "#C9DBC9",
    width: 100,
    padding: 10,
    color: "black",
    borderRadius: 8,
    marginLeft: "auto",
    marginRight: 40,
    marginTop: 20,
  },
  schedule: {
    marginTop: 10,
  },
};
