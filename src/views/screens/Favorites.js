import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { COLORS, gs } from "../../styles";
import AntDesign from "react-native-vector-icons/AntDesign";
import FavoriteCard from "../components/FavoriteCard";
import all_favorites from "../../consts/subCategories";
const Favorites = ({ navigation }) => {
  const [favorites, setFavorites] = useState(all_favorites);
  useEffect(() => {
    setFavorites((prev) =>
      prev.filter((item) => item.id === 3 || item.id === 10 || item.id === 6)
    );
  }, []);

  const deleteFavorite = (id) => {
    setFavorites((prev) => prev.filter((item) => item.id !== id));
  };
  return (
    <SafeAreaView
      style={{ ...gs.container, paddingHorizontal: 30, paddingVertical: 40 }}
    >
      <TouchableOpacity
        style={{ marginTop: 10, alignSelf: "flex-start", marginBottom: 40 }}
      >
        <AntDesign
          name="arrowleft"
          size={30}
          color={COLORS.dark}
          onPress={() => navigation.goBack()}
        />
      </TouchableOpacity>
      <ScrollView showsVerticalScrollIndicator={false}>
        {favorites.map((item) => {
          return (
            <FavoriteCard
              navigation={navigation}
              key={item.id}
              subCategory={item}
              deleteFavorite={deleteFavorite}
            />
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default Favorites;
