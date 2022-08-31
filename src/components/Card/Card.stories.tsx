import { Box, Button } from '@mui/material';
import { Card, CardContent, CardActions, CardMedia } from './index';

export default {
  title: 'Card',
};

export const Default = () => (
  <Box maxWidth={400}>
    <Card>
      <CardMedia
        height={140}
        component="img"
        image="https://images2.minutemediacdn.com/image/upload/c_crop,h_1126,w_2000,x_0,y_181/f_auto,q_auto,w_1100/v1554932288/shape/mentalfloss/12531-istock-637790866.jpg"
      />
      <CardContent>Card Description and content area</CardContent>
      <Box p={1}>
        <CardActions>
          <Button variant="contained">Learn more</Button>
        </CardActions>
      </Box>
    </Card>
  </Box>
);
