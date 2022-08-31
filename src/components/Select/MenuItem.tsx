import { styled, MenuItem as MuiMenuItem, darken } from '@mui/material';

export const MenuItem = styled(MuiMenuItem)(({ theme }) => ({
  cursor: 'pointer',
  '&:hover': {
    background: darken(theme.palette.background.default, 0.05),
  },
}));
