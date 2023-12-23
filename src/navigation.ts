import {st, StringTranslation} from "./model/StringTranslation";
import * as t from './translations';
import {TranslatedLink} from './links'


class Dropdown{
    name: StringTranslation
    baseLink: string
    fields: Array<TranslatedLink>
    constructor(name: StringTranslation, baseLink: string, fields: Array<TranslatedLink>) {
        this.name = name
        this.baseLink = baseLink
        this.fields = fields
    }
}

export let navigationArray = [
    new TranslatedLink(t.main, "/"),
    new TranslatedLink(t.people, "/people"),
    new TranslatedLink(t.publications, "/publications"),
    new Dropdown(t.prep,
        "/teaching",
        [
            new TranslatedLink(t.schedule, st("https://chair.itp.ac.ru/", "https://chair.itp.ac.ru/?lang=en"), "_blank"),
            new TranslatedLink(t.researches, "/teaching/researches"),
            new TranslatedLink(t.lectures, "/teaching/lectures"),
            new TranslatedLink(t.theses, "/teaching/theses"),
        ]),
    new Dropdown(
        t.sems,
        "/conferences",
        [
            new TranslatedLink(t.secsem, "/conferences/sector"),
            new TranslatedLink(t.schools, "/conferences/schools"),
            new TranslatedLink(t.asp, "/conferences/aspirants")
        ])
]