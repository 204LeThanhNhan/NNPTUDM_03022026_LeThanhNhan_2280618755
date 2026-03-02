# User Management Application

Node.js web application with MongoDB for user and role management.

## Installation

```bash
npm install
```

## Configuration

Update `.env` file with your MongoDB connection string:
```
MONGODB_URI=mongodb://localhost:27017/user_management
PORT=3000
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

Base URL: `http://localhost:3000`

### Role APIs

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/roles` | Tạo role mới |
| GET | `/api/roles` | Lấy tất cả roles |
| GET | `/api/roles/:id` | Lấy role theo ID |
| PUT | `/api/roles/:id` | Cập nhật role |
| DELETE | `/api/roles/:id` | Xóa mềm role |

**Payload mẫu cho POST/PUT Role:**
```json
{
  "name": "Admin",
  "description": "Administrator role"
}
```

---

### User APIs

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/users` | Tạo user mới |
| GET | `/api/users` | Lấy tất cả users |
| GET | `/api/users/:id` | Lấy user theo ID |
| PUT | `/api/users/:id` | Cập nhật user |
| DELETE | `/api/users/:id` | Xóa mềm user |
| POST | `/api/users/enable` | Kích hoạt tài khoản |
| POST | `/api/users/disable` | Vô hiệu hóa tài khoản |
| POST | `/api/users/:id/login` | Tăng số lần đăng nhập |

**Payload mẫu cho POST User (Tạo mới):**
```json
{
  "username": "johndoe",
  "password": "password123",
  "email": "john@example.com",
  "fullName": "John Doe",
  "role": "role_id_here"
}
```

**Payload mẫu cho PUT User (Cập nhật):**
```json
{
  "fullName": "John Smith",
  "status": true,
  "avatarUrl": "https://example.com/avatar.jpg"
}
```

**Payload mẫu cho Enable/Disable Account:**
```json
{
  "email": "john@example.com",
  "username": "johndoe"
}
```

---

## Quick Test Examples

### Tạo Role
```bash
curl -X POST http://localhost:3000/api/roles \
  -H "Content-Type: application/json" \
  -d '{"name":"Admin","description":"Administrator role"}'
```

### Tạo User
```bash
curl -X POST http://localhost:3000/api/users \
  -H "Content-Type: application/json" \
  -d '{"username":"admin","password":"123456","email":"admin@test.com","fullName":"Admin User"}'
```

### Enable Account
```bash
curl -X POST http://localhost:3000/api/users/enable \
  -H "Content-Type: application/json" \
  -d '{"email":"admin@test.com","username":"admin"}'
```

### Disable Account
```bash
curl -X POST http://localhost:3000/api/users/disable \
  -H "Content-Type: application/json" \
  -d '{"email":"admin@test.com","username":"admin"}'
```

---

## Features

- ✅ CRUD operations cho User và Role
- ✅ Soft delete (xóa mềm) - dữ liệu không bị xóa vĩnh viễn
- ✅ Password hashing với bcrypt
- ✅ Enable/Disable account
- ✅ Login count tracking
- ✅ Role reference trong User model

## Documentation

Xem chi tiết tài liệu API tại: [API_DOCUMENTATION.md](./API_DOCUMENTATION.md)
