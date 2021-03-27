import React from "react";
import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
  FlatList,
  TextInput,
} from "react-native";
import { Rating } from "react-native-ratings";

import AntDesign from "react-native-vector-icons/AntDesign";
import FontAwesome from "react-native-vector-icons/FontAwesome";

import { COLORS, gs } from "../../styles";
import Comment from "../components/Comment";
import SubCategory1 from "../components/SubCategory1";

const CategoryDetails = ({ navigation, route }) => {
  const category = route.params;
  const [favorite, setFavorite] = useState(false);
  const [comments, setComments] = useState([
    {
      id: 0,
      userName: "Jackie Black",
      userImage: "https://randomuser.me/api/portraits/women/2.jpg",
      time: "19/04/2021 19:04",
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consectetur est.",
    },
    {
      id: 1,
      userName: "Joanne Lowe",
      userImage: "https://randomuser.me/api/portraits/women/84.jpg",
      time: "05/02/2021 10:04",
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consectetur est.",
    },
    {
      id: 2,
      userName: "Pedro Neal",
      userImage: "https://randomuser.me/api/portraits/men/4.jpg",
      time: "05/07/2020 20:54",
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consectetur est.",
    },
    {
      id: 3,
      userName: "Pedro Neal",
      userImage: "https://randomuser.me/api/portraits/men/4.jpg",
      time: "05/07/2020 20:54",
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consectetur est.",
    },
    {
      id: 4,
      userName: "Pedro Neal",
      userImage: "https://randomuser.me/api/portraits/men/4.jpg",
      time: "05/07/2020 20:54",
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consectetur est.",
    },
  ]);

  const [subCategories, setSubCategories] = React.useState([
    {
      id: 2,
      name: "Fromation Cheesecake",
      image:
        "https://images.unsplash.com/photo-1605141345325-593a995497b8?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTgxfHxjaGVlc2VjYWtlfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      rate: 3,
      posts: 10,
      session: 2,
      members: 15,
      price: 100,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consectetur est odio, vel accumsan est malesuada nec. In eu purus magna. Sed euismod in dui in finibus. Pellentesque ut diam ac neque pharetra ultricies ac non sapien. Nulla blandit metus tellus, vel elementum erat varius sed. Sed accumsan felis justo, pretium pellentesque dui fermentum in..",
      subDescription: "Lorem ipsum dolor sit amet",
    },
    {
      id: 1,
      name: "Fromation Maccarons",
      image:
        "https://images.unsplash.com/photo-1558326567-98ae2405596b?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8bWFjYXJvbnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      rate: 2.5,
      posts: 7,
      session: 3,
      members: 4,
      price: 150,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consectetur est odio, vel accumsan est malesuada nec. In eu purus magna. Sed euismod in dui in finibus. Pellentesque ut diam ac neque pharetra ultricies ac non sapien. Nulla blandit metus tellus, vel elementum erat varius sed. Sed accumsan felis justo, pretium pellentesque dui fermentum in..",
      subDescription: "Lorem ipsum dolor sit amet",
    },

    {
      id: 3,
      name: "Formation Tartes et tartelette",
      image:
        "https://images.unsplash.com/photo-1558231728-b4e138755840?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTh8fHRhcnR8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      rate: 4,
      posts: 5,
      session: 1,
      members: 10,
      price: 140,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consectetur est odio, vel accumsan est malesuada nec. In eu purus magna. Sed euismod in dui in finibus. Pellentesque ut diam ac neque pharetra ultricies ac non sapien. Nulla blandit metus tellus, vel elementum erat varius sed. Sed accumsan felis justo, pretium pellentesque dui fermentum in..",
      subDescription: "Lorem ipsum dolor sit amet",
    },
  ]);
  return (
    <View style={gs.container}>
      <ImageBackground
        style={{ width: "100%", height: 270 }}
        source={{ uri: category.image }}
      >
        <SafeAreaView style={{marginTop:5}}>
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
                  fontWeight: "bold",
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
            <Text style={{ ...gs.subTitle, marginTop: 10,fontSize:15 }}>
              {category.description}
            </Text>
          </View>

          <View>
            <Text style={{ ...gs.title, fontSize: 15 }}>Formations</Text>

            {subCategories.map((item) => {
              return (
                <SubCategory1
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
  container:{
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
