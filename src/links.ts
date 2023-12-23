import {StringTranslation} from "./model/StringTranslation";

export class TranslatedLink {
    label: StringTranslation
    href: string | StringTranslation
    target: string

    constructor(label: StringTranslation, href: string | StringTranslation, target: string = "") {
        this.label = label
        this.href = href
        this.target = target
    }

    getString(language: boolean){
        if (typeof this.href == "string"){
            return this.href
        } else {
            return this.href.getString(language)
        }
    }
}