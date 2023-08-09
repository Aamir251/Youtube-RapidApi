import { Box, Stack } from '@mui/material';
import Videos from '../Videos';
import { useRapidApi } from '../../hooks/useRapidApi';
import { useMemo, memo } from 'react';
import FeedVideosLoader from './FeedVideosLoader';
import { VideoType } from '../../types/VideoType';
import { useParams } from 'react-router-dom';

type RapidApiParamsType = {
  q : string,
  part? : string,
  maxResults? : string
}

const Feed = () => {
  const { id } = useParams()
  const query = id === '' || id === undefined ? "new" : id 
  const params : RapidApiParamsType = useMemo(() => {
    return {
      q : query,
      part : 'snippet,id',
      maxResults : "50"
    }
  },[query])
  
  const { loading, data, error } = useRapidApi("search", params);
  
  const uiContent = loading ? <FeedVideosLoader /> : error ? <h3>{error}</h3>  : <MemoizedVideos videos={data?.items as VideoType[]} />
  
  return (
    <Stack mt={5}>
      <Box
        px={{ xs : 0.5, md : 2 }}
        sx={{
          // height : { xs : 'auto', md : "90vh" }
        }}
      >
        {uiContent}
      </Box>
    </Stack>
  )
}

export default Feed;


const MemoizedVideos = memo(Videos)