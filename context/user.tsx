"use client";
import { createContext, useContext, useState } from "react";
interface ContextValue {
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
}
const AppContext = createContext<ContextValue | undefined>(undefined);

export default function Provider({ children }: { children: React.ReactNode }) {
  const [name, setName] = useState<string>("zakk");
  return (
    <AppContext.Provider value={{ name, setName }}>
      {children}
    </AppContext.Provider>
  );
}
export function useAppContext() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("use context not found");
  }
  return context;
}
