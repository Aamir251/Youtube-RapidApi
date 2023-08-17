import { Link } from "react-router-dom";
import { VideoType } from "../../types/VideoType"
import { Card, CardMedia, CardContent, Typography } from "@mui/material";
import { shrinkText } from "../../utils/helpers";

type VideoCardProp = {
    videoDetail : VideoType
}



const VideoCard = ({ videoDetail : { id : { videoId }, snippet }, } : VideoCardProp ) => {

    const {
        channelTitle,
        description,
        title,
        thumbnails ,
        channelId
    } = snippet;
    
    return <Card sx={{
                borderRadius : 1.5,
                backgroundColor : "transparent",
                boxShadow : "none", position : "relative",
                width : {
                    xs : "100%",
                    sm : 220,
                    md : 240,
                    xl : 280
                }
            }}
        >
        <Link to={videoId ? `/video/${videoId}` : '/' } style={{ textDecoration : "none" }} >
            <CardMedia
                title={title}
                image={thumbnails?.high?.url}
                sx={{
                    width : {
                        xs : "100%",
                        md : 280
                    },
                    height : {
                        xs : 190,
                        sm : 155
                    },
                    transition : 'transform 0.4s ease',
                    overflow : "hidden",
                    ':hover' : {
                        transform : 'scale(1.05)'
                    }
                }}
                />
            </Link>
           <Link to={`/channel/${channelId}`}>
            <Typography
                    variant='body1'
                    color={'gray'}
                    bgcolor={'black'}
                    textAlign={'left'}
                    fontSize={12}
                    px={1.5}
                    py={0.5}
                    width={'max-content'}
                    position={'absolute'}
                    top={130}
                    fontWeight={600}
                    borderRadius={'0 4px 4px 0'}
                >
                    {channelTitle}
                </Typography>
            </Link>
            <CardContent sx={{ padding : 0, textDecoration  :"none" }} >
            <Link to={videoId ? `/video/${videoId}` : '/' } style={{ textDecoration : "none" }}>

                <Typography
                    variant="h3"
                    fontSize={16}
                    lineHeight={1.5}
                    color={'text.primary'}
                    border={'none'}
                    textAlign={'left'}
                    position={'relative'}
                    maxWidth={240}
                    maxHeight={44}
                    overflow={'hidden'}
                    fontWeight={500}
                    mt={2}
                >
                    {shrinkText(title)}
                </Typography>

                <Typography variant="body2"
                    textAlign={'left'}
                    position={'relative'}
                    maxWidth={240}
                    maxHeight={36}
                    lineHeight={1.5}
                    overflow={'hidden'}
                    fontSize={12}
                    mt={1.5}
                    color={'#484F76'}
                    textOverflow={'ellipsis'}
                >
                    {description}
                </Typography>
            </Link>

            </CardContent>
    </Card>
}


export default VideoCard