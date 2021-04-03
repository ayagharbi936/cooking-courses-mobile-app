import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { COLORS, gs } from "../../styles";
import AntDesign from "react-native-vector-icons/AntDesign";
import { Rating } from "react-native-ratings";

const SubCategoryCard = ({ navigation, subCategory }) => {
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
        <View style={{ flexDirection: "row",justifyContent:'space-between' }}>
          <Text
            style={{
              color: COLORS.dark,
              fontSize: 16,
              fontFamily:'Roboto-Medium',
              flex: 1,
            }}
          >
            {subCategory.name}
          </Text>
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
        <View style={{ flexDirection: "row",alignItems:'center',justifyContent:'space-between' }}>
          <View>
            <Text style={{ color: COLORS.lightGray,fontFamily:'Roboto-Regular' }}>
              {subCategory.session} séance
            </Text>
            <Text
              style={{
                color: COLORS.primary,
                fontSize: 16,
                fontFamily:'Roboto-Medium',
                marginTop: 5,
              }}
            >
              {subCategory.price} DT
            </Text>
          </View>
          <View
            style={{
              ...gs.btnContainer,
              height: 20,
              width: 20,
              alignSelf: "flex-end",
            }}
          >
            <AntDesign name="arrowright" size={13} color={COLORS.white} />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,

    elevation: 7,
    flex: 1,
    flexDirection: "row",
    backgroundColor: COLORS.bgColor,
    borderRadius: 10,
    width: "100%",
  },
  imageContainer: {
    width: 100,
  },
  descriptionContainer: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
});
export default SubCategoryCard;
