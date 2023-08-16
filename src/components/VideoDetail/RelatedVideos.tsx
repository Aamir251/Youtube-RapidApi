import { RapidApiParamsType, useRapidApi } from "../../hooks/useRapidApi"
import { Box, CardContent, Stack, Typography, Card } from "@mui/material";
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

    if(relatedVideos?.length) {
        return (
            <Stack
                direction={'column'}
                gap={1}
                maxHeight={'90vh'}
                overflow={'scroll'}
                className="related-videos"
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
    } else {
        return <Stack direction={{ xs : "row", lg : "column" }} flexWrap={'wrap'} gap={2} >
            <Card  sx={{ backgroundColor : "transparent", width : {
                    sm : 260,
                    xl : 280
                } }}>
                <CardContent sx={{ textAlign : "left" }}>
                    <Typography>HEllo world</Typography>
                    <Typography variant="body2" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione dolor laudantium at ut vel saepe </Typography>
                </CardContent>
            </Card>
            <Card sx={{ backgroundColor : "transparent", width : {
                    sm : 260,
                    xl : 280
                } }}>
                <CardContent sx={{ textAlign : "left" }}>
                    <Typography>HEllo world</Typography>
                    <Typography variant="body2" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione dolor laudantium at ut vel saepe </Typography>
                </CardContent>
            </Card>
            <Card sx={{ backgroundColor : "transparent", width : {
                    sm : 260,
                    xl : 280
                } }}>
                <CardContent sx={{ textAlign : "left" }}>
                    <Typography>HEllo world</Typography>
                    <Typography variant="body2" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione dolor laudantium at ut vel saepe </Typography>
                </CardContent>
            </Card>
        </Stack>
    }
}

export default RelatedVideos