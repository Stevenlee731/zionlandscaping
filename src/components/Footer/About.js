import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import logo from '../../images/ZionLandscaping.svg'

const Logo = styled.img`
    grid-area: logo;
    background-color: white;
    margin: 1rem 0;
    justify-self: center;
    max-width: 50%;
`

const Summary = styled.div`
    grid-area: summary;
    margin: 1rem 0;
`

const Contact = styled(Link)`
    grid-area: contact;
    border-radius: 2px;
    border-color: #21a700;
    background-color: #7aba1e;
    display: grid;
    align-content: center;
    justify-content: center;
    widtH: 100%;
    color: white;
    height: 100%;
    text-transform: uppercase;
    text-decoration: none;
`

const StyledAbout = styled.div`
    grid-area: footer-about;
    display: grid;
    grid-template-areas:
        "logo logo"
        "summary summary"
        ". contact";
    grid-template-rows: repeat(2, auto) 40px;
    grid-template-columns: 1fr 1fr;
    padding: 1rem;
    margin: 0 1rem;

    @media (max-width: 1024px) {
        grid-template-areas:
        "logo logo"
        "summary summary"
        "contact contact";
      }
`

const About = () => (
    <StyledAbout>
        <Logo src={logo} alt="Zion Landscaping"/>
        <Summary>
        Since 1989, Zion Landscaping Inc. has been a licensed landscape contractor that delivers effective and successful landscape design and construction. For decades, we have been serving our clients in developing long-term projects and design throughout Orange County and Los Angeles.
        </Summary>
        <Contact to="/contact">
            Contact Us
        </Contact>
    </StyledAbout>
)

export default About
