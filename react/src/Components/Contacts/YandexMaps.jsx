import { Map, Placemark } from "react-yandex-maps";
import React from "react";

const coordinatesMap = {
    default: [59.893398, 30.327133],
    endpointCompany: [59.893398, 30.327133],
}

export const YandexMaps = () => {
    return (
        <Map
            style={{width: "100%", height:"50vh"}}
            defaultState={{
                center: coordinatesMap.default,
                zoom: 13,
                controls: ['zoomControl', 'fullscreenControl'],
            }}
            modules={['control.ZoomControl', 'control.FullscreenControl']}
        >
            <Placemark
                modules={['geoObject.addon.balloon']}
                defaultGeometry={coordinatesMap.endpointCompany}
                options={{preset: 'islands#orangeDotIcon'}}
                properties={{
                    iconCaption: 'Resource Company LTD.',
                    balloonContentHeader: 'Resource Company LTD.',
                    balloonContentBody:
                        'Россия, Санкт-Петербург, Лиговский проспект, 266В, оф. 152',
                    balloonContentFooter: 'ПН-СБ 10:00 - 20:00',
                }}
            />
        </Map>
    )
}
