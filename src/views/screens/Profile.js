import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import { COLORS, gs } from "../../styles";
import AntDesign from "react-native-vector-icons/AntDesign";
import Avatar from "../components/Avatar";

const Profile = ({ navigation }) => {
  const imageUri =
    "https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixid=MXwxMjA3fDB8MHxzZWFyY2h8N3x8d29tYW58ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60";

  return (
    <SafeAreaView
      style={{ ...gs.container, ...gs.screenPadding, paddingVertical: 40 }}
    >
      <View>
        <Avatar
          image={imageUri}
          name="Hajer"
          surname="Ben Hammouda"
          imageStyle={{ borderRadius: 150 / 2 }}
          avatarStyle={{
            height: 150,
            width: 150,
            borderRadius: 150 / 2,
            alignSelf: "center",
          }}
          letterSize={{ fontSize: 30 }}
        />
        <Text
          style={{
            fontFamily: "Roboto-Medium",
            fontSize: 27,
            color: COLORS.dark,
            textAlign: "center",
            marginTop: 10,
            letterSpacing: 0.5,
          }}
        >
          Samanta Doe
        </Text>
      </View>
      <View style={{ marginTop: 50 }}>
        <TouchableOpacity onPress={() => navigation.navigate("favorites")}>
          <View style={styles.card}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <AntDesign name="hearto" color={COLORS.primary} size={20} />
              <Text
                style={{
                  color: COLORS.dark,
                  marginLeft: 10,
                  fontFamily: "Roboto-Medium",
                  fontSize: 17,
                }}
              >
                Voir Favoris
              </Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("profileUpdate")}>
          <View style={styles.card}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <AntDesign name="edit" color={COLORS.primary} size={20} />
              <Text
                style={{
                  color: COLORS.dark,
                  marginLeft: 10,
                  fontFamily: "Roboto-Medium",
                  fontSize: 17,
                }}
              >
                Modifier Profile
              </Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.card}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <AntDesign name="poweroff" color={COLORS.primary} size={20} />
              <Text
                style={{
                  color: COLORS.dark,
                  marginLeft: 10,
                  fontFamily: "Roboto-Medium",
                  fontSize: 17,
                }}
              >
                Déconnecter
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: COLORS.white,
    height: 55,
    borderRadius: 10,
    justifyContent: "center",
    paddingHorizontal: 10,
    marginBottom: 8,
  },
});
export default Profile;
