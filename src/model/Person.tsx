import {st, StringTranslation} from "./StringTranslation";
import {PersonDTO} from "./dto/PersonDTO";

export class Person {
    name: StringTranslation
    href: StringTranslation
    job: StringTranslation

    constructor(name: StringTranslation, href: StringTranslation, job: StringTranslation) {
        this.name = name
        this.href = href
        this.job = job
    }

    toDto() {
        return new PersonDTO(
            this.name.getString(true),
            this.name.getString(false),
            this.href.getString(true),
            this.href.getString(false),
            this.job.getString(true),
            this.job.getString(false),
        )
    }
}

export function person(dto: PersonDTO) {
    return new Person(
        st(dto.nameRu, dto.nameEn),
        st(dto.hrefRu, dto.hrefEn),
        st(dto.jobRu, dto.jobEn)
    )
}
