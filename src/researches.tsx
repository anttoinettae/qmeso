import React, {Component} from "react";
import Slider from "react-slick";
import * as t from './translations';

export function ResearchSlider(props: { language: boolean }) {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 8000,
    };
    return (
        <div>
            <h2>{t.researchesSlider.getString(props.language)}</h2>
            <Slider {...settings}>
                <div>
                    <h3>{t.mesosystems.getString(props.language)}</h3>
                    <p>{t.mesosystemsText.getString(props.language)}</p>
                </div>
                <div>
                    <h3>{t.hybsystems.getString(props.language)}</h3>
                    <p>{t.hybsystemsText.getString(props.language)}</p>
                </div>
                <div>
                    <h3>{t.quants.getString(props.language)}</h3>
                    <p>{t.quantsText.getString(props.language)}</p>
                </div>
                <div>
                    <h3>{t.spinka.getString(props.language)}</h3>
                    <p>{t.spinkaText.getString(props.language)}</p>
                </div>
                <div>
                    <h3>{t.gas.getString(props.language)}</h3>
                    <p>{t.gasText.getString(props.language)}</p>
                </div>
                <div>
                    <h3>{t.magnetism.getString(props.language)}</h3>
                    <p>{t.magnetismText.getString(props.language)}</p>
                </div>
                <div>
                    <h3>{t.physics.getString(props.language)}</h3>
                    <p>{t.physicsText.getString(props.language)}</p>
                </div>
            </Slider>
        </div>
    );
}