import React, { Component } from 'react';
import styled from 'styled-components';
import logo from './assets/logo.png';
import tile from './assets/tile.jpg';

const Container = styled.section`
  background-color: #000;
  box-sizing: border-box;
  height: 100vh;
  padding: 16px;
  @media (min-width: 600px) {
    padding: 48px;
  }
  @media (min-width: 960px) {
    padding: 96px;
  }
`;

const Section = styled.section`
  position: relative;
`;

const Header = styled.section`
  display: flex;
  background-color: rgba(0, 0, 0, 0.6);
  align-items: center;
  width: 100%;
  max-width: 960px;
  position: absolute;
  bottom: 4px;
  left: 0;
`;

const Logo = styled.div`
  margin: 0 8px;
  width: 10%;
`;

const Title = styled.h1`
  font-size: 1em;
  font-weight: bold;
  color: white;
  @media (min-width: 600px) {
    font-size: 1.2em;
  }
  @media (min-width: 960px) {
    font-size: 1.5em;
  }
`;

const ResponsiveImg = styled.img`
  width: 100%;
  height: auto;
  max-width: 960px;
`;

const ResponsiveLogo = styled.img`
  width: 100%;
  height: auto;
`;

class App extends Component {
  render() {
    return (
      <Container>
        <Section>
          <ResponsiveImg src={tile} />
          <Header>
            <Logo>
              <ResponsiveLogo src={logo} />
            </Logo>
            <Title>Home and Away</Title>
          </Header>
        </Section>
      </Container>
    );
  }
}

export default App;
