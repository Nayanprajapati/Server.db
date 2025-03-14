Server.db - User Authentication System

Project Overview

Server.db is a web-based authentication system designed to handle user registration and login functionalities. The system ensures secure login, session management, and seamless navigation between pages.

Features

User Registration with input validation

User Login with session handling

Logout functionality

Simple UI with Bootstrap for styling

Uses Fetch API to interact with a mock backend (JSON Server)

Technologies Used

HTML

CSS (Bootstrap for styling)

JavaScript (ES6+)

JSON Server (for user data storage)

Folder Structure

ServerDB/
│── src/
│   ├── components/
│   │   ├── auth/
│   │   │   ├── login/
│   │   │   │   ├── login.html
│   │   │   │   ├── login.js
│   │   │   │   ├── login.css
│   │   │   ├── register/
│   │   │   │   ├── register.html
│   │   │   │   ├── register.js
│   │   │   │   ├── register.css
│   ├── home/
│   │   ├── home.html
│   │   ├── home.js
│── index.html
│── style.css
│── README.md
│── db.json (Mock Database)
│── server.js (Backend Server)

Setup Instructions

1. Install Dependencies

To run the backend, install JSON Server globally:

npm install -g json-server

2. Create db.json (Mock Database)

Create a db.json file in the root directory with sample user data:

{
  "users": []
}

3. Start JSON Server

Run the following command to start the server:

json-server --watch db.json --port 5000

4. Open the Project in a Browser

Simply open index.html in your browser or use a local server (e.g., Live Server in VS Code).

User Guide

Registration

Fill in all required fields.

Password and confirm password must match.

Click the "Create Account" button to register.

Login

Enter a registered email and password.

Click "Login" to authenticate.

Logout

Click the "Logout" button to end the session.

Future Enhancements

Implement real backend authentication (Node.js & MongoDB/Firebase).

Password hashing for better security.

Add user roles and access control.

Improve UI with animations and better styling.

Implement JWT-based authentication.

Improve database management with real-time updates.

Author

Developed by Anshu. 🚀

