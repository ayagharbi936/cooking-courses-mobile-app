import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import { COLORS, gs } from "../../styles";

const CoursesButton = ({
  setPayModalVisible,
  isPaid,
  navigation,
  subCategory,
}) => {
  return isPaid ? (
    <TouchableOpacity
      onPress={() => navigation.navigate("subCategoryFeed", subCategory)}
      activeOpacity={0.8}
      style={{
        ...gs.btnContainer,
        height: 40,
        paddingHorizontal: 10,
        backgroundColor: COLORS.green,
      }}
    >
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Text
          style={{
            ...gs.btnTitle,
            fontSize: 12,
            letterSpacing: 0,
            marginRight: 10,
            fontWeight: "bold",
          }}
        >
          Accéder au cours
        </Text>
        <View style={{ ...gs.roundIcon, height: 25, width: 25 }}>
          <AntDesign name="check" size={17} color={COLORS.green} />
        </View>
      </View>
    </TouchableOpacity>
  ) : (
    <TouchableOpacity
      onPress={() => setPayModalVisible(true)}
      activeOpacity={0.8}
      style={{ ...gs.btnContainer, height: 40, paddingHorizontal: 10 }}
    >
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Text
          style={{
            ...gs.btnTitle,
            fontSize: 12,
            letterSpacing: 0,
            marginRight: 10,
            fontWeight: "bold",
          }}
        >
          Payer le cours
        </Text>
        <View style={{ ...gs.roundIcon, height: 25, width: 25 }}>
          <AntDesign name="shoppingcart" size={17} color={COLORS.primary} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CoursesButton;
