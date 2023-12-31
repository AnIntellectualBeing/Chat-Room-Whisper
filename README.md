Certainly, here's the Markdown code that you can copy and paste into your README.md:

```markdown
# Terminal Whisper - Node.js Chat Application

Welcome to the Terminal Whisper Chat Node.js Application! This simple chat allows users to communicate anonymously in real-time using a terminal.

![Terminal Icon](https://www.svgrepo.com/show/354445/terminal.svg)

## Server Setup

### Prerequisites

- Node.js and npm installed on your machine.

### Server Installation

1. **Clone the GitHub repository:**
   ```bash
   git clone https://github.com/AnIntellectualBeing/Terminal-Whisper.git
   ```

2. **Navigate to the Server directory:**
   ```bash
   cd Terminal-Whisper
   ```

3. **Install server dependencies (including Socket.io):**
   ```bash
   sudo apt update
   sudo apt install nodejs npm
   npm install socket.io
   ```

5. **Running the Server:**
   ```bash
   node server.js
   ```

## Client Setup

### Prerequisites

- Node.js and npm installed on the client machine.

### Client Installation

1. **Clone the GitHub repository on the client machine:**
   ```bash
   git clone https://github.com/AnIntellectualBeing/Terminal-Whisper.git
   ```

2. **Navigate to the Client directory:**
   ```bash
   cd Terminal-Whisper
   ```

3. **Install client dependencies (including Socket.io-client and readline):**
   ```bash
   sudo apt update
   sudo apt install nodejs npm
   npm install socket.io-client readline
   ```

4. **Edit the Socket.io server URL:**
   Open `client.js` and replace `'https://server.com'` with your Socket.io server URL.

### Running the Client

1. **Start the client:**
   ```bash
   node client.js
   ```

2. **Start chatting!**

## Features

- Real-time anonymous chat.
- Simple command-line interface.
- Unique client identifiers for each user.

## Additional Notes

- For security reasons, it is recommended to use this application in a trusted environment.
- Customize the Socket.io server URL in the code based on your deployment.

## Contributing

Feel free to contribute to the project by submitting issues or pull requests on the [GitHub repository](https://github.com/AnIntellectualBeing/Terminal-Whisper).

## License

This project is licensed under the MIT License.
```

You can copy and paste this code into your README.md file on GitHub.
