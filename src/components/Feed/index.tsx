import { Box, Stack, Skeleton } from '@mui/material';
import Videos from '../Videos';
import { useRapidApi } from '../../hooks/useRapidApi';
import { useCategoryContext } from '../../Context/CategoryContext';
import { useMemo, memo } from 'react';
import FeedVideosLoader from './FeedVideosLoader';

type RapidApiParamsType = {
  q : string,
  part? : string,
  maxResults? : string
}

const Feed = () => {

  const { currentlySelected } = useCategoryContext();
  const params : RapidApiParamsType = useMemo(() => {
    return {
      q : currentlySelected,
      part : 'snippet,id',
      maxResults : "50"
    }
  },[currentlySelected])
  
  const { loading, data, error } = useRapidApi("search", params);
  const uiContent = loading ? <FeedVideosLoader /> : error ? <h3>{error}</h3>  : <MemoizedVideos videos={data?.items} />
  
  return (
    <Stack>
      <h3>{currentlySelected} Videos</h3>
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