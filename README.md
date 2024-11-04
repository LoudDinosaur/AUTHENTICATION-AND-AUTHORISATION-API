# AuthSecure-API

A REST API for secure user authentication and authorization built with Express, MongoDB Atlas, and JWT. It includes role-based access control for different user roles: Student, Admin, and Instructor.

## Features
1. User Registration and Login with hashed passwords
2. Role-Based Access Control with middleware functions:
a. **isStudent**: For Student access
b. **isAdmin**: For Admin access
c. **isInstructor**: For Instructor access
3. JWT Authentication with secure session management using cookies
4. Protected Routes accessible only by authorized roles

## Technologies Used
1. **Express.j**s: Backend framework
2. **MongoDB Atlas**: Cloud-based MongoDB database
3. **Mongoose**: Object modeling for MongoDB
4. **JWT (JSON Web Tokens)**: For secure user authentication
5. **Bcrypt**: For hashing passwords
6. **dotenv**: Environment variable management
7. **cookie-parser**: Parses cookies to manage sessions

## API Endpoints
# Authentication Routes
1. POST **/signup**: Register a new user
2. POST **/login**: User login
**Protected Routes (Require JWT & Role-Based Access)**
1. POST /test: Access granted only to authorized roles (Student, Admin, Instructor)

## Usage
Base URL: http://localhost:4000/api/v1
/test: Requires valid JWT token and appropriate user role for access

## Middleware
auth: JWT verification for user authentication
isStudent, isAdmin, isInstructor: Role-based access control
