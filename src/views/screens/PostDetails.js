import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import { COLORS, gs } from "../../styles";
import Video from "react-native-video";
import Avatar from "../components/Avatar";
import comments from "../../consts/comments";

const PostDetails = ({ navigation, route }) => {
  const post = route.params;
  const [like, setLike] = useState(false);
  return (
    <SafeAreaView style={{ ...gs.container, paddingVertical: 20 }}>
      <TouchableOpacity
        style={{
          ...gs.screenPadding,
          alignSelf: "flex-start",
          marginVertical: 20,
        }}
      >
        <AntDesign
          name="arrowleft"
          size={25}
          color={COLORS.dark}
          onPress={() => navigation.goBack()}
        />
      </TouchableOpacity>
      <View style={{ backgroundColor: COLORS.white }}>
        <View
          style={{ ...gs.rowCenter, ...gs.screenPadding, marginVertical: 10 }}
        >
          <Avatar
            image={""}
            name="Hajer"
            surname="Ben Hammouda"
            imageStyle={{ borderRadius: 21 }}
            avatarStyle={{
              height: 42,
              width: 42,
              borderRadius: 21,
              marginRight: 10,
            }}
            letterSize={{ fontSize: 13 }}
          />
          <View>
            <Text style={{ fontSize: 13, color: COLORS.dark }}>
              Hajer Ben Hammouda
            </Text>
            <Text style={{ fontSize: 11, color: COLORS.lightGray }}>
              Il y'a 11 minutes
            </Text>
          </View>
        </View>
        <View style={{ ...gs.screenPadding, marginVertical: 10 }}>
          <Text style={{ fontSize: 16, color: COLORS.dark }}>{post.main}</Text>
        </View>

        {post.image !== "" && (
          <View style={{ height: 300, marginVertical: 10 }}>
            <Image
              style={gs.image}
              source={{
                uri: post.image,
              }}
            />
          </View>
        )}
        {post.video !== "" && (
          <View style={{ height: 300, marginVertical: 10 }}>
            <Video
              controls={true}
              resizeMode="cover"
              posterResizeMode={"cover"}
              style={styles.backgroundVideo}
              source={{ uri: post.video }}
            />
          </View>
        )}
        <View
          style={{
            ...gs.rowCenter,
            ...gs.screenPadding,
            paddingBottom: 10,
            borderBottomWidth: 0.2,
          }}
        >
          <View style={{ ...gs.rowCenter, marginRight: 20 }}>
            <TouchableOpacity
              onPress={() => {
                setLike(!like);
              }}
            >
              <AntDesign
                size={20}
                color={like ? COLORS.primary : COLORS.dark}
                name={like ? "heart" : "hearto"}
              />
            </TouchableOpacity>
            <Text style={{ marginLeft: 5, fontSize: 12, color: COLORS.dark }}>
              10
            </Text>
          </View>

          <View style={{ ...gs.rowCenter }}>
            <AntDesign size={20} color={COLORS.dark} name="message1" />
            <Text style={{ marginLeft: 5, fontSize: 12, color: COLORS.dark }}>
              100
            </Text>
          </View>
        </View>
      </View>
      <View style={{ ...gs.screenPadding, marginTop: 20 }}>
        <Text style={{ fontSize: 15, color: COLORS.dark }}>Commentaires :</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  backgroundVideo: {
    height: "100%",
    width: "100%",
  },
});
export default PostDetails;
