import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import App from './App'
import { GlobalStyles } from './styles/global/GlobalStyles'
import { themes } from './styles/theme/theme'
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={themes}>
      <App />
    <GlobalStyles />
    </ThemeProvider>
  </React.StrictMode>,
)
