import React, { useState, useEffect } from "react";
import { View, Text, Alert, SafeAreaView } from "react-native";
import styles from "./GamePage.style";
import MaterialName from "../../components/MaterialName";
import MaterialPicture from "../../components/MaterialPicture";
import TrueButton from "../../components/TrueButton";
import tabooData from "../../taboo-data.json";
import PassButton from "../../components/PassButton";

function GamePage(props) {
    const [dataId, setDataId] = useState(0);
    const [score, setScore] = useState(0);
    const [materialName, setMaterialName] = useState();
    const [materialUrl, setMaterialUrl] = useState();
    /*let random;
    const shownMaterialId = [];//Gösterilen görsellerin daha sonra gösterilmemesi için gösterilmiş göersellerin id sini tutan liste

    function isShown() {
        try {
            random = Math.floor(Math.random() * tabooData.length);
            if (shownMaterialId.includes(random)) {
                isShown();
            }
            else {
                shownMaterialId.push(random)
                console.log(shownMaterialId)
            }

        } catch (error) {
            console.log(error);
        }
    }
    */
    function nextMaterial() {// Yeni materyal adı ve resmi getirmek işlemi için
        if (tabooData[dataId] === undefined) {
            gameOver();
        }
        else {
            setMaterialName(tabooData[dataId].name);
            setMaterialUrl(tabooData[dataId].url);
        }
    }
    useEffect(() => nextMaterial(), []);//Sayfa açılırken yanlızca bir kere çalışır
    function nextButtonOnPress() {//Next buttonuna basıldığında yaplacak işlemler
        if (tabooData[dataId] !== undefined && tabooData[dataId].id + 1) {
            setDataId(dataId + 1);
            setScore(score + 1)
        } else {// tabooData daki veriler bittiği zaman dataId yi arttırmayı kes
            gameOver();
        }
    }
    useEffect(() => nextMaterial(), [nextButtonOnPress]);// nextButtonOnPress fonksiyonu her çalıştığında çalışır.
    function passButtonOnPress() {// Pass butonuna basıldığında yapılacak işlemler

        //  *Resim değişecek, 
        //  *Score artmayacak

        if (tabooData[dataId] !== undefined && tabooData[dataId].id + 1) {
            setDataId(dataId + 1);
        } else {// tabooData daki veriler bittiği zaman dataId u arttırmayı kes
            gameOver();
        }
    }
    function gameOver() {
        //Alert.alert("Title", "Content",);
        Alert.alert(//Alert
            "Game Over",//Alert Title
            "Score: " + score,//Alert Message
            [
                {//Cancel Button
                    text: "Kapat",
                    onPress: () => null,
                    style: "cancel"
                },
                {//Yeniden Oyna Buttonu
                    //Butona basıldığında HomePage sayfasına yönlendirilecek
                    text: "Yeniden Oyna",
                    onPress: () => goToRestartPage(),
                }
            ], { cancelable: false }
        );
    }
    function goToRestartPage() {
        return props.navigation.navigate('HomePage')
    }

    return (
        <SafeAreaView style={styles.container}>
            <MaterialName objectName={materialName} />

            <MaterialPicture imageUrl={materialUrl} />

            <View style={styles.gameControlContainer}>
                <PassButton title={"Pass"} onPress={passButtonOnPress} />
                <TrueButton title={"Next"} onPress={nextButtonOnPress} />
            </View>

            <View style={styles.scoreContainer}>
                <Text style={styles.scoreText}>Score: {score}</Text>
            </View>
        </SafeAreaView>
    );
}

export default GamePage;