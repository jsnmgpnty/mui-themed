import { Box, FormControlLabel } from '@mui/material';
import { CompanyLogo } from '../CompanyLogo';
import { DisplaySm, TextMd } from '../Text';
import { TextField } from '../TextField';
import { Icon } from '../Icon';
import { Checkbox } from '../Checkbox';
import { Link } from '../Link';
import { PrimaryButton } from '../Button';

export const Default = () => (
  <>
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      mb={4}
    >
      <Box mb={4}>
        <CompanyLogo type="full" />
      </Box>
      <DisplaySm bold mb={1.5}>
        Log in to your account
      </DisplaySm>
      <TextMd>Welcome back! Please enter your details.</TextMd>
    </Box>
    <Box mb={2.5}>
      <TextField
        label="Email"
        InputProps={{
          startAdornment: <Icon icon="general.activity" />,
          endAdornment: <Icon icon="general.help-circle" />,
        }}
        type="email"
      />
    </Box>
    <Box mb={3}>
      <TextField
        label="Password"
        type="password"
        InputProps={{
          startAdornment: <Icon icon="general.activity" />,
          endAdornment: (
            <Box sx={{ cursor: 'pointer' }}>
              <Icon icon="general.eye-off" />
            </Box>
          ),
        }}
      />
    </Box>
    <Box
      mb={3}
      display="flex"
      justifyContent="space-between"
      alignItems="center"
    >
      <FormControlLabel
        label="Remember me for 45 days"
        sx={{ display: 'block' }}
        control={
          <>
            <Checkbox />
          </>
        }
      />
      <Link href="/forgot-password">Forgot Password</Link>
    </Box>
    <PrimaryButton fullWidth>Sign In</PrimaryButton>
  </>
);

export default {
  title: 'Sandbox',
  component: Default,
};
