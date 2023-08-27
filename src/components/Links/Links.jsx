import styled from "styled-components"


export const Links = () => {

    return (
        <ListLinks>
            <LinkItem>
                <a href="https://artelier.vercel.app/" target='_blank'>Site</a>
            </LinkItem>
            <LinkItem>
                <a href="https://api.whatsapp.com/send?phone=5583986903987" target='_blank'>Whatsapp</a>
            </LinkItem>
            <LinkItem>
                <a href="https://instagram.com/artelier_pb" target='_blank'>Instagram</a>
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