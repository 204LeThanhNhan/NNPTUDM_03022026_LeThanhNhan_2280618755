# API Documentation

Base URL: `http://localhost:3000`

---

## ROLE APIs

### 1. Tạo Role mới (CREATE)
```
POST /api/roles
```

**Payload:**
```json
{
  "name": "Admin",
  "description": "Administrator role"
}
```

### 2. Lấy tất cả Roles (READ ALL)
```
GET /api/roles
```

**Payload:** Không cần

---

### 3. Lấy Role theo ID (READ BY ID)
```
GET /api/roles/:id
```

**Payload:** Không cần
---

### 4. Cập nhật Role (UPDATE)
```
PUT /api/roles/:id
```

**Payload:**
```json
{
  "name": "Super Admin",
  "description": "Super administrator with full access"
}
---

### 5. Xóa mềm Role (SOFT DELETE)
```
DELETE /api/roles/:id
```

---

## USER APIs

### 1. Tạo User mới (CREATE)
```
POST /api/users
```

**Payload:**
```json
{
  "username": "johndoe",
  "password": "password123",
  "email": "john@example.com",
  "fullName": "John Doe",
  "role": "65f1a2b3c4d5e6f7g8h9i0j1"
}
```

---

### 2. Lấy tất cả Users (READ ALL)
```
GET /api/users
```

**Payload:** Không cần

---

### 3. Lấy User theo ID (READ BY ID)
```
GET /api/users/:id
```

**Payload:** Không cần
---

### 4. Cập nhật User (UPDATE)
```
PUT /api/users/:id
```

**Payload:**
```json
{
  "fullName": "John Smith",
  "status": true,
  "avatarUrl": "https://example.com/avatar.jpg"
}
---

### 5. Xóa mềm User (SOFT DELETE)
```
DELETE /api/users/:id
```

**Payload:** Không cần
---

### 6. Kích hoạt tài khoản (ENABLE ACCOUNT)
```
POST /api/users/enable
```

**Payload:**
```json
{
  "email": "john@example.com",
  "username": "johndoe"
}
---

### 7. Vô hiệu hóa tài khoản (DISABLE ACCOUNT)
```
POST /api/users/disable
```

**Payload:**
```json
{
  "email": "john@example.com",
  "username": "johndoe"
}
---

### 8. Tăng số lần đăng nhập (INCREMENT LOGIN COUNT)
```
POST /api/users/:id/login
```

**Payload:** Không cần
---

## Tóm tắt các API Endpoints

| Method | Endpoint | Mô tả |
|--------|----------|-------|
| POST | `/api/roles` | Tạo role mới |
| GET | `/api/roles` | Lấy tất cả roles |
| GET | `/api/roles/:id` | Lấy role theo ID |
| PUT | `/api/roles/:id` | Cập nhật role |
| DELETE | `/api/roles/:id` | Xóa mềm role |
| POST | `/api/users` | Tạo user mới |
| GET | `/api/users` | Lấy tất cả users |
| GET | `/api/users/:id` | Lấy user theo ID |
| PUT | `/api/users/:id` | Cập nhật user |
| DELETE | `/api/users/:id` | Xóa mềm user |
| POST | `/api/users/enable` | Kích hoạt tài khoản |
| POST | `/api/users/disable` | Vô hiệu hóa tài khoản |
| POST | `/api/users/:id/login` | Tăng số lần đăng nhập |

---
