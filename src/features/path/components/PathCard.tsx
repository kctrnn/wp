import { CardActionArea, LinearProgress } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
import { Challenge } from 'models';

export interface PathCardProps {
  challenge: Challenge;
}

function PathCard({ challenge }: PathCardProps) {
  return (
    <Card sx={{ height: '100%' }}>
      <CardActionArea
        sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
      >
        <CardMedia
          component='img'
          alt={challenge.name}
          image={challenge.thumbnailImage}
        />

        <CardContent sx={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
          <Typography gutterBottom variant='h6' component='div'>
            {challenge.name}
          </Typography>

          <Typography variant='body1' color='text.secondary' flexGrow={1}>
            {challenge.description}
          </Typography>

          <Box mt={4} p={2} bgcolor='action.hover' borderRadius={2}>
            <Typography variant='body2' color='text.secondary' mb={1}>
              Level
            </Typography>

            <LinearProgress
              variant='determinate'
              value={(100 / 6) * (challenge.level + 1)}
            />
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default PathCard;
