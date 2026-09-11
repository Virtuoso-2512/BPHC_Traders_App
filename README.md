# BHCG-Traders App | Inductions
A simple, modern, full-stackweb application built with React, Node.js, Express, and MongoDB, featuring a sleek dark-themed UI.

The Code for server is at [https://github.com/Virtuoso-2512/BPHC_Traders_App_Server](Server GitHub Repo) .

---

## 🛠️ Tech Stack

* **Client:** React, React Router
* **Backend:** Node.js, Express.js
* **Database:** MongoDB, Mongoose
* **Environment Management:** Dotenv, CORS, Nodemon

---

```
🚀 Getting Started & Setup Instructions
Prerequisites
Node.js installed on your machine

A local MongoDB instance or a MongoDB Atlas connection string

1. Clone the Repository

2. Set Up and Run the Backend
```bash
cd backend
npm install
```

Create a .env file inside the backend directory and add your configuration:
```env
PORT=5000
MONGO_URI=your_mongodb_connection_string_here
```

Start the development server with hot-reloading:

```bash
npm run dev
```

3. Set Up and Run the Client
Open a new terminal window, navigate to the Client directory, and run:

```bash
cd Client
npm install
npm run start
```
The application will run locally at http://localhost:3000 and communicate with your Express API at http://localhost:5000.
