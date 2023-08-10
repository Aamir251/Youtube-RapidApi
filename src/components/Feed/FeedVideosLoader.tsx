import { Skeleton, Stack, Box } from '@mui/material';

const FeedVideosLoader = () => {
  return <Stack direction={'row'} flexWrap={'wrap'} justifyContent={'start'} gap={3} >
    {
        Array.from(new Array(50)).map((item : number, index : number) => {
            return <Box key={index} gap={10} flexDirection={'column'} >
                <Skeleton variant='rounded' width={250} height={150} />
                <Skeleton variant='text' width={240} height={40} />
                <Skeleton variant='text' width={240} height={40} />
            </Box>
        })
    }
</Stack>
}

export default FeedVideosLoader