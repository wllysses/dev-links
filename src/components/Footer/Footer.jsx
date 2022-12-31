import styled from "styled-components"

export const Footer = () => {
    return (
        <FooterWrapper>
            <footer>
                <p>Desenvolvido por Wllysses Tavares</p>
            </footer>
        </FooterWrapper>
    )
}

const FooterWrapper = styled.div`
    footer {
        p {
            font-weight: 700;
        }
    }
`