import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    primary: {
      main: '#116831',
      contrastText: '#fffbcd'
    },
    secondary: {
      main: '#ddf4a8',
      light: '#7eeef8'
    }
  },

  typography: {
    fontFamily: 'Roboto, Arial, sans-serif'
  }
})

export default theme