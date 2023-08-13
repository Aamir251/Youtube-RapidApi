import { Stack, Typography, Box } from '@mui/material';
import { Statistics } from "../../types/VideoType";
import { addLetterToNum, shrinkText } from '../../utils/helpers';
import { Favorite, Equalizer } from "@mui/icons-material"

type PropType = {
  title : string;
  statistics : Statistics;
}

const VideoOverview = ({ statistics, title } : PropType) => {
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
        <Stack direction={'row'} gap={3}>
              <Stack direction={'row'} alignItems={'center'} gap={0.5}>
                <Equalizer sx={{ width : 15 }}  />
                <Typography
                  variant='h6'
                  fontSize={12}
                  textAlign={'left'}
                  color={'#484F76'}
                  width={'max-content'}
                  pt={0.3}
                >
                  {addLetterToNum(Number(viewCount))}
                </Typography>
              </Stack>
              <Stack direction={'row'} alignItems={'center'} gap={0.5} >
                <Favorite sx={{ width : 15 }} />
                <Typography
                    variant='h6'
                    fontSize={12}
                    textAlign={'left'}
                    color={'#484F76'}
                    width={'max-content'}
                  >
                    {addLetterToNum(Number(likeCount))}
                </Typography>
              </Stack>
        </Stack>
      </Stack>
      


    </Stack>
  )
}

export default VideoOverview