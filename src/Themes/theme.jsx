import { ThemeProvider, createTheme } from '@mui/material/styles'

const themeOptions = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#ee9e09',
      contrastText: 'rgba(236,4,4,0.87)',
    },
    secondary: {
      main: '#a40000',
      contrastText: '#ffecb3',
    },
    background: {
      default: '#ee9e09',
      paper: '#000000',
    },
    info: {
      main: '#393939',
      contrastText: '#ffecb3',
    },
    success: {
      main: '#607d2e',
      contrastText: '#f0f4c3',
    },
    error: {
      main: '#ff3e3e',
      contrastText: '#ffecb3',
    },
    text: {
      primary: '#ffecb3',
    },
  },
})

export default themeOptions
