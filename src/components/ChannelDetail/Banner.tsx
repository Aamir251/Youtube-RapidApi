import { Card, CardMedia } from '@mui/material';

type BannerPropType = {
  imageUrl : string,
  title : string
}

const Banner = ({ imageUrl, title } : BannerPropType ) => {
  return (
    <Card sx={{ mt : 2, borderRadius : 4}} >
      <CardMedia
        image={imageUrl}
        title={title}
        sx={{
          width : '100%',
          height : 200,
          objectFit : "contain",
        }}
        
      />
    </Card>
  )
}

export default Banner