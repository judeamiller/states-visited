var map = L.map('mapid').setView([37.9, -95], 4);

L.tileLayer('http://{s}.tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png', {
	maxZoom: 18,
	attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

L.geoJson(statesVisited).addTo(map);

function styleMap(v) {
    return v === true  ? '#BADA55':
                         '#c7c8c9';
}



function style (feature) {
    return {
        fillColor: styleMap(feature.properties.visited),
        weight: 2,
        opacity:  'white',
        dashArray: '3',
        fillOpacity: 0.7
    }
}

L.geoJson(statesVisited, {style: style}).addTo(map);