# Background Notification Upload App

## Overview

This mobile client, developed using React Native, listens for silent push notifications in the background and automatically uploads a dummy log file to a specified AWS API endpoint.

## Features

1. Listens for background notifications
2. Triggers the automatic generation of a dummy log file
3. Uses Axios to send the generated log file content to a specified endpoint
4. Displays the result of the upload process on the screen

## How to Use

### Prerequisites

- Expo CLI
- Node.js

### Steps

1. **Clone the repository**
2. **Navigate to the project directory**
3. **Install dependencies:** `npm install`
4. **Run the App:** `npm start`

#### Additional Setup

- Expo CLI and Node.js

#### Configure AWS Endpoint

1. Provide your AWS API endpoint in the `TextInput` field.
2. Press the "SEND" button and check the logs.