import React from 'react';
import './language-switcher.css'


export function LanguageSwitcher(props: { language: boolean; setLanguage: (newLanguage: boolean) => void; }) {
    function changeLanguage() {
        props.setLanguage(!props.language)
    }

    return <div className="language-switcher" onClick={changeLanguage}>
        <div className="labels">
            <div className={props.language ? "chosen" : ""}>RU</div>
            <div className={props.language ? "" : "chosen"}>EN</div>
        </div>
        <div className={"circle " + (props.language ? "" : "circle-second-position")}></div>
    </div>
}