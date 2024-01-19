import React, { useState } from "react";
import { View, Button, TextInput, StyleSheet, Alert } from "react-native";
import notificationService from "../utils/notificationService";

export default function NotificationForm({ updateLogMessages }) {
  const [awsEndpoint, setAwsEndpoint] = useState("");

  const submitEndpoint = (text) => {
    setAwsEndpoint(text);
    const message = `AWS Endpoint submitted: ${text}`;
    updateLogMessages([message]);
  };

  const sendNotification = () => {
    if (awsEndpoint.trim() === "") {
      Alert.alert("Provide Endpoint", "Please enter a valid AWS endpoint.");
      return;
    }
    notificationService.sendBackgroundNotification(
      awsEndpoint,
      updateLogMessages
    );
  };

  return (
    <View style={styles.formContainer}>
      <TextInput
        style={styles.input}
        placeholder="Enter AWS Endpoint"
        value={awsEndpoint}
        onChangeText={(text) => submitEndpoint(text)}
      />

      <Button title="Send Background Notification" onPress={sendNotification} />
    </View>
  );
}

const styles = StyleSheet.create({
  formContainer: {
    width: "80%",
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 15,
    paddingLeft: 10,
  },
});
