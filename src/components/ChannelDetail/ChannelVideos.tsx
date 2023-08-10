import { RapidApiParamsType, useRapidApi } from "../../hooks/useRapidApi"
import Videos from "../Videos";
import { VideoType } from "../../types/VideoType";


type PropType = {
    channelId : string
}

const ChannelVideos = ({ channelId } : PropType) => {
    const params : RapidApiParamsType = {
        part : 'snippet,id',
        channelId,
        maxResults : '30'
    }
    const { loading, data, error } = useRapidApi('search', params)
    
    if(loading) {
        return <h2>Loading Videos</h2>

    }
    if(error) {
        return <h2>Error fetching Videos</h2>
    }

    if(data?.items) {

        return <Videos videos={data?.items as VideoType[]} />
    }
}

export default ChannelVideos