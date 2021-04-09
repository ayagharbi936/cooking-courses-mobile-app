import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from "react-native";
import { COLORS, gs } from "../../styles";
import CategoryCard from "../components/CategoryCard";
import SubCategoryCard_Horizontal from "../components/SubCategoryCard_Horizontal";
import all_categories from "../../consts/categories";
import all_subCategories from "../../consts/subCategories";
import Ionicons from "react-native-vector-icons/Ionicons";

const Home = ({ navigation }) => {
  const [categories, setCategories] = React.useState(all_categories);
  const [subCategories, setSubCategories] = React.useState(all_subCategories);

  const imageUri =
    "https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixid=MXwxMjA3fDB8MHxzZWFyY2h8N3x8d29tYW58ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60";
  return (
    <ScrollView>
      <SafeAreaView style={{ ...gs.container,...gs.screenPadding }}>
        <View style={{ marginTop: 40, ...gs.rowBetween, alignItems: "center" }}>
          <View
            style={[
              {
                height: 50,
                width: 50,
                borderRadius: 25,
                backgroundColor: COLORS.primary,
              },
              !imageUri && gs.center,
            ]}
          >
            <Image
              style={[
                {
                  ...gs.image,
                  borderRadius: 25,
                  display: "none",
                },
                imageUri && { display: "flex" },
              ]}
              source={{ uri: imageUri ? imageUri : "notfound" }}
            />

            {!imageUri && (
              <Text
                style={{
                  fontFamily: "Roboto-Medium",
                  color: COLORS.white,
                  fontSize: 17,
                }}
              >
                SA
              </Text>
            )}
          </View>
          <TouchableOpacity>
            <View style={{position:'relative'}}>
              <Ionicons
                name="notifications-outline"
                size={29}
                color={COLORS.dark}
              />
              <View style={{position:'absolute',backgroundColor:COLORS.primary,height:7,width:7,borderRadius:7/2,top:5,left:5}} />
            </View>
          </TouchableOpacity>
        </View>

        <View style={{ marginTop: 20, marginBottom: 5 }}>
          <Text
            style={{
              color: COLORS.dark,
              fontFamily: "Roboto-Regular",
              fontSize: 25,
            }}
          >
            Salut,{" "}
            <Text
              style={{ fontFamily: "Roboto-Medium", color: COLORS.primary }}
            >
              Samanta!
            </Text>
          </Text>
        </View>
        <Text
          style={{
            fontSize: 15,
            color: COLORS.lightGray,
            fontFamily: "Roboto-Regular",
          }}
        >
          Restez branché(e) pour decouvrir nos nouvelles formations.
        </Text>
        <View style={{ marginVertical: 30 }}>
          <Text
            style={{
              fontSize: 17,
              fontFamily: "Roboto-Medium",
              color: COLORS.dark,
            }}
          >
            Formations à la une
          </Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {subCategories
              .filter((item) => item.id === 1 || item.id === 8 || item.id === 5)
              .map((item) => {
                return (
                  <SubCategoryCard_Horizontal
                    navigation={navigation}
                    key={item.id}
                    subCategory={item}
                  />
                );
              })}
          </ScrollView>
        </View>
        <View style={{ paddingBottom: 20 }}>
          <View
            style={{ ...gs.rowBetween, alignItems: "center", marginBottom: 15 }}
          >
            <Text
              style={{
                fontSize: 17,
                fontFamily: "Roboto-Medium",
                color: COLORS.dark,
              }}
            >
              Nos Categories
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate("categories")}>
              <Text style={{ textAlign: "center", color: COLORS.gray }}>
                Voir plus
              </Text>
            </TouchableOpacity>
          </View>
          {categories.map((item) => {
            return (
              <CategoryCard
                key={item.id}
                category={item}
                navigation={navigation}
              />
            );
          })}
          <TouchableOpacity
            onPress={() => navigation.navigate("categories")}
            style={{
              borderWidth: 1,
              borderColor: COLORS.gray,
              padding: 10,
              width: 100,
              alignSelf: "center",
            }}
          >
            <Text style={{ textAlign: "center", color: COLORS.gray }}>
              Voir plus
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default Home;
