import { Stack, Typography, Box } from '@mui/material';
import { Statistics } from "../../types/VideoType";
import { addComasToNum, shrinkText } from '../../utils/helpers';


type PropType = {
  title : string;
  statistics : Statistics
}

const VideoOverview = ({ statistics, title } : PropType) => {
  const { viewCount, likeCount, commentCount } = statistics;
  return (
    <Stack mt={1.5}>
      <Box>
        <Typography
          variant='h1'
          fontSize={20}
          textAlign={'left'}
          fontWeight={500}
          lineHeight={1.5}
          // maxWidth={350}
        >
          {shrinkText(title, 12)}
        </Typography>
        <Typography
            variant='h6'
            fontSize={12}
            textAlign={'left'}
            color={'#484F76'}
            mt={0.8}
          >
            {addComasToNum(Number(viewCount))} Views
        </Typography>
      </Box>


    </Stack>
  )
}

export default VideoOverview