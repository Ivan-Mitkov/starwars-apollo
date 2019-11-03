import { useEffect, useState } from "react";

export const useDarkMode = () => {
  // const [theme, setTheme] = useState("lightTheme");
  const [theme, setTheme] = useState("lightTheme");
  const [componentMounted, setComponentMounted] = useState(false);

  const toggleTheme = () => {
    // if the theme is not light, then set it to dark
    if (theme === "lightTheme") {
      window.localStorage.setItem("theme", "darkTheme");
      setTheme("darkTheme");
      // otherwise, it should be light
    } else {
      window.localStorage.setItem("theme", "lightTheme");
      setTheme("lightTheme");
    }
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme");
    if (localTheme) {
      setTheme(localTheme);
    } else {
      setTheme("lightTheme");
      window.localStorage.setItem("theme", "lightTheme");
    }
    setComponentMounted(true);
  }, []);

  return [theme, toggleTheme,componentMounted];
};
