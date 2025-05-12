import { makeAutoObservable } from "mobx";


class LanguageStore {
    language = 'English'

    constructor() {
        makeAutoObservable(this);
    }

    setLanguage(tn: string) {
        this.language = tn
    }
}
export default new LanguageStore();