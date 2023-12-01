 
import { NextResponse } from "next/server"

const MAP_URL = 'https://api.mapbox.com/search/searchbox/v1/suggest'

export async function GET(request) {
    const {searchParams} = new URL(request.url)
    const text_search = searchParams.get('q')
    const res = await fetch(`${MAP_URL}?q=${text_search}?language=en&limit=6&session_token=0226e66e-1894-44e1-88c0-b0a55be0bfe0&&access_token=${process.env.NEXT_PUBLIC_MAP_BOX_TOKEN}`,
    {
    headers:{
        "Content-Type":"application/json"
    }
    }
    )
    const searchResult = await res.json()
    console.log(searchResult)
    return NextResponse.json(searchResult)
  }
