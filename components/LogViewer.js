import React from "react";
import { ScrollView, Text, StyleSheet } from "react-native";

export default function LogViewer({ logMessages }) {
  return (
    <ScrollView style={styles.scrollView}>
      {logMessages.map((message, index) => (
        <Text key={index} style={styles.logText}>
          {message}
        </Text>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    maxHeight: 400,
    width: "80%",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
  },
  logText: {
    padding: 10,
  },
});
