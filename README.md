# PawfectMatch

A platform connecting pet owners with trusted local helpers for safe, loving pet care.

## Project Structure

### Backend (JavaScript)
- **Location**: `server/` directory
- **Technology**: Node.js + Express.js + MongoDB (Mongoose)
- **Language**: **Pure JavaScript** (`.js` files)
- **Files**: 
  - `server.js` - Main server entry point
  - `db.js` - MongoDB connection
  - `controllers/` - Request handlers
  - `models/` - Mongoose schemas
  - `routes/` - API routes
  - `middleware/` - Authentication middleware

### Frontend (TypeScript)
- **Location**: `src/` directory
- **Technology**: React + TypeScript + Vite
- **Language**: TypeScript (`.tsx` and `.ts` files)

## Environment Setup

**Important**: Create a `.env` file in the `server/` directory with the following variables:

```env
MONGODB_URI=your_mongodb_connection_string_here
JWT_SECRET=your_jwt_secret_key_here
PORT=3001
```

## Running the code

### Install dependencies
```bash
npm i
```

### Start development server (Frontend)
```bash
npm run dev
```

### Start backend server
```bash
npm run server
```

## Tech Stack

**Backend:**
- Node.js
- Express.js
- MongoDB / Mongoose
- JWT Authentication
- bcrypt for password hashing

**Frontend:**
- React 18
- TypeScript
- Vite
- Tailwind CSS
- Radix UI Components
