import React, { useContext } from 'react'
import styled from 'styled-components'
import { MdClose, MdLanguage } from 'react-icons/md'
import { TeslaContext } from '../context/TeslaContext'

function Sidebar() {
    const { sidebarOpen, toggleSidebar } = useContext(TeslaContext)

    return (
        <Container sidebarOpen={sidebarOpen}>
            <CloseButton onClick={toggleSidebar}>
                <MdClose size={48} />
            </CloseButton>
            <MenuItem>Existing Inventory</MenuItem>
            <MenuItem>Used Inventory</MenuItem>
            <MenuItem>Trade-In</MenuItem>
            <MenuItem>Test Drive</MenuItem>
            <MenuItem>Insurance</MenuItem>
            <MenuItem>Cyber Truck</MenuItem>
            <MenuItem>Roadster</MenuItem>
            <MenuItem>Semi Charging</MenuItem>
            <MenuItem>Utilities</MenuItem>
            <MenuItem>Find Us</MenuItem>
            <MenuItem>Support</MenuItem>
            <MenuItem>Investor Relations</MenuItem>
            <MenuItem>
                <MdLanguage size={18} /> United States
            </MenuItem>
        </Container>
    )
}

export default Sidebar

const Container = styled.div`
    width: 300px;
    height: 100%;
    padding: 20px;
    background-color: #fff;
    z-index: 1;
    position: fixed;
    top: 0;
    right: 0;
    transition: all 500ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
`

const MenuItem = styled.div`
    width: 100%;
    height: 40px;
    padding: 10px;
    display: flex;
    align-items: center;
    font-size: 16px;
    font-weight: 500;
    border-radius: 5px;
    cursor: pointer;
    font-size: 15px;

    &:hover {
        background-color: #f4f4f4a6;
    }
`

const CloseButton = styled(MenuItem)`
    width: 40px;
    float: right;
`