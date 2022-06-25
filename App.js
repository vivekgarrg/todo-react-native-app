import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ScrollView,
  FlatList,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import { AsyncStorage } from "react-native";
import Header from "./Components/Header";
import Item from "./Components/Items";
import InputBar from "./Components/InputBar";

export default function App() {
  const [todo, setTodo] = useState([]);

  useEffect(() => {
    handleStorage();
  }, [todo]);

  const handleStorage = async () => {
    const arr = await AsyncStorage.getItem("tasks");
    setTodo(JSON.parse(arr));
  };
  const handleDelete = async (ind) => {
    await AsyncStorage.setItem(
      "tasks",
      JSON.stringify(todo.filter((item, index) => index != ind))
    );
    handleStorage();
  };

  const handleSubmit = async (val) => {
    if (todo.length > 0) {
      let putArr = [...todo, { text: val }];
      await AsyncStorage.setItem("tasks", JSON.stringify(putArr));
    } else {
      let putArr = [{ text: val }];
      await AsyncStorage.setItem("tasks", JSON.stringify(putArr));
    }
    handleStorage();
  };
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
          <Header />
        <View style={styles.inputbar}>
          <InputBar handleSubmit={handleSubmit} />
          <View style={styles.list}>
            <FlatList
              data={todo}
              renderItem={({ item, index }) => (
                <Item item={item} index={index} handleDelete={handleDelete} />
              )}
              keyExtractor={(item, index) => index}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  inputbar: {
    flex: 1,
    marginTop:10,
    padding:30
  },
  list: {
    flex: 1,
    marginTop:20
  },
});
