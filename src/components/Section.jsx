import React from 'react'
import styled from 'styled-components'
import Button from './Button'

function Section({title,description,background,leftButtonText,rightButtonText}) {
  return (
    <Container>
        <Background>
            <img src={background} alt='' />
        </Background>
        <SectionHeader>
            <h3>{title}</h3>
            {description ? <p>{description}</p> : <br/>}
        </SectionHeader>
        <SectionFooter>
            <ButtonGroup>
                <Button text={leftButtonText} theme='dark'/>
                {rightButtonText && <Button text={rightButtonText} theme='light'/>}
            </ButtonGroup>
        </SectionFooter>
    </Container>
  )
}

export default Section

const Container = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    overflow: hidden;
`

const Background = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    overflow: hidden;
    
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`

const SectionHeader = styled.div`
    margin-bottom: 25px;

    h3 {
        font-size: 28px;
        text-align: center;
    }

    p {
        text-align: center;

        a {
            color: black;
            text-decoration: none;
            border-bottom: 1px solid black;
            padding-bottom: 1px;
        }
    }
`

const SectionFooter = styled.div`
    margin-top: 10vh;
`

const ButtonGroup = styled.div`
    display: flex;
    align-items: center;
`