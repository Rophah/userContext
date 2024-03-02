import { createContext, useEffect, useState } from "react";
import useLocalStorage from "use-local-storage";

const ThemeContext = createContext(null);

export const ThemeContextProvider = ({children}) => {

    const [theme, setTheme] = useLocalStorage("theme", "light");

    const [changeBkg, setChangeBkg] = useState(true);

    useEffect(() =>{
        if (theme === "light"){
        setChangeBkg(false)
        }
    }, [theme]);
    
    const ToggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
        setChangeBkg(!changeBkg);
    }

    return (
        <ThemeContext.Provider value={{ theme, ToggleTheme, changeBkg}} >
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeContext;