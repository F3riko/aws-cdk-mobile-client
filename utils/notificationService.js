import * as Notifications from "expo-notifications";
import { generateRandomLogFile } from "./generateLog";
import { postLogFile } from "./axiosPost";

const notificationService = {
  sendBackgroundNotification: async (awsEndpoint, updateLogMessages) => {
    if (awsEndpoint.trim() === "") {
      Alert.alert(
        "Provide Endpoint",
        "Please enter the AWS endpoint before sending a notification."
      );
      return;
    }

    await Notifications.scheduleNotificationAsync({
      content: {
        title: "Background Notification",
        body: "This is a background notification!",
      },
      trigger: null,
    });
    updateLogMessages(["Background Notification Sent"]);

    const backgroundSubscription =
      Notifications.addNotificationReceivedListener(async (notification) => {
        updateLogMessages([
          `Background Notification Received: ${JSON.stringify(notification)}`,
        ]);

        const logFileContent = generateRandomLogFile();

        postLogFile(awsEndpoint, logFileContent, updateLogMessages);
      });
  },
};

export default notificationService;
