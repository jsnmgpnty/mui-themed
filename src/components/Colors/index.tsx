import { Box, BoxProps } from '@mui/material';
import { BrandColorRange } from '../../theme/types';
import { TextMd, TextLg, TextXs } from '../Text';

export type ColorProps = BoxProps & {
  color?: string;
  name?: string;
};

export type ColorSingleProps = ColorProps & {
  title: string;
};

export type ColorRowProps = BoxProps &
  ColorSingleProps & {
    colors?: BrandColorRange;
  };

export const Color = ({ color, name, ...props }: ColorProps) => (
  <Box
    p={2}
    bgcolor={color}
    justifyContent="center"
    alignItems="center"
    borderRadius={2}
    width={300}
    boxShadow="0px 6px 16px rgba(0, 0, 0, 0.08)"
    {...props}
  >
    <Box
      sx={{
        p: 1.5,
        background: '#fff',
        borderRadius: 2,
        border: '1px solid #ccc',
      }}
    >
      <TextXs my={0} color="#000">
        {color}
      </TextXs>
      <TextXs my={0} color="#888">
        {name}
      </TextXs>
    </Box>
  </Box>
);

export const ColorRow = ({ colors, title, ...props }: ColorRowProps) => (
  <Box mb={4} {...props}>
    <TextLg bold="medium" mt={0} mb={2}>
      {title}
    </TextLg>
    {colors && (
      <Box display="flex" alignItems="center" flexWrap="wrap">
        {Object.keys(colors).map((color) => (
          <Color key={color} color={colors[color]} name={color} mr={2} mb={2} />
        ))}
      </Box>
    )}
    {!colors && <TextMd my={0}>Cannot find any colors</TextMd>}
  </Box>
);

export const ColorSingle = ({
  color,
  name,
  title,
  ...props
}: ColorSingleProps) => (
  <Box mb={4} {...props}>
    <TextLg bold mt={0} mb={2}>
      {title}
    </TextLg>
    <Color color={color} name={name} />
  </Box>
);
