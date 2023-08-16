import { Card, CardMedia, Typography, CardContent, Box, Stack } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { RapidApiParamsType, useRapidApi } from '../../hooks/useRapidApi';
import { useMemo } from 'react';
import { ChannelType } from '../../types/ChannelType';
import { addLetterToNum } from '../../utils/helpers';

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

  const { statistics : { subscriberCount }, snippet : { thumbnails }, brandingSettings : { channel : { title } }  } = channelInfo;

  return (
    <Card
        sx={{ 
            backgroundColor : "transparent",
            boxShadow : "none",
            display : "flex",
            flexDirection : "row",
            columnGap : 1,
            alignItems : "center",
            mt : 1.5
        }}>

          <CardContent sx={{ padding : 0, display : "flex", alignItems : "center", gap : 1 }} >
            <CardMedia
              image={thumbnails?.medium?.url}
              sx={{ 
                width : 40,
                height : 40,
                borderRadius : 2,
                objectFit : "cover"
              }} 
            />
            <Stack direction={'column'} >
              <Box sx={{ display : "flex", alignItems : "center", gap : 1 }} >
                <Typography textAlign={'left'} fontSize={13} fontWeight={500} >
                  {title}
                </Typography>
                <CheckCircleIcon sx={{ width : 15 }} color="secondary" />
              </Box>
              <Typography textAlign={'left'} fontSize={10} fontWeight={500} color={'gray'} >
              {addLetterToNum(Number(subscriberCount))} Subscribers
              </Typography>
            </Stack>
          </CardContent>
    </Card>
  )
}

export default ChannelOverview