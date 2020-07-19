import { createContext, useContext } from "react";
import ThemeStore from "./ThemeStore";
import IStore from "../models/IStore";

const store: IStore = {
    themeStore: new ThemeStore()
};

export const useStore = () => {
    return useContext(createContext(store));
};