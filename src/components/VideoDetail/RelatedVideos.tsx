import { RapidApiParamsType, useRapidApi } from "../../hooks/useRapidApi"
import { Box, Stack, Typography } from "@mui/material";
import { VideoCard } from "..";
import { VideoType } from "../../types/VideoType";
import { useMemo } from 'react';


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

    const relatedVideos : VideoType[] = useMemo(() => data?.items as VideoType[] ,[data]);


    if(loading) {
        return <Typography variant="h5" >Loading Similar Videos....</Typography>
    }
    return (
        <Stack
            direction={'column'}
            gap={1}
            maxHeight={'90vh'}
            overflow={'scroll'} 
        >
            { error && <Typography variant="body1" > {error} </Typography> }
           {relatedVideos.length && relatedVideos.map((item) => {
           return item?.id &&  <Box key={item.id?.videoId} >
            <VideoCard videoDetail={item as VideoType} />
          </Box>}
        )
      }
        </Stack>
    )
}

export default RelatedVideos