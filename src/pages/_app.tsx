import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ConfigProvider } from 'antd';
import { antdTheme } from '../theme/theme';

import '@fontsource/playfair/700.css';  // Bold serif
import '@fontsource/lora/400.css';               // Regular serif

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ConfigProvider theme={antdTheme}>
      <Component {...pageProps} />
    </ConfigProvider>
  );
}
