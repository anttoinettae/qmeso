import React, {useState} from "react";
import {Person} from "../model/Person";
import {st, StringTranslation} from "../model/StringTranslation";
import './admin.css'

export function PeopleAdminPage(props: {language: boolean; personData: Person[]; setPersonData: (newPersonData: Person[]) => void;}) {

    function handleForm(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()

        let newPerson = new Person(st(
            (event.currentTarget.elements.namedItem("name") as HTMLInputElement).value,
            (event.currentTarget.elements.namedItem("eng-name") as HTMLInputElement).value
        ), st(
            (event.currentTarget.elements.namedItem("href") as HTMLInputElement).value,
            (event.currentTarget.elements.namedItem("href") as HTMLInputElement).value
        ), st(
            (event.currentTarget.elements.namedItem("job") as HTMLInputElement).value,
            (event.currentTarget.elements.namedItem("eng-job") as HTMLInputElement).value
        ))
        props.setPersonData(props.personData.concat(newPerson))
    }

    return <div>
        <form onSubmit={handleForm}>
            <div>
                <label htmlFor="name">Введите имя нового сотрудника: </label>
                <input type="text" name="name"/>
            </div>
            <div>
                <label htmlFor="eng-name">А теперь на английском: </label>
                <input type="text" name="eng-name"/>
            </div>
            <div>
                <label htmlFor="href">Введите ссылку на нового сотрудника: </label>
                <input type="text" name="href"/>
            </div>
            <div>
                <label htmlFor="job">Введите должность нового сотрудника: </label>
                <input type="text" name="job"/>
            </div>
            <div>
                <label htmlFor="eng-job">Enter the job title: </label>
                <input type="text" name="eng-job"/>
            </div>
            <div>
                <input type="submit" value="Добавить"/>
            </div>

        </form>
        <div>
            {props.personData.map((person) => {
                return <div className="people-wrapper">
                    <div>
                        <a href={person.href.getString(props.language)}>
                            {person.name.getString(props.language)}
                        </a>
                    </div>
                    <div>
                        <p>{person.job.getString(props.language)}</p>
                    </div>
                </div>
            })}
        </div>
    </div>
}