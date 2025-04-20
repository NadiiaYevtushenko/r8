# 🧠 React + Redux Toolkit (Vite + TypeScript) — Demonstration Project

This project illustrates the migration to global state management using Redux Toolkit in a React + TypeScript application.

It utilizes modern technologies: **React**, **TypeScript**, **Vite**, and **Redux Toolkit**. The application's components are modularly organized to handle input, visualization, state management, and data manipulation.

---

## 🧩 Key Features

- 🔄 Global state managed using Redux Toolkit
- 🧩 Architecture based on `createSlice`
- ✅ Fully typed state, actions, and components using TypeScript
- 🎯 Clean separation of concerns: components, store, and slices are in separate files
- 🚀 Redux is connected through `Provider` in `main.tsx`
- 🖱️ All state changes are handled via `useDispatch`, and access via `useSelector`

---

## 📁 Project Structure

```
src/
├── src/App.tsx
├── src/components/Counter.tsx
├── src/main.tsx
├── src/redux/actionTypes.ts
├── src/redux/actions.ts
├── src/redux/reducers.ts
├── src/redux/selectors.ts
├── src/redux/store.ts
├── src/redux/types.ts
```

---

## 🚀 Running Locally

### 1. Install dependencies
```bash
npm install
```

### 2. Start the development server
```bash
npm run dev
```

🔗 Open in browser: **http://localhost:5173**

---

## 🌐 Deployment

You can deploy the app on platforms like **Vercel**, **Netlify**, or other static hosting providers.

### Example deployment on Vercel
```bash
npm install -g vercel
vercel
```

---

## 🧠 Technologies Used

- ⚛️ React
- 💬 TypeScript
- 📦 Redux Toolkit
- ⚡ Vite
- 🎨 CSS

---

## 👉 Live Demo

**Live Deployment:**  
[ ]( )