import styled from "styled-components"
import avatar from '../../assets/foto-perfil.jpg'
import { GoVerified } from 'react-icons/go'

export const Header = () => {

    return (
        <Wrapper>
            <header>
                <Avatar src={avatar} alt="Minha foto de perfil" />
                <div className="my-user">
                    <h2>@wllyssesjr</h2>
                    <GoVerified size={20} color={`var(--primary-color)`} />
                </div>
                <h5>Front-end Developer</h5>
            </header>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    header {
        display: flex;
        align-items: center;
        flex-direction: column;
        gap: 1rem;

        .my-user {
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }
    }
`

const Avatar = styled.img`
    max-width: 40%;
    border-radius: 50%;
    box-shadow: 0 2px 5px rgba(0, 0, 0, .206);
`