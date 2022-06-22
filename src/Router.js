import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomePage from "./pages/HomePage";
import GamePage from "./pages/GamePage";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false, }}>
        <Stack.Screen
          name="HomePage"
          component={HomePage}
        /*options={
          {
            title: "Anasayfa",//Başlıkta yazacak yazı
            headerTitleAlign: "center",//Başlıktaki yazının konumu
            headerStyle: {
              backgroundColor: '#f4511e',
            },
            headerTintColor: "black",//Başlık yazı rengi ayarlama
            headerTitleStyle: {//Başlık yazı stili ayarlama
              fontSize: 25,
            },
          }
        }*/
        />

        <Stack.Screen
          name="GamePage"
          component={GamePage}
          /*options={
            {
              title: "Oyun Ekranı",
              headerTitleAlign: "center",
            }
          }*/
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
