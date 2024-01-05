import { useState, useEffect } from 'react'
import { FaMoon } from "react-icons/fa6";
import { GoSun } from "react-icons/go";

function DarkMode() {
    const [theme, setTheme] = useState(
        localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
    );

    const element = document.documentElement;

    useEffect(() => {
        if (theme === "dark") {
            element.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            element.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [theme]);

    return (
        <div className='relative'>
            <FaMoon
                onClick={() =>
                    setTheme((data) => (data === "dark" ? "light" : "dark"))
                }
                className={`size-18 selection:cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300 absolute right-0 z-10  ${theme === "dark" ? "opacity-0" : "opacity-100"
                    } `}

            />
            <GoSun
                onClick={() =>
                    setTheme((data) => (data === "dark" ? "light" : "dark"))
                }
                className={`size-18 cursor-pointer drop-shadow-[1px_1px_2px_rgba(0,0,0,0.5)] duration-300  ${theme === "dark" ? "opacity-100" : "opacity-0"
                    } `}
            />
        </div>
    )
}

export default DarkMode 