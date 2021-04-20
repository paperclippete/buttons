import React from 'react';
import { Global, css } from '@emotion/react';
import { colors } from '../styles';

const globalStyles = css`
  /* importing global font styles */
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;400;700&display=swap'); 
  @import url('https://fonts.googleapis.com/css2?family=Sen:wght@400;700;800&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Baloo+Thambi+2:wght@400;600;800&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Monoton&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Codystar&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=DotGothic16&display=swap');

  /* Set html defaults */
  html {
    background-color: ${colors['theme-1']['light-1']};
  }

  /* Set body defaults */
  body {
    -webkit-tap-highlight-color: transparent;
    min-height: 100vh;
    min-width: 640px;
    scroll-behavior: smooth;
    text-rendering: optimizeSpeed;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: ${colors['theme-1']['dark-1']};
  }
`;

const GlobalStyles = () => (
  <Global styles={css`${globalStyles}`} />
);

export default GlobalStyles;
