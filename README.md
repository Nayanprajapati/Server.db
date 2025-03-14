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

