export const COLORS = {
  white: 'hsl(0deg 0% 100%)',
  blue: 'hsl(243.529, 27%, 12%)',
  medium_blue: 'hsl(222.857, 30%, 9%)',
  normal_black: 'hsl(0, 0%, 7%, 1)',
  medium_red: 'hsl(4.472, 76%, 42%)',
  normal_red: 'hsl(0deg 100% 50%)',
  black: 'hsl(0, 0%, 0%)',
  sky_blue: 'hsl(166, 57%, 62%) ',
  dark_blue: 'hsl(223, 33%, 17%)',
  normal_blue: 'hsl(224,36%,14%)',
  medium_sky_blue: 'hsl(222,23%,46%)',
  normal_gray: 'hsl(230, 5%, 47%)',
  medium_gray: 'hsl(0, 0%, 20%)',
  light_gray: 'hsl(0, 0%, 100%, 0.5)',
  teal: 'hsl(175.34, 77%, 26%)',
  gray: {
    100: 'hsl(185deg 5% 95%)',
    300: 'hsl(190deg 5% 80%)',
    500: 'hsl(196deg 4% 60%)',
    700: 'hsl(220deg 5% 40%)',
    900: 'hsl(220deg 3% 20%)',
  },
  primary: 'hsl(0°, 0%, 100%)',
  secondary: 'hsl(240deg 60% 63%)',
} as const;

export const WEIGHTS = {
  small: 400,
  normal: 500,
  medium: 600,
  bold: 800,
} as const;

// Desktop first approach
export const BREAKPOINTS = {
  lapTopMax: 1300,
  tabletMax: 950,
  mobileMax: 600,
} as const;

export const QUERIES = {
  lapTopAndBelow: `(max-width: ${BREAKPOINTS.lapTopMax}px)`,
  tabletAndBelow: `(max-width: ${BREAKPOINTS.tabletMax}px)`,
  mobileAndBelow: `(max-width: ${BREAKPOINTS.mobileMax}px)`,
} as const;
