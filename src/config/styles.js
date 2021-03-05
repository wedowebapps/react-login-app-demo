import { css } from 'styled-components';
import Color from 'color';

export const color = {
  primary: '#f5f5f5',
  success: '#0B875B', // green
  danger: '#F51C2C', // red
  warning: '#b56900', // orange
  secondary: '#181818', // light grey
  black: '#000000',

  textDarkest: '#121212',
  textDark: '#121212',
  textWhite: '#ffffff',
  textMedium: '#333333',
  textLight: '#999999',
  textLink: '#0070C9',

  background: '#f5f5f5',
  backgroundDarkPrimary: '#f5f5f5',
  backgroundMedium: '#dddddd',
  backgroundLight: '#999999',
  backgroundLightest: '#dddddd',
  backgroundLightPrimary: '#D2E5FE',
  backgroundLightSuccess: '#E4FCEF',

  borderLightest: '#333',
  borderLight: '#666',
  borderInputFocus: '#333',

  buttonBorderColor: '#fff',
  buttonBorderHoverColor: '#333',
  buttonBorderHoverBGColor: '#333',
};

export const zIndexValues = {
  modal: 1000,
  dropdown: 101,
  navLeft: 100,
};

export const font = {
  regular: 'font-family: "Verdana"; font-weight: normal;',
  medium: 'font-family: "Verdana"; font-weight: normal;',
  bold: 'font-family: "Verdana"; font-weight: normal;',
  black: 'font-family: "Verdana"; font-weight: normal;',
  size: size => `font-size: ${size}px;`,
};

export const mixin = {
  darken: (colorValue, amount) =>
    Color(colorValue)
      .darken(amount)
      .string(),
  lighten: (colorValue, amount) =>
    Color(colorValue)
      .lighten(amount)
      .string(),
  rgba: (colorValue, opacity) =>
    Color(colorValue)
      .alpha(opacity)
      .string(),
  boxShadowMedium: css`
    box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.1);
  `,
  boxShadowDropdown: css`
    box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.31) 0px 0px 1px;
  `,
  truncateText: css`
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  `,
  clickable: css`
    cursor: pointer;
    user-select: none;
  `,
  hardwareAccelerate: css`
    transform: translateZ(0);
  `,
  cover: css`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  `,
  placeholderColor: colorValue => css`
    ::-webkit-input-placeholder {
      color: ${colorValue} !important;
      opacity: 1 !important;
    }
    :-moz-placeholder {
      color: ${colorValue} !important;
      opacity: 1 !important;
    }
    ::-moz-placeholder {
      color: ${colorValue} !important;
      opacity: 1 !important;
    }
    :-ms-input-placeholder {
      color: ${colorValue} !important;
      opacity: 1 !important;
    }
  `,
  scrollableY: css`
    overflow-x: hidden;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
  `,
  backgroundImage: imageURL => css`
    background-image: url("${imageURL}");
    background-position: 50% 50%;
    background-repeat: no-repeat;
    background-size: cover;
    background-color: ${color.backgroundLight};
  `,
  link: (colorValue = color.textLink) => css`
    cursor: pointer;
    color: ${colorValue};
    ${font.medium}
    &:hover, &:visited, &:active {
      color: ${colorValue};
    }
    &:hover {
      text-decoration: underline;
    }
  `,
};
