/* eslint-disable react-hooks/exhaustive-deps */
import { Box, BoxProps, styled } from '@mui/material';
import { ITheme } from '@mui/styles';
import React, { ForwardedRef, useEffect, useMemo, useRef } from 'react';
import { Typography } from '../../theme';
import { useHasMounted } from '../../utils/helpers';
import { TextSm } from '../Text';

type Size = 'xs' | 'sm' | 'md' | 'lg';

type NumberBoxProps = BoxProps & { size?: Size };

export type VerifyCodeFieldProps = Omit<BoxProps, 'onChange'> & {
  size?: Size;
  label?: string;
  helperText?: string;
  value: string;
  length?: number;
  split?: boolean;
  onChange: (value: string) => void;
};

const getDimensionsBySize = (size?: Size) => {
  switch (size) {
    case 'sm':
      return 64;
    case 'md':
      return 80;
    case 'lg':
      return 96;
    default:
      return 48;
  }
};

const getTypographyBySize = (size?: Size) => {
  switch (size) {
    case 'sm':
      return Typography.displayLg;
    case 'md':
      return Typography.displayLg;
    case 'lg':
      return Typography.displayXL;
    default:
      return Typography.displayMd;
  }
};

const getStyleBySize = (theme: ITheme, size?: Size) => {
  const dimension = getDimensionsBySize(size);
  const typography = getTypographyBySize(size);
  switch (size) {
    case 'sm':
      return {
        width: dimension,
        height: dimension,
        padding: `${theme.spacing(1)} ${theme.spacing(1.5)}`,
        ...typography,
      };
    case 'md':
      return {
        width: dimension,
        height: dimension,
        padding: `${theme.spacing(1.5)} ${theme.spacing(2)}`,
        ...typography,
      };
    case 'lg':
      return {
        width: dimension,
        height: dimension,
        padding: `${theme.spacing(2)} ${theme.spacing(2.5)}`,
        ...typography,
      };
    default:
      return {
        width: dimension,
        height: dimension,
        padding: `${theme.spacing(0.75)} ${theme.spacing(1)}`,
        ...typography,
      };
  }
};

const NumberBox = styled(
  React.forwardRef(
    (props: NumberBoxProps, ref: ForwardedRef<HTMLDivElement>) => (
      <Box {...props} ref={ref} />
    )
  )
)(({ theme, size }: { theme?: ITheme; size?: Size }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: `1px solid ${theme.palette.supportive_offBlack.supportive_offBlack_300}`,
  color: theme.palette.supportive_offBlack.supportive_offBlack_300,
  backgroundColor: theme.palette.supportive_white.supportive_white_base,
  borderRadius: theme.cornerRadius.sm,
  cursor: 'text',
  ...getStyleBySize(theme, size),
  '&:hover': {
    borderColor: theme.palette.supportive_offBlack.supportive_offBlack_700,
  },
  '&:active, &:focus': {
    borderColor: theme.palette.supportive_offBlack.supportive_offBlack_700,
    backgroundColor: theme.palette.supportive_offBlack.supportive_offBlack_50,
    outline: 0,
  },
}));

export const VerifyCodeField = ({
  size = 'xs',
  onChange,
  value,
  label,
  length = 4,
  split = false,
  helperText,
  ...props
}: VerifyCodeFieldProps) => {
  const numberBoxRefs = useRef<HTMLDivElement[]>([]);
  const hasMounted = useHasMounted();
  const codeLength = useMemo(() => new Array(length).fill(0), [length]);

  const marginProps = useMemo(() => {
    return { mr: ['md', 'lg'].includes(size) ? 1.5 : 1 };
  }, [size]);

  useEffect(() => {
    if (!hasMounted) return;
    numberBoxRefs.current = numberBoxRefs.current.slice(0, length);
  }, [hasMounted]);

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLDivElement>,
    index: number
  ) => {
    // If key entry is backspace, remove current digit
    if (e.key === 'Backspace') {
      const result = `${value.substring(0, index)} ${value.substring(
        index + 1
      )}`;
      onChange(result);
      return;
    }

    // If key entry is not a number, ignore it
    const key = parseInt(e.key, 10);
    if (isNaN(key)) return;

    // If key is valid number, replace the current digit
    const result = `${value.substring(0, index)}${key}${value.substring(
      index + 1
    )}`;
    onChange(result);

    // If key is last digit, ignore the move to next digit focus
    if (index === codeLength.length - 1) return;

    // Focus on the next item in the list
    numberBoxRefs.current[index + 1].focus();
  };

  const dimensions = getDimensionsBySize(size);

  return (
    <Box {...props}>
      {label && (
        <Box mb={0.75}>
          <TextSm
            my={0}
            bold="medium"
            color="text_offBlackOnLight.text_offBlackOnLight_100"
          >
            {label}
          </TextSm>
        </Box>
      )}
      <Box position="relative" display="flex" alignItems="center">
        {codeLength.map((_, i) => (
          <>
            {split && i === Math.floor(length / 2) && (
              <Box
                {...getTypographyBySize(size)}
                {...marginProps}
                color="supportive_offBlack.supportive_offBlack_300"
              >
                -
              </Box>
            )}
            <NumberBox
              minWidth={dimensions}
              height={dimensions}
              onKeyDown={(e) => handleKeyDown(e, i)}
              tabIndex={i}
              role="button"
              size={size}
              ref={(el) => (numberBoxRefs.current[i] = el as HTMLDivElement)}
              {...marginProps}
              key={i}
            >
              {value[i]}
            </NumberBox>
          </>
        ))}
      </Box>
      {helperText && (
        <Box mt={0.75}>
          <TextSm my={0} color="text_offBlackOnLight.text_offBlackOnLight_60">
            {helperText}
          </TextSm>
        </Box>
      )}
    </Box>
  );
};
