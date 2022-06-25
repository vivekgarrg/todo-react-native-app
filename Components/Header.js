import React, {useEffect} from "react";
import { Text, View, StyleSheet } from "react-native";



export default function Header(){
        return(
        <View style={styles.header}>
            <Text style={styles.text}>Todo List</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header:{
        backgroundColor:"#1e88e5",
        paddingTop:50,
        paddingBottom:10
    },
    text:{
        textAlign:'center',
        color:'white',
        fontSize:30,
        fontWeight:'bold'
    }
})
