import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import NotificationForm from "./NotificationForm";
import LogViewer from "./LogViewer";

export default function NotificationApp() {
  const [logMessages, setLogMessages] = useState([]);

  const updateLogMessages = (newMessages) => {
    setLogMessages((prevMessages) => [...prevMessages, ...newMessages]);
  };

  return (
    <View style={styles.container}>
      <NotificationForm updateLogMessages={updateLogMessages} />
      <LogViewer logMessages={logMessages} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
