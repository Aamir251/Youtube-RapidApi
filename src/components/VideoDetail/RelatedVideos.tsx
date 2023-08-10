import { RapidApiParamsType, useRapidApi } from "../../hooks/useRapidApi"
import { Stack, Typography } from "@mui/material";
import Videos from "../Videos";
import { VideoType } from "../../types/VideoType";



type PropType = {
    relatedToVideoId : string
}

const RelatedVideos = ({ relatedToVideoId } : PropType ) => {

    const params : RapidApiParamsType = {
        part : "snippet,id",
        relatedToVideoId,
        type : 'video',
        maxResults : '20'
    }

    const { loading, data, error } = useRapidApi("search", params);
    console.log("Data ", error)
    if(loading) {
        return <Typography variant="h3" >Loading Similar Videos....</Typography>
    }
    return (
        <Stack direction={'row'} gap={10}>
            { error && <Typography variant="body1" > {error} </Typography> }
           {data?.items.length && <Videos videos={data?.items as VideoType[] } />}
        </Stack>
    )
}

export default RelatedVideos