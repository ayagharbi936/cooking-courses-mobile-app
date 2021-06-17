import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Pressable,
  Modal,
  ScrollView,
} from "react-native";
import { COLORS, gs } from "../../styles";
import PostModal from "./PostModal";
import AntDesign from "react-native-vector-icons/AntDesign";
import Avatar from "./Avatar";

const ChefPost = () => {
  const [postModalVisible, setPostModalVisible] = useState(false);
  const [postValue, setPostValue] = useState("");

  return (
    <View style={styles.container}>
      <View style={gs.rowCenter}>
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

        <Text style={{ fontSize: 12 }}>Hajer Ben Hammouda</Text>
      </View>
      <TouchableOpacity>
        <View style={{ ...styles.btnContainer, marginVertical: 20 }}>
          <Text style={styles.btnTitle}>Commencer un direct</Text>
        </View>
      </TouchableOpacity>
      <View style={{ height: 50 }}>
        <ScrollView>
          <Pressable onPress={() => setPostModalVisible(true)}>
            <Text
              style={{
                fontFamily: "Roboto-Light",
                color: COLORS.gray,
                fontSize: 15,
              }}
            >
              {postValue ? postValue : "Écrire Votre Publication Ici ..."}
            </Text>
          </Pressable>
        </ScrollView>
      </View>
      <Modal visible={postModalVisible}>
        <PostModal
          postValue={postValue}
          setPostValue={setPostValue}
          setPostModalVisible={setPostModalVisible}
        />
      </Modal>
      <View style={{ ...gs.rowBetween, alignItems: "center" }}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View
            style={{
              backgroundColor: COLORS.white,
              height: 30,
              width: 30,
              borderRadius: 15,
              elevation: 5,
              ...gs.center,
            }}
          >
            <AntDesign size={18} color={COLORS.primary} name="videocamera" />
          </View>
          <Text style={{ fontSize: 15, color: COLORS.dark, marginLeft: 10 }}>
            Video
          </Text>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View
            style={{
              backgroundColor: COLORS.white,
              height: 30,
              width: 30,
              borderRadius: 15,
              elevation: 5,
              ...gs.center,
            }}
          >
            <AntDesign size={18} color={COLORS.primary} name="picture" />
          </View>
          <Text style={{ fontSize: 15, color: COLORS.dark, marginLeft: 10 }}>
            Image
          </Text>
        </View>
        <TouchableOpacity>
          <View style={{ ...styles.btnContainer, flexDirection: "row" }}>
            <Text style={styles.btnTitle}>Publier</Text>
            <AntDesign name="edit" color={COLORS.white} size={16} />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    ...gs.screenPadding,
    paddingVertical: 15,
  },
  btnContainer: {
    backgroundColor: COLORS.primary,
    ...gs.center,
    borderRadius: 10,
    alignSelf: "flex-start",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  btnTitle: { fontFamily: "Roboto-Regular", color: COLORS.white, fontSize: 13 },
});
export default ChefPost;
