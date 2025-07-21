import React, {
    createContext,
    useContext,
    useEffect,
    useState,
    useCallback,
  } from "react";
  import { useMsal } from "@azure/msal-react";
  import { loginRequest } from "../../authConfig";
  
  const AuthContext = createContext();
  
  export const AuthProvider = ({ children }) => {
    const { instance, accounts, inProgress } = useMsal();
    const [accessToken, setAccessToken] = useState(null);
    const [user, setUser] = useState(null);
  
    const getToken = useCallback(async () => {
      if (!accounts || accounts.length === 0) return null;
  
      try {
        const response = await instance.acquireTokenSilent({
          ...loginRequest,
          account: accounts[0],
        });
        setAccessToken(response.accessToken);
        return response.accessToken;
      } catch (error) {
        console.error("Silent token acquisition failed:", error);
        try {
          const response = await instance.acquireTokenPopup({
            ...loginRequest,
            account: accounts[0],
          });
          setAccessToken(response.accessToken);
          return response.accessToken;
        } catch (popupError) {
          console.error("Popup token acquisition failed:", popupError);
          return null;
        }
      }
    }, [accounts, instance]);
  
    useEffect(() => {
      if (accounts && accounts.length > 0 && inProgress === "none") {
        console.log("✅ User from AuthProvider:", accounts[0]);
        setUser(accounts[0]);
        getToken();
      }
    }, [accounts, inProgress, getToken]);
  
    return (
      <AuthContext.Provider value={{ accessToken, getToken, user }}>
        {children}
      </AuthContext.Provider>
    );
  };
  
  export const useAuth = () => useContext(AuthContext);
  