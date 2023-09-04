import { Image, Pressable, ScrollView, Text, View, Button } from "react-native";
const logoImg = require("./assets/adaptive-icon.png");

export default function App() {
  return (
    <>
      <View style={{ flex: 1, backgroundColor: "plum", padding: 60 }}>
        <Button
          title="Press Me"
          onPress={() => console.log("Button pressed!")}
          color="midnightblue"
          disabled={false}
        />
        <ScrollView>
          <Pressable onPress={() => console.log("Image pressed!")}>
            <Image source={logoImg} style={{ width: 300, height: 300 }} />
          </Pressable>
          <Pressable onPress={() => console.log("Text pressed!")}>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              auctor, nunc eget ultricies ultricies, nunc nisl ultricies tortor,
              quis lacinia nunc nunc eget nunc. Donec auctor, nunc eget
              ultricies ultricies, nunc nisl ultricies tortor, quis lacinia nunc
              nunc eget nunc. Donec auctor, nunc eget ultricies ultricies, nunc
              nisl ultricies tortor, quis lacinia nunc nunc eget nunc. Donec
              auctor, nunc eget ultricies ultricies, nunc nisl ultricies tortor,
              quis lacinia nunc nunc eget nunc. Donec auctor, nunc eget
              ultricies ultricies, nunc nisl ultricies tortor, quis lacinia nunc
              nunc eget nunc. Donec auctor, nunc eget ultricies ultricies, nunc
              nisl ultricies tortor, quis lacinia nunc nunc eget nunc. Donec
              auctor, nunc eget ultricies ultricies, nunc nisl ultricies tortor,
              quis lacinia nunc nunc eget nunc. Donec auctor, nunc eget
              ultricies ultricies, nunc nisl ultricies tortor, quis lacinia nunc
              nunc eget nunc.
            </Text>
          </Pressable>
        </ScrollView>
      </View>
    </>
  );
}
