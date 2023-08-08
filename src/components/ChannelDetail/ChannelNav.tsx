import { Card, CardMedia, Stack, Typography } from "@mui/material";
import { Thumbnails } from "../../types/VideoType";

type PropType = {
    thumbnail : Thumbnails | undefined;
    title : string | undefined
}


const ChannelNav = ({ thumbnail, title } : PropType ) => {
    console.log("thumnail ", thumbnail);
    
  return (
    <Card sx={{
        background : 'transparent',
        boxShadow : "none",
        transform : "translateY(-40px)",
    }} >
        <Stack  pl={10} direction={'row'} alignItems={'center'} gap={6} >
            <CardMedia
                image={thumbnail?.default?.url}
                title={title}
                sx={{
                    width : 150,
                    height : 150,
                    objectFit : "contain",
                    borderRadius : 100
                }}
            />
            <Typography variant="h1" fontSize={40} fontWeight={500} letterSpacing={0.5} >
                {title}
            </Typography>
        </Stack>
    </Card>
  )
}

export default ChannelNav