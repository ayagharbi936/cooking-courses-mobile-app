import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { COLORS, gs } from "../../styles";
import { Rating } from "react-native-ratings";

const Comment = ({ comment }) => {
  return (
    <View style={styles.container}>
      <View>
        <View style={{ ...gs.rowBetween, alignItems: "center" }}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View
              style={{
                height: 35,
                width: 35,
                borderRadius: 20,
                marginRight: 10,
              }}
            >
              <Image
                source={{ uri: comment.userImage }}
                style={{ borderRadius: 20, ...gs.image }}
              />
            </View>

            <Text
              style={{ color: COLORS.dark, fontSize: 13, fontWeight: "700" }}
            >
              {comment.userName}
            </Text>
          </View>
          <View >
          <Text style={{alignSelf:'flex-end',fontSize:15,fontWeight:'bold',color:COLORS.gray}}>
          <Rating
              
              ratingColor={COLORS.primary}
              type="custom"
              startingValue={1}
              ratingCount={1}
              readonly={true}
              imageSize={13}
              tintColor={COLORS.bgColor}
            />{' '}{comment.rate}</Text>
          <Text style={{ color: COLORS.gray, fontSize: 12, fontWeight: "700" }}>
            {comment.time}
          </Text></View>
        </View>
        <Text style={{ marginLeft: 45, color: COLORS.lightGray, fontSize: 14,marginTop:5 }}>
          {comment.comment}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {marginVertical:10},
});
export default Comment;
