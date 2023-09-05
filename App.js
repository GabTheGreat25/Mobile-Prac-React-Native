import { View, Text, StyleSheet } from "react-native";
import { Greet, Box } from "./components";

export default function App() {
  return (
    <>
      <View style={styles.container}>
        <Greet name="Gabriel Mendoza" />
        <Box style={{ backgroundColor: "#8e9b00", flex: 1 }}>Box 1</Box>
        <Box style={{ backgroundColor: "#b65d1f", flex: 2 }}>Box 2</Box>
        <Box style={{ backgroundColor: "#1c4c56", flex: 3 }}>Box 3</Box>
        <Box style={{ backgroundColor: "#ab9156", flex: 4 }}>Box 4</Box>
        <Box style={{ backgroundColor: "#6b0803" }}>Box 5</Box>
        <Box style={{ backgroundColor: "#1c4c56" }}>Box 6</Box>
        <Box style={{ backgroundColor: "#b95f21" }}>Box 7</Box>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#fff",
    padding: 20,
    borderWidth: 6,
    borderColor: "red",
    width: "100%",
  },
});
