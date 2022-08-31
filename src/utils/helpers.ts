import { useMediaQuery, useTheme } from '@mui/material';
import { ITheme } from '@mui/styles';
import { useState, useEffect } from 'react';

type ScrollProps = {
  direction?: string;
  lastScroll?: number;
};

export const useIsMobileView = () => {
  const theme = useTheme();
  return useMediaQuery(theme.breakpoints.down('sm'));
};

export const useHasMounted = () => {
  const [hasMounted, setHasMounted] = useState(false);
  useEffect(() => {
    setHasMounted(true);
  }, []);
  return hasMounted;
};

export const useGetScrollDirection = () => {
  const [scroll, setScroll] = useState<ScrollProps>({
    direction: undefined,
    lastScroll: 0,
  });

  useEffect(() => {
    const handleOnScroll = () => {
      if (!scroll?.lastScroll) return;
      const st =
        document?.body?.scrollTop || document?.documentElement?.scrollTop;
      setScroll({
        direction: st > scroll?.lastScroll ? 'down' : 'up',
        lastScroll: st,
      });
    };

    window.addEventListener('scroll', handleOnScroll);
    return () => {
      window.removeEventListener('scroll', handleOnScroll);
    };
  }, [scroll]);

  if (typeof document === 'undefined') return null;

  return scroll?.direction ?? null;
};

export const getColorFromTheme = (theme: ITheme, color: string) => {
  if (!color) return undefined;
  const arr = color.split('.');
  let colorResult;
  for (const item of arr) {
    if (typeof colorResult === 'string') break;
    if (!colorResult) {
      colorResult = theme.palette[item];
    } else {
      colorResult = colorResult[item];
    }
  }
  return colorResult;
};
