"use client";

import { setDestinationCordinates } from "@/app/state/destinationCordinates/destinationCordinates";
import { setSourceCordinates } from "@/app/state/soruceCordinates/soruceCordinates";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';


const MAPBOX_URL='https://api.mapbox.com/search/searchbox/v1/retrieve/'
const SESION_TOKEN = '0b030c6e-7726-4b41-88c0-b2c0c120f36f'


const Address = () => {

  const dispatch = useDispatch()

  const [source, setSource] = useState("");
  const [addressList, setAddressList] = useState([]);
  const [sourceChange, setSourceChane] = useState(false);
  const [destinationChange, setDestinationChange] = useState(false);
  const [destination, setDestination] = useState("");
  

  const soruceCordinates = useSelector((state) => state.soruceCordinates?.value);
  const soruceDestination = useSelector((state) => state.soruceDestination?.value);   
  
  
  useEffect(() => {
    if(source || destination == '' ) {setAddressList([])}
    
    const fn = setTimeout(() => {
      getAddress();
    }, 1000);
    return () => clearTimeout(fn);
  }, [source, destination]);
  
  const getAddress = async () => {

    const query = sourceChange ? source : destination
   console.log(query)
   
   const res = await fetch(`/api/search-address?q=${query}`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(res)
    const addressResult = await res.json();
    console.log(addressResult)
    setAddressList(addressResult);
  };
  
  


  const onSourceAddress = async (item) =>  {
    setSource(item.full_address);
    setAddressList([]);
    
    setSourceChane(false);
    const res = await fetch(MAPBOX_URL+item.mapbox_id+'?session_token='+SESION_TOKEN+'&access_token='+process.env.NEXT_PUBLIC_MAP_BOX_TOKEN)
    const result = await res.json()
    console.log(result)
    dispatch(setSourceCordinates({
      lng:result.features[0].geometry.coordinates[0],
      lat:result.features[0].geometry.coordinates[1], 
  }))
  }



  const onSourceDestination = async (item) =>  {
    setDestination(item.full_address);
    setAddressList([]);
    setDestinationChange(false)
    const res = await fetch(MAPBOX_URL+item.mapbox_id+'?session_token='+SESION_TOKEN+'&access_token='+process.env.NEXT_PUBLIC_MAP_BOX_TOKEN)
    const result = await res.json()
    console.log({
      lng:result.features[0].geometry.coordinates[0],
      lat:result.features[0].geometry.coordinates[1], 
  })
    dispatch(setDestinationCordinates({
      lng:result.features[0].geometry.coordinates[0],
      lat:result.features[0].geometry.coordinates[1], 
  }))
 
  }
  


  return (
    <div className="my-5">
      <div className="relative">
        <label className="text-gray-400">Where from?</label>
        <input
          type="text"
          value={source}
          onChange={(e) => {
            setSource(e.target.value);
            setSourceChane(true);
          }}
          className="p-1 bg-white border-[1px] border-gray w-full roudned-md outline-none  focus:border-yellow-300"
        />
        {addressList?.suggestions && sourceChange ? (
          <div className="shadow-md rounded-md absolute z-10 bg-white w-full">
            {addressList?.suggestions.map((item) => (
              <h2
                className="p-3 cursor-pointer hover:bg-gray-100"
                onClick={() => onSourceAddress(item)}
              >
                {item.full_address ? item.full_address : item.name }
              </h2>
            ))}
          </div>
        ) : null}
      </div>

      <div className="mt-3">
        <div className="relative">
          <label className="text-gray-400">Where from?</label>
          <input
            type="text"
            value={destination}
            onChange={(e) => {
              setDestination(e.target.value);
              setDestinationChange(true);
            }}
            className="p-1 bg-white  border-[1px] border-gray w-full roudned-md outline-none  focus:border-yellow-300"
          />
          {addressList?.suggestions && destinationChange ? (
            <div className="shadow-md rounded-md absolute z-10 bg-white w-full">
              {addressList?.suggestions.map((item) => (
                <h2
                  className="p-3 cursor-pointer hover:bg-gray-100"
                  onClick={() => 
                    onSourceDestination(item)

                  }
                >
                  {item.full_address}
                </h2>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Address;
