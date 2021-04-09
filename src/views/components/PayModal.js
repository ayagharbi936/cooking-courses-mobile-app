import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Modal } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";

import { COLORS, gs } from "../../styles";
import ImagePickerModal from "./ImagePickerModal";

const PayModal = ({ setPayModalVisible }) => {
  const [receiptPhoto, setReceiptPhoto] = useState("");
  const [imagePickerModalVisible, setImagePickerModalVisible] = useState(false);
const [validation,setValidation] = useState(false);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0,0,0,0.5)",
      }}
    >
      <View style={{ width: "85%" }}>
        <TouchableOpacity
          onPress={() => setPayModalVisible(false)}
          style={{
            zIndex: 10,
            marginRight: 20,
            marginBottom: -20,
            alignSelf: "flex-end",
            backgroundColor: COLORS.dark,
            height: 40,
            width: 40,
            borderRadius: 20,
            ...gs.center,
          }}
        >
          <AntDesign name="close" size={15} color={COLORS.white} />
        </TouchableOpacity>
        <View style={{ backgroundColor: COLORS.bgColor }}>
          <View style={receiptPhoto? {display:'none'}:{display:"flex"}}>
            <View style={styles.titleSectionContainer}>
              <Text style={styles.titleSection}>Étape 1</Text>
            </View>
            <View style={{ paddingHorizontal: 20, paddingVertical: 30 }}>
              <Text style={styles.section}>
                Vous devez transferer le montant requs à l'adresse suivante
              </Text>
              <Text
                style={{
                  marginVertical: 10,
                  fontSize: 17,
                  fontFamily: "Roboto-Regular",
                  color: COLORS.gray,
                }}
              >
                123456-12345-4556-455-AF-00 Banque BIAT
              </Text>
              <Text style={styles.section}>
                Ou bien par une mondat minute au nom de Hajer Ben Hammouda
              </Text>
            </View>

            <View style={styles.titleSectionContainer}>
              <Text style={styles.titleSection}>Étape 2</Text>
            </View>
            <View style={{ paddingHorizontal: 20, paddingVertical: 30 }}>
              <Text style={styles.section}>
                Vous devez nous envoyer la photo du reçu pour confirmer votre
                paiement
              </Text>
            </View>
            <TouchableOpacity
              style={styles.button}
              onPress={() => setImagePickerModalVisible(true)}
            >
              <View style={{ ...gs.rowCenter }}>
                <AntDesign name="download" size={17} color={COLORS.white} />
                <Text
                  style={{
                    color: COLORS.white,
                    fontSize: 16,

                    marginLeft: 10,
                  }}
                >
                  Télécherger Photo
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          <Modal transparent visible={imagePickerModalVisible}>
            <ImagePickerModal
              setReceiptPhoto={setReceiptPhoto}
              setImagePickerModalVisible={setImagePickerModalVisible}
            />
          </Modal>
          <View style={receiptPhoto && !validation ? {display:'flex'}:{display:"none"}}>
            <View style={styles.titleSectionContainer}>
              <Text style={styles.titleSection}>Étape 3</Text>
            </View>
            <View style={{ paddingHorizontal: 20, paddingVertical: 30 }}>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginBottom: 10,
                }}
              >
                <AntDesign name="picture" color={COLORS.gray} size={25} />
                <Text style={[styles.section, { marginLeft: 10,marginRight:25 }]}>
                  {receiptPhoto && receiptPhoto.split('/')[receiptPhoto.split('/').length-1]}
                </Text>
              </View>
              <Text style={styles.section}>
                cliquer sur valider pour envoyer votre reçu.
              </Text>
            </View>
            <TouchableOpacity style={styles.button} onPress={()=>setValidation(true)}>
              <View style={{ ...gs.rowCenter }}>
                <AntDesign
                  name="check"
                  size={17}
                  color={COLORS.white}
                  onPress={() => navigation.goBack()}
                />
                <Text
                  style={{
                    color: COLORS.white,
                    fontSize: 16,

                    marginLeft: 10,
                  }}
                >
                  Valider
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={!validation && {display:'none'}}>
          <View style={{ ...gs.center, padding: 70 }}>
            <View
              style={{
                marginBottom: 20,
                ...gs.center,
                height: 100,
                width: 100,
                borderRadius: 50,
                backgroundColor: COLORS.primary,
              }}
            >
              <AntDesign color={COLORS.white} size={50} name="check" />
            </View>
            <Text style={{ ...styles.section, textAlign: "center" }}>
              Reçu est bien envoyé! attendre un moment pour avoir la
              notification de validation finale!
            </Text>
          </View></View>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  titleSectionContainer: {
    backgroundColor: COLORS.white,
    paddingHorizontal: 20,
    height: 55,
    justifyContent: "center",
  },
  titleSection: {
    color: COLORS.primary,
    fontSize: 17,
    fontFamily: "Roboto-Medium",
  },
  section: {
    fontSize: 16,
    color: COLORS.gray,
    fontFamily: "Roboto-Light",
    lineHeight: 22,
  },
  button: {
    backgroundColor: COLORS.primary,
    paddingHorizontal: 20,
    height: 55,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default PayModal;
