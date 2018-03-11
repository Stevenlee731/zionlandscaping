import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const StyledHours = styled.div`
    grid-area: footer-hours;
    padding: 1rem;
    margin: 0 1rem;
`

const HoursHeader = styled.div`
    margin: 1rem 0;
    font-size: 2rem;
`

const DayHours = styled.div`
    display: grid;
    grid-template-columns: repeat(2,70px) auto;
    grid-template-areas: 
        "day colon hours";
    grid-template-rows: repeat(3, auto);
`

const Day = styled.span`
    grid-area: day;
`

const Colon = styled.span`
    grid-area: colon;
`

const WorkingHours = styled.span`
    grid-area: hours;
`

const Hours = () => (
    <StyledHours>
        <HoursHeader>
            Opening Hours
        </HoursHeader>
        <DayHours>
            <Day>Mon-Sat</Day>
            <Colon>:</Colon>
            <WorkingHours>08.00 - 17.00</WorkingHours>
        </DayHours>
        <DayHours>
            <Day>Sunday</Day>
            <Colon>:</Colon>
            <WorkingHours>CLOSED</WorkingHours>
        </DayHours>
    </StyledHours>
)

export default Hours

