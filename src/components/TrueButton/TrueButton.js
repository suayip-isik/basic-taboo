import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import styles from "./TrueButton.style";

const TrueButton = ({ onPress, title }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.button}
                onPress={onPress}>
                <Text style={styles.buttonTitle}>{title}</Text>
            </TouchableOpacity>
        </View>
    );
}

export default TrueButton;