import { StyleSheet } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

export const COLORS = {
  white: "#FFF",
  dark: "#232323",
  primary: "#FB390D",
  secondary:"#FBB4A0",
  bgColor: "#f7f7f7",
  gray: "#717171",
  lightGray: "#ADAEB5",
};

export const gs = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.bgColor,
  },
  sectionContainer: {
    paddingHorizontal: 30,
    paddingVertical: 20,
    marginBottom: 10,
  },
  screenPadding: {
    paddingHorizontal: 25,
  }
  ,
  rowCenter: {
    flexDirection: "row",
    alignItems: "center",
  },

  rowBetween: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  center: {
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: COLORS.dark,
    fontSize: 23,
    fontFamily: "Roboto-Medium",
  },
  subTitle: {
    marginTop: 10,
    color: COLORS.lightGray,
    fontSize: 16,
    fontFamily: "Roboto-Regular",

  },
  image: { resizeMode: "cover", width: "100%", height: "100%" },
  btnContainer: {
    backgroundColor: COLORS.primary,
    height: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  btnTitle: {
    fontSize: 18,
    letterSpacing: 1,
    color: Colors.white,
    fontFamily: "Roboto-Light",
  },
  inputContainer: {
    borderBottomColor: COLORS.lightGray,
    borderBottomWidth: 0.6,
  },
  textInput:{
   fontSize:18,
   fontFamily:'Roboto-Regular'
  },
  highlight: {
    color: COLORS.primary,
    fontFamily: "Roboto-Medium",
  },
  roundIcon: {
    justifyContent: "center",
    alignItems: "center",
    height: 40,
    width: 40,
    elevation: 13,
    borderRadius: 25,
    backgroundColor: COLORS.white,
  },
});
