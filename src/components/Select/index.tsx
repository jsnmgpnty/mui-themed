import {
  Box,
  FormControl,
  FormHelperText,
  Select as MuiSelect,
  styled,
  SelectProps as MuiSelectProps,
} from '@mui/material';
import { TextMd } from '../Text';

export type SelectProps = Omit<MuiSelectProps, 'label'> & {
  helperText?: string;
  label?: string;
  fullWidth?: boolean;
};

const StyledSelect = styled(MuiSelect)(({ theme }) => ({
  '& .MuiSelect-outlined': {
    padding: '10.5px 52px 10.5px 24px',
    minWidth: 100,
  },
  '& .MuiOutlinedInput-notchedOutline': {
    borderRadius: 10,
  },
  '& .MuiSelect-iconOutlined': {
    right: '24px',
    color: theme.palette.text.primary,
  },
  '& .MuiSelect-select:focus': {
    backgroundColor: 'transparent',
  },
  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
    borderColor: theme.palette.primary.main,
    borderWidth: theme.spacing(0.25),
  },
}));

export const Select = ({
  helperText,
  label,
  fullWidth,
  disabled,
  ...props
}: SelectProps) => (
  <FormControl variant="outlined" fullWidth={fullWidth}>
    {label && (
      <TextMd
        display="block"
        component="label"
        my={0.5}
        color={disabled ? 'grey.400' : ''}
      >
        {label}
      </TextMd>
    )}
    <StyledSelect
      variant="outlined"
      notched={false}
      label={label}
      inputProps={{ id: label, ...props.inputProps }}
      {...props}
    />
    {helperText && (
      <Box display="flex" justifyContent="flex-end">
        <FormHelperText color="red" error={props.error}>
          {helperText}
        </FormHelperText>
      </Box>
    )}
  </FormControl>
);
