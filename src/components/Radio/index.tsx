import { Radio as MuiRadio, RadioProps, styled } from '@mui/material';
import { ITheme } from '@mui/styles';

const DOT_ICON = (color: string) =>
  `radial-gradient(${color},${color} 20%,transparent 24%)`;

const Icon = styled('span')(({ theme }: { theme: ITheme }) => ({
  width: 16,
  height: 16,
  borderRadius: '50%',
  color: theme.palette.supportive_offBlack.supportive_offBlack_300,
  backgroundColor: theme.palette.supportive_white.supportive_white_base,
  border: `1px solid ${theme.palette.supportive_offBlack.supportive_offBlack_300}`,
  'input:disabled ~ &': {
    boxShadow: 'none',
    borderColor: theme.palette.supportive_offBlack.supportive_offBlack_300,
    backgroundColor: theme.palette.supportive_offBlack.supportive_offBlack_100,
  },
  'input:hover:enabled ~ &': {
    backgroundColor: theme.palette.primary_brandDark.primary_brandDark_200,
    color: theme.palette.primary_brandDark.primary_brandDark_700,
    borderColor: theme.palette.primary_brandDark.primary_brandDark_700,
  },
  'input:focus:enabled ~ &, input:active:enabled ~ &': {
    color: theme.palette.primary_brandDark.primary_brandDark_700,
    borderColor: theme.palette.primary_brandDark.primary_brandDark_700,
    boxShadow: theme.focused.primary_100_xs,
  },
}));

const CheckedIcon = styled(Icon)(({ theme }: { theme: ITheme }) => ({
  color: theme.palette.supportive_offBlack.supportive_offBlack_300,
  border: `1px solid ${theme.palette.supportive_offBlack.supportive_offBlack_300}`,
  '&:before': {
    display: 'block',
    width: 16,
    height: 16,
    margin: -1,
    backgroundImage: DOT_ICON(
      theme.palette.supportive_offBlack.supportive_offBlack_300
    ),
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    content: '""',
  },
  'input:hover:enabled ~ &': {
    '&:before': {
      backgroundImage: DOT_ICON(
        theme.palette.primary_brandDark.primary_brandDark_700
      ),
    },
  },
  'input:focus:enabled ~ &, input:active:enabled ~ &': {
    '&:before': {
      backgroundImage: DOT_ICON(
        theme.palette.primary_brandDark.primary_brandDark_700
      ),
    },
  },
  '&.MuiChecked': {
    color: theme.palette.supportive_offBlack.supportive_offBlack_300,
    border: `1px solid ${theme.palette.supportive_offBlack.supportive_offBlack_300}`,
  },
}));

export const Radio = (props: RadioProps) => (
  <MuiRadio
    sx={{ '&:hover': { background: 'none' } }}
    icon={<Icon />}
    checkedIcon={<CheckedIcon />}
    {...props}
  />
);
