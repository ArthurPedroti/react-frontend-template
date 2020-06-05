import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;
    logo: string;

    colors: {
      primary: string;
      secundary: string;

      background: string;
      backgroundLight: string;
      error: string;
      success: string;
      info: string;
      li: string;
      text: string;
      inputColor: string;
      inputPlaceholder: string;
    };
  }
}
