import { createContext, useContext, useEffect, useState } from "react";
export const ThemeContext = createContext({
    themeMode: 'light',
    darkTheme: () => {},
    lightTheme: () => {},
});

export const ThemeProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [themeMode, setThemeMode] = useState("light");
    const lightTheme = () => setThemeMode("light");
    const darkTheme = () => setThemeMode("dark");

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);

    useEffect(() => {
        const html = document.querySelector('html');
        html.classList.remove("light", "dark");
        html.classList.add(themeMode); 
    }, [themeMode]);

    return (
        <ThemeContext.Provider value= {{ products, themeMode, lightTheme, darkTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};
export function useThemeAPI() {
    return useContext(ThemeContext);
}