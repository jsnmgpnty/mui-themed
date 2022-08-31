import { Box, BoxProps, styled } from '@mui/material';
import { useContext, useEffect, useRef, useState } from 'react';
import { ThemeContext } from '../../contexts';
import { getColorFromTheme } from '../../utils/helpers';

export type IconProps = BoxProps & {
  size?: 'small' | 'medium' | 'large';
  color?: string;
  icon: string;
};

const getSizeProps = (
  size: IconProps['size']
): { width: number; height: number } => {
  switch (size) {
    case 'small':
      return { width: 16, height: 16 };
    case 'medium':
      return { width: 20, height: 20 };
    default:
      return { width: 24, height: 24 };
  }
};

interface UseDynamicSVGImportOptions {
  onCompleted?: (
    name: string,
    SvgIcon: React.FC<React.SVGProps<SVGSVGElement>> | undefined
  ) => void;
  onError?: (err: Error) => void;
}

const useDynamicIcon = (
  name: string,
  options: UseDynamicSVGImportOptions = {}
) => {
  const { assetsPath } = useContext(ThemeContext);
  const ImportedIconRef = useRef<React.FC<React.SVGProps<SVGSVGElement>>>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error>();

  const { onCompleted, onError } = options;

  useEffect(() => {
    setLoading(true);
    const importIcon = async (): Promise<void> => {
      try {
        const path = name.split('.').join('/');
        ImportedIconRef.current = (
          await import(`!!@svgr/webpack!../../assets/icons/${path}.svg`)
        ).default;
        onCompleted?.(name, ImportedIconRef.current);
      } catch (err) {
        console.log(err);
        onError?.(err as Error);
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    };
    importIcon();
  }, [name, assetsPath, onCompleted, onError]);

  return { error, loading, SvgIcon: ImportedIconRef.current };
};

const IconContainer = styled(
  ({ size: _s, color: _c, ...props }: Omit<IconProps, 'icon'>) => (
    <Box component="span" {...props} />
  )
)(({ theme, color, size }: any) => ({
  display: 'inline-block',
  color: getColorFromTheme(
    theme,
    color || 'text_darkOnLight.text_brandDarkOnLight_100'
  ),
  ...getSizeProps(size),
}));

export const Icon = ({ color, icon, size = 'large', ...props }: IconProps) => {
  const { error, loading, SvgIcon } = useDynamicIcon(icon);
  if (error || loading || !SvgIcon) return null;
  return (
    <IconContainer color={color} size={size} {...props}>
      <SvgIcon />
    </IconContainer>
  );
};
