import '../styles/global.ts';

import {Provider} from 'next-auth/client'
import { ThemeProvider } from '../contexts/ThemeContext';
import { InfoBoxProvider } from '../contexts/InfoBoxContext';

function MyApp({ Component, pageProps }) {

  return (
    <InfoBoxProvider >
      <ThemeProvider>

        <Provider session={pageProps.session}>
            <Component {...pageProps} />
        </Provider>

      </ThemeProvider>

    </InfoBoxProvider>

  )
}

export default MyApp