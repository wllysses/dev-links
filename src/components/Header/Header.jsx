import styled from "styled-components"
import logo from '../../assets/artelier-logo.png'
import { GoVerified } from 'react-icons/go'

export const Header = () => {

    return (
        <Wrapper>
            <header>
                <Avatar src={logo} alt="Logo Artelier" data-aos="fade-right" />
                <div className="my-user" data-aos="fade-left">
                    <div>
                        <h2>@artelier_pb</h2>
                        <GoVerified size={20} color={`var(--primary-color)`} />
                    </div>
                    <h5>Quadros & Personalizados</h5>
                </div>
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
        margin-bottom: 1rem;

        .my-user {
            display: flex;
            align-items: center;
            flex-direction: column;
            gap: 0.5rem;

            div {
                display: flex;
                align-items: center;
                gap: 0.5rem;
            }
        }
    }
`

const Avatar = styled.img`
    max-width: 120px;
    border-radius: 50%;
`