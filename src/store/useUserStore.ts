import { create } from 'zustand';

// Define the shape of the store
interface UserStore {
  user: {
    id: number;
    full_name: string;
    email: string;
  } | null;
  setUser: (user: { id: number; full_name: string; email: string }) => void;
  clearUser: () => void;
}

// Create the Zustand store
export const useUserStore = create<UserStore>((set) => {
  // Check if there is user data in localStorage and initialize the store with it
  const savedUser = localStorage.getItem('user');
  const initialUser = savedUser ? JSON.parse(savedUser) : null;

  return {
    user: initialUser,
    setUser: (user) => {
      set({ user });
      // Save user data to localStorage
      localStorage.setItem('user', JSON.stringify(user));
    },
    clearUser: () => {
      set({ user: null });
      // Remove user data from localStorage
      localStorage.removeItem('user');
    },
  };
});
