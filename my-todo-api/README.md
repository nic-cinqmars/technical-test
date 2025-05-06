# Todo App

### Description
A backend API built to serve endpoints for a Todo application

### Technology Stack
- **Language**: TypeScript
- **Back end framework**: Express
- **Development Tools**:
    - ESLint
    - TypeScript
    - nodemon
    - ts-node

### Project Structure
```
src/
├── server.ts       # Main entry point that configures Express and serves API
├── config/         # Configuration pulled from .env file
├── models/         # Models used in the API
├── controllers/    # Controllers used for API functions on routes
└── routes/         # Configured routes for API
```

### Getting Started
1. Clone the repository
2. Install dependencies:
```bash
yarn
```
3. Create a `.env` file with the following variables:
```
PORT=port_api_serves_on
```
4. Run the development server:
```bash
yarn dev
```

### Available Scripts
- `yarn dev`: Start development server
- `yarn build`: Build for production
- `yarn lint`: Run ESLint
