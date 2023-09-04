import { View, StyleSheet } from "react-native";
import { Greet } from "./components";

export default function App() {
  return (
    <>
      <View style={styles.container}>
        <Greet name="Gabriel Mendoza" />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "plum", padding: 60 },
});
