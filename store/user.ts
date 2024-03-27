import { create } from "zustand";

interface User {
  name: string;
  age: string;
}
interface UserStore {
  user: User;
  updatedNameInput: (newName: string) => void;
  updatedName: (newUser: string) => void;
}

export const userStore = create<UserStore>((set) => ({
  user: {
    name: "zakk",
    age: "24",
  },
  updatedNameInput: (newName: string) =>
    set((state) => ({
      user: {
        ...state.user,
        name: newName,
      },
    })),
  updatedName: (newUser: string) =>
    set((state) => ({
      user: {
        ...state.user,
        name: newUser,
      },
    })),
}));
