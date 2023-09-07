import { View, Text, StyleSheet } from "react-native";
import { Greet, Box } from "./components";

export default function App() {
  return (
    <>
      <View style={styles.container}>
        <Greet name="Gabriel Mendoza" />
        <Box
          style={{
            backgroundColor: "#8e9b00",
            width: "50%",
            left: 200,
            bottom: 100,
            position: "absolute",
            zIndex: 1000,
          }}
        >
          Box 1
        </Box>
        <Box style={{ backgroundColor: "#b65d1f", width: "50%" }}>Box 2</Box>
        <Box style={{ backgroundColor: "#1c4c56", width: "50%" }}>Box 3</Box>
        <Box style={{ backgroundColor: "#ab9156", width: "50%" }}>Box 4</Box>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 100,
    backgroundColor: "#fff",
    marginTop: 64,
    borderWidth: 6,
    borderColor: "red",
    position: "relative",
  },
});
