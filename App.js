import { View, Text, useWindowDimensions, StyleSheet } from "react-native";

export default function App() {
  const { height: windowHeight, width: windowWidth } = useWindowDimensions();

  return (
    <>
      <View style={styles.container}>
        <View
          style={[
            styles.box,
            {
              width: windowWidth > 500 ? "70%" : "90%",
              height: windowHeight > 500 ? "60%" : "90%",
            },
          ]}
        >
          <Text style={{ fontSize: windowWidth > 1000 ? 50 : 24 }}>
            Window Width: {windowWidth}
          </Text>
          <Text style={{ fontSize: windowHeight > 1000 ? 50 : 24 }}>
            Window Height: {windowHeight}
          </Text>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "plum",
    alignItems: "center",
    justifyContent: "center",
  },
  box: {
    backgroundColor: "lightblue",
    alignItems: "center",
    justifyContent: "center",
  },
});
