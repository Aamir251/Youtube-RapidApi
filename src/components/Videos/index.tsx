import { Stack, Box, CardContent, CardMedia, Typography, Card } from "@mui/material";
import { VideoType } from "../../types/VideoType";
import { VideoCard } from "..";
import { Link } from "react-router-dom";

type PropType = {
  videos : VideoType[] | undefined
}

// type VideoOrChannelType = "youtube#channel" | "youtube#video"

// this function checks if the item received is a video or channel or not;

const isVideoOrChannel = (kind : string) : boolean => {
  return ["youtube#channel", "youtube#video"].includes(kind)
}


const Videos = ({ videos } : PropType) => {
  
  return (
    <Stack direction={'row'} flexWrap={'wrap'} justifyContent={'start'} gap={3} >
      {/* here the item?.id?.videoId is used to check if it is a video or not */}
      {/* because it can send us a channel link too */}
      {
        videos?.map(item => {
           return  isVideoOrChannel(item?.id?.kind) && <Box key={item.id.videoId || item?.id?.channelId} >
            {item?.id?.videoId && <VideoCard videoDetail={item} />}
            {item?.id?.channelId && <ChannelCard channelDetail={item} />}
          </Box>}
        )
      }
    </Stack>
  )
}
export default Videos;



type ChannelCardProp = {
  channelDetail : VideoType
}

const ChannelCard = ({ channelDetail : { id, snippet } } : ChannelCardProp) => {
  
  return <Card sx={{ boxShadow : "none", width : 280, background  :"transparent" }} >
    <Link to={`/channel/${id?.channelId}`} style={{ textDecoration : 'none' }} >
      <CardContent >
        <CardMedia 
          image={snippet?.thumbnails?.high?.url}
          sx={{
            height : 150,
            width : 150,
            borderRadius : "100%",
            mx : "auto",
            transition : "transform 0.5s ease",
            ":hover" : {
              transform : "scale(1.05)"
            }
          }}
          title={snippet?.channelTitle}
        />

        <Typography
          mt={1.4}
          variant="h3"
          fontSize={18}
          color={"text.primary"}
          fontWeight={600}
          sx={{ 
            textDecoration : "none",

          }} 
        >
          {snippet?.channelTitle}
        </Typography>
      </CardContent>
    </Link>

  </Card>
}