import { View, Text, StyleSheet } from "react-native";

export default function ({ name }) {
  return (
    <View>
      <Text style={[styles.center]}> Hello, {name}!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  center: {
    textAlign: "center",
  },
});
