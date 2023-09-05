import { View, Text, StyleSheet } from "react-native";
import { Greet, Box } from "./components";

export default function App() {
  return (
    <>
      <View style={styles.container}>
        <Greet name="Gabriel Mendoza" />
        <Box style={{ backgroundColor: "#8e9b00", alignSelf: "center" }}>
          Box 1
        </Box>
        <Box style={{ backgroundColor: "#b65d1f" }}>Box 2</Box>
        <Box style={{ backgroundColor: "#1c4c56" }}>Box 3</Box>
        <Box style={{ backgroundColor: "#ab9156" }}>Box 4</Box>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
    borderWidth: 6,
    borderColor: "red",
    width: "100%",
  },
});
