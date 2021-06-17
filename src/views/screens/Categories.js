import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { COLORS, gs } from "../../styles";
import CategoriesFilterList from "../components/CategoriesFilterList";
import CategoryCard from "../components/CategoryCard";
import all_categories from "../../consts/categories";

const Categories = ({ navigation }) => {
  const [categories, setCategories] = React.useState(all_categories);

  return (
    <SafeAreaView
      style={{ ...gs.container, paddingHorizontal: 22, paddingTop: 30 }}
    >
      <View style={gs.rowBetween}>
        <View>
          <Text style={gs.title}>Categories</Text>
          <Text style={gs.subTitle}>
            Découvrir les categories des nos cours
          </Text>
        </View>
        <TouchableOpacity>
          <View
            style={{
              ...gs.center,
              backgroundColor: COLORS.dark,
              height: 40,
              width: 40,
              borderRadius: 15,
            }}
          >
            <Icon name="search" color={COLORS.white} size={20} />
          </View>
        </TouchableOpacity>
      </View>

      <CategoriesFilterList categories={categories} />
      <FlatList
        showsVerticalScrollIndicator={false}
        numColumns={1}
        data={categories}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <CategoryCard category={item} navigation={navigation} />
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});
export default Categories;
