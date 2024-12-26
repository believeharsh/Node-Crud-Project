# Node.js CRUD Project with MongoDB

This is a Node.js CRUD application that connects to a MongoDB database to manage users. It provides basic CRUD functionality including Create, Read, Update, and Delete operations. This project is designed to showcase how to use Node.js with MongoDB for managing user data.

## Features

- User creation (POST)
- Get all users (GET)
- Get user by ID (GET)
- Update user by ID (PATCH)
- Delete user by ID (DELETE)

## Tech Stack

- **Node.js**: JavaScript runtime for server-side code
- **Express.js**: Web framework for building the API
- **MongoDB**: NoSQL database to store user data
- **Mongoose**: ODM (Object Data Modeling) library to interact with MongoDB
- **Postman** or **cURL** for testing API routes

## Prerequisites

Before you begin, ensure you have the following installed on your system:

- **Node.js**: [Install Node.js](https://nodejs.org/)
- **MongoDB**: [Install MongoDB](https://www.mongodb.com/try/download/community) or use a MongoDB cloud service like MongoDB Atlas

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/NodeCrudProject.git

   ```

2. Navigate into the project directory:

   ```bash
   cd NodeCrudProject

   ```

3. Install the dependencies:

   ```bash
   npm install

   ```

4. Set up MongoDB:
   If you are using a local MongoDB instance, make sure your MongoDB server is running on mongodb://127.0.0.1:27017/NodeCrudProject.
   If you are using MongoDB Atlas, update the connection URL in the connection.js file with your MongoDB Atlas connection string.

5. Start the server:
   ```bash
   npm start
   ```

## API Endpoints

### 1. Get All Users

- **Endpoint**: `GET /api/users`
- **Description**: Fetch all users from the database.
- **Response**:
  ```json
  [
    {
      "_id": "user_id",
      "firstName": "John",
      "lastName": "Doe",
      "email": "john@example.com",
      "gender": "male",
      "jobTitle": "Developer",
      "createdAt": "2022-01-01T00:00:00.000Z",
      "updatedAt": "2022-01-01T00:00:00.000Z"
    }
  ]
  ```

### 2. Get User by ID

- **Endpoint**: `GET /api/users/:id`
- **Description**: Fetch a user by their unique ID.
- **Response**:
  ```json
  {
    "_id": "user_id",
    "firstName": "John",
    "lastName": "Doe",
    "email": "john@example.com",
    "gender": "male",
    "jobTitle": "Developer",
    "createdAt": "2022-01-01T00:00:00.000Z",
    "updatedAt": "2022-01-01T00:00:00.000Z"
  }
  ```

### 3. Create a New User

- **Endpoint**: `POST /api/users`
- **Description**: Create a new user with the provided data.
- **Request Body**:
  ```json
  {
    "firstName": "John",
    "lastName": "Doe",
    "email": "john@example.com",
    "gender": "male",
    "jobTitle": "Developer"
  }
  ```
- **Response** :
  ```json
  {
    "msg": "Successfully created user"
  }
  ```

### 4. Update User by ID

- **Endpoint**: `PATCH /api/users/:id`
- **Description**: Update a user's data by their unique ID.
- **Request Body**:
  ```json
  {
    "firstName": "Updated Name"
  }
  ```
- **Response** :
  ```json
  {
    "_id": "user_id",
    "firstName": "Updated Name",
    "lastName": "Doe",
    "email": "john@example.com",
    "gender": "male",
    "jobTitle": "Developer",
    "createdAt": "2022-01-01T00:00:00.000Z",
    "updatedAt": "2022-01-01T00:00:00.000Z"
  }
  ```

### 5. Delete User by ID

- **Endpoint**: `DELETE /api/users/:id`
- **Description**: Delete a user by their unique ID.
- **Response**:
  ```json
  {
    "_id": "user_id",
    "firstName": "John",
    "lastName": "Doe",
    "email": "john@example.com",
    "gender": "male",
    "jobTitle": "Developer",
    "createdAt": "2022-01-01T00:00:00.000Z",
    "updatedAt": "2022-01-01T00:00:00.000Z"
  }
  ```

## Testing the API

You can test the API using the following tools:

### 1. Postman

- [Download Postman](https://www.postman.com/downloads/)

### 2. cURL

Test using the command line with the following example:

    ```bash
    curl -X GET http://localhost:8000/api/users
    ```

### 3. Contributing

Fork the repository.
Create your feature branch (git checkout -b feature-branch).
Commit your changes (git commit -m 'Add new feature').
Push to the branch (git push origin feature-branch).
Open a pull request.
License
This project is licensed under the MIT License - see the LICENSE file for details.

### How to Use:

1. **Clone the repository** and follow the instructions in the **Installation** section.
2. Ensure your **MongoDB** server is running, either locally or via MongoDB Atlas, and update the connection string in `connection.js` if necessary.
3. **Start the server** by running `npm start`. The server will listen on port 8000.
4. Test the **API endpoints** using tools like **Postman** or **cURL**.

Let me know if you need any more help with this! 😊
