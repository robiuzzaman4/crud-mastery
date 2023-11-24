## **Crud Mastery**

### **Overview**
**This is a simple CRUD (Create, Read, Update, Delete) application built using Express, MongoDB, and TypeScript.**

### **Prerequisites**
**Before you begin, ensure you have the installed `Node` on your machine.**

### **Installation**
**1. Clone the repository:**
```bash
git clone https://github.com/robiuzzaman4/crud-mastery.git
```
**2. Navigate to the project directory:**
```bash
cd crud-mastery
```
**3. Install dependencies:**
```bash
npm install
```
**4. Set up environment variables:**
```bash
PORT=5000
DATABASE_URI=your_mongodb_connection_string
SALT_ROUNDS=12
```



### **Running the Application**
**1. Development Mode**
```bash
npm run start:dev
```

**2. Production Mode**
```bash
npm run build
npm run start:prod
```



### **Linting and Formatting**
```bash
// To lint the code:
npm run start:dev

// To automatically fix linting issues:
npm run lint:fix
```



### **Linting and Formatting**
```bash
// To lint the code:
npm run start:dev

// To automatically fix linting issues:
npm run lint:fix

// To format the code using Prettier:
npm run prettier

// To automatically fix formatting issues:
npm run prettier:fix
```



### **Endpoints**
**1. Create a new user**
```ts
Endpoint: POST /api/users
```

**2. Retrieve a list of all users**
```ts
Endpoint: GET /api/users
```

**3. Retrieve a specific user by ID**
```ts
Endpoint: GET /api/users/:userId
```

**4. Update user information**
```ts
Endpoint: PUT /api/users/:userId
```

**5. Delete a user**
```ts
Endpoint: DELETE /api/users/:userId
```

**6. Add New Product in Order**
```ts
Endpoint: PUT /api/users/:userId/orders
```

**7. Retrieve all orders for a specific user**
```ts
Endpoint: GET /api/users/:userId/orders
```

**8. Calculate Total Price of Orders for a Specific User**
```ts
Endpoint: GET /api/users/:userId/orders/total-price
```
