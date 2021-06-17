import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { COLORS, gs } from "../../styles";

const Avatar = ({ image, name, surname,imageStyle, avatarStyle, letterSize }) => {
  return (
    <View style={[styles.container, avatarStyle, !image && gs.center]}>
      <Image
        style={[styles.image, !image && { display: "none" }, imageStyle]}
        source={{ uri: image ? image : "notfound" }}
      />

      {!image && (
        <Text style={[letterSize, styles.letters]}>
          {name && name.charAt(0)} {surname && surname.charAt(0)}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 25,
    backgroundColor: COLORS.secandaryBgColor,
  },
  image: {
    ...gs.image,
   
  },
  letters: {
    fontFamily: "Roboto-Medium",
    color: COLORS.primary,
    textTransform: "uppercase",
  },
});
export default Avatar;
