import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { COLORS, gs } from "../../styles";

const OnBoardScreen = ({ navigation }) => {
  return (
    <SafeAreaView
      style={{
        ...gs.container,
      }}
    >
      <View style={{ flex: 1}}>
        <ImageBackground
          source={require("../../assets/img_int2.jpg")}
          style={{ height: "100%", width: "100%" }}
        ></ImageBackground>
      </View>
      <View
        style={{
          paddingHorizontal:35,
          flex: 1,
          justifyContent:'center',
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
          Bienvenue Au{"\n"}Centre De Formation{"\n"}Hajer Ben Hamouda
        </Text>
        <Text
          style={{
            fontFamily: "Roboto-Regular",
            color: COLORS.lightGray,
            fontSize: 16,
            textAlign: "center",
            marginVertical: 10,
            textTransform: "capitalize",
            lineHeight: 23,
            marginBottom: 0,
          }}
        >
          Découvrez Les meilleures recettes délicieuses, savoureuses et
          rigoureusement sélectionnées pour vous.
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
              width: 28,
              backgroundColor: COLORS.primary,
              borderRadius: 3,
              marginRight: 8,
            }}
          />
          <View
            style={{
              height: 6,
              width: 6,
              backgroundColor: COLORS.secondary,
              borderRadius: 3,
              
            }}
          />
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate("onBoardScreen2")}
          activeOpacity={0.8}
          style={{ ...gs.btnContainer }}
        >
          <Text style={gs.btnTitle}>Suivant</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};


export default OnBoardScreen;
