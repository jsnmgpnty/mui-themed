import { Box, BoxProps, Container, Grid, styled } from '@mui/material';
import { ITheme } from '@mui/styles';
import { TextMd } from '../Text';

export default {
  title: 'Blurs',
};

const getBlur = (type: string, size: string, theme: ITheme) => {
  const blurType = theme.blurs[type];
  return blurType[size];
};

const BlurDemo = styled(
  ({
    size: _s,
    type: _c,
    ...props
  }: BoxProps & { size?: string; type?: string }) => <Box {...props} />
)(({ theme, size, type }: any) => ({
  width: '100%',
  height: 100,
  borderRadius: 20,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  ...getBlur(type, size, theme),
}));

const BackgroundImage = styled(Box)(() => ({
  backgroundImage: 'url("https://picsum.photos/1024/768")',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  backgroundSize: 'cover',
}));

export function Default() {
  return (
    <BackgroundImage>
      <Container>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6}>
            <Box mb={4}>
              <BlurDemo size="sm" type="light">
                <TextMd bold>sm light</TextMd>
              </BlurDemo>
            </Box>
            <Box mb={4}>
              <BlurDemo size="md" type="light">
                <TextMd bold>md light</TextMd>
              </BlurDemo>
            </Box>
            <Box mb={4}>
              <BlurDemo size="lg" type="light">
                <TextMd bold>lg light</TextMd>
              </BlurDemo>
            </Box>
            <Box mb={4}>
              <BlurDemo size="xl" type="light">
                <TextMd bold>xl light</TextMd>
              </BlurDemo>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box mb={4}>
              <BlurDemo size="sm" type="dark">
                <TextMd bold color="supportive_white.supportive_white_base">
                  sm dark
                </TextMd>
              </BlurDemo>
            </Box>
            <Box mb={4}>
              <BlurDemo size="md" type="dark">
                <TextMd bold color="supportive_white.supportive_white_base">
                  md dark
                </TextMd>
              </BlurDemo>
            </Box>
            <Box mb={4}>
              <BlurDemo size="lg" type="dark">
                <TextMd bold color="supportive_white.supportive_white_base">
                  lg dark
                </TextMd>
              </BlurDemo>
            </Box>
            <Box mb={4}>
              <BlurDemo size="xl" type="dark">
                <TextMd bold color="supportive_white.supportive_white_base">
                  xl dark
                </TextMd>
              </BlurDemo>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </BackgroundImage>
  );
}
