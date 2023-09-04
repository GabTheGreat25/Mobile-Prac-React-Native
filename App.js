import { Image, ImageBackground, Text, View } from "react-native";
const logoImg = require("./assets/adaptive-icon.png");

export default function App() {
  return (
    <>
      <View style={{ flex: 1, backgroundColor: "plum", padding: 60 }}>
        <Text>Hello World</Text>
        <Image source={logoImg} style={{ width: 300, height: 300 }} />
        <View>
          <ImageBackground source={logoImg}>
            <Text>Inside</Text>
          </ImageBackground>
        </View>
      </View>
    </>
  );
}
