import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Icon from "react-native-vector-icons/FontAwesome";

import { COLORS, gs } from "../../styles";

const Login = ({ navigation }) => {
  return (
    <KeyboardAwareScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <SafeAreaView
        style={{
          ...gs.container,
          justifyContent: "center",
          paddingVertical: 30,
          paddingHorizontal:35,
        }}
      >
        <View style={styles.logo}>
          <Image
            source={require("../../assets/Logo.png")}
            style={{ ...gs.image }}
          />
        </View>
        <View style={{ ...gs.inputContainer, marginBottom: 30 }}>
          <TextInput style={gs.textInput} placeholder="E-mail" />
        </View>
        <View style={{ ...gs.inputContainer, marginBottom: 15 }}>
          <TextInput
            secureTextEntry
            style={gs.textInput}
            placeholder="Mot de passe"
          />
        </View>
        <TouchableOpacity>
          <Text
            style={{
              ...gs.highlight,
              textAlign: "right",
              marginBottom: 45,
              fontSize: 16,
            }}
          >
            Mot de passe oublié ?
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("home")}
          activeOpacity={0.8}
          style={{ ...gs.btnContainer }}
        >
          <Text style={gs.btnTitle}>Se connecter</Text>
        </TouchableOpacity>
        <Text
          style={{
            fontSize: 16,
            textAlign: "center",
            marginTop: 20,
            color: COLORS.lightGray,
            fontFamily: "Roboto-Regular",
          }}
        >
          Ou
          <Text style={gs.highlight}> connectez vous </Text>
          avec
        </Text>
        <View style={styles.socialBtnContainer}>
          <View style={{ ...gs.roundIcon, marginHorizontal: 10 }}>
            <Icon name="facebook" size={20} color={COLORS.primary} />
          </View>
          <View style={{ ...gs.roundIcon, marginHorizontal: 10 }}>
            <Icon name="google" size={20} color={COLORS.primary} />
          </View>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate("signUp")}
          activeOpacity={0.8}
        >
          <Text
            style={{
              fontSize: 15,
              textAlign: "center",
              marginTop: 20,
              color: COLORS.lightGray,
              fontFamily: "Roboto-Regular",
            }}
          >
            Vous n'avez pas de compte?
            <Text style={{ ...gs.highlight }}> Inscrivez vous </Text>
          </Text>
        </TouchableOpacity>
      </SafeAreaView>
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  logo: {
    height: 180,
    width: "100%",
    marginBottom: 40,
  },
  socialBtnContainer: {
    flexDirection: "row",
    marginTop: 20,
    alignSelf: "center",
  },
});
export default Login;
