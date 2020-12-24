import { computed, runInAction } from "mobx";
import agent from "../api/agent";
import { RootStore } from "./rootStore";


export default class UserStore {
    rootStore: RootStore;
    constructor(rootStore: RootStore) {
        this.rootStore = rootStore
    }
}

@observable user: User | null = null;

@computed get isLoggedIn() {
    return !!this.user;
}

@action login = async (values: IUserFormValues) => {
    try {
        const user = await agent.User.login(values);
        runInAction(() => {
            this.user = user;
        });
        this.rootStore.commonStore.setToken(user.token);
        this.rootStore.modalStore.closeModal();
        history.pushState('/activities');
    } catch (error) {
        throw error;
    }
        
    }
}