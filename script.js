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

    //draw layer on the map
    map.addLayer({
        'id': 'uoft-pnt', //unique layer name
        'type': 'circle',
        'source': 'uoft-data',
        'paint': {
            'circle-radius': 6,
            'circle-color': '#B42222'
        }
    });

    //add a data source from a GeoJSON file
    map.addSource('buildings-data', {
        type: 'geojson',
        //raw link in github to the geojson file
        data: 'https://raw.githubusercontent.com/mia0204/wk5-exercise/main/buildings.geojson'
    });

    map.addLayer({
        'id': 'buidlings-point',
        'type': 'circle',
        'source': 'buildings-data',
        'paint': {
            'circle-radius': 5,
            'circle-color': '#007cbf'
        }
    });

    //add a data source from a Mapbox tileset
    map.addSource('toronto-ct', {
        'type': 'vector',
        'url': 'mapbox://wxyue0204.ciowcz6b' //mapbox tileset ID
    });

    map.addLayer({
        'id': 'toronto-census-tract',
        'type': 'fill',
        'source': 'toronto-ct',
        'paint': {
            'fill-color': '#888888',
            'fill-opacity': 0.4,
            'fill-outline-color': 'purple'
        },
        'source-layer': 'torontoct-9a1gfe' //Mapbox tileset name
    },
        //'uoft-buildings' //drawing order
    );

});