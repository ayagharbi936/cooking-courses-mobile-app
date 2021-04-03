import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Icon  from "react-native-vector-icons/FontAwesome";
import { COLORS, gs } from "../../styles";

const CategoriesFilterList = ({ categories }) => {
  const [selectedCategoryIndex, setSelectedCategoryIndex] = React.useState(0);
  let list = categories.map(({ name }) => name);
  list.unshift("All");
  console.log(list);
  return (
    <View
      style={{ ...gs.rowBetween, marginTop: 30,marginBottom:20, alignItems: "center"}}
    >
    <View style={{width:'82%'}}>
    
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ alignItems: "center", }}
        
      >
        {list.map((item, index) => (
          <TouchableOpacity
            key={index}
            activeOpacity={0.8}
            onPress={() => setSelectedCategoryIndex(index)}
          >
            <View
              style={[
                { ...gs.center, marginRight: 30 },
                selectedCategoryIndex === index && styles.selected,
              ]}
            >
              <Text
                style={[
                  selectedCategoryIndex === index
                    ? styles.selectedTitle
                    : {
                        fontSize: 15,
                        color: COLORS.lightGray,
                      },
                ,{fontFamily:'Roboto-Regular'}]}
              >
                {item}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView></View>
      <TouchableOpacity activeOpacity={0.8}>
        <View
          style={{
            ...gs.center,
            ...styles.selected,
            
            
          }}
        >
         <Icon name="plus" color={COLORS.primary} size={19}/>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  selected: {
    backgroundColor: COLORS.white,
    borderRadius: 10,
    elevation: 2,
    paddingHorizontal: 10,
    paddingVertical: 8,
  },
  selectedTitle: {
    color: COLORS.primary,
    fontWeight: "bold",
    fontSize: 17,
  },
});
export default CategoriesFilterList;
