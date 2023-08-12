import { Thumbnails } from "../../types/VideoType"
import { Card, CardMedia, Typography, CardContent } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

type PropType = {
    channelName : string;

}

const ChannelName = ({ channelName } : PropType ) => {
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
            {channelName}
        </Typography>
        <CheckCircleIcon sx={{ width : 15 }} color="secondary" />
    </Card>
  )
}

export default ChannelName