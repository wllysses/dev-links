import { Header } from "../components/Header/Header"
import { Links } from "../components/Links/Links"
import { Social } from "../components/Social/Social"
import { Footer } from "../components/Footer/Footer"
import bg from "../assets/bg.png"
import styled from "styled-components"

export const Home = () => {

    return (
        <HomeWrapper bg={bg}>
            <div className="container">
                <Header />
                {/* <ThemeToggler /> */}
                <Links />
                {/* <Social /> */}
                {/* <Footer /> */}
            </div>
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
    background: url(${props => props.bg}) center center no-repeat;
    background-size: cover;
    font-family: 'Open Sans', sans-serif;
    color: var(--dark-color);
    transition: 0.2s;
    padding: 0.7rem;

    .container {
        max-width: 500px;
        width: 100%;
        background-color: var(--white-color);
        padding: 1rem;
        border-radius: 0.5rem;
    }
`