import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
} from "react-native";
import { COLORS, gs } from "../../styles";
import AntDesign from "react-native-vector-icons/AntDesign";
const PostModal = ({ postValue, setPostValue, setPostModalVisible }) => {
  return (
    <SafeAreaView style={{ ...gs.container, paddingVertical: 20 }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            ...gs.screenPadding,
            marginTop: 10,
            marginBottom:30,
            ...gs.rowBetween,
            alignItems: "center",
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <TouchableOpacity>
              <AntDesign
                name="arrowleft"
                size={30}
                color={COLORS.dark}
                onPress={() => setPostModalVisible(false)}
              />
            </TouchableOpacity>
            <Text
              style={{
                marginLeft: 10,
                fontFamily: "Roboto-Medium",
                color: COLORS.dark,
                fontSize: 17,
              }}
            >
              Créer un post
            </Text>
          </View>
          <TouchableOpacity>
            <AntDesign
              name="check"
              size={30}
              color={COLORS.primary}
              onPress={() => setPostModalVisible(false)}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            borderWidth: 0.5,
            borderColor: COLORS.lightGray,
            paddingTop: 10,
            height: 150,
          }}
        >
          <ScrollView style={{ ...gs.screenPadding }}>
            <TextInput
              multiline
              style={{ fontSize: 17, color: COLORS.dark }}
              placeholder="Écrire un post..."
              onChangeText={(value) => setPostValue(value)}
              value={postValue}
            />
          </ScrollView>
        </View>
        <TouchableOpacity>
          <View
            style={{
              borderBottomWidth: 0.5,
              borderColor: COLORS.lightGray,
              ...gs.screenPadding,
              flexDirection: "row",
              paddingVertical: 15,
              alignItems: "center",
            }}
          >
            <AntDesign size={23} color={COLORS.primary} name="picture" />
            <Text style={{ fontSize: 17, color: COLORS.dark, marginLeft: 10 }}>
              Photo
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View
            style={{
              borderBottomWidth: 0.5,
              borderColor: COLORS.lightGray,
              ...gs.screenPadding,
              flexDirection: "row",
              paddingVertical: 15,
              alignItems: "center",
            }}
          >
            <AntDesign size={23} color={COLORS.primary} name="videocamera" />
            <Text style={{ fontSize: 17, color: COLORS.dark, marginLeft: 10 }}>
              Vidéo
            </Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default PostModal;
