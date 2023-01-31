import { colorTypes, fontSizeTypes } from './types';

const colors: colorTypes = {
  black: '#333333',
  white: '#ffffff',
  gray: '#ADADB8',
  deepblue: '#0E4371',
  primary: '#2E2E4A',
  _NF_: '#4EBAA9',
  _NT_: '#8570C2',
  _S_J: '#4D88D9',
  _S_P: '#F79665',
};

const calcRem = (size: number): string => `${size / 16}rem`;

const fontSizes: fontSizeTypes = {
  xs: calcRem(12),
  small: calcRem(14),
  base: calcRem(16),
  lg: calcRem(18),
  xl: calcRem(20),
  xxl: calcRem(22),
  xxxl: calcRem(24),
};

const theme = {
  colors,
  fontSizes,
};

export default theme;
