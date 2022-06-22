import React from "react";
import { Text, View } from "react-native";
import styles from "./MaterialName.style";

function MaterialName({ objectName }) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{objectName}</Text>
        </View>
    );
}

export default MaterialName;