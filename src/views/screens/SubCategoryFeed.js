import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { COLORS, gs } from "../../styles";
import ChefPost from "../components/ChefPost";
import PostItem from "../components/PostItem";
import all_posts from "../../consts/posts";
const SubCategoryFeed = ({ route, navigation }) => {
  const subCategory = route.params;
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    setPosts(all_posts.filter((item) => item.subCategory === subCategory.id));
  }, []);

  return (
    <SafeAreaView style={{ ...gs.container, paddingTop: 40 }}>
      <View style={{ ...gs.rowBetween, ...gs.screenPadding, marginBottom: 20 }}>
        <View>
          <Text style={gs.title}>Formation</Text>
          <Text style={gs.subTitle}>Bienvenue au feed de {subCategory.name}</Text>
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
      <ScrollView>
        <ChefPost />

        {posts.map((item) => (
          <PostItem post={item} key={item.id} navigation={navigation} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});
export default SubCategoryFeed;
