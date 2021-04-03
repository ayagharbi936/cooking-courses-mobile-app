import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { COLORS, gs } from "../../styles";
import AntDesign from "react-native-vector-icons/AntDesign";
import { Rating } from "react-native-ratings";
const { width } = Dimensions.get("screen");
const cardWidth = width / 2 - 50;
const SubCategoryCard_Horizontal = ({ navigation, subCategory }) => {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("subCategoryDetails", subCategory)}
      style={styles.container}
    >
      <View style={styles.imageContainer}>
        <Image
          style={{
            ...gs.image,
            borderRadius: 10,
          }}
          source={{ uri: subCategory.image }}
        />
      </View>
      <View style={styles.descriptionContainer}>
        <View>
          <Text
            style={{
              color: COLORS.dark,
              fontSize: 12,
              fontFamily: "Roboto-Medium",
              flex: 1,
            }}
          >
            {subCategory.name}
          </Text>
          <View style={{ backgroundColor: "red", alignSelf: "flex-start" }}>
            <Rating
              ratingBackgroundColor={COLORS.lightGray}
              ratingColor={COLORS.primary}
              type="custom"
              startingValue={subCategory.rate}
              ratingCount={5}
              readonly={true}
              imageSize={12}
              tintColor={COLORS.bgColor}
            />
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <View>
            <Text
              style={{
                marginTop: 5,
                fontSize: 12,
                color: COLORS.lightGray,
                fontFamily: "Roboto-Regular",
              }}
            >
              {subCategory.session} séance
            </Text>
            <Text
              style={{
                color: COLORS.primary,
                fontSize: 12,
                fontFamily: "Roboto-Bold",
                marginTop: 5,
              }}
            >
              {subCategory.price} DT
            </Text>
          </View>
          <View
            style={{
              alignSelf: "flex-end",
            }}
          >
            <Text style={{ fontSize: 12, color: COLORS.lightGray }}>
              Voir plus
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    marginRight: 10,
    elevation: 7,
    flex: 1,
    backgroundColor: COLORS.bgColor,
    borderRadius: 10,
    width: cardWidth,
  },
  imageContainer: {
    height: 80,
  },
  descriptionContainer: {
    paddingHorizontal: 10,
    paddingVertical: 8,
  },
});
export default SubCategoryCard_Horizontal;
