import React from "react";
import {observer} from "mobx-react-lite";
import {useStore} from "../../stores/Store";
import "./ThemeBtn.scss";

const ThemeBtn = observer(() => {
    const { themeStore } = useStore();
    const { isDarkMode, toggleDarkMode } = themeStore;

    return (
        <span className="themeBtn" role="img" aria-label="dark" onClick={() => {
            toggleDarkMode()
        }}>
            {isDarkMode ? "🌑" : "☀"}️
        </span>
    );
});

export default ThemeBtn;