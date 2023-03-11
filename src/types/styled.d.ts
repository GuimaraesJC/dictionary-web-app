import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      black: string;
      grayDarkest: string;
      grayDarker: string;
      grayDark: string;
      gray: string;
      grayLighter: string;
      grayLightest: string;
      white: string;
      purple: string;
      red:string;
    }
  }
}
