import {
  Box,
  Dialog as MuiDialog,
  DialogProps as MuiDialogProps,
  styled,
} from '@mui/material';
import { BoxProps } from '@mui/system';
import CloseIcon from '@mui/icons-material/Close';
import { PlainIconButton } from '../IconButton';

const bottomSheetMobileStyles = {
  minWidth: '100%',
  maxWidth: '100%',
  position: 'fixed',
  bottom: 0,
  marginBottom: 0,
  marginLeft: 0,
  marginRight: 0,
};

export enum DialogBorderType {
  SMALL = 'small',
  LARGE = 'large',
}

export type DialogProps = MuiDialogProps & {
  dockToBottom?: boolean;
  containerProps?: BoxProps;
  borderType?: DialogBorderType;
  maxWidth?: number;
  minWidth?: number;
  dismissible?: boolean;
};

const getBorderRadius = (type: DialogBorderType) => {
  switch (type) {
    case DialogBorderType.LARGE:
      return 22;
    default:
      return 10;
  }
};

const Dialog = styled(
  ({
    dockToBottom: _d,
    maxWidth: _w,
    minWidth: _m,
    containerProps: _c,
    ...props
  }: DialogProps) => <MuiDialog {...props} />
)(
  ({
    theme,
    dockToBottom,
    borderType = DialogBorderType.SMALL,
    maxWidth = 374,
    minWidth = 374,
  }) => ({
    '& .MuiDialog-paper': {
      borderRadius: getBorderRadius(borderType),
      overflow: 'hidden',
      backgroundColor: theme.palette.background.default,
      ...(dockToBottom
        ? {
            [theme.breakpoints.down('sm')]: {
              ...bottomSheetMobileStyles,
              borderRadius: `${getBorderRadius(borderType)}px ${getBorderRadius(
                borderType
              )}px 0 0`,
            },
            borderRadius: getBorderRadius(borderType),
            minWidth,
            maxWidth,
            position: 'relative',
            bottom: 'auto',
          }
        : {}),
    },
  })
);

export default function Modal({
  children,
  containerProps,
  dismissible,
  ...props
}: DialogProps) {
  const handleClose = () => {
    if (props.onClose) props.onClose({}, 'backdropClick');
  };

  return (
    <Dialog {...props}>
      <Box
        overflow="auto"
        px={2}
        py={2}
        position="relative"
        {...containerProps}
      >
        {dismissible && (
          <Box position="absolute" top={16} right={16}>
            <PlainIconButton icon={<CloseIcon />} round onClick={handleClose} />
          </Box>
        )}
        {children}
      </Box>
    </Dialog>
  );
}
