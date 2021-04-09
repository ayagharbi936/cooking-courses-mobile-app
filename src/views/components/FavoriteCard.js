import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
  ImageBackground,
} from "react-native";
import { COLORS, gs } from "../../styles";
import AntDesign from "react-native-vector-icons/AntDesign";

const width = Dimensions.get("screen").width / 2 - 30;
const FavoriteCard = ({ navigation, subCategory, deleteFavorite }) => {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("subCategoryDetails", subCategory)}
    >
      <ImageBackground
        style={{ width, height: width, marginBottom: 10 }}
        resizeMode="cover"
        imageStyle={{ borderRadius: 15 }}
        source={{ uri: subCategory.image }}
      >
        <View
          style={{
            backgroundColor: "rgba(0,0,0,0.5)",
            borderRadius: 15,
            flex: 1,
            paddingBottom: 25,
            paddingHorizontal: 10,
          }}
        >
         
          <View
            style={{
              ...gs.center,
              height: 27,
              width: 27,
              borderRadius: 27/2,
              backgroundColor: COLORS.primary,
              marginTop:-27/2,
            
            }}
          >
            <AntDesign size={10} color={COLORS.white} name="heart" />
          </View>
          <View style={{ alignSelf: "flex-end" }}>
            <TouchableOpacity onPress={() => deleteFavorite(subCategory.id)}>
              <AntDesign size={20} color={COLORS.white} name="close" />
            </TouchableOpacity>
          </View>
          <View
            style={{
              flex: 1,
              justifyContent: "flex-end",
            }}
          >
            <Text
              style={{
                fontFamily: "Roboto-Medium",
                color: COLORS.white,
                fontSize: 15,
              }}
            >
              {subCategory.name}
            </Text>
          </View>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default FavoriteCard;
