import { View, Alert, Button } from "react-native";

export default function App() {
  return (
    <>
      <View style={{ flex: 1, backgroundColor: "plum", padding: 60 }}>
        <Button title="Alert" onPress={() => Alert.alert("Invalid data!")} />
        <Button
          title="Alert 2"
          onPress={() => Alert.alert("invalid data!", "DOB incorrect!")}
        />
        <Button
          title="Alert 3"
          onPress={() =>
            Alert.alert("invalid data!", "DOB incorrect!", [
              {
                text: "Cancel",
                onPress: () => console.log("Cancel Pressed"),
              },
              {
                text: "OK",
                onPress: () => console.log("OK Pressed"),
              },
            ])
          }
        />
      </View>
    </>
  );
}
