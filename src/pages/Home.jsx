import { Header } from "../components/Header/Header"
import { ThemeToggler } from "../components/ThemeToggle/ThemeToggle"
import { Links } from "../components/Links/Links"
import { Social } from "../components/Social/Social"
import { Footer } from "../components/Footer/Footer"
import styled from "styled-components"
import { useContext } from "react"
import { ThemeContext } from "../contexts/ThemeContext"

export const Home = () => {
    
    const { theme } = useContext(ThemeContext)

    return (
        <HomeWrapper style={{color: theme.color, backgroundColor: theme.background}}>
            <Header />
            <ThemeToggler />
            <Links />
            <Social />
            <Footer />
        </HomeWrapper>
    )
}

const HomeWrapper = styled.div`
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 2rem;
    background-color: var(--secondary-color);
    font-family: 'Open Sans', sans-serif;
    color: var(--white-color);
    transition: 0.2s;
`