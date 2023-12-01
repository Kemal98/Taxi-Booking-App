'use client'

import React from 'react'
import Map, { AttributionControl, GeolocateControl , Layer, Marker, NavigationControl,
    Popup, Source } from "react-map-gl";

function MapRoute(coordinate) {
    return (
    <Source type="geojson" data={{ type: 'Feature', geometry: { type: 'LineString', coordinates: coordinate.coordinate } }}>
            <Layer
              type="line"
              layout={{ 'line-join': 'round', 'line-cap': 'square' }}
              paint={{ 'line-color': '#0462d4', 'line-width': 3, }}
              
            />
    </Source>
    
  )
}

export default MapRoute