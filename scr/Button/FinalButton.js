import React from "react";

import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
const FinalButton = () => {
  return (
    <TouchableOpacity>
        <View style={styles.addwarpper}>
      <Text
        style={{
          marginTop: 20,
          backgroundColor: "green",
          fontSize: 25,
          textAlign: "center",
          paddingVertical: 12,
          borderRadius: 6,
          color: "white",
         
        }}
      >
        Final Food List
      </Text>

      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-end",
  },

  
  
});

export default FinalButton;
