import React from "react";
import * as t from '../translations';

export function ExternalSchoolsPage(props: {language: boolean}) {
    return <div>
        <h4>{t.confs.getString(props.language)}</h4>
        <p>{t.confsText.getString(props.language)}</p>
    </div>
}