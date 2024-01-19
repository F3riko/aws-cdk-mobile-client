import axios from "axios";

export const postLogFile = async (
  awsEndpoint,
  logFileContent,
  updateLogMessages
) => {
  try {
    const response = await axios.post(awsEndpoint, {
      log: logFileContent,
    });
    updateLogMessages([
      `Log file sent to AWS. Status Code: ${response.status}`,
    ]);
  } catch (error) {
    console.error("Error sending log file to AWS:", error.message);
    updateLogMessages(["Error sending log file to AWS"]);
  }
};
