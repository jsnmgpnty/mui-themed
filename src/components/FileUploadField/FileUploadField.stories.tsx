import { Box } from '@mui/material';
import FileUploadField, { FileUploadFieldProps } from './index';

export function Default(props: FileUploadFieldProps) {
  return (
    <Box maxWidth={500}>
      <FileUploadField
        value="https://images2.minutemediacdn.com/image/upload/c_crop,h_1126,w_2000,x_0,y_181/f_auto,q_auto,w_1100/v1554932288/shape/mentalfloss/12531-istock-637790866.jpg"
        {...props}
      />
    </Box>
  );
}

export default {
  title: 'File Upload Field',
  component: Default,
  argTypes: {
    fullWidth: {
      control: 'boolean',
    },
  },
};
