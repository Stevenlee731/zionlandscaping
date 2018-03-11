import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const StyledContact = styled.div`
    grid-area: footer-contact;
    padding: 1rem;
    margin: 0 1rem;
`

const ContactHeader = styled.div`
    margin: 1rem 0;
    font-size: 2rem;
`

const ContactUs = () => (
    <StyledContact>
        Contact
    </StyledContact>
)

export default ContactUs

