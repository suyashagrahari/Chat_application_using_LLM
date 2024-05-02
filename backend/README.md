# Chat Application

This is a real-time chat application built with Node.js, Express.js, MongoDB, and Socket.IO. It allows users to register, login, send messages, and receive messages in real-time.

## Features

- User authentication (register, login, logout)
- Real-time messaging
- AI-powered message response (if the recipient is offline)
- Online user status
- Rate limiting and sanitization to prevent attacks

## Prerequisites

- Node.js
- MongoDB

## Installation

1. Clone the repository:

git clone https://github.com/your-repo/chat-app.git

2. Install dependencies:

cd chat-app
npm install

3. Create a `.env` file in the root directory and add the following environment variables:


MONGO_URI=<your-mongodb-uri>
JWT_SECRET_KEY=<your-jwt-secret-key>
API_KEY=<your-google-api-key>

4. Start the development server:

npm run dev

The server should now be running on `http://localhost:8080`.

## Scripts

- `npm run dev`: Start the development server with Nodemon
- `npm start`: Start the production server
- `npm run build`: Install dependencies

## Dependencies

- `bcryptjs`: For password hashing
- `compression`: For gzip compression
- `cookie-parser`: For parsing cookies
- `cors`: For handling Cross-Origin Resource Sharing
- `dotenv`: For loading environment variables
- `express`: Web application framework
- `express-mongo-sanitize`: For sanitizing MongoDB queries
- `express-rate-limit`: For rate limiting requests
- `jsonwebtoken`: For generating and verifying JSON Web Tokens
- `mongoose`: MongoDB object data modeling library
- `socket.io`: For real-time communication
- `xss-clean`: For sanitizing user input against XSS attacks

