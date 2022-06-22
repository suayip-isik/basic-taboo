import React from "react";
import { Image, View } from "react-native";
import styles from "./MaterialPicture.style";

function MaterialPicture({ imageUrl }) {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{ uri: imageUrl }} />
        </View>
    );
}

export default MaterialPicture;