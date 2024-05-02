


# Backend 


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

git clone https://github.com/suyashagrahari/Chat_application_using_LLM.git

2. Install dependencies:

cd backend
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



#Frontend

# Chat Application (Frontend)

This is the frontend part of a real-time chat application built with React, Redux, and Socket.IO. It provides a user-friendly interface for users to register, login, send messages, and receive messages in real-time.

## Features

- User authentication (register, login, logout)
- Real-time messaging
- Online user status
- Search for other users
- Responsive design

## Prerequisites

- Node.js
- npm (Node Package Manager)

## Installation

1. Clone the repository:


git clone https://github.com/suyashagrahari/Chat_application_using_LLM.git

2. Navigate to the project directory:

cd frontend

3. Install dependencies:

npm install

4. Start the development server:

npm start


The application should now be running on `http://localhost:3000`.

## Dependencies

- `@reduxjs/toolkit`: For state management with Redux
- `axios`: For making HTTP requests
- `react`: JavaScript library for building user interfaces
- `react-dom`: Entry point for React in the DOM
- `react-hot-toast`: For displaying toasts (notifications)
- `react-icons`: For using icons in the application
- `react-redux`: Official React bindings for Redux
- `react-router-dom`: For handling client-side routing
- `redux-persist`: For persisting Redux state across browser refreshes
- `socket.io-client`: For real-time communication
- `daisyui`: For UI components and styling
- `tailwindcss`: For utility-first CSS styling

## Scripts

- `npm start`: Start the development server
- `npm run build`: Build the production-ready bundle
- `npm test`: Run tests (if any)
- `npm run eject`: Eject the project from Create React App (not recommended)

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.

## License

