import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableHighlight,
  TouchableOpacity,
} from "react-native";
import { COLORS, gs } from "../../styles";
import { Rating} from "react-native-ratings";

const CategoryCard = ({ navigation, category }) => {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("categoryDetails", category)}
    >
      <View style={styles.cardContainer}>
        <View style={{ height: 150 }}>
          <Image style={styles.cardImage} source={{ uri: category.image }} />
        </View>
        <View style={styles.detailsContainer}>
          <View>
            <Text style={{ ...gs.title, fontSize: 16 }}>{category.name}</Text>
            <Text style={{ ...gs.subTitle, marginTop: 2, fontSize: 13 }}>
              {category.subDescription}
            </Text>
          </View>
          <View style={{ alignItems: "flex-end" }}>
            <Rating
              ratingBackgroundColor={COLORS.lightGray}
              ratingColor={COLORS.primary}
              type="custom"
              startingValue={category.rate}
              ratingCount={5}
              readonly={true}
              imageSize={12}
              tintColor={COLORS.white}
            />
            <Text style={{ ...gs.subTitle, marginTop: 2, fontSize: 12 }}>
              {category.posts} postes
            </Text>
            <Text style={{ ...gs.subTitle, marginTop: 2, fontSize: 12 }}>
              {category.members} membres
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    backgroundColor: COLORS.white,
    marginBottom: 25,
    elevation: 1,
  },
  cardImage: {
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    ...gs.image,
  },
  detailsContainer: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    ...gs.rowBetween,
  },
});
export default CategoryCard;
