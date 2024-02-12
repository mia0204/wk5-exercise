mapboxgl.accessToken = 'pk.eyJ1Ijoid3h5dWUwMjA0IiwiYSI6ImNsc2kzd2psZzJkZnMybXF1amZmbjJreWsifQ.Tavjo7Jout4NA8fo4YYY4A';

//creating new mapbox gl class
const map = new mapboxgl.Map({
    container: 'my-map', //map container ID
    style: 'mapbox://styles/wxyue0204/cls29q5qy01ui01p24098bvpg',
    center: [-79.39, 43.66],
    zoom: 12,
});

//attach an event listener to the load event of the map object
map.on('load', () => {

    //add a data source containing GeoJSON data using text
    map.addSource('uoft-data', { //source ID
        type: 'geojson',
        data: {
            "type": "FeatureCollection",
            "features": [
                {
                    "type": "Feature",
                    "properties": {
                        "name": "Sidney Smith Hall"
                    },
                    "geometry": {
                        "coordinates": [
                            -79.39865237301687,
                            43.662343395037766
                        ],
                        "type": "Point"
                    }
                }
            ]
        }
    });

    //draw layers on the map
    map.addLayer({
        'id': 'uoft-pnt', //unique layer name
        'type': 'circle',
        'source': 'uoft-data',
        'paint': {
            'circle-radius': 6,
            'circle-color': '#B42222'
        }
    });

});