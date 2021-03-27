import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { COLORS, gs } from "../../styles";
import AntDesign from "react-native-vector-icons/AntDesign";

const OnBoardScreen2 = ({navigation}) => {
  return (
    <ImageBackground
      source={require("../../assets/bg5.jpg")}
      style={{ ...gs.center, flex: 1 }}
    >
      <View style={{ paddingHorizontal: 30 }}>
      <Text
          style={{
            color: COLORS.dark,
            fontWeight: "bold",
            fontSize: 25,
            textAlign: "center",
            marginTop:30,
          }}
        >
          Bienvenue au
        </Text>
        <Text
          style={{
            color: COLORS.dark,
            fontWeight: "bold",
            fontSize: 25,
            textAlign: "center",
          }}
        >
          Centre De Formation
        </Text>
        <Text
          style={{
            color: COLORS.dark,
            fontWeight: "bold",
            fontSize: 23,
            textAlign: "center",
            marginBottom: 10,
          }}
        >
          Hejer Ben Hamouda
        </Text>
        <Text style={{ color: COLORS.gray, fontSize: 17, textAlign: "center",marginBottom:10 }}>
        Découvrez les meilleures recettes délicieuses, savoureuses et rigoureusement sélectionnées pour vous.
        </Text>
        <View style={{ alignSelf: "center", marginTop: 30 }}>
          <TouchableOpacity
            onPress={() => navigation.navigate("onBoardScreen")}
            activeOpacity={0.8}
            style={{ ...gs.btnContainer, height: 30, paddingHorizontal: 50 }}
          >
            <AntDesign name="arrowright" size={23} color={COLORS.white} />
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({});
export default OnBoardScreen2;
