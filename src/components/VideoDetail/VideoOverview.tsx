import { Stack, Typography, Box } from '@mui/material';
import { Statistics } from "../../types/VideoType";
import { addComasToNum, shrinkText } from '../../utils/helpers';
import ChannelName from './Channel';


type PropType = {
  title : string;
  statistics : Statistics;
  channelTitle : string
}

const VideoOverview = ({ statistics, title, channelTitle } : PropType) => {
  const { viewCount, likeCount } = statistics;
  return (
    <Stack mt={1.5}  >
      <Stack direction={'row'} gap={3}  >
        <Box>
          <Typography
            variant='h1'
            fontSize={20}
            textAlign={'left'}
            fontWeight={500}
            lineHeight={1.5}
          >
            {shrinkText(title, 12)}
          </Typography>
        </Box>
        <Box  display={'flex'} flexDirection={'row'} columnGap={2} >
          <Typography
              variant='h6'
              fontSize={12}
              textAlign={'left'}
              color={'#484F76'}
              mt={0.8}
              width={'max-content'}
            >
              {addComasToNum(Number(viewCount))} Views
          </Typography>
          <Typography
              variant='h6'
              fontSize={12}
              textAlign={'left'}
              color={'#484F76'}
              mt={0.8}
              width={'max-content'}
            >
              {addComasToNum(Number(likeCount))} likes
          </Typography>
        </Box>
      </Stack>
      <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'} >
        <ChannelName
          channelName={channelTitle}
        />
        

      </Stack>


    </Stack>
  )
}

export default VideoOverview