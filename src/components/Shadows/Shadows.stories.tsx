import { Box, BoxProps, styled } from '@mui/material';
import { TextMd } from '../Text';

export default {
  title: 'Shadows',
};

const ShadowDemo = styled(
  ({ size: _, ...props }: BoxProps & { size?: string }) => <Box {...props} />
)(({ theme, size }: any) => ({
  width: 160,
  height: 160,
  background: theme.palette.supportive_white.supportive_white_base,
  boxShadow: theme.customShadows[size],
}));

export function Default() {
  return (
    <Box width="100%" display="flex" flexWrap="wrap">
      <Box mr={4} mb={4}>
        <TextMd bold>xs</TextMd>
        <ShadowDemo size="xs" />
      </Box>
      <Box mr={4} mb={4}>
        <TextMd bold>sm</TextMd>
        <ShadowDemo size="sm" />
      </Box>
      <Box mr={4} mb={4}>
        <TextMd bold>md</TextMd>
        <ShadowDemo size="md" />
      </Box>
      <Box mr={4} mb={4}>
        <TextMd bold>lg</TextMd>
        <ShadowDemo size="lg" />
      </Box>
      <Box mr={4} mb={4}>
        <TextMd bold>xl</TextMd>
        <ShadowDemo size="xl" />
      </Box>
      <Box mr={4} mb={4}>
        <TextMd bold>2xl</TextMd>
        <ShadowDemo size="xl2" />
      </Box>
      <Box mr={4} mb={4}>
        <TextMd bold>3xl</TextMd>
        <ShadowDemo size="xl3" />
      </Box>
    </Box>
  );
}
