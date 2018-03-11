import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import Img from 'gatsby-image'

const IndexPage = () => (
  <React.Fragment>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/services/">Go to page 2</Link>
  </React.Fragment>
)

export default IndexPage


