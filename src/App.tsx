import React, {useEffect, useState} from 'react';
import './App.css';
import './footer.css'
import * as t from './translations';
import {navigationArray} from "./navigation";
import {TranslatedLink} from "./links";
import {LanguageSwitcher} from "./LanguageSwitcher";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {MainPage} from "./pages/Main";
import {PeoplePage} from "./pages/People";
import {ThesesPage} from "./pages/Theses";
import {ExternalSchoolsPage} from "./pages/ExternalSchools";
import {PeopleAdminPage} from "./admin/People";
import {person, Person} from "./model/Person";
import {PersonDTO} from "./model/dto/PersonDTO";
import {useReportPageLoadMetrics} from "./utils/LoadTime";

function App() {
    let [language, setLanguage] = useState(localStorage.getItem('language') == "true")

    let [loadTime, setLoadTime] = useState(null as (number | null))

    let initialPersonDataText = localStorage.getItem('personData')
    let initialPersonData: Person[]
    if (initialPersonDataText != null && initialPersonDataText != "") {
        initialPersonData = (JSON.parse(initialPersonDataText) as PersonDTO[])
            .map((dto) => person(dto))
    } else {
        initialPersonData = []
    }
    let [personData, setPersonData] = useState(initialPersonData);

    useEffect(() => {
        localStorage.setItem('language', JSON.stringify(language));
        document.documentElement.lang = language ? "ru" : "en"
    }, [language]);

    useEffect(() => {
        localStorage.setItem('personData', JSON.stringify(personData.map((person) => person.toDto())));
    }, [personData]);

    useReportPageLoadMetrics((time) => setLoadTime(time))

    return (
        <div className="App">
            <header>
                <div className="header-top">
                    <LanguageSwitcher language={language} setLanguage={setLanguage}/>
                    <a href="http://itp.ac.ru/" target="_blank">
                        {t.landau.getString(language)}
                    </a>
                    <h1>
                        {t.sector.getString(language)}
                    </h1>
                </div>
                <div className="navigation">
                    {navigationArray.map((navigationElement) => {
                        let currentLocation = window.location.pathname
                        if (navigationElement instanceof TranslatedLink) {
                            let isHere = navigationElement.getString(language) == currentLocation
                            return <a className={`navigation-item${isHere ? " navigation-item-active" : ""}`} href={navigationElement.getString(language)}>
                                {navigationElement.label.getString(language)}
                            </a>
                        } else {
                            let isHere = currentLocation.includes(navigationElement.baseLink)
                            console.log(currentLocation, navigationElement.baseLink, isHere)
                            return <div className="dropdown">
                                <button className={`dropbtn navigation-item${isHere ? " navigation-item-active" : ""}`}>
                                    {navigationElement.name.getString(language)}
                                </button>
                                <div className="dropdown-content">
                                    {navigationElement.fields.map((link) =>
                                        <a href={link.getString(language)} target={link.target}>
                                            {link.label.getString(language)}
                                        </a>
                                    )}
                                </div>
                            </div>
                        }
                    })}
                </div>
            </header>
            <main>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<MainPage language={language}/>}/>
                        <Route path="/people" element={<PeoplePage language={language}/>}/>
                        <Route path="/teaching/theses" element={<ThesesPage language={language}/>}/>
                        <Route path="/conferences/schools" element={<ExternalSchoolsPage language={language}/>}/>
                        <Route path="/admin/people"
                               element={<PeopleAdminPage language={language} personData={personData}
                                                         setPersonData={setPersonData}/>}/>
                    </Routes>
                </BrowserRouter>
            </main>
            <footer>
                <h2>
                    qmeso@itp.ac.ru
                </h2>
                <div className="addresses">
                    <div className="first-address">
                        {
                            t.adr1.getString(language).split("{\n}").map((navigationElement) =>
                                <p>{navigationElement}</p>
                            )
                        }
                    </div>
                    <div>
                        {
                            t.adr2.getString(language).split("{\n}").map((navigationElement) =>
                                <p>{navigationElement}</p>
                            )
                        }
                    </div>
                </div>

                <div className="footer-links">
                    <a href="/admin/people" target="_blank">
                        {t.staff.getString(language)}
                    </a>
                    <a href="http://nanotheory.itp.ac.ru/?lang=rus" target="_blank">
                        {t.link1.getString(language)}
                    </a>
                    <a href="http://intgroup.itp.ac.ru/" target="_blank">
                        {t.link2.getString(language)}
                    </a>
                </div>
                { loadTime != null ? <div>
                    Страница загрузилась за {loadTime.toFixed(0)} мс.
                </div> : null }
            </footer>
        </div>
    );
}

export default App;
