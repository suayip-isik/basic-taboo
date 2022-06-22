import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./HomePage.style";

function HomePage(props) {
    function navigateToPage() {//GamePage sayfasına yönlendirme fonksiyonu
        props.navigation.navigate('GamePage')
    }
    return (
        <View style={styles.container}>
            <View style={styles.button_container}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={navigateToPage} >
                    <Text style={styles.button_text}>Başla</Text>
                </TouchableOpacity>
            </View>

        </View>
    );
}

export default HomePage;