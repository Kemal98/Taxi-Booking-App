'use client'

import {Map, Marker} from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { useDispatch, useSelector } from 'react-redux';
import Markers from './Markers';
import { useEffect, useRef, useState } from 'react';
import MapRoute from './MapRoute';

const MapBox = () => {
  const location = useSelector((state) => state.location.value);
  const soruceCordinates = useSelector((state) => state.soruceCordinates);
  const soruceDestination = useSelector((state) => state.destinationCordinates);

  const [directionData, setDirectionData] = useState(null)



  

  const mapRef = useRef()

  useEffect(()=> {
    if(soruceCordinates) {
      mapRef.current?.flyTo({
        center: [soruceCordinates.value.lng, soruceCordinates.value.lat],
        duration: 2500,
        speed: 1.5, 
        curve: 1,
      });
    }
  },[soruceCordinates])



  
  useEffect(()=> {
    if(soruceDestination) {
      mapRef.current?.flyTo({
        center: [soruceDestination.value.lng, soruceDestination.value.lat],
        duration: 2500,
        speed: 1.5, 
        curve: 1,
      });
    }
    if (soruceCordinates && soruceDestination) {
      getDirectionRoute();
    }
  },[soruceDestination])

    const getDirectionRoute = async () => {
      const res = await fetch(
          'https://api.mapbox.com/directions/v5/mapbox/driving/' +
          soruceCordinates.value?.lng +
          "," +
          soruceCordinates.value?.lat +
          ";" +
          soruceDestination.value?.lng +
          "," +
          soruceDestination.value?.lat +
          "?overview=full&geometries=geojson" +
          "&access_token=" +
          process.env.NEXT_PUBLIC_MAP_BOX_TOKEN,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
  
      const result = await res.json();
      console.log(result)
      setDirectionData(result);
    };
  


  return (
    <div>
      <h2>Map</h2>
      {location ? 
      <Map
      ref={mapRef}
      mapboxAccessToken={process.env.NEXT_PUBLIC_MAP_BOX_TOKEN}
      initialViewState={{
        longitude: location?.lng,
        latitude: location?.lat,
        zoom: 14
      }}
      style={{width: '100%', height: 450}}
      mapStyle="mapbox://styles/mapbox/streets-v9"
      >
    {directionData?.routes ? 
    <MapRoute coordinate={directionData?.routes[0].geometry?.coordinates}/>
    : null}
        <Markers/>
      </Map>
      : null}
    </div>
  )
}

export default MapBox