import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Icon from "react-native-vector-icons/FontAwesome";

import { COLORS, gs } from "../../styles";
const SignUp = ({ navigation }) => {
  return (
    <KeyboardAwareScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <SafeAreaView
        style={{
          ...gs.container,
          paddingHorizontal:35,
          justifyContent: "center",
          paddingVertical: 30,
        }}
      >
        <Text
          style={{
            ...gs.title,
            marginBottom: 20,
          }}
        >
          Créer un compte
        </Text>
        <View style={{ ...gs.inputContainer, marginBottom: 30 }}>
          <TextInput style={gs.textInput} placeholder="Nom" />
        </View>
        <View style={{ ...gs.inputContainer, marginBottom: 30 }}>
          <TextInput style={gs.textInput} placeholder="Prénom" />
        </View>
        <View style={{ ...gs.inputContainer, marginBottom: 30 }}>
          <TextInput style={gs.textInput} placeholder="E-mail" />
        </View>
        <View style={{ ...gs.inputContainer, marginBottom: 30 }}>
          <TextInput style={gs.textInput} placeholder="Téléphone" />
        </View>
        <View style={{ ...gs.inputContainer, marginBottom: 15 }}>
          <TextInput
            secureTextEntry
            style={gs.textInput}
            placeholder="Mot de passe"
          />
        </View>

        <TouchableOpacity
          onPress={() => navigation.navigate("home")}
          activeOpacity={0.8}
          style={{ ...gs.btnContainer, marginTop: 30 }}
        >
          <Text style={gs.btnTitle}>S'inscrire</Text>
        </TouchableOpacity>
        <Text
          style={{
            fontSize: 16,
            textAlign: "center",
            marginTop: 20,
            color: COLORS.lightGray,
            fontFamily:'Roboto-Regular'

           
          }}
        >
         Ou
          <Text style={{ ...gs.highlight }}>  s'inscrire  </Text>
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
          onPress={() => navigation.navigate("login")}
          activeOpacity={0.8}
        >
          <Text
            style={{
              fontSize: 15,
              textAlign: "center",
              marginTop: 20,
              color: COLORS.lightGray,
              fontFamily:'Roboto-Regular'
            }}
          >
            Vous avez dejà un compte?
            <Text style={{ ...gs.highlight }}> S'identifier </Text>
          </Text>
        </TouchableOpacity>
      </SafeAreaView>
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  socialBtnContainer: {
    flexDirection: "row",
    marginTop: 20,
    alignSelf: "center",
  },
  
});
export default SignUp;
