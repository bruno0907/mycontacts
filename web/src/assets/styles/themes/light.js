import defaultTheme from './defaultTheme';

const { colors } = defaultTheme;

export default {
  ...defaultTheme,
  backgroundColor: colors.grey[10],
  inputBackgroundColor: colors.white,
  text: colors.grey[900],
  boxShadow: {
    light: '4px 4px 4px rgba(0, 0, 0, 0.02)',
  },
};
