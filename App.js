import { Image, ScrollView, Text, View } from "react-native";
const logoImg = require("./assets/adaptive-icon.png");

export default function App() {
  return (
    <>
      <View style={{ flex: 1, backgroundColor: "plum", padding: 60 }}>
        <ScrollView>
          <Image source={logoImg} style={{ width: 300, height: 300 }} />
          <Text>
            lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            auctor, nunc eget ultricies ultricies, nunc nisl ultricies tortor,
            quis lacinia nunc nunc eget nunc. Donec auctor, nunc eget ultricies
            ultricies, nunc nisl ultricies tortor, quis lacinia nunc nunc eget
            nunc. Donec auctor, nunc eget ultricies ultricies, nunc nisl
            ultricies tortor, quis lacinia nunc nunc eget nunc. Donec auctor,
            nunc eget ultricies ultricies, nunc nisl ultricies tortor, quis
            lacinia nunc nunc eget nunc. Donec auctor, nunc eget ultricies
            ultricies, nunc nisl ultricies tortor, quis lacinia nunc nunc eget
            nunc. Donec auctor, nunc eget ultricies ultricies, nunc nisl
            ultricies tortor, quis lacinia nunc nunc eget nunc. Donec auctor,
            nunc eget ultricies ultricies, nunc nisl ultricies tortor, quis
            lacinia nunc nunc eget nunc. Donec auctor, nunc eget ultricies
            ultricies, nunc nisl ultricies tortor, quis lacinia nunc nunc eget
            nunc.
          </Text>
          <Image source={logoImg} style={{ width: 300, height: 300 }} />
        </ScrollView>
      </View>
    </>
  );
}
