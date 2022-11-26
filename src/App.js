import React from 'react'
import styled from 'styled-components'
import Header from './components/Header'
import Section from './components/Section'

function App() {
  return (
    <Container>
      <Header />
      <Section 
        title='Model 3'
        description='Order Online For Touchless Delivery'
        background='/images/model-3.jpg'
        leftButtonText='Customer Order'
        rightButtonText='Existing Inventory'
      />
      <Section 
        title='Model Y'
        description='Order Online For Touchless Delivery'
        background='/images/model-y.jpg'
        leftButtonText='Customer Order'
        rightButtonText='Existing Inventory'
      />
      <Section 
        title='Model S'
        description='Order Online For Touchless Delivery'
        background='/images/model-s.jpg'
        leftButtonText='Customer Order'
        rightButtonText='Existing Inventory'
      />
      <Section 
        title='Model X'
        description='Order Online For Touchless Delivery'
        background='/images/model-x.jpg'
        leftButtonText='Customer Order'
        rightButtonText='Existing Inventory'
      />
      <Section 
        title='Solar Panels'
        description='Lowest Cost Solar Panels in America'
        background='/images/solar-panels.jpg'
        leftButtonText='Order Now'
        rightButtonText='Learn More'
      />
      <Section 
        title='Solar Roof'
        description='Produce Clean Energy From Your Roof'
        background='/images/solar-roof.webp'
        leftButtonText='Order Now'
        rightButtonText='Learn More'
      />
      <Section 
        title='Accessories'
        description=''
        background='/images/accessories.jpg'
        leftButtonText='Order Now'
        rightButtonText=''
      />
    </Container>
  )
}

export default App

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow-x: hidden;
`