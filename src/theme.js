import { createMuiTheme } from '@material-ui/core/styles'
import { teal } from '@material-ui/core/colors'

const textPrimary = '#222'
const textSecondary = '#444'

// Reference: https://material-ui.com/customization/theming/
export const theme = createMuiTheme({
  palette: {
    primary: {
      main: teal[800],
    },
    secondary: {
      main: teal[400],
    },
    text: {
      primary: textPrimary,
      secondary: textSecondary,
    },
    background: {
      default: '#eee',
      paper: '#fff',
    },
    divider: 'rgba(0,0,0,0.15)',
  },
  spacing: 8,
  typography: {
    h1: { fontSize: 22, fontWeight: 'bold', colog: textPrimary },
    h2: { fontSize: 20, fontWeight: 'bold', color: textPrimary },
    h3: { fontSize: 18, fontWeight: 'bold', color: textPrimary },
    body1: { fontSize: 16, color: textPrimary },
    body2: { fontSize: 16, color: textSecondary },
    caption: { fontSize: 12, color: textSecondary },
  },
})
