# PawfectMatch

This is a code bundle for PawfectMatch. The original project is available at https://www.figma.com/design/NjDv4p6RUoi3fdg1imc6wj/PawfectMatch-Web-App-Design.

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
