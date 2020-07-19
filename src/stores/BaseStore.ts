import autoBind from "auto-bind";
import {action, observable} from "mobx";
import IMessage from "../models/IMessage";
import {create} from "mobx-persist";

const hydrate = create({
    jsonify: true,
});

class BaseStore {
    @observable
    isLoading: boolean = false;

    @observable
    error: IMessage | null = null;

    @observable
    success: IMessage | null = null;

    constructor() {
        autoBind(this);
    }

    @action
    setup(name: string, store: any) {
        autoBind(store);
        hydrate(name, store)
    }

    @action
    reset() {
        this.isLoading = false;
        this.error = null;
        this.success = null;
    }
}

export default BaseStore;