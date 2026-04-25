import { createContext, useContext, useEffect, useState } from "react";
import {
  clearStoredSession,
  getProfileSnapshot,
  getStoredSession,
  initializeWellnessStore,
  loginUser,
  signupUser
} from "../lib/wellnessStore";

const AuthContext = createContext(null);
export function AuthProvider({ children }) {
  const [authState, setAuthState] = useState(() => {
    initializeWellnessStore();
    return getStoredSession();
  });
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    localStorage.setItem("pranalens-auth", JSON.stringify(authState));
  }, [authState]);

  const signup = async (payload) => {
    setIsLoading(true);
    try {
      const data = signupUser(payload);
      setAuthState(data);
      return data;
    } finally {
      setIsLoading(false);
    }
  };

  const login = async (payload) => {
    setIsLoading(true);
    try {
      const data = loginUser(payload);
      setAuthState(data);
      return data;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    clearStoredSession();
    setAuthState({ token: "", user: null });
  };

  const refreshProfile = async () => {
    if (!authState.user?.id) return null;
    const data = getProfileSnapshot(authState.user.id);
    setAuthState((current) => ({ ...current, user: data.user }));
    return data;
  };

  return (
    <AuthContext.Provider
      value={{
        token: authState.token,
        user: authState.user,
        isAuthenticated: Boolean(authState.token),
        isLoading,
        signup,
        login,
        logout,
        refreshProfile
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
