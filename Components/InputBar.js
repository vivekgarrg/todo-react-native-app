import React, {useState} from "react";
import { Text, View, StyleSheet, TextInput, Button, Alert, Keyboard } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default function Header({  handleSubmit }) {
    const [text, setText] = useState('')
    
    const handleError = ()=>{
        if(text.length<3){
            Alert.alert(
                "Alert!",
                "Please enter more than 3 char todo task.",
                [
                  {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                  },
                  { text: "OK", onPress: () => console.log("OK Pressed") }
                ]
              );
              return;
        }
        handleSubmit(text)
        setTimeout(()=>{
            Keyboard.dismiss()
            setText('')
        },500)
}

  return (
    <View style={styles.header}>
      <View style={styles.input}>
        <TextInput
         placeholder="Enter a new task.."
         onChangeText={(val)=>setText(val)}
         value={text}
         />
      </View>
      <View style={styles.btn}>
        <Button
         title="Add Task"
         onPress={handleError}
         />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    margin: 15,
  },
  input:{
    marginBottom:3,
    borderBottomWidth:2,
    borderBottomColor:"#c3fdff"
  }
});
