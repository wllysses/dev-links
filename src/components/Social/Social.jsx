import styled from "styled-components"
import IconButton from '@mui/material/IconButton';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import { SiDiscord } from 'react-icons/si'
import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";

export const Social = () => {

    const { theme } = useContext(ThemeContext)

    let socialMedias = [
        {
            link: 'https://instagram.com/wllyssesjr'
        },
        {
            link: 'https://twitter.com/wllyssespaz_'
        },
        {
            link: 'https://discord.com'
        }
    ]

    return (
        <SocialWrapper>
            <div className="socials">
                {
                    socialMedias.map((social, index) => {
                        return (
                            <IconButton 
                                href={social.link}
                                target="_blank" 
                                sx={{color: theme.color, backgroundColor: theme.background}}
                                key={index}
                            >
                                {
                                    index == 0 && <InstagramIcon />
                                }
                                {
                                    index == 1 && <TwitterIcon />
                                }
                                {
                                    index == 2 && <SiDiscord />
                                }
                            </IconButton>
                        )
                    })
                }
            </div>
        </SocialWrapper>
    )
}

const SocialWrapper = styled.div`
    .socials {
        display: flex;
        align-items: center;
        gap: 1rem;

        a {
            path {
                transition: 0.1s;

                &:hover {
                    color: var(--primary-color);
                }
            }
                
        }
    }
`