import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { COLORS, gs } from "../../styles";
import AntDesign from "react-native-vector-icons/AntDesign";

const FavoriteCard = ({ navigation, subCategory,deleteFavorite }) => {
  return (
      <TouchableOpacity onPress={() => navigation.navigate("subCategoryDetails", subCategory)}>
    <View style={styles.container}>
      <View style={{ height: "100%", width: "30%",borderRadius:10 }}>
        <Image source={{ uri: subCategory.image }} style={{...gs.image,borderRadius:15}} />
      </View>
      <View style={{flex:1,paddingHorizontal:10}}>
        <Text style={{fontFamily:'Roboto-Medium', color:COLORS.dark}}>{subCategory.name}</Text>
      </View>
      <View >
      <TouchableOpacity onPress={()=>deleteFavorite(subCategory.id)}>
      <AntDesign size={20} color={COLORS.primary} name='closecircle' /></TouchableOpacity>
    </View></View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 100,
    width: "100%",
    backgroundColor: COLORS.white,
    borderRadius: 15,
    marginBottom: 10,
    padding: 10,
    flexDirection: "row",
  },
});
export default FavoriteCard;
