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
            
            <Text style={{marginTop: 2, fontSize: 12,color:COLORS.primary, fontFamily:'Roboto-Medium' }}>
              {category.posts} Formations
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
