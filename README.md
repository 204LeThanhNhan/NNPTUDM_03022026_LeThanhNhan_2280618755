# User Management Application

Node.js web application with MongoDB for user and role management.

## Installation

```bash
npm install
```

## Running the Application

```bash
npm start
```

For development with auto-reload:
```bash
npm run dev
```

## API Endpoints

### Users
- GET /api/users - Get all users
- GET /api/users/:id - Get user by ID
- POST /api/users - Create new user
- PUT /api/users/:id - Update user
- DELETE /api/users/:id - Delete user
- POST /api/users/:id/login - Increment login count

### Roles
- GET /api/roles - Get all roles
- GET /api/roles/:id - Get role by ID
- POST /api/roles - Create new role
- PUT /api/roles/:id - Update role
- DELETE /api/roles/:id - Delete role
