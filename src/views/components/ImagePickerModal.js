import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import { COLORS } from "../../styles";
import ImagePicker from "react-native-image-crop-picker";
const ImagePickerModal = ({ setReceiptPhoto,setImagePickerModalVisible }) => {
  const handleOpenPicker = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then((image) => {
      setReceiptPhoto(image.path);
      setImagePickerModalVisible(false);
    });
  };
  const handleOpenCamera = () => {
    ImagePicker.openCamera({
        width: 300,
        height: 400,
        cropping: true,
      }).then(image => {
        console.log(image);
      });
  };
  return (
    <View style={styles.container}>
      <View style={{ backgroundColor: "#fff", width: "80%" }}>
        <TouchableOpacity onPress={handleOpenPicker}>
          <View style={styles.sectionContainer}>
            <AntDesign name="picture" size={20} color={COLORS.primary} />
            <Text style={styles.title}>Importer image</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleOpenCamera}>
          <View style={styles.sectionContainer}>
            <AntDesign name="camera" size={20} color={COLORS.primary} />
            <Text style={styles.title}>Prendre une photo</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setImagePickerModalVisible(false)}>
          <View style={styles.sectionContainer}>
            <AntDesign name="close" size={20} color={COLORS.primary} />
            <Text style={styles.title}>Annuler</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.1)",
  },
  sectionContainer: {
    paddingVertical: 20,
    flexDirection: "row",
    borderBottomWidth: 0.2,
    borderColor: COLORS.gray,
    paddingHorizontal: 27,
  },
  title: {
    fontSize: 15,
    color: COLORS.dark,
    marginLeft: 10,
    fontFamily: "Roboto-Regular",
  },
});
export default ImagePickerModal;
