import { useParams } from "react-router-dom"
import { RapidApiParamsType, useRapidApi } from "../../hooks/useRapidApi";
import ChannelDetailLoader from "./ChannelDetailLoader";
import { Box, Typography } from "@mui/material";
import Banner from "./Banner";
import { ChannelType } from "../../types/ChannelType";
import { useMemo } from "react";
import ChannelNav from "./ChannelNav";
import ChannelVideos from "./ChannelVideos";



const ChannelDetail = () => {
  const { id } = useParams();
  const params : RapidApiParamsType = {
    part : "snippet, statistics",
    id,
  }
  const { loading, data, error } = useRapidApi('channels', params)
  
  const channelDetails = useMemo(() => data?.items[0] as ChannelType, [data]);


  if(loading) {
    return <ChannelDetailLoader />
  }

  return <Box>
    {error && <Typography>{error}</Typography>}
    <Banner
      title={channelDetails?.brandingSettings?.channel?.title} 
      imageUrl={channelDetails?.brandingSettings?.image?.bannerExternalUrl}
    />
    <ChannelNav
      thumbnail={channelDetails?.snippet?.thumbnails}
      title={channelDetails?.snippet?.title}
      channelId={channelDetails?.id}
    />
    {
      id && <ChannelVideos channelId={id} />
    }
  </Box>
}

export default ChannelDetail