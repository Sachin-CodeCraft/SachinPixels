import { createGlobalStyle } from 'styled-components/macro';

const GlobalStyles = createGlobalStyle`
/*
  1. Use a more-intuitive box-sizing model.
*/
*,
*::before,
*::after {
  box-sizing: border-box;
}
/*
    2. Remove default margin and padding
  */
* {
  margin: 0;
  padding:0;
}
/*
    3. Allow percentage-based heights in the application
  */
html,
body {
  height: 100%;
  overflow-x:hidden;
}
/*
    Typographic tweaks!
    4. Add accessible line-height
    5. Improve text rendering
  */
body {
  line-height: 1.5;
  font-family: 'Poppins' , sans-serif;
  -webkit-font-smoothing: antialiased;
}
img,
picture,
video,
canvas,
svg {
  display: block;
  max-width: 100%;
}
/*
    7. Remove built-in form typography styles
  */
input,
button,
textarea,
select {
  font: inherit;
}
/*
    8. Avoid text overflows
  */
p,
h1,
h2,
h3,
h4,
h5,
h6 {
  overflow-wrap: break-word;
}
/*
    9. Create a root stacking context for the react app.
  */
#root {
  isolation: isolate;
  height: 100%;
}
`;

export default GlobalStyles;
