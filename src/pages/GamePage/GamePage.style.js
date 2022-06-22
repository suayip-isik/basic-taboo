import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#e0e0e0",
        justifyContent: "center",
    },
    /*materialNameContainer: {
        borderWidth: 1,
        borderColor: "black",
        marginBottom: 30,
    },
    materialPictureContainer: {
        borderWidth: 1,
        borderColor: "black",
    },*/
    gameControlContainer: {
        flexDirection: "row",
        justifyContent: "center",
        marginTop: 10,
    },
    scoreContainer: {
        marginTop: 10,
        paddingLeft: 10,
    },
    scoreText: {
        fontSize: 29,
        color: "black",
        fontWeight: "bold",
    },
});