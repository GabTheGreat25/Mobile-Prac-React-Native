import { Text, View, Button, Modal, StatusBar } from "react-native";
import React, { useState } from "react";

export default function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  return (
    <>
      <View style={{ flex: 1, backgroundColor: "plum", padding: 60 }}>
        <StatusBar
          backgroundColor="lightgreen"
          barStyle="light-content" // dark-content
          hidden={true}
        />
        <Button
          title="Press Me"
          onPress={() => setIsModalVisible(true)}
          color="midnightblue"
          disabled={false}
        />
        <Modal
          visible={isModalVisible}
          onRequestClose={() => setIsModalVisible(false)}
          // "slide" option: Modal slides into view from the bottom.
          // "fade" option: Modal fades in with opacity transition.
          // "none" option: Modal appears instantly without any animation.
          animationType="slide"
          // "fullScreen" option: The modal occupies the entire screen.
          // "pageSheet" option: The modal appears as a sheet on the page.
          // "formSheet" option: The modal appears as a smaller form sheet on the page.
          // "overFullScreen" option: The modal appears over the full screen, similar to a full screen presentation.
          presentationStyle="pageSheet"
        >
          <View style={{ flex: 1, backgroundColor: "lightblue", padding: 60 }}>
            <Text>Modal Content</Text>
            <Button
              title="Close"
              color="midnightblue"
              onPress={() => setIsModalVisible(false)}
            ></Button>
          </View>
        </Modal>
      </View>
    </>
  );
}
