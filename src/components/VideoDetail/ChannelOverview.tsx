import { Card, CardMedia, Typography, CardContent } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { RapidApiParamsType, useRapidApi } from '../../hooks/useRapidApi';
import { useMemo } from 'react';
import { ChannelType } from '../../types/ChannelType';

type PropType = {
    channelId : string;

}

const ChannelOverview = ({ channelId } : PropType ) => {

  const params : RapidApiParamsType = useMemo(() => {
    return {
      id : channelId,
      part : "snippet,statistics"
    }
  },[channelId]);


  const { loading, error, data } = useRapidApi("channels", params)
  
  if(loading) {
    return <Typography variant='h4' fontSize={14}>Loading Channel Info ...</Typography>
  }
  if(error) {
    return <Typography variant='h4' fontSize={14}>Error loading Channel Info...</Typography>
  }

  const channelInfo = data?.items[0] as ChannelType;
  console.log(" channelInfo ", channelInfo)
  // const { snippet: { thumbnails, channelTitle } } = video;
  return (
    <Card
        sx={{ 
            backgroundColor : "transparent",
            boxShadow : "none",
            display : "flex",
            flexDirection : "row",
            columnGap : 1,
            alignItems : "center",
            mt : 1
        }}>
        <Typography textAlign={'left'} fontSize={13} fontWeight={500} >
            {/* {channelName} */}
        </Typography>
        <CheckCircleIcon sx={{ width : 15 }} color="secondary" />
    </Card>
  )
}

export default ChannelOverview