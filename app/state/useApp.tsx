// // app/state/useApp.tsx
// import { createContext, useContext, useState } from "react";

// const AppContext = createContext(null);
// export const useApp = () => useContext(AppContext);

// export function AppProvider({ children }) {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [userName, setUserName] = useState("Selma");
//   const [userEmail, setUserEmail] = useState("selma@example.com");
//   // ...handlers here
//   return (
//     <AppContext.Provider value={{ isAuthenticated, userName, userEmail }}>
//       {children}
//     </AppContext.Provider>
//   );
// }
