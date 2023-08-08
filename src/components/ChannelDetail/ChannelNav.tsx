import { Card, CardMedia, Stack, Typography } from "@mui/material";
import { Thumbnails } from "../../types/VideoType";
import Links from "./LInks";

type PropType = {
    thumbnail : Thumbnails | undefined;
    title : string | undefined,
    channelId : string | undefined
}


const ChannelNav = ({ thumbnail, title, channelId } : PropType ) => {
    
  return (
    <Card sx={{
        background : 'transparent',
        boxShadow : "none",
        transform : "translateY(-40px)",
    }} >
        <Stack  pl={10} direction={'row'} alignItems={'flex-end'} columnGap={8} >
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
            <Stack direction={'column'} gap={1} pb={3} >
                <Typography variant="h1" fontSize={36} fontWeight={500} letterSpacing={0.5} >
                    {title}
                </Typography>
                <Links channelId={channelId} />
            </Stack>
        </Stack>
        
    </Card>
  )
}

export default ChannelNav;

