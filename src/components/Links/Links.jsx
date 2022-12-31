import styled from "styled-components"


export const Links = () => {

    return (
        <ListLinks>
            <LinkItem>
                <a href="https://my-portfolio-wllysses.vercel.app/" target='_blank'>Portfólio</a>
            </LinkItem>
            <LinkItem>
                <a href="https://github.com/wllysses" target='_blank'>Github</a>
            </LinkItem>
            <LinkItem>
                <a href="https://www.linkedin.com/in/wllysses-tavares-29a9a7223/" target='_blank'>Linkedin</a>
            </LinkItem>
        </ListLinks>
    )
}

const ListLinks  = styled.div`
    max-width: 500px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
`

const LinkItem = styled.div`
    width: 100%;
    margin: auto;
    height: 3.5rem;
    background-color: var(--primary-color);
    border-radius: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.2s;

    &:hover {
        background-color: var(--hover-color);
    }

    a {
        color: var(--white-color);
        text-decoration: none;
        font-weight: 700;
        font-size: 1.2rem;
        width: 100%;
        text-align: center;
    }
`