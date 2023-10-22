import React from "react";
import Header from "./scr/Mainscreen/Header";
import List from "./scr/Mainscreen/Componentlist/List";
import FinalButton from "./scr/Button/FinalButton";
import { View, Text,StyleSheet } from "react-native";
import Finalfoodlist from "./Finalfoodlist.json";

const App = () => {
    return (
    <View style={styles.container}>
      
    <Header/>
    <List/>
    <FinalButton/>
        
      
    </View>
      
  );
};


const styles = StyleSheet.create({

container:{
  flex:1,
  backgroundColor:"white",
  paddingHorizontal:12,
  
  
}

})
export default App;
