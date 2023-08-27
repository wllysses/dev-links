import { createGlobalStyle } from "styled-components"
import { ThemeProvider } from "./contexts/ThemeContext"
import { AppRoutes } from "./routes/Routes"

function App() {

  return (
    <div className="App">
        <GlobalStyle />
        <ThemeProvider>
          <AppRoutes />
        </ThemeProvider>
    </div>
  )
}

export default App

const GlobalStyle = createGlobalStyle`

  :root {
    --primary-color: #C98258;
    --secondary-color: #FFF6ED;
    --white-color: #fff;
    --dark-color: #000;
    --hover-color: #ad6e4a;
  }

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }
`