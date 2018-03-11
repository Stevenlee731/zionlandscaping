import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const StyledServices = styled.div`
    grid-area: footer-services;
    padding: 1rem;
    display: grid;
    align-content: space-around;
    align-items: start;
    grid-template-rows: 1.5fr repeat(auto, 1fr);
    margin: 0 1rem;
`

const ServiceChild = styled.li`
    margin: 1rem 0 1rem 1rem;

    a {
        color: white;
        text-decoration: none;
    }

    a:hover {
        color: #7aba1e;
    }
`

const ServiceHeader = styled.div`
    margin: 1rem 0;
    font-size: 2rem;
`


const Services = () => (
    <StyledServices>
        <ServiceHeader>
            Our Services
        </ServiceHeader>
        <ServiceChild>
            <Link to="/">Landscape Design</Link>
        </ServiceChild>
        <ServiceChild>
            <Link to="/">Landscape Installations</Link>
        </ServiceChild>
        <ServiceChild>
            <Link to="/">Landscape Maintenance</Link>
        </ServiceChild>
    </StyledServices>
)


export default Services

