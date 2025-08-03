import { createContext, useContext, useState, type ReactNode } from "react";

interface User {
  email: string;
  name?: string;
  token: string;
  [key: string]: any; // for additional fields like ID, role, etc.
}

interface UserContextType {
  user: User | null;
  setUser: (user: User | null) => void;
  logout: () => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(() => {
    const stored = localStorage.getItem("user");
    return stored ? JSON.parse(stored) : null;
  });

  const logout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setUser(null);
  };

  const setUserAndPersist = (userData: User | null) => {
    if (userData) {
      localStorage.setItem("user", JSON.stringify(userData));
      localStorage.setItem("auth_key", userData.auth_key);
    } else {
      localStorage.removeItem("user");
      localStorage.removeItem("token");
    }
    setUser(userData);
  };

  return (
    <UserContext.Provider value={{ user, setUser: setUserAndPersist, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) throw new Error("useUser mususerDatat be used within a UserProvider");
  return context;
};
