import React, { useEffect, useState } from "react";
import { SafeAreaView, TouchableOpacity, FlatList } from "react-native";
import { COLORS, gs } from "../../styles";
import AntDesign from "react-native-vector-icons/AntDesign";
import FavoriteCard from "../components/FavoriteCard";
import all_favorites from "../../consts/subCategories";
const Favorites = ({ navigation }) => {
  const [favorites, setFavorites] = useState(all_favorites);
  useEffect(() => {
    // just for test
    setFavorites((prev) =>
      prev.filter(
        (item) =>
          item.id === 2 ||
          item.id === 1 ||
          item.id === 5 ||
          item.id === 3 ||
          item.id === 10 ||
          item.id === 4 ||
          item.id === 6
      )
    );
  }, []);

  const deleteFavorite = (id) => {
    setFavorites((prev) => prev.filter((item) => item.id !== id));
  };
  return (
    <SafeAreaView
      style={{ ...gs.container, ...gs.screenPadding, paddingTop: 40 }}
    >
      <TouchableOpacity
        style={{ marginTop: 10, alignSelf: "flex-start", marginBottom: 20 }}
      >
        <AntDesign
          name="arrowleft"
          size={30}
          color={COLORS.dark}
          onPress={() => navigation.goBack()}
        />
      </TouchableOpacity>
      <FlatList
        columnWrapperStyle={{ justifyContent: "space-between", paddingTop: 20 }}
        showsVerticalScrollIndicator={false}
        numColumns={2}
        data={favorites}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <FavoriteCard
            navigation={navigation}
            key={item.id}
            subCategory={item}
            deleteFavorite={deleteFavorite}
          />
        )}
      />
    </SafeAreaView>
  );
};

export default Favorites;
