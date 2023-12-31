import { Stack, Box, CardContent, CardMedia, Typography, Card } from "@mui/material";
import { VideoType } from "../../types/VideoType";
import { VideoCard } from "..";
import { Link } from "react-router-dom";

type PropType = {
  videos : VideoType[] | undefined,
  shouldRenderChannel? : boolean
}

// type VideoOrChannelType = "youtube#channel" | "youtube#video"

// this function checks if the item received is a video or channel or not;

const isVideoOrChannel = (kind : string) : boolean => {
  return ["youtube#channel", "youtube#video"].includes(kind)
}


const Videos = ({ videos, shouldRenderChannel = true } : PropType) => {
  if(!videos?.length) {
    return <Box>
      <Typography variant="h5" >
        Sorry No Videos Found
      </Typography>
      <Link to={"/"} style={{ textDecoration : "none", color : "yellow" }} >
        <Typography>
          Go Back to homepage
        </Typography>
      </Link>
    </Box>
  }
  
  const itemsToRender = shouldRenderChannel ? videos :  videos?.filter(item => item.id?.kind !== "youtube#channel")

  return (
    <Stack direction={'row'} flexWrap={'wrap'} justifyContent={{ xs : "center", md : 'start' }} gap={3} >
      {/* here the item?.id?.videoId is used to check if it is a video or not */}
      {/* because it can send us a channel link too */}
      {
        itemsToRender?.map(item => {
           return  isVideoOrChannel(item?.id?.kind) && <Box 
            width={{
              xs : "100%",
              sm : "max-content",
            }}
            key={item.id.videoId || item?.id?.channelId} 
          >
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
  
  return <Card sx={{ 
        boxShadow : "none", 
        width : {
          xs : "100%",
          sm : 220,
          md : 240,
          xl : 280
        }, 
        background  :"transparent" 
      }} >
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