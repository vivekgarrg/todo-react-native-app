import React from "react";
import { Text, View, StyleSheet, TouchableWithoutFeedback } from "react-native";
import { MaterialIcons } from '@expo/vector-icons'


export default function Header({item,index, handleDelete}){
    return(
        <View style={styles.header}>
            <Text style={styles.text}>{item.text}</Text>
            <TouchableWithoutFeedback onPress={()=>handleDelete(index)}>
                <MaterialIcons name="delete" size={25} color="red"/>
            </TouchableWithoutFeedback>
        </View>
    )
}

const styles = StyleSheet.create({
    header:{
        borderWidth:1,
        borderColor:"#90caf9",
        borderStyle:'dashed',
        marginLeft:20,
        marginRight:20,
        marginTop:10,
        flexDirection:'row',
        justifyContent:'space-between',
        padding:10,
    },
    text:{
        fontSize:20,
        fontWeight:'400',


    }
})
