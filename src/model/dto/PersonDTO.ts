export class PersonDTO {
    nameRu: string
    nameEn: string
    hrefRu: string
    hrefEn: string
    jobRu: string
    jobEn: string

    constructor(nameRu: string, nameEn: string, hrefRu: string, hrefEn: string, jobRu: string, jobEn: string) {
        this.nameRu = nameRu
        this.nameEn = nameEn
        this.hrefEn = hrefEn
        this.hrefRu = hrefRu
        this.jobRu = jobRu
        this.jobEn = jobEn
    }
}