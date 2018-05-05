import React, { Component } from 'react';
import styled from 'styled-components';
import logo from './assets/logo.png';
import tile from './assets/tile.jpg';

const Container = styled.section`
  background-color: #000;
  padding: 96px;
  box-sizing: border-box;
  height: 100vh;
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: ${props => props.width};
  height: ${props => props.height};
  background: url(${props => props.src});
`;

const Header = styled.section`
  display: flex;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.6);
`;

const Logo = styled.div`
  background: url(${props => props.src}) center;
  background-size: contain;
  width: ${props => props.width};
  height: ${props => props.height};
  margin: 0 8px;
`;

const Title = styled.h1`
  font-size: 1.5em;
  font-weight: bold;
  color: white;
`;

class App extends Component {
  render() {
    return (
      <Container>
        <Section src={tile} width={'630px'} height={'354px'}>
          <Header>
            <Logo src={logo} width={'70px'} height={'70px'} />
            <Title>Home and Away</Title>
          </Header>
        </Section>
      </Container>
    );
  }
}

export default App;
