# Setting Up and Running the MERN Stack Application

This document provides clear and concise instructions for setting up and running the MERN stack application developed by [Your Name/Your Team].

## Prerequisites

Before proceeding with the setup, ensure that you have the following prerequisites installed on your system:

- Node.js and npm (Node Package Manager)
- MongoDB
- Git (optional, for cloning the repository)

## Installation Steps

1. **Clone the Repository (If not already done)**

   ```bash
   git clone <repository-url>
   cd <repository-folder>
   ```

2. **Install Dependencies**

   ```bash
   cd client && npm install
   cd ../server && npm install
   ```

3. **Configuration**

   - In the `server` folder, create a `.env` file and provide necessary configurations like MongoDB URI, JWT secret, etc.
   - Example `.env` file:

     ```plaintext
     MONGODB_URI=your_mongodb_uri
     JWT_SECRET=your_jwt_secret
     ```

4. **Database Setup**

   Ensure MongoDB is running locally or provide the appropriate MongoDB URI in your `.env` file.

5. **Start the Server**

   ```bash
   cd server && npm start
   ```

6. **Start the Client**

   Open a new terminal and navigate to the `client` folder:

   ```bash
   cd client && npm start
   ```

7. **Access the Application**

   Once the server and client are successfully running, you can access the application by navigating to `http://localhost:3000` in your web browser.
   The application uses MongoDB as its database. Below is the schema for the main collections:

### Teacher

- **_id**: ObjectId (automatically generated)
- **Name**: String
- **email**: String
- **Subject**: String
- **password**: String (hashed)

### Student

- **_id**: ObjectId (automatically generated)
- **Name**: String
- **email**: String
- **Grade**: String
- **password**: String (hashed)

## Additional Information

- The server runs on port `5000` by default, and the client runs on port `3000`. Ensure these ports are not in use.
- You may need to configure CORS settings in the server if the client is hosted on a different domain.

## Troubleshooting

- If you encounter any issues during setup or while running the application, refer to the error messages in the terminal for guidance.
- Ensure all dependencies are installed correctly by running `npm install` in both the `client` and `server` directories.
- Double-check the MongoDB URI and other configurations in the `.env` file.
