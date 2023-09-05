import { View, StyleSheet, Text } from "react-native";
import { Greet } from "./components";

export default function App() {
  return (
    <>
      <View style={styles.container}>
        <Greet name="Gabriel Mendoza" style={styles.title} />
        <View style={[styles.lightblueBg, styles.box]}>
          <Text>Lightblue box</Text>
        </View>
        <View style={[styles.box, styles.lightgreenBg]}>
          <Text>Lightgreen box</Text>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "plum", padding: 60 },
  box: {
    width: 100,
    height: 100,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "purple",
    marginVertical: 10,
    borderStyle: "solid",
  },
  lightblueBg: { backgroundColor: "lightblue" },
  lightgreenBg: { backgroundColor: "lightgreen" },
});
