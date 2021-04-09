import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { COLORS, gs } from "../../styles";

const OnBoardScreen2 = ({ navigation }) => {
  return (
    <SafeAreaView
      style={{
        ...gs.container,
      }}
    >
      <View style={{ flex: 1 }}>
        <ImageBackground
          source={require("../../assets/img_int3.jpg")}
          style={{ height: "100%", width: "100%" }}
        ></ImageBackground>
      </View>
      <View
        style={{
          flex: 1,
          paddingHorizontal:35,
          justifyContent: "center",
        }}
      >
        <Text
          style={{
            textAlign: "center",
            fontSize: 25,
            color: COLORS.dark,
            lineHeight: 37,
            fontFamily: "Roboto-Bold",
          }}
        >
          Rejoingez-nous{"\n"}Pour Des Astuces{"\n"}et Recettes Culinaires
        </Text>

        <View
          style={{
            flexDirection: "row",
            alignSelf: "center",
            marginVertical: 25,
          }}
        >
          <View
            style={{
              height: 6,
              width: 6,
              backgroundColor: COLORS.secondary,
              borderRadius: 3,
              marginRight: 8,
            }}
          />
          <View
            style={{
              height: 6,
              width: 28,
              backgroundColor: COLORS.primary,
              borderRadius: 3,
            }}
          />
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate("signUp")}
          activeOpacity={0.8}
          style={{ ...gs.btnContainer }}
        >
          <Text style={gs.btnTitle}>S'inscrire</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ marginTop: 25 }}
          onPress={() => navigation.navigate("login")}
        >
          <Text
            style={{
              fontFamily: "Roboto-Regular",
              color: COLORS.lightGray,
              fontSize: 15,
              textAlign: "center",
            }}
          >
            Vous avez déjà un compte?{" "}
            <Text style={gs.highlight}>Identifiez-vous</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default OnBoardScreen2;
