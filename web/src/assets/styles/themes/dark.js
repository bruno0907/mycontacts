import defaultTheme from './defaultTheme';

const { colors } = defaultTheme;

export default {
  ...defaultTheme,
  backgroundColor: colors.grey[900],
  inputBackgroundColor: colors.black,
  text: colors.grey[10],
  boxShadow: {
    light: '4px 4px 4px rgba(0, 0, 0, 0.02)',
  },
  overlay: 'rgba(6, 1, 6, .8)',
};
