import '../styles/global.ts';

import {Provider} from 'next-auth/client'
import { ThemeProvider } from '../contexts/ThemeContext';

function MyApp({ Component, pageProps }) {

  return (
    <ThemeProvider>

      <Provider session={pageProps.session}>
          <Component {...pageProps} />
      </Provider>

    </ThemeProvider>

  )
}

export default MyApp