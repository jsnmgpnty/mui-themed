import {
  Card as MuiCard,
  CardActionArea,
  CardActions,
  CardHeader,
  CardMedia,
  CardContent,
  styled,
} from '@mui/material';
import { ITheme } from '@mui/styles';
import { BOX_SHADOW } from '../../theme';

const Card = styled(MuiCard)(({ theme }: { theme: ITheme }) => ({
  boxShadow: BOX_SHADOW.MEDIUM,
  borderRadius: theme.cornerRadius.lg,
  '& .MuiCardContent-root': {
    padding: theme.spacing(3),
  },
}));

export {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  CardActions,
  CardHeader,
};
