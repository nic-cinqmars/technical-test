# Todo App

### Description
A modern Todo application built with React and TypeScript, featuring a clean architecture and modern development tools.

### Technology Stack
- **Frontend Framework**: React 19
- **Language**: TypeScript
- **Build Tool**: Vite 6
- **UI Components**: Material-UI (MUI) 6
- **State Management**: React Query (TanStack Query)
- **Routing**: React Router DOM 7
- **HTTP Client**: Axios
- **Notifications**: Sonner
- **Development Tools**:
  - ESLint
  - TypeScript
  - Vite
  - React Developer Tools

### Project Structure
```
src/
├── application/     # Application layer (routing, configuration, main setup)
├── domain/         # Business logic and domain entities
├── theme/          # UI theming and styling
└── components/     # Reusable UI components
```

### Getting Started
1. Clone the repository
2. Install dependencies:
```bash
yarn
```
3. Create a `.env` file with the following variables:
```
VITE_BASE_API_URL=your_api_url
VITE_BASE_MOCK_API_DATA=true/false
```
4. Run the development server:
```bash
yarn dev
```

### Available Scripts
- `yarn dev`: Start development server
- `yarn build`: Build for production
- `yarn lint`: Run ESLint
- `yarn preview`: Preview production build
