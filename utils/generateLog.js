export const generateRandomLogFile = () => {
  const randomText = Math.random().toString(36).substring(7);
  return `Log File Content: ${randomText}`;
};
