import { useParams } from "react-router-dom"
import { Stack, Box, Typography } from "@mui/material";
import { redirect } from 'react-router-dom'
import { useMemo, memo } from 'react';
import { RapidApiParamsType, useRapidApi } from "../../hooks/useRapidApi";
import FeedVideosLoader from "../Feed/FeedVideosLoader";
import { VideoType } from "../../types/VideoType";
import Videos from "../Videos";
import { slugToWords } from "../../utils/helpers";

const SearchFeed = () => {
  const { searchTerm } = useParams();

  if(!searchTerm) {
    redirect("/")
  }
  
  const searchQuery = slugToWords(searchTerm!);

  const params : RapidApiParamsType = useMemo(() => {
    return {
      q : searchQuery,
      part: 'snippet,id',
      maxResults: '50',
    }
  },[searchQuery])
  
  const { loading, data, error } = useRapidApi("search", params);
  
  const uiContent = loading ? <FeedVideosLoader /> : error ? <h3>{error}</h3>  : <MemoizedVideos videos={data?.items as VideoType[]} />
  
  return (
    <Stack mt={2}>
      <Typography variant="h5" mb={2} fontSize={16} color={'#484F76'} textAlign={'left'} ml={2} >
        Showing Results for 
        <Typography 
          variant="body2" 
          display={'inline-block'} 
          fontWeight={600}
          color={'text.primary'}
          ml={1}
          fontSize={16}
        >
          {searchQuery}
        </Typography>
      </Typography>
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

export default SearchFeed;


const MemoizedVideos = memo(Videos)