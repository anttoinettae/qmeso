export class StringTranslation{
    russian: string
    english: string
    constructor(russian: string, english: string) {
        this.russian = russian
        this.english = english
    }

    getString(isRussian: boolean): string{
        return isRussian ? this.russian : this.english
    }
}

export function st(russian: string, english: string) {
    return new StringTranslation(russian, english)
}