import { Box } from '@mui/material';
import { TextMd } from '../Text';
import {
  PrimaryButton,
  SecondaryButton,
  SecondaryGrayButton,
  TertiaryButton,
  TertiaryGrayButton,
  ButtonProps,
  DangerButton,
} from './index';
import { Icon } from '../Icon';

export function Default(
  props: ButtonProps & {
    hasStartIcon?: boolean;
    hasEndIcon?: boolean;
    hasLoadingContent?: boolean;
  }
) {
  const startIcon = props.hasStartIcon ? (
    <Icon icon="general.search-sm" />
  ) : undefined;
  const endIcon = props.hasEndIcon ? (
    <Icon icon="general.menu-01" />
  ) : undefined;
  const loadingContent = props.hasLoadingContent ? (
    <TextMd my={0}>Loading</TextMd>
  ) : undefined;
  return (
    <Box width={360}>
      <Box mb={2}>
        <PrimaryButton
          {...props}
          startIcon={startIcon}
          endIcon={endIcon}
          loadingContent={loadingContent}
        >
          Primary Button
        </PrimaryButton>
      </Box>
      <Box mb={2}>
        <SecondaryButton
          {...props}
          startIcon={startIcon}
          endIcon={endIcon}
          loadingContent={loadingContent}
        >
          Secondary Button
        </SecondaryButton>
      </Box>
      <Box mb={2}>
        <SecondaryGrayButton
          {...props}
          startIcon={startIcon}
          endIcon={endIcon}
          loadingContent={loadingContent}
        >
          Secondary Gray Button
        </SecondaryGrayButton>
      </Box>
      <Box mb={2}>
        <TertiaryButton
          {...props}
          startIcon={startIcon}
          endIcon={endIcon}
          loadingContent={loadingContent}
        >
          Tertiary Button
        </TertiaryButton>
      </Box>
      <Box mb={2}>
        <TertiaryGrayButton
          {...props}
          startIcon={startIcon}
          endIcon={endIcon}
          loadingContent={loadingContent}
        >
          Tertiary Gray Button
        </TertiaryGrayButton>
      </Box>
      <Box mb={2}>
        <DangerButton
          {...props}
          startIcon={startIcon}
          endIcon={endIcon}
          loadingContent={loadingContent}
        >
          Tertiary Gray Button
        </DangerButton>
      </Box>
    </Box>
  );
}

export default {
  title: 'Button',
  component: Default,
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['contained', 'outlined', 'text'],
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg', 'xl', 'xxl'],
    },
    fullWidth: {
      control: 'boolean',
    },
    loading: {
      control: 'boolean',
    },
    hasStartIcon: {
      control: 'boolean',
    },
    hasEndIcon: {
      control: 'boolean',
    },
    hasLoadingContent: {
      control: 'boolean',
    },
  },
};
