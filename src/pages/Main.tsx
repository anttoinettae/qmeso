import {ResearchSlider} from "../researches";
import React from "react";

export function MainPage(props: {language: boolean}) {
    return <div className="research-wrapper">
        <ResearchSlider language={props.language}/>
    </div>
}

