import {
  styled,
  Tooltip as MuiTooltip,
  TooltipProps as MuiTooltipProps,
} from '@mui/material';
import { ITheme } from '@mui/styles';

export type TooltipProps = MuiTooltipProps & {
  type?: 'dark' | 'light';
};

const Styled = ({
  className,
  ...props
}: TooltipProps & { className?: string }) => (
  <MuiTooltip {...props} classes={{ tooltip: className }} />
);

export const Tooltip = styled(Styled)(
  ({ theme, type }: { theme?: ITheme } & TooltipProps) => ({
    backgroundColor:
      type === 'dark'
        ? theme.palette.supportive_offBlack.supportive_offBlack_base
        : theme.palette.supportive_white.supportive_white_base,
    color:
      type === 'dark'
        ? theme.palette.supportive_white.supportive_white_base
        : theme.palette.text_offBlackOnLight.text_offBlackOnLight_100,
    boxShadow: theme.customShadows.lg,
    '.MuiTooltip-arrow': {
      color:
        type === 'dark'
          ? theme.palette.supportive_offBlack.supportive_offBlack_base
          : theme.palette.supportive_white.supportive_white_base,
    },
  })
);
