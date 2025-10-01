import { createContext, useContext } from "solid-js";
// Token context
const TokenContext = createContext();
// Token provider component
const TokenProvider = (props) => {
    const key = import.meta.env.VITE_GITHUB_KEY;
 
    const getToken = (key) =>{
        try {
            const a = decodeURIComponent(key);
            const b = atob(a);
            const c = atob(b);
            return c;
        } catch(e) {
            console.error(e);
            return null;
        }
      }
      
    const token = getToken(key);

    return (
        <TokenContext.Provider value={token}>
            {props.children}
        </TokenContext.Provider>
    );
};

// Hook to use the token
export function useToken() {
    return useContext(TokenContext);
}

export default TokenProvider;