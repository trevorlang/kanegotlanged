import Typography from 'typography';

const typographyTheme = {
  title: 'KaneGotLanged',
  baseFontSize: '18px',
  baseLineHeight: 1.666,
  headerFontFamily: [
    'Montserrat',
    'Helvetica Neue',
    'Segoe UI',
    'Helvetica',
    'Arial',
    'sans-serif',
  ],
  bodyFontFamily: ['Crimson Text', 'Georgia', 'serif'],
  googleFonts: [
    {
      name: 'Montserrat',
      styles: ['200', '300', '300i', '400', '700'],
    },
    {
      name: 'Crimson Text',
      styles: ['400', '400i', '700'],
    },
  ],
};

const typography = new Typography(typographyTheme);

export const { scale, rhythm, options } = typography;
export default typography;
