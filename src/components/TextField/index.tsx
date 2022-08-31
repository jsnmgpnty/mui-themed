/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useMemo, useState, useRef, useEffect } from 'react';
import {
  Box,
  MenuItem,
  Select,
  SelectChangeEvent,
  styled,
  TextField as MuiTextField,
  TextFieldProps as MuiTextFieldProps,
  useTheme,
} from '@mui/material';
import { ITheme } from '@mui/styles';
import { TextMd, TextSm, TextProps } from '../Text';
import typography from '../../theme/typography';

export type TextFieldProps = Omit<MuiTextFieldProps, 'error' | 'maxLength'> & {
  label?: string;
  subLabel?: string;
  maxLength?: string;
  error?: string;
  labelProps?: TextProps;
  ref?: React.Ref<any>;
  multiline?: boolean;
  selectItems?: {
    label: string;
    value: string;
  }[];
  selectListPosition?: 'start' | 'end';
  leadLabel?: string;
  selectedItem?: string;
  onItemSelect?: (value: string) => void;
};

const StyledSelect = styled(Select)(({ theme }: { theme: ITheme }) => ({
  '& .MuiSelect-select': {
    color: theme.palette?.supportive_offBlack?.supportive_offBlack_base,
  },
  '& .MuiOutlinedInput-notchedOutline': {
    border: 0,
  },
}));

const getInputLeftPadding = (
  theme: ITheme,
  leadLabel?: HTMLDivElement,
  hasSelectItems?: boolean
) => {
  if (leadLabel) {
    return `${leadLabel.offsetWidth + parseInt(theme.spacing(1.75), 10)}px`;
  }
  if (hasSelectItems) return theme.spacing(10);
  return theme.spacing(1.75);
};

const Component = ({
  label,
  error,
  InputProps,
  selectItems,
  selectListPosition,
  leadLabel,
  ...props
}: TextFieldProps) => {
  const theme = useTheme() as ITheme;
  const leadRef = useRef<HTMLDivElement>();
  const [charCount, setCharCount] = React.useState(0);
  const [selectedItem, setSelectedItem] = useState<string>(
    props.selectedItem ?? ''
  );

  const hasSelectItems = useMemo(() => {
    return !!selectItems && selectItems?.length > 0;
  }, [selectItems]);

  const hasLeadLabel = useMemo(() => !!leadLabel, [leadLabel]);

  const startAdornment = useMemo(() => {
    if (
      InputProps?.startAdornment &&
      selectListPosition !== 'start' &&
      !hasLeadLabel
    )
      return (
        <Box className="MuiSvgIcon-InputRoot start" component="span">
          {InputProps.startAdornment}
        </Box>
      );
    return hasSelectItems || hasLeadLabel ? <Box /> : null;
  }, [
    InputProps?.startAdornment,
    hasSelectItems,
    hasLeadLabel,
    selectListPosition,
  ]);

  const endAdornment = useMemo(() => {
    if (InputProps?.endAdornment && selectListPosition !== 'end')
      return (
        <Box className="MuiSvgIcon-InputRoot end" component="span">
          {InputProps.endAdornment}
        </Box>
      );
    return hasSelectItems ? <Box /> : null;
  }, [InputProps?.endAdornment, hasSelectItems, selectListPosition]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setCharCount(e.target.value?.length);
    if (props.onChange) props.onChange(e);
  };

  const handleSelectChange = (ev: SelectChangeEvent<unknown>) => {
    const { value } = ev.target;
    setSelectedItem(value as string);
    if (props.onItemSelect) props.onItemSelect(value as string);
  };

  useEffect(() => {
    if (!hasLeadLabel) {
      leadRef.current = undefined;
    }
  }, [hasLeadLabel]);

  return (
    <Box>
      {label && (
        <TextMd
          display="block"
          component="label"
          my={0.5}
          color={props.disabled ? 'grey.400' : ''}
          fontWeight="medium"
          {...props.labelProps}
        >
          {label}
        </TextMd>
      )}
      <Box display="flex" alignItems="flex-start" position="relative">
        {hasSelectItems && !hasLeadLabel && (
          <Box
            position="absolute"
            zIndex={100}
            right={selectListPosition === 'end' ? 0 : undefined}
            maxWidth={80}
          >
            <StyledSelect
              onChange={handleSelectChange}
              defaultValue={selectedItem || selectItems?.[0]?.value}
            >
              {selectItems?.map((item) => (
                <MenuItem key={item.value} value={item.value}>
                  {item.label}
                </MenuItem>
              ))}
            </StyledSelect>
          </Box>
        )}
        {!hasSelectItems && hasLeadLabel && (
          <Box
            display="flex"
            alignItems="center"
            position="absolute"
            height="100%"
            zIndex={100}
            px={1.75}
            bgcolor="supportive_black.supportive_black_lightness_50"
            border={`1px solid ${theme.palette?.supportive_offBlack_opacity?.supportive_offBlack_opacity_20}`}
            sx={{
              borderTopLeftRadius: theme.cornerRadius.md ?? 10,
              borderBottomLeftRadius: theme.cornerRadius.md ?? 10,
            }}
            ref={leadRef}
          >
            <TextMd my={0} color="text_offBlackOnLight.text_offBlackOnLight_60">
              {leadLabel}
            </TextMd>
          </Box>
        )}
        <MuiTextField
          inputRef={props.ref}
          fullWidth
          inputProps={{
            maxLength: props.maxLength,
          }}
          variant={'outlined' as any}
          disabled={props.disabled}
          id={props.name}
          error={!!error}
          onChange={handleInputChange as any}
          InputProps={{
            sx: {
              pl: getInputLeftPadding(
                theme,
                leadRef.current,
                hasSelectItems && selectListPosition === 'start'
              ),
              pr: hasSelectItems && selectListPosition === 'end' ? 10 : 1.75,
            },
            ...InputProps,
            startAdornment,
            endAdornment,
          }}
          {...props}
        />
      </Box>
      {(props.subLabel || props.maxLength || error) && (
        <Box display="flex">
          {!error && props.maxLength && (
            <TextSm
              my={0.5}
              color="text_offBlackOnLight.text_offBlackOnLight_60"
            >
              {charCount}/{props.maxLength}
            </TextSm>
          )}
          {!error && props.subLabel && (
            <TextSm
              my={0.5}
              color="text_offBlackOnLight.text_offBlackOnLight_60"
            >
              {props.subLabel}
            </TextSm>
          )}
          {error && (
            <TextSm my={0.5} color="functional_error.functional_error_base">
              {error}
            </TextSm>
          )}
        </Box>
      )}
    </Box>
  );
};

const Styled = styled(
  React.forwardRef((props: TextFieldProps, ref: any) => (
    <Component {...props} ref={ref} />
  ))
)(({ theme, error, multiline }: any) => {
  console.log(theme);
  return {
    backgroundColor: theme.palette?.supportive_white?.supportive_white_base,
    borderRadius: theme.cornerRadius?.md ?? 10,
    '& .MuiOutlinedInput-root': {
      alignItems: multiline ? 'flex-start' : 'center',
    },
    '& .MuiOutlinedInput-input': {
      borderRadius: theme.cornerRadius?.md ?? 10,
      backgroundColor: theme.palette?.supportive_white?.supportive_white_base,
      color: theme.palette?.text_offBlackOnLight?.text_offBlackOnLight_100,
      ...typography.textMd,
      '&:-webkit-autofill, &:-webkit-autofill:hover, &:-webkit-autofill:focus, &:-webkit-autofill:active':
        {
          // Override's browser's default autofill background color
          '-webkit-box-shadow': `0 0 0px 100px ${theme.palette?.supportive_white?.supportive_white_base} inset`,
        },
    },
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor:
        theme.palette?.supportive_offBlack_opacity
          ?.supportive_offBlack_opacity_20,
    },
    '& .Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: theme.palette?.primary_brandDark?.primary_brandDark_base,
      boxShadow: error
        ? theme.focused.error_100_xs
        : theme.focused.primary_100_xs,
    },
    '& .Mui-error .MuiOutlinedInput-notchedOutline': {
      borderColor: theme.palette?.functional_error?.functional_error_300,
    },
    '& .MuiFormHelperText-contained': {
      marginLeft: 0,
    },
    '& .MuiFormHelperText-root.Mui-error': {
      color: theme.palette?.functional_error?.functional_error_base,
    },
    '& .MuiOutlinedInput-multiline': {
      paddingTop: 0,
      paddingBottom: 0,
    },
    '& .MuiSvgIcon-InputRoot': {
      display: 'flex',
      alignItems: 'center',
      color:
        theme.palette?.supportive_offBlack_opacity
          ?.supportive_offBlack_opacity_60,
      '&.start': {
        marginRight: theme.spacing(1),
      },
      '&.end': {
        marginLeft: theme.spacing(1),
      },
    },
  };
});

export const TextField = React.forwardRef((props: TextFieldProps, ref) => (
  <Styled {...props} ref={ref} />
));
