import {
  Checkbox as MuiCheckbox,
  CheckboxProps as MuiCheckboxProps,
  styled,
  IconProps as MuiIconProps,
} from '@mui/material';
import { ITheme } from '@mui/styles';

type CheckedIconProps = MuiIconProps & DashIconProps;

type DashIconProps = {
  useDash?: boolean;
};

export type CheckboxProps = MuiCheckboxProps & DashIconProps;

const CHECK_ICON = (color: string) => {
  const encoded = encodeURIComponent(color);
  return `url(\"data:image/svg+xml;charset=utf-8,%3Csvg width='10' height='8' viewBox='0 0 10 8' fill='none' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath d='M9.59043 1.59043C9.91652 1.26435 9.91652 0.735654 9.59043 0.409566C9.26435 0.0834781 8.73565 0.0834781 8.40957 0.409566L9.59043 1.59043ZM3.5 6.5L2.90957 7.09043C3.23565 7.41652 3.76435 7.41652 4.09043 7.09043L3.5 6.5ZM1.59043 3.40957C1.26435 3.08348 0.735654 3.08348 0.409566 3.40957C0.0834781 3.73565 0.0834781 4.26435 0.409566 4.59043L1.59043 3.40957ZM8.40957 0.409566L2.90957 5.90957L4.09043 7.09043L9.59043 1.59043L8.40957 0.409566ZM4.09043 5.90957L1.59043 3.40957L0.409566 4.59043L2.90957 7.09043L4.09043 5.90957Z' fill='${encoded}' /%3E%3C/svg%3E\")`;
};

const DASH_ICON = (color: string) => {
  const encoded = encodeURIComponent(color);
  return `url(\"data:image/svg+xml;charset=utf-8,%3Csvg width='10' height='2' viewBox='0 0 10 2' fill='none' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath d='M1.5 0.165C1.03884 0.165 0.665 0.538842 0.665 1C0.665 1.46116 1.03884 1.835 1.5 1.835V0.165ZM8.5 1.835C8.96116 1.835 9.335 1.46116 9.335 1C9.335 0.538842 8.96116 0.165 8.5 0.165V1.835ZM1.5 1.835H8.5V0.165H1.5V1.835Z' fill='${encoded}' /%3E%3C/svg%3E\")`;
};

const Icon = styled('span')(({ theme }: { theme: ITheme }) => ({
  borderRadius: 4,
  width: 16,
  height: 16,
  border: `1px solid ${theme.palette.supportive_offBlack.supportive_offBlack_300}`,
  '.Mui-focusVisible &': {
    outline: `2px auto ${theme.palette.primary.main}`,
    outlineOffset: 2,
  },
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

const CheckedIcon = styled(({ useDash: _, ...props }: CheckedIconProps) => (
  <Icon {...props} />
))(({ theme, useDash }: { theme: ITheme; useDash?: boolean }) => ({
  color: theme.palette.supportive_offBlack.supportive_offBlack_300,
  border: `1px solid ${theme.palette.supportive_offBlack.supportive_offBlack_300}`,
  '&:before': {
    display: 'block',
    width: 14,
    height: 14,
    backgroundImage: useDash
      ? DASH_ICON(theme.palette.supportive_offBlack.supportive_offBlack_300)
      : CHECK_ICON(theme.palette.supportive_offBlack.supportive_offBlack_300),
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    content: '""',
  },
  'input:hover:enabled ~ &': {
    '&:before': {
      color: theme.palette.primary_brandDark.primary_brandDark_700,
      backgroundImage: useDash
        ? DASH_ICON(theme.palette.primary_brandDark.primary_brandDark_700)
        : CHECK_ICON(theme.palette.primary_brandDark.primary_brandDark_700),
    },
  },
  'input:focus:enabled ~ &, input:active:enabled ~ &': {
    '&:before': {
      color: theme.palette.primary_brandDark.primary_brandDark_700,
      backgroundImage: useDash
        ? DASH_ICON(theme.palette.primary_brandDark.primary_brandDark_700)
        : CHECK_ICON(theme.palette.primary_brandDark.primary_brandDark_700),
    },
  },
  '&.MuiChecked': {
    color: theme.palette.supportive_offBlack.supportive_offBlack_300,
    border: `1px solid ${theme.palette.supportive_offBlack.supportive_offBlack_300}`,
  },
}));

export const Checkbox = ({ useDash, ...props }: CheckboxProps) => (
  <MuiCheckbox
    sx={{ '&:hover': { background: 'none' } }}
    checkedIcon={<CheckedIcon useDash={useDash} />}
    icon={<Icon />}
    {...props}
  />
);
