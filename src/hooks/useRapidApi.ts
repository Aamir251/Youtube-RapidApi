import { useState, useEffect } from 'react';
import axios, { AxiosRequestConfig } from 'axios';
import { VideoType } from '../types/VideoType';
import { ChannelType } from '../types/ChannelType';

const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

type Error = {
    code : number,
    message : string,
    [key : string ] : any
}

type APIResponse  = {
    kind : string,
    nextPageToken? : string,
    items : VideoType[] | ChannelType[],
    regionCode? : string,
    error? : Error,
    [key : string] : any
}

type UseRapidApiType = {
    data : APIResponse | undefined,
    loading : boolean,
    error : string
}
const env = import.meta.env;

export type RapidApiParamsType = {
    q? : string,
    part? : string,
    maxResults? : string,
    id? : string,
    channelId? : string,
    relatedToVideoId? : string,
    type? : string
}


export const useRapidApi = (url : string, params : RapidApiParamsType) : UseRapidApiType => {

    const [ data, setData ] = useState<APIResponse | undefined>(undefined);
    const [ loading, setLoading ] = useState<boolean>(true);
    const [ error, setError ] = useState<Error>({ message : "", code : 400});
    
    
    useEffect(() => {
        const controller = new AbortController()
        const options : AxiosRequestConfig = {
            params,
            headers: {
                'X-RapidAPI-Key': env.VITE_RAPID_API_KEY,
                'X-RapidAPI-Host': env.VITE_RAPID_API_HOST
            },
            signal : controller.signal
        };

        
        const fetchData = async () => {
            try {
                setLoading(true)
                const { data }  = await axios.get<APIResponse>(`${BASE_URL}/${url}`, options);

                if(data?.error) {
                    throw new Error(data?.error?.message)
                }
                setData(data)
                setLoading(false)
                
            } catch (error) {
                if(axios.isAxiosError(error)) {
                    console.error("Error in Fetching ",error?.response?.data?.message);
                    
                    setError({
                        message : error?.response?.data?.message,
                        code : 400
                    })
                }
                setLoading(false)
                console.error("Error is ", error);
                
                setError( {
                    message : "Failed to fetch data " + error,
                    code : 400
                })
            }
        }

        fetchData()

        return () => {
            controller.abort()
        }
    },[url, params.q])
    
    return {
        loading,
        data,
        error : error.message
    }
}