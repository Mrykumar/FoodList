import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from "react-native";

console.log(Date.now().toString());

const Modalcomponent = () => {
  //INIT LOCAL STATE
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);
  //HAN
  //RENDER ADD TODO
  const handleAddTodo = () => {
    //sturture of a single todo item
    //{
    //id:
    //item:
    // }
    setTodoList([...todoList, { id: Date.now().toString(), title: todo }]);
  };

  return (
    <SafeAreaView>
      <View style={{ marginHorizontal: 16, marginTop: 12 }}>
        <Text>Add Food</Text>
        <TextInput
          style={{
            marginBottom: 10,
            borderWidth: 2,
            borderColor: "#1e90ff",
            borderRadius: 6,
            paddingVertical: 12,
            paddingHorizontal: 16,
          }}
          placeholder="Add food"
          value={todo}
          onChangeText={(userText) => setTodo(userText)}
        ></TextInput>
        <Text>Add Food</Text>
        <TextInput
          style={{
            marginBottom: 10,
            borderWidth: 2,
            borderColor: "#1e90ff",
            borderRadius: 6,
            paddingVertical: 12,
            paddingHorizontal: 16,
          }}
        ></TextInput>
        <TouchableOpacity>
          <Text
            style={{
              marginTop: 20,
              backgroundColor: "green",
              fontSize: 25,
              textAlign: "center",
              paddingVertical: 12,
              borderRadius: 6,
              justifyContent: "flex-end",
              color: "white",
            }}
            onPress={() => handleAddTodo()}
          >
            Button
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

// const styles = StyleSheet.create({

// container:{
//   flex:1,
//   backgroundColor:"pink",
//   paddingHorizontal:12,
// }

// })
export default Modalcomponent;
