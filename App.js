import { View } from "react-native";
import { Greet } from "./components";

export default function App() {
  return (
    <>
      <View style={{ flex: 1, backgroundColor: "plum", padding: 60 }}>
        <Greet name="Gabriel Mendoza" />
      </View>
    </>
  );
}
