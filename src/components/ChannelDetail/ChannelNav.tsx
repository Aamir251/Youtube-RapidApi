import { Card, CardMedia, Stack, Typography } from "@mui/material";
import { Thumbnails } from "../../types/VideoType";
import Links from "./Links";

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
        marginBottom : 2
    }} >
        <Stack mt={2} pl={{
            xs : 0,
            md : 10
        }} direction={{
            xs : "column",
            md : 'row'
        }} alignItems={{
            xs : "center",
            md : 'flex-end'
        }} columnGap={{
            xs : 4,
            lg : 8
        }} >
            <CardMedia
                image={thumbnail?.default?.url}
                title={title}
                sx={{
                    width : {
                        xs  : 100,
                        xl : 150
                    },
                    height : {
                        xs  : 100,
                        xl : 150
                    },
                    position : "relative",
                    zIndex : 2,
                    objectFit : "contain",
                    borderRadius : 100,
                }}
            />
            <Stack direction={'column'} gap={1} pb={3} >
                <Typography 
                    variant="h1" 
                    fontSize={{
                        xs : 24,
                        lg : 36
                    }}
                    mt={{ xs : 2, md : 0 }}
                    textAlign={'left'}
                    fontWeight={500}
                    letterSpacing={0.5} 
                >
                    {title}
                </Typography>
                <Links channelId={channelId} />
            </Stack>
        </Stack>
        
    </Card>
  )
}

export default ChannelNav;

