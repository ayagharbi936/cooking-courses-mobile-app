import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
import { COLORS, gs } from "../../styles";
import AntDesign from "react-native-vector-icons/AntDesign";
import Avatar from "../components/Avatar";

const ProfileUpdate = ({ navigation }) => {
  const imageUri =
    "https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixid=MXwxMjA3fDB8MHxzZWFyY2h8N3x8d29tYW58ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60";

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <SafeAreaView
        style={{ ...gs.container, ...gs.screenPadding, paddingVertical: 40 }}
      >
        <TouchableOpacity
          style={{ marginVertical: 10, alignSelf: "flex-start" }}
        >
          <AntDesign
            name="arrowleft"
            size={30}
            color={COLORS.dark}
            onPress={() => navigation.goBack()}
          />
        </TouchableOpacity>
        <TouchableOpacity style={{ position: "relative", marginBottom: 10 }}>
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

          <View
            style={{
              ...gs.center,
              backgroundColor: COLORS.white,
              height: 50,
              width: 50,
              borderRadius: 25,
              position: "absolute",
              bottom: 0,
              right: 150 / 2,
              elevation: 10,
            }}
          >
            <AntDesign size={25} color={COLORS.primary} name="camera" />
          </View>
        </TouchableOpacity>
        {imageUri && (
          <TouchableOpacity>
            <Text style={{ textAlign: "center", color: COLORS.gray }}>
              Supprimer La Photo
            </Text>
          </TouchableOpacity>
        )}
        <View style={{ marginTop: 10, flex: 1 }}>
          <View style={{ ...gs.inputContainer, marginBottom: 30 }}>
            <TextInput
              style={gs.textInput}
              defaultValue="Doe"
              placeholder="Nom"
            />
          </View>
          <View style={{ ...gs.inputContainer, marginBottom: 30 }}>
            <TextInput
              style={gs.textInput}
              defaultValue="Samanta"
              placeholder="Prénom"
            />
          </View>
          <View style={{ ...gs.inputContainer, marginBottom: 30 }}>
            <TextInput
              style={gs.textInput}
              defaultValue="SamntaDoe@gmail.com"
              placeholder="E-mail"
            />
          </View>
          <View style={{ ...gs.inputContainer, marginBottom: 30 }}>
            <TextInput
              style={gs.textInput}
              defaultValue="+216 12345678"
              placeholder="Téléphone"
            />
          </View>
          <View style={{ ...gs.inputContainer, marginBottom: 15 }}>
            <TextInput
              defaultValue="12345679"
              secureTextEntry
              style={gs.textInput}
              placeholder="Mot de passe"
            />
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate("profile")}
            activeOpacity={0.8}
            style={{ ...gs.btnContainer, marginTop: 30 }}
          >
            <Text style={gs.btnTitle}>Enregistrer Modification</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default ProfileUpdate;
