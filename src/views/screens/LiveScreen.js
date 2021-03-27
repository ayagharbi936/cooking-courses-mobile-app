import React from "react";
import { View, Text, StyleSheet } from "react-native";

const LiveScreen = () => {
    return (
        <View style={styles.container}>
            <Text>LiveScreen</Text>
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
export default LiveScreen;