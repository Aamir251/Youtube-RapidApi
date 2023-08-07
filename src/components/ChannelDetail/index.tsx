import { useParams } from "react-router-dom"
import { RapidApiParamsType, useRapidApi } from "../../hooks/useRapidApi";
import ChannelDetailLoader from "./ChannelDetailLoader";
import { Box } from "@mui/material";
import Banner from "./Banner";


const ChannelDetail = () => {
  const { id } = useParams();
  const params : RapidApiParamsType = {
    part : "snippet, statistics",
    id,
  }
  const { loading, data, error } = useRapidApi('channels', params)
  
  console.log('Channel Data ', data?.items);
  
  if(loading) {
    return <ChannelDetailLoader />
  }

  return <Box>
    <Banner  />
  </Box>
}

export default ChannelDetail