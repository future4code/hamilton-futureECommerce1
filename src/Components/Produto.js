import React, { Component } from "react";
import styled from "styled-components";

export default class Produto extends Component {
  render() {
    return (
      <Container>
        <img src={this.props.propsImagem} />
        <p>{this.props.propsNome}</p>
        <p>R${this.props.propsPreco}</p>
        <Button>Adicionar ao Carrinho</Button>
      </Container>
    );
  }
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 10px;

  height: 30vh;

  border: 1px dashed red;
`;

const Button = styled.button`
  background-color: black;
  color: white;
  border: none;
  padding: 5px;
`;
