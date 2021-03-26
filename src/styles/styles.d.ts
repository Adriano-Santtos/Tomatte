<<<<<<< HEAD
import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;
=======
import 'styled-componets';

interface Theme {
>>>>>>> dark mode
    colors: {
      bodyColor: string;
      background: string;
      grayLine: string;
      text: string;
      textHighlight: string;
      title: string;
      invertWhite: string;
      invertBlack: string;
      overlay: string;
<<<<<<< HEAD
    }
  }
}
=======
    };
};

    declare module 'styled-components' {
      // eslint-disable-next-line @typescript-eslint/no-empty-interface
      export interface DefaultTheme extends Theme {}
    }
    
>>>>>>> dark mode
