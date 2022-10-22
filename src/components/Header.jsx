import React from 'react'
import styled from 'styled-components'

function Header() {
  return (
    <Container>
        <NavLogo>
            <img src='/images/tesla-logo.svg' alt='' />
        </NavLogo>
        <NavMenu>
            <MenuItem>Model S</MenuItem>
            <MenuItem>Model 3</MenuItem>
            <MenuItem>Model X</MenuItem>
            <MenuItem>Model Y</MenuItem>
            <MenuItem>Solar Roof</MenuItem>
            <MenuItem>Solar Panels</MenuItem>
        </NavMenu>
        <NavMenu>
            <MenuItem>Shop</MenuItem>
            <MenuItem>Account</MenuItem>
            <MenuItem>Menu</MenuItem>
        </NavMenu>
    </Container>
  )
}

export default Header

const Container = styled.nav`
    width: 100%;
    height: 60px;
    padding: 0px 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;
`

const NavLogo = styled.div`
    cursor: pointer;
    
    img {
        width: 100px;
        height: 100%;
        object-fit: contain;
    }

`
const NavMenu = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`

const MenuItem = styled.div`
    // margin: 5px;
    padding: 5px 10px;
    font-size: 16px;
    font-weight: 500;
    border-radius: 5px;
    cursor: pointer;
    font-size: 15px;

    &:hover {
        background-color: #f4f4f4a6;
    }
`