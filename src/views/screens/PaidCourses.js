import React from "react";
import { View, Text, StyleSheet } from "react-native";

const PaidCourses = () => {
    return (
        <View style={styles.container}>
            <Text>PaidCourses</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
});
export default PaidCourses;