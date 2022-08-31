import { Box, BoxProps, darken, styled } from '@mui/material';
import { ITheme } from '@mui/styles';
import { Button, ButtonProps } from '../Button';

export type PickerOption = {
  label: string;
  value: string | number;
};

export type PickerProps = {
  selected?: string | number;
  options: PickerOption[];
  vertical?: boolean;
  segmented?: boolean;
  onSelect: (val: string | number) => void;
};

type PickerItemProps = ButtonProps & {
  selected?: boolean;
  vertical?: boolean;
};

type PickerContainerProps = BoxProps & {
  vertical?: boolean;
  segmented?: boolean;
};

const PickerItem = styled(
  ({ selected: _s, vertical: _v, ...props }: PickerItemProps) => (
    <Button variant="text" fullWidth {...props} />
  )
)(({ theme, selected }: { theme: ITheme; selected?: boolean }) => ({
  fontSize: 15,
  lineHeight: '20px',
  fontWeight: selected ? 'bold' : 'normal',
  color: selected ? theme.palette.primary.main : theme.palette.text.primary,
  borderSize: theme.spacing(0.25),
  border: `2px solid ${!selected ? 'transparent' : theme.palette.primary.main}`,
  padding: `${theme.spacing(1.625)} ${4.8375}`,
  backgroundColor: selected
    ? theme.palette.supportive_grey.supportive_grey_50
    : theme.palette.background.default,
  ...(selected
    ? {
        '&:hover, &:active, &:focus': {
          backgroundColor: darken(
            theme.palette.supportive_grey.supportive_grey_50,
            0.1
          ),
        },
      }
    : {}),
}));

const PickerContainer = styled(
  ({ vertical: _v, segmented: _s, ...props }: PickerContainerProps) => (
    <Box {...props} />
  )
)(
  ({
    theme,
    vertical,
    segmented,
  }: {
    theme: ITheme;
    vertical?: boolean;
    segmented?: boolean;
  }) => ({
    display: 'flex',
    flexDirection: vertical ? 'column' : 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: segmented
      ? theme.palette.background.default
      : 'transparent',
    padding: segmented ? theme.spacing(0.25) : 0,
  })
);

const Picker = (props: PickerProps) => {
  const handleOnClickOption = (val: string | number) => {
    props.onSelect(val);
  };

  return (
    <PickerContainer vertical={props.vertical} segmented={props.segmented}>
      {props.options?.map((opt, i) => (
        <Box
          key={opt.value}
          mt={i === 0 || !props.vertical ? 0 : 2}
          ml={i === 0 ? 0 : 0.375}
          width="100%"
        >
          <PickerItem
            vertical={props.vertical}
            onClick={() => handleOnClickOption(opt.value)}
            selected={opt.value === props.selected}
          >
            {opt.label}
          </PickerItem>
        </Box>
      ))}
    </PickerContainer>
  );
};

export default Picker;
