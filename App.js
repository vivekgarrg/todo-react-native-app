import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import Header from './Components/Header';

export default function App() {
  const [todo, setTodo] = useState([
    {text: 'buy coffee', id: '1'},
    {text: 'buy coffee', id: '2'},
    {text: 'buy coffee', id: '3'},
    {text: 'buy coffee', id: '4'},
  ])

  const handleCLick = (id)=>{
    console.log(id)
  }
  return (
    <View style={styles.container}>
      <Header/>
      <View>
        <FlatList
        data={todo}
        renderItem={({ item })=>(
          <TouchableOpacity onPress={()=>handleCLick(item.id)}>
            <Text style={styles.text}>{item.text}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item)=>item.id}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: '#fff',
  },
  text:{
    padding:2,
    backgroundColor:'#6ab7ff',
    marginTop:10,
    fontSize:24,
    color:"white",
    fontWeight:'bold'
  }
  
});
