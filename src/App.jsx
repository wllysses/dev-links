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
    --primary-color: #44ADFF;
    --secondary-color: #14212A;
    --white-color: #fff;
    --hover-color: #3a91d4;
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