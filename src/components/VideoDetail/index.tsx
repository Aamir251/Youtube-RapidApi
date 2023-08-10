import { memo, useMemo } from "react";
import { useParams } from "react-router-dom";
import { RapidApiParamsType, useRapidApi } from "../../hooks/useRapidApi";
import { Box, Stack, Typography } from "@mui/material";
import ReactPlayer from "react-player";
import RelatedVideos from "./RelatedVideos";

const VideoDetail = () => {

  const { id } = useParams();

  const params : RapidApiParamsType = useMemo(() => {
    return {
      part : "contentDetails,snippet,statistics",
      id : id,
    }
  },[id])

  const { loading, data, error } = useRapidApi('videos', params)

  console.log("Video detail is", data?.items)

  if(!id) return null
  if(loading) {
    return <h2>Loading ...</h2>
  }

  return (
    <Box>
      {error && <Typography variant="body2" fontSize={16} >{error}</Typography>}
      <Stack direction={'column'} >
        <Box sx={{
          width : "100%"
        }} >
          <ReactPlayer style={{ width : '100%' }} url={`https://www.youtube.com/watch?v=${id}`}  />
        </Box>
        <MemoizedRelatedVideos relatedToVideoId={id}  />
      </Stack>
    </Box>
  )
}

export default VideoDetail;


const MemoizedRelatedVideos = memo(RelatedVideos)
