import { createContext, useContext, useState, type ReactNode } from "react";
import { useNavigate } from "react-router";

type AppContextType = {
  userName: string;
  userEmail: string;
  userAvatar: string;
  onLogin: (name: string, email: string, avatar: string) => void;
  onLogout: () => void;
};

const AppContext = createContext<AppContextType | null>(null);
export const useApp = () => useContext(AppContext);

export function AppProvider({ children }: { children: ReactNode }) {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userAvatar, setUserAvatar] = useState("");

  const onLogin = (name: string, email: string, avatar: string) => {
    setUserName(name);
    setUserEmail(email);
    setUserAvatar(avatar);
  }

  const onLogout = () => {
    setUserName("");
    setUserEmail("");
    setUserAvatar("");
    console.log("User logged out");
  }
  
  return (
    <AppContext.Provider value={{ userName, userEmail, userAvatar, onLogin, onLogout }}>
      {children}
    </AppContext.Provider>
  );
}
