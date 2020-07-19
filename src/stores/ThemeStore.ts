import {action, observable} from "mobx";
import BaseStore from "./BaseStore";
import {persist} from "mobx-persist";

class ThemeStore extends BaseStore {
    @persist @observable
    isDarkMode: boolean = false;

    constructor() {
        super();
        this.setup('theme', this)
    }

    @action
    toggleDarkMode() {
        this.isDarkMode = !this.isDarkMode;
    }
}

export default ThemeStore;