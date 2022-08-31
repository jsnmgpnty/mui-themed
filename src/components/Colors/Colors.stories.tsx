import { Box, useTheme, PaletteOptions } from '@mui/material';
import { DisplayMd } from '../Text';
import { ColorRow, ColorSingle } from './index';

export function Default() {
  const theme = useTheme();
  const primaryBrandDark = (theme.palette as PaletteOptions).primary_brandDark;
  const primaryBrandLight = (theme.palette as PaletteOptions)
    .primary_brandLight;
  const secondaryMoss = (theme.palette as PaletteOptions).secondary_moss;
  const secondaryGrapefruit = (theme.palette as PaletteOptions)
    .secondary_grapefruit;
  const secondaryWatermelon = (theme.palette as PaletteOptions)
    .secondary_watermelon;
  const secondaryLilac = (theme.palette as PaletteOptions).secondary_lilac;
  const secondaryGrape = (theme.palette as PaletteOptions).secondary_grape;
  const supportiveBlack = (theme.palette as PaletteOptions).supportive_black;
  const supportiveBlackOpacity20 = (theme.palette as PaletteOptions)
    .supportive_black_opacity_20;
  const supportiveBlackOpacity90 = (theme.palette as PaletteOptions)
    .supportive_black_opacity_90;
  const supportiveOffBlack = (theme.palette as PaletteOptions)
    .supportive_offBlack;
  const supportiveOffBlackOpacity = (theme.palette as PaletteOptions)
    .supportive_offBlack_opacity;
  const supportiveGrey = (theme.palette as PaletteOptions).supportive_grey;
  const supportiveLightGrey = (theme.palette as PaletteOptions)
    .supportive_lightGrey;
  const functionalError = (theme.palette as PaletteOptions).functional_error;
  const functionalWarning = (theme.palette as PaletteOptions)
    .functional_warning;
  const functionalSuccess = (theme.palette as PaletteOptions)
    .functional_success;
  const textLightOnDark = (theme.palette as PaletteOptions).text_lightOnDark;
  const textDarkOnLight = (theme.palette as PaletteOptions).text_darkOnLight;
  const textOffBlackOnLight = (theme.palette as PaletteOptions)
    .text_offBlackOnLight;
  const textBrandLightOnDark = (theme.palette as PaletteOptions)
    .text_brandLightOnDark;
  const textBrandDarkOnLight = (theme.palette as PaletteOptions)
    .text_brandDarkOnLight;
  const textLinkOnLight = (theme.palette as PaletteOptions).text_link_onLight;
  const textLinkOnDark = (theme.palette as PaletteOptions).text_link_onDark;
  const backgroundLight = (theme.palette as PaletteOptions).background_light;
  const backgroundDark = (theme.palette as PaletteOptions).background_dark;

  return (
    <Box minHeight={800}>
      <DisplayMd>Primary</DisplayMd>
      <ColorRow title="Primary" colors={primaryBrandDark} />
      <ColorRow title="Secondary" colors={primaryBrandLight} />

      <DisplayMd>Secondary</DisplayMd>
      <ColorRow title="Moss" colors={secondaryMoss} />
      <ColorRow title="Grapefruit" colors={secondaryGrapefruit} />
      <ColorRow title="Watermelon" colors={secondaryWatermelon} />
      <ColorRow title="Lilac" colors={secondaryLilac} />
      <ColorRow title="Grape" colors={secondaryGrape} />

      <DisplayMd>Supportive</DisplayMd>
      <ColorRow title="Black" colors={supportiveBlack} />
      <ColorSingle
        title="Black (opacity)"
        color={supportiveBlackOpacity20}
        name="supportive_black_opacity_20"
      />
      <ColorSingle
        title="Black (opacity)"
        color={supportiveBlackOpacity90}
        name="supportive_black_opacity_90"
      />
      <ColorRow title="Offblack" colors={supportiveOffBlack} />
      <ColorRow title="Offblack (opacity)" colors={supportiveOffBlackOpacity} />
      <ColorRow title="Grey" colors={supportiveGrey} />
      <ColorRow title="Light grey" colors={supportiveLightGrey} />

      <DisplayMd>Functional</DisplayMd>
      <ColorRow title="Functional Error" colors={functionalError} />
      <ColorRow title="Functional Warning" colors={functionalWarning} />
      <ColorRow title="Functional Success" colors={functionalSuccess} />

      <DisplayMd>Text</DisplayMd>
      <ColorRow title="Text light on dark" colors={textLightOnDark} />
      <ColorRow title="Text dark on light" colors={textDarkOnLight} />
      <ColorRow title="Text off black on light" colors={textOffBlackOnLight} />
      <ColorRow
        title="Text brand light on dark"
        colors={textBrandLightOnDark}
      />
      <ColorRow
        title="Text brand dark on light"
        colors={textBrandDarkOnLight}
      />

      <DisplayMd>Link</DisplayMd>
      <ColorSingle
        title="Text link on light"
        color={textLinkOnLight}
        name="text_link_onLight"
      />
      <ColorSingle
        title="Text link on dark"
        color={textLinkOnDark}
        name="text_link_onDark"
      />

      <DisplayMd>Background</DisplayMd>
      <ColorSingle
        title="Background light"
        color={backgroundLight}
        name="background_light"
      />
      <ColorSingle
        title="Background dark"
        color={backgroundDark}
        name="background_dark"
      />
    </Box>
  );
}

export default {
  title: 'Colors',
  component: Default,
};
