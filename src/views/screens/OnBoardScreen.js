import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Button,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { COLORS, gs } from "../../styles";
import AntDesign from "react-native-vector-icons/AntDesign";

const OnBoardScreen = ({ navigation }) => {
  return (
    <SafeAreaView
      style={{
        ...gs.container,
      }}
    >
      <View style={{ flex: 1 }}>
        <ImageBackground
          source={require("../../assets/bg7.jpg")}
          style={{ height: "100%", width: "100%" }}
        ></ImageBackground>
      </View>
      <View
        style={{
          paddingHorizental: 30,
          alignItems: "center",
          paddingVertical: 30,
        }}
      >
        <Text
          style={{
            textAlign: "center",
            fontSize: 18,
            color: COLORS.dark,
            fontWeight: "bold",
          }}
        >
          Rejoignez-nous {"\n"} pour des recettes et astuces Culinaires
        </Text>
        <View style={{ alignSelf: "center", marginTop: 20 }}>
          <TouchableOpacity
            onPress={() => navigation.navigate("signUp")}
            activeOpacity={0.8}
            style={{ ...gs.btnContainer, height: 30, paddingHorizontal: 50 }}
          >
            <AntDesign name="arrowright" size={23} color={COLORS.white} />
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate("login")}>
          <Text style={styles.text}>
            Vous avez déjà un compte ?
            <Text style={gs.highlight}> S'identifier</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  text: {
    marginTop: 25,
    color: COLORS.gray,
    fontSize: 16,
  },
});
export default OnBoardScreen;
