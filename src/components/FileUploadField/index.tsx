import React, { PropsWithChildren, useEffect, useRef, useState } from 'react';
import { Box, Button, SxProps, styled, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { BoxProps } from '@mui/system';

type InputFileProps = BoxProps & {
  [key: string]: string | null;
};

export type FileUploadFieldProps = BoxProps & {
  defaultValue?: string;
  name: string;
  value?: string;
  error?: string;
  buttonLabel?: string;
  onFileChange?: (key: string, value: File | undefined | null) => void;
  preview?: boolean;
  fullWidth?: boolean;
  noTextField?: boolean;
  inputProps?: InputFileProps;
  previewProps?: BoxProps;
  onImgLoad?: (
    ev: React.SyntheticEvent<HTMLImageElement, Event>,
    fieldName: string,
    ref?: HTMLElement
  ) => void;
};

type UploadTextProps = BoxProps & {
  type?: string;
  value?: string;
  disabled?: boolean;
  error?: boolean;
};

const UploadText = styled(Box)<UploadTextProps>(({ theme, error }) => ({
  display: 'flex',
  flexGrow: 1,
  border: `${!error ? 1 : 2}px solid ${
    !error ? theme.palette.grey[400] : theme.palette.error.main
  }`,
  borderLeft: 'none',
  paddingTop: error ? theme.spacing(1.875) : theme.spacing(2),
  paddingBottom: error ? theme.spacing(1.875) : theme.spacing(2),
  paddingLeft: theme.spacing(1),
  paddingRight: theme.spacing(1),
  borderTopRightRadius: theme.shape.borderRadius,
  borderBottomRightRadius: theme.shape.borderRadius,
}));

const PreviewBox = styled(Box)(() => ({
  position: 'relative',
  span: {
    display: 'none',
    transition: 'all 0.5s ease-out',
  },
  '&:hover': {
    span: {
      display: 'inline-block',
    },
  },
}));

const getUploadFieldText = (value?: string | File): string => {
  if (!value) return 'Select a file';
  if (value instanceof File) return value.name;
  return value;
};

const getUploadFieldUrl = (value?: string | File): string => {
  if (!value) return '';
  if (value instanceof File) return URL.createObjectURL(value);
  return value;
};

const getUploadButtonStyles = (noTextField?: boolean): SxProps => {
  if (noTextField) return {};
  return { borderTopRightRadius: 0, borderBottomRightRadius: 0 };
};

const FileUploadField = ({
  name,
  value,
  error,
  buttonLabel,
  defaultValue,
  onFileChange,
  fullWidth,
  preview,
  noTextField,
  inputProps,
  previewProps,
  onImgLoad,
  ...props
}: PropsWithChildren<FileUploadFieldProps>) => {
  const [currentImage, setCurrentImage] = useState<string | undefined>(
    value ?? defaultValue ?? ''
  );
  const [textValue, setTextValue] = useState(value ?? defaultValue ?? '');
  const imgRef = useRef<HTMLImageElement>();

  useEffect(() => {
    if (value != null && typeof value === 'object') {
      const url = URL.createObjectURL(value);
      setCurrentImage(url);
      setTextValue((value as File)?.name ?? url ?? '');
    } else {
      setCurrentImage(value);
      setTextValue(value ?? defaultValue ?? '');
    }
  }, [value, defaultValue]);

  const handleRemoveFile = () => {
    setCurrentImage('');
    setTextValue('');
    if (onFileChange) onFileChange(name, null);
  };

  const handleOnImageLoad = (
    e: React.SyntheticEvent<HTMLImageElement, Event>
  ) => {
    if (onImgLoad) onImgLoad(e, name, imgRef.current);
  };

  return (
    <Box {...props} width={fullWidth ? '100%' : 'auto'}>
      <Box mb={2}>
        <Box
          mb={1}
          display="flex"
          alignItems="center"
          width={fullWidth ? '100%' : 'auto'}
        >
          <Box component="label" htmlFor={name}>
            <Button
              variant="contained"
              component="span"
              sx={getUploadButtonStyles(noTextField)}
            >
              {buttonLabel ?? 'Select a file'}
            </Button>
            <Box
              component="input"
              id={name}
              name={name}
              type="file"
              display="none"
              data-testid={`file-upload-field-input-${name}`}
              {...inputProps}
              onChange={(e: React.SyntheticEvent<HTMLInputElement, Event>) => {
                const file = e.currentTarget.files?.[0];
                if (!file) return;
                const url = URL.createObjectURL(file);
                setCurrentImage(url);
                setTextValue(file.name);
                if (onFileChange) onFileChange(name, file);
              }}
            />
          </Box>
          {!noTextField && (
            <UploadText
              data-testid={`file-upload-field-text-${name}`}
              component="input"
              type="text"
              value={getUploadFieldText(textValue)}
              disabled
              error={!!error}
            />
          )}
        </Box>
        {error && (
          <Typography variant="caption" color="error.main">
            {error}
          </Typography>
        )}
      </Box>
      {preview && currentImage && (
        <PreviewBox {...previewProps}>
          <Box
            component="img"
            sx={{ cursor: 'pointer' }}
            ref={imgRef}
            onLoad={handleOnImageLoad}
            width="100%"
            src={getUploadFieldUrl(currentImage)}
          />
          <Box component="span" position="absolute" right={16} top={16}>
            <Box
              borderRadius="100%"
              bgcolor="red"
              color="white"
              display="flex"
              alignItems="center"
              justifyContent="center"
              width={40}
              height={40}
              sx={{ cursor: 'pointer' }}
              onClick={handleRemoveFile}
            >
              <CloseIcon />
            </Box>
          </Box>
        </PreviewBox>
      )}
    </Box>
  );
};

export default FileUploadField;
