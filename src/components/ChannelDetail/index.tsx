import { useParams } from "react-router-dom"
import { RapidApiParamsType, useRapidApi } from "../../hooks/useRapidApi";
import ChannelDetailLoader from "./ChannelDetailLoader";
import { Box } from "@mui/material";
import Banner from "./Banner";
import { ChannelType } from "../../types/ChannelType";
import { useMemo } from "react";
import ChannelNav from "./ChannelNav";
import { demoThumbnailUrl } from "../../utils/constants";



const ChannelDetail = () => {
  const { id } = useParams();
  const params : RapidApiParamsType = {
    part : "snippet, statistics",
    id,
  }
  const { loading, data, error } = useRapidApi('channels', params)
  
  const channelDetails = useMemo(() => data?.items[0] as ChannelType, [data]);


  console.log("CHannel ", channelDetails)
  if(loading) {
    return <ChannelDetailLoader />
  }

  return <Box>
    <Banner
      title={channelDetails?.brandingSettings?.channel?.title} 
      imageUrl={channelDetails?.brandingSettings?.image?.bannerExternalUrl}
    />
    <ChannelNav
      thumbnail={channelDetails?.snippet?.thumbnails}
      title={channelDetails?.snippet?.title}
    />
  </Box>
}

export default ChannelDetail