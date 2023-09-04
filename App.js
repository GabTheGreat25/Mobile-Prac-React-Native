import { Button, View } from "react-native";
const logoImg = require("./assets/adaptive-icon.png");

export default function App() {
  return (
    <>
      <View style={{ flex: 1, backgroundColor: "plum", padding: 60 }}>
        <Button
          title="Press Me"
          onPress={() => console.log("I am pressed!")}
          color="midnightblue"
          disabled={true}
        />
      </View>
    </>
  );
}
