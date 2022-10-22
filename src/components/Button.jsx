import React from 'react'
import styled from 'styled-components'

function Button({text,theme}) {
  return (
    <Container theme={theme}>
        <span>{text}</span>
    </Container>
  )
}

export default Button

const Container = styled.div`
    padding: 10px 60px;
    margin: 0px 20px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border: none;
    border-radius: 5px;
    background-color: #f4f4f4a6;

    span {
        color: #171a20;
        font-weight: 500;
    }

    ${({theme}) => {
        if (theme === 'dark') {
            return `
                background-color: #393c41;

                span {
                    color: #FFFFFF;
                }
            `
        }
    }}
    
    
`