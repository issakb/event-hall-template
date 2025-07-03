import type { ThemeConfig } from 'antd/es/config-provider/context';

export const antdTheme: Partial<ThemeConfig> = {
  token: {
    colorPrimary: '#C5A159',
    colorTextBase: '#f7f1e1',
    colorBgBase: '#0a0a0a',
    borderRadius: 12,
    fontFamily: "'Playfair Display', serif",
    controlOutline: 'transparent',
  },
  components: {
    Button: {
      borderRadius: 50,
      fontWeight: 700,
      // padding: not supported here
      // boxShadow: not supported here
      // no nested selectors here
    },
    Card: {
      borderRadius: 20,
      // boxShadow: not supported here
    },
  },
};
