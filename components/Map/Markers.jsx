'use client'

import { useDispatch, useSelector } from 'react-redux';
import {Marker} from 'react-map-gl';

const Markers = () => {
    const soruceCordinates = useSelector((state) => state.soruceCordinates?.value);
    const soruceDestination = useSelector((state) => state.destinationCordinates?.value);

 return (
    <div> 
      {
        soruceCordinates ?
      <Marker longitude={soruceCordinates.lng} latitude={soruceCordinates.lat} anchor="bottom" >
        <img src="./marker.png" 
                 className='w-5 h-8'/>
      </Marker> : null
      }

     {
      soruceDestination ?
      <Marker longitude={soruceDestination.lng} latitude={soruceDestination.lat} anchor="bottom" >
        <img src="./marker.png" 
                 className='w-5 h-8'/>
      </Marker> : null
      }
    </div>
  )
}

export default Markers