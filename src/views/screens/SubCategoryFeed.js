import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { COLORS, gs } from "../../styles";
import ChefPost from "../components/ChefPost";
const SubCategoryFeed = () => {
  return (
    <SafeAreaView
      style={{ ...gs.container, paddingTop: 40 }}
    >
      <View style={{...gs.rowBetween,...gs.screenPadding,marginBottom:20}}>
        <View>
          <Text style={gs.title}>Formation</Text>
          <Text style={gs.subTitle}>
            Bienvenue au feed de formation de ...
          </Text>
        </View>
        <TouchableOpacity>
          <View
            style={{
              ...gs.center,
              backgroundColor: COLORS.dark,
              height: 40,
              width: 40,
              borderRadius: 15,
            }}
          >
            <Icon name="search" color={COLORS.white} size={20} />
          </View>
        </TouchableOpacity>
      </View>
      <ChefPost/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  
});
export default SubCategoryFeed;
