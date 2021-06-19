import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { COLORS, gs } from "../../styles";
import Avatar from "./Avatar";
import AntDesign from "react-native-vector-icons/AntDesign";
import Video from "react-native-video";

const PostItem = ({ post, navigation }) => {
  const [like, setLike] = useState(false);

  return (
    <View style={styles.cardContainer}>
      <View style={{ ...gs.rowCenter, ...gs.screenPadding }}>
        <Avatar
          image={""}
          name="Hajer"
          surname="Ben Hammouda"
          imageStyle={{ borderRadius: 20 }}
          avatarStyle={{
            height: 40,
            width: 40,
            borderRadius: 20,
            marginRight: 10,
          }}
          letterSize={{ fontSize: 12 }}
        />
        <View>
          <Text style={{ fontSize: 12, color: COLORS.dark }}>
            Hajer Ben Hammouda
          </Text>
          <Text style={{ fontSize: 10, color: COLORS.lightGray }}>
            Il y'a 11 minutes
          </Text>
        </View>
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate("postDetails", post)}
      >
        <View style={{ ...gs.screenPadding, marginVertical: 10 }}>
          <Text style={{ fontSize: 14, color: COLORS.dark }}>
            {post.main.length > 130
              ? `${post.main.substring(0, 130)} ... `
              : post.main}
            {post.main.length > 130 && (
              <Text style={{ fontSize: 13, color: COLORS.lightGray }}>
                Voir plus
              </Text>
            )}
          </Text>
        </View>
      </TouchableOpacity>
      {post.image !== "" && (
        <View style={{ height: 170 }}>
          <Image
            style={styles.cardImage}
            source={{
              uri: post.image,
            }}
          />
        </View>
      )}
      {post.video !== "" && (
        <View style={{ height: 170 }}>
          <Video
            controls={true}
            resizeMode="cover"
            posterResizeMode={"cover"}
            style={styles.backgroundVideo}
            source={{ uri: post.video }}
          />
        </View>
      )}

      <View style={{ ...gs.rowCenter, ...gs.screenPadding, marginTop: 10 }}>
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
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: COLORS.white,
    marginVertical: 10,
    paddingVertical: 15,
    elevation: 1,
  },
  cardImage: {
    ...gs.image,
  },
  backgroundVideo: {
    height: "100%",
    width: "100%",
  },
});
export default PostItem;
