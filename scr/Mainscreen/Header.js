import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

const Header = () => {
  return (
       <View>
      <View style={styles.headtop}>
        <Text style={styles.title}>Food List</Text>
      </View>
      
      </View>
  );
};

const styles = StyleSheet.create({
  
  headtop: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  title: {
    textAlign:"center",
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default Header;
