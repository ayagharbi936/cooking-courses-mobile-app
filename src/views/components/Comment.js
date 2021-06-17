import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { COLORS, gs } from "../../styles";
import { Rating } from "react-native-ratings";
import Avatar from "./Avatar";

const Comment = ({ comment }) => {
  return (
    <View style={styles.container}>
      <View>
        <View style={{ ...gs.rowBetween, alignItems: "center" }}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Avatar
              image={comment.userImage}
              name={comment.userName}
              surname={comment.userName}
              imageStyle={{ borderRadius: 35 / 2 }}
              avatarStyle={{ height: 35, width: 35, borderRadius: 35 / 2, marginRight: 10 }}
              letterSize={{ fontSize: 10 }}
            />

            <Text
              style={{ color: COLORS.dark, fontSize: 13, fontWeight: "700" }}
            >
              {comment.userName}
            </Text>
          </View>
          <View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "flex-end",
              }}
            >
              <Rating
                ratingColor={COLORS.primary}
                type="custom"
                startingValue={1}
                ratingCount={1}
                readonly={true}
                imageSize={13}
                tintColor={COLORS.bgColor}
              />
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: "bold",
                  color: COLORS.gray,
                }}
              >
                {comment.rate}
              </Text>
            </View>
            <Text
              style={{ color: COLORS.gray, fontSize: 12, fontWeight: "700" }}
            >
              {comment.time}
            </Text>
          </View>
        </View>
        <Text
          style={{
            marginLeft: 45,
            color: COLORS.lightGray,
            fontSize: 14,
            marginTop: 5,
          }}
        >
          {comment.comment}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { marginVertical: 10 },
});
export default Comment;
