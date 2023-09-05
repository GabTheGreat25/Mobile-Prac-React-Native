import { View, Text, StyleSheet } from "react-native";
import { Greet, Box } from "./components";

export default function App() {
  return (
    <>
      <View style={styles.container}>
        {/* <Greet name="Gabriel Mendoza" /> */}
        <Box style={{ backgroundColor: "#8e9b00", flexShrink: 1.25 }}>
          Box 1 shrink
        </Box>
        <Box style={{ backgroundColor: "#b65d1f", flexShrink: 1.25 }}>
          Box 2 shrink
        </Box>
        <Box style={{ backgroundColor: "#1c4c56", flexShrink: 1 }}>Box 3</Box>
        <Box style={{ backgroundColor: "#ab9156", flexShrink: 1 }}>Box 4</Box>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 300,
    flexDirection: "row",
    alignItems: "flex-start",
    backgroundColor: "#fff",
    marginTop: 64,
    borderWidth: 6,
    borderColor: "red",
  },
});
