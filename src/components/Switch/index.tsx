import {
  styled,
  Switch as MuiSwitch,
  SwitchProps as MuiSwitchProps,
} from '@mui/material';
import { ITheme } from '@mui/styles';

export enum SwitchTrackColor {
  STANDARD = 'standard',
  LIGHT = 'light',
  GREY = 'grey',
}

export type SwitchProps = MuiSwitchProps & {
  shadow?: boolean;
  trackColor?: SwitchTrackColor;
};

const getTrackColor = (
  theme: ITheme,
  color: SwitchTrackColor = SwitchTrackColor.STANDARD
) => {
  switch (color) {
    case 'light':
      return theme.palette.grey[50];
    case 'grey':
      return theme.palette.grey[200];
    default:
      return '#E7E8E9';
  }
};

export const Switch = styled(
  ({ shadow: _s, trackColor: _t, ...props }: SwitchProps) => (
    <MuiSwitch focusVisibleClassName=".Mui-focusVisible" {...props} />
  )
)(
  ({
    theme,
    trackColor,
    shadow,
  }: {
    theme: ITheme;
    trackColor?: SwitchTrackColor;
    shadow?: boolean;
  }) => ({
    width: 36,
    height: 20,
    padding: 0,
    ...(shadow
      ? {
          boxShadow: `0px 0px 0px 4px ${theme.palette.titanWhite}`,
          borderRadius: 12,
        }
      : {}),
    '& .MuiSwitch-switchBase': {
      padding: 0,
      margin: 2,
      transitionDuration: '300ms',
      '&.Mui-checked': {
        transform: 'translateX(16px)',
        color: theme.palette.common.white,
        '& + .MuiSwitch-track': {
          backgroundColor: theme.palette.ballBlue.main,
          opacity: 1,
          border: 0,
        },
        '&.Mui-disabled + .MuiSwitch-track': {
          opacity: 0.5,
        },
      },
      '&.Mui-focusVisible .MuiSwitch-thumb': {
        color: theme.palette.ballBlue.main,
        border: `6px solid ${theme.palette.common.white}`,
      },
      '&.Mui-disabled .MuiSwitch-thumb': {
        color:
          theme.palette.mode === 'light'
            ? theme.palette.grey[100]
            : theme.palette.grey[600],
      },
      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
      },
    },
    '& .MuiSwitch-thumb': {
      boxSizing: 'border-box',
      width: 16,
      height: 16,
    },
    '& .MuiSwitch-track': {
      borderRadius: 26 / 2,
      backgroundColor: getTrackColor(theme, trackColor),
      opacity: 1,
      transition: theme.transitions.create(['background-color'], {
        duration: 500,
      }),
    },
  })
);
