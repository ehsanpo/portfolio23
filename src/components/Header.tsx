import React, { useState } from "react";
import Link from "next/link";
import Button from "@/components/Button";

type ValidPath = `/${string}`; // Type for valid paths starting with slash

interface MenuItem {
    [key: string]: ValidPath;
}

const menu: MenuItem = {
    Home: "/",
    About: "/about",
    Notes: "/notes",
    Portfolio: "/portfolio",
    Skills: "/skills",
    Music: "/music",
};

const themes = [
    "dark",

    "valentine",
    "halloween",

    "forest", //bad card
    "lofi", //bad card

    "dracula", ///bad card
    "night", ///bad card
    "coffee", //bad card
    "winter", //bad card
];

const Header: React.FC = () => {
    const [currentThemeIndex, setCurrentThemeIndex] = useState(0);

    const toggleTheme = () => {
        setCurrentThemeIndex((prevIndex) => (prevIndex + 1) % themes.length);
        const newTheme = themes[currentThemeIndex];
        document.documentElement.setAttribute("data-theme", newTheme);
    };

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="40"
                            viewBox="0 0 27.8 26.7"
                        >
                            <path
                                fill="#FE3048"
                                d="M.5 19.4c-.3-.4-.5-.7-.5-1.2 0-.4.2-.8.5-1.1L17.1.5c.3-.3.7-.5 1.1-.5.4 0 .8.2 1.1.5.3.3.5.7.5 1.1 0 .4-.2.8-.5 1.1L2.7 19.4c-.3.3-.7.5-1.1.5-.4-.1-.8-.2-1.1-.5zm11.9 6.2c-.3.3-.8.6-1.3.8s-1 .3-1.5.3-1.1-.1-1.6-.3c-.5-.2-1.1-.5-1.5-1l-2.1-2.1c-.4-.4-.6-.8-.5-1.2.1-.4.4-.8.9-1.3L20.6 5c.3-.3.7-.5 1.1-.5.4 0 .8.2 1.1.5.3.3.5.7.5 1.1 0 .4-.2.8-.5 1.1l-15 15L9 23.4c.2.2.4.2.6.2.2 0 .5-.1.7-.4L25.1 8.4c.3-.3.7-.4 1.1-.4.4 0 .8.2 1.1.5.3.3.5.7.5 1.1 0 .4-.2.8-.5 1.1L12.4 25.6z"
                            />
                        </svg>
                    </label>
                    <ul
                        tabIndex={0}
                        className="w-52 menu dropdown-content rounded-box menu-sm z-[1] mt-3 bg-base-100 p-2 shadow "
                    >
                        {Object.keys(menu).map((key) => (
                            <li key={key}>
                                <Link
                                    className="hover:bg-base-200"
                                    href={menu[key]}
                                >
                                    {key}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {Object.keys(menu).map((key) => (
                        <li key={key}>
                            <Link className="text-m uppercase" href={menu[key]}>
                                {key}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="navbar-end">
                <Button onClick={() => toggleTheme()} className="btn">
                    Change Theme
                </Button>
            </div>
        </div>
    );
};
export default Header;
