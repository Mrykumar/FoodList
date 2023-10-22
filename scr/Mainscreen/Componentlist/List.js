import React, { useState } from "react";

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
  TextInput,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import Modal from "react-native-modal";


// const FOODLIST = [
//   {
//     id: "01",
//     title: "foodlist",
//     price: "pricelist",
//   },
//   {
//     id: "02",
//     title: "foodlist",
//     price: "pricelist",
//   },
// ];

console.log(Date.now().toString());

const List = () => {
  const [visible, setVisible] = useState(false);

  //Init local states
  const [todo, setTodo] = useState("");
  const [price, setPrice] = useState("");
  const [editedTodo, setEditedTodo] = useState(null);
  const [todoList, setTodoList] = useState([]);
  const [priceList, setPriceList] = useState([]);

  console.log(todo);

  //HANDLE ADD TODO2
  const handleAddTodo = () => {
    //sturtcure of  a single todo item
    // {
    //   id:
    //   title:
    // }

    setTodoList([
      ...todoList,
      { id: Date.now().toString(), title: todo, price: price },
    ]);
    setTodo("");
    setPrice("");
  };

  //Handle DELETE
  const handleDeleteTodo = (id) => {
    const updatedTodoList = todoList.filter((todo) => todo.id !== id);

    setTodoList(
      updatedTodoList
      //   [
      //   ...todoList,
      //   { id: Date.now().toString(), title: todo, price: price },
      // ]
    );
    // setTodo("");
    // setPrice("");
  };

  //Hendle Edit
  const handleEditTodo = (todo,Price) => {
    setEditedTodo(todo,Price);
    setTodo(todo.title,price.Price);
  };
  

  //Hendel UPdate

  const handleUpdateTodo = () => {
    const updatedTodos = todoList.map((item) => {
      if (item.id === editedTodo.id) {
        return { ...item, title: todo,price:price};
      }
      return item;
    });
    setTodoList(updatedTodos);
    setEditedTodo(null);
    setTodo("");
    setPrice("");
  };

  //RENDER TODO
  const renderfood = ({ item, index }) => {
    return (
      <View style={styles.itemlist}>
        <MaterialIcons name="drag-indicator" size={24} color="black" />
        <Text style={styles.itemtitle}>{item.title}</Text>
        <Text style={{ color: "black", fontSize: 15 }}>Price </Text>
        <Text style={styles.itemtitle}>{item.price}</Text>
        <MaterialIcons
          name="edit"
          size={24}
          color="black"

          onPress={() => 
           { setVisible(true)
            handleEditTodo(item)}}
         
        />

        <MaterialIcons
          name="delete"
          size={24}
          color="black"
          onPress={() => handleDeleteTodo(item.id)}
        />
      </View>
    );
  };

  return (
    <View>
      {/* Reander---------- food */}

      <FlatList data={todoList} renderItem={renderfood} />

      <TouchableOpacity
        style={styles.addbutton}
        onPress={() => {
          setVisible(true);
        }}
      >
        <Text style={styles.text}> + Add Food Item</Text>
      </TouchableOpacity>

      <Modal
        style={{ width: "100", margin: 0 }}
        onBackButtonPress={() => {
          setVisible(false);
        }}
        isVisible={visible}
      >
        <View
          style={{
            position: "absolute",
            bottom: 0,
            height: 300,
            backgroundColor: "white",
            width: "100%",
            borderTopLeftRadius: 12,
            borderTopRightRadius: 12,
          }}
        >
          {/* -------------------MODALCOMPONENT------------ */}

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
                placeholder="Add Food"
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
                placeholder="Price"
                value={price}
                onChangeText={(userText) => setPrice(userText)}
              ></TextInput>

              {editedTodo ? (
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
                    onPress={() => handleUpdateTodo()}
                  >
                    Save
                  </Text>
                </TouchableOpacity>
              ) : (
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
              )}
            </View>
          </SafeAreaView>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  addbutton: {
    backgroundColor: "#e4ffca",
    padding: 10,
    paddingVertical: 12,
    marginTop: 10,
    borderRadius: 6,
    borderWidth: 2,
    borderColor: "green",
  },

  text: {
    color: "black",
    fontWeight: "bold",
    fontSize: 18,
  },

  itemlist: {
    backgroundColor: "#f5fffa",
    borderRadius: 6,
    paddingHorizontal: 6,
    paddingVertical: 10,
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#1e90ff",
  },

  itemtitle: {
    color: "black",
    fontWeight: "bold",
    fontSize: 18,
    flex: 1,
  },
});

export default List;
