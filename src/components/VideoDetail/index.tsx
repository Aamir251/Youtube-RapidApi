import { memo, useMemo } from "react";
import { useParams } from "react-router-dom";
import { RapidApiParamsType, useRapidApi } from "../../hooks/useRapidApi";
import { Box, Card, CardContent, CardMedia, Stack, Typography } from "@mui/material";
import RelatedVideos from "./RelatedVideos";
import ReactPlayer from "react-player"
import VideoOverview from "./VideoOverview";
import { VideoType } from "../../types/VideoType";
import ChannelName from "./ChannelOverview";
import ChannelOverview from "./ChannelOverview";


const VideoDetail = () => {

  const { id } = useParams();

  const params : RapidApiParamsType = useMemo(() => {
    return {
      part : "contentDetails,snippet,statistics",
      id : id,
    }
  },[id])

  const { loading, data, error } = useRapidApi('videos', params)

  const video : VideoType = data?.items[0] as VideoType;

  if(!id || !video) return null;

  if(loading) {
    return <h2>Loading ...</h2>
  };

  return (
    <Box>
      {error && <Typography variant="body2" fontSize={16} >{error}</Typography>}
      <Stack direction={'row'} gap={4} mt={4} >
        <Box width={'100%'} maxWidth={550}>
          <ReactPlayer
            style={{ 
              borderRadius : 10, 
              overflow : "hidden" 
            }}
            width={'100%'}
            url={`https://youtube.com/watch?v=${id}`}
          />
          
          { video.statistics && <VideoOverview
              title={video?.snippet?.title}
              statistics={video?.statistics} 
            /> }

          { video?.snippet?.channelId && <ChannelOverview channelId={video?.snippet?.channelId}  /> }
        </Box>
        <MemoizedRelatedVideos relatedToVideoId={id}  />
      </Stack>
    </Box>
  )
}

export default VideoDetail;


const MemoizedRelatedVideos = memo(RelatedVideos)
