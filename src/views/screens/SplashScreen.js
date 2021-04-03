import React, { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { COLORS, gs } from "../../styles";

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    this.timeoutHandle = setTimeout(() => {
      navigation.navigate("onBoardScreen");
    }, 2000);
  });

  return (
    <View
      style={{
        ...gs.container,
        justifyContent: "space-between",
      }}
    >
      <View style={{ ...gs.center, flex: 1 }}>
      
      </View>
      <View style={{ marginBottom: 20 }}>
        <Text
          style={{
            fontSize: 17,
            fontWeight: "600",
            color: COLORS.dark,
            textAlign: "center",
          }}
        >
          Copyright &copy; 2021
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  logo: {
    color: COLORS.lightGray,
    fontSize: 100,
    textTransform: "uppercase",
  },
});
export default SplashScreen;
