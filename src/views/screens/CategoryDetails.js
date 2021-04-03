import React, { useEffect,useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ImageBackground,
  ScrollView,
  StatusBar,
} from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import { COLORS, gs } from "../../styles";
import SubCategoryCard from "../components/SubCategoryCard";
import all_comments from "../../consts/comments";
import all_subCategroris from "../../consts/subCategories";

const CategoryDetails = ({ navigation, route }) => {
  const category = route.params;
  const [favorite, setFavorite] = useState(false);
  const [subCategories, setSubCategories] = useState(all_subCategroris);

  useEffect(() => {
    setSubCategories((prev) =>
      prev.filter((item) => item.category === category.id)
    );
  }, []);
  return (
    <View style={gs.container}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />

      <ImageBackground
        style={{ width: "100%", height: 270 }}
        source={{ uri: category.image }}
      >
        <SafeAreaView style={{ marginTop: 5 }}>
          <View style={{ ...gs.rowBetween, padding: 30, alignItems: "center" }}>
            <View style={gs.rowCenter}>
              <AntDesign
                name="arrowleft"
                size={25}
                color={COLORS.white}
                onPress={() => navigation.goBack()}
              />
              <Text
                style={{
                  marginLeft: 10,
                  color: COLORS.white,
                  fontFamily: "Roboto-Bold",
                }}
              >
                Catégories
              </Text>
            </View>
            <AntDesign
              name="heart"
              size={25}
              color={favorite ? COLORS.primary : COLORS.white}
              onPress={() => {
                setFavorite((prev) => !prev);
              }}
            />
          </View>
        </SafeAreaView>
      </ImageBackground>

      <ScrollView style={styles.container}>
        <View style={styles.detailsContainer}>
          <View style={styles.descriptionSection}>
            <Text style={{ ...gs.title, fontSize: 19 }}>{category.name}</Text>
            <Text style={{ ...gs.subTitle, marginTop: 10, fontSize: 15 }}>
              {category.description}
            </Text>
          </View>

          <View>
            <Text style={{ ...gs.title, fontSize: 15 }}>Formations</Text>
            {subCategories.length === 0 && (
              <Text
                style={{
                  fontFamily: "Roboto-Medium",
                  fontSize: 14,
                  color: COLORS.gray,
                  marginTop:10
                }}
              >
                Pas de fomations encore pour cette categorie
              </Text>
            )}
            {subCategories.map((item) => {
              return (
                <SubCategoryCard
                  navigation={navigation}
                  key={item.id}
                  subCategory={item}
                />
              );
            })}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: COLORS.bgColor,
    flex: 1,
    marginTop: -20,
  },
  detailsContainer: {
    flex: 1,
    marginTop: -25,
    paddingHorizontal: 30,
    paddingVertical: 30,
  },
  descriptionSection: {
    marginVertical: 30,
  },
});
export default CategoryDetails;
