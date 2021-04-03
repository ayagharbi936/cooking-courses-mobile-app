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
  TextInput,
  Modal,
  StatusBar,
} from "react-native";
import { Rating } from "react-native-ratings";

import AntDesign from "react-native-vector-icons/AntDesign";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { COLORS, gs } from "../../styles";
import Comment from "../components/Comment";
import PayModal from "../components/PayModal";
import all_comments from "../../consts/comments"
const SubCategoryDetails = ({ navigation, route }) => {
  const subCategory = route.params;
  const [favorite, setFavorite] = useState(false);
  const [payModalVisible, setPayModalVisible] = useState(false);

  const [comments, setComments] = useState(all_comments);

  return (
    <SafeAreaView style={gs.container}>
       <StatusBar  translucent backgroundColor={payModalVisible ? COLORS.bgColor: 'transparent'} barStyle="dark-content" />

      <ImageBackground
        style={{ width: "100%", height: 270 }}
        source={{ uri: subCategory.image }}
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
                  fontFamily:'Roboto-Bold'
                }}
              >
                Formations
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

      <Modal transparent visible={payModalVisible}>
        <PayModal setPayModalVisible={setPayModalVisible} />
      </Modal>
      <ScrollView>
        <View style={styles.detailsContainer}>
          <View style={styles.descriptionSection}>
            <View style={{ ...gs.rowBetween, alignItems: "center" }}>
              <Text style={{ ...gs.title, fontSize: 19 }}>
                {subCategory.name}
              </Text>
              <Rating
                ratingBackgroundColor={COLORS.lightGray}
                ratingColor={COLORS.primary}
                type="custom"
                startingValue={subCategory.rate}
                ratingCount={5}
                readonly={true}
                imageSize={13}
                tintColor={COLORS.bgColor}
              />
            </View>
            <View>
              <Text style={{ ...gs.subTitle, marginTop: 10, fontSize: 15 }}>
                {subCategory.description}
              </Text>
            </View>
          </View>
          <View
            style={{
              ...gs.rowBetween,
              marginVertical: 10,
              alignItems: "center",
            }}
          >
            <View>
              <Text
                style={{ color: COLORS.dark, fontSize: 15, fontWeight: "bold" }}
              >
                Prix
              </Text>
              <Text
                style={{ color: COLORS.dark, fontSize: 17, fontWeight: "bold" }}
              >
                {subCategory.price} DT
              </Text>
            </View>
            <TouchableOpacity style={gs.roundIcon}>
              <AntDesign name="staro" size={20} color={COLORS.primary} />
            </TouchableOpacity>
            <TouchableOpacity style={gs.roundIcon}>
              <AntDesign name="message1" size={20} color={COLORS.primary} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setPayModalVisible(true)}
              activeOpacity={0.8}
              style={{ ...gs.btnContainer, height: 40, paddingHorizontal: 10 }}
            >
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Text
                  style={{
                    ...gs.btnTitle,
                    fontSize: 12,
                    letterSpacing: 0,
                    marginRight: 10,
                    fontWeight: "bold",
                  }}
                >
                  Payer le cours
                </Text>
                <View style={{ ...gs.roundIcon, height: 25, width: 25 }}>
                  <AntDesign
                    name="shoppingcart"
                    size={17}
                    color={COLORS.primary}
                  />
                </View>
              </View>
            </TouchableOpacity>
          </View>
          <View
            style={{ flexDirection: "row", marginTop: 5, alignItems: "center" }}
          >
            <AntDesign name="clockcircleo" size={17} color={COLORS.primary} />
            <Text
              style={{
                color: COLORS.primary,
                fontSize: 14,
                fontWeight: "bold",
              }}
            >
              {" "}
              {subCategory.session} séance(s)
            </Text>
          </View>
          <View style={{ height: "100%", marginTop: 20 }}>
            <Text
              style={{
                fontSize: 15,
                fontWeight: "bold",
                color: COLORS.dark,
              }}
            >
              Commentaires {"   "}
              <Text>{comments.length}</Text>
            </Text>

            {comments.map((item) => {
              return <Comment key={item.id} comment={item} />;
            })}
          </View>
        </View>
      </ScrollView>
      <View style={{ flexDirection: "row" }}>
        <TextInput
          style={{
            fontSize: 17,
            flex: 1,
            backgroundColor: COLORS.white,
            paddingVertical: 17,
            paddingHorizontal: 25,
          }}
          placeholder="Ecrire un commentaire ..."
        />
        <View
          style={{
            ...gs.center,
            backgroundColor: COLORS.primary,
            paddingHorizontal: 25,
            paddingVertical: 17,
          }}
        >
          <FontAwesome name="long-arrow-right" size={20} color={COLORS.white} />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  detailsContainer: {
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: COLORS.bgColor,
    flex: 1,
    marginTop: -25,
    paddingHorizontal: 30,
    paddingVertical: 20,
  },
  descriptionSection: {
    marginTop: 30,
  },
});
export default SubCategoryDetails;
