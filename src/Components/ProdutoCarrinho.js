import React, { Component } from "react";
import styled from "styled-components";

export default class ProdutoCarrinho extends Component {
  render() {
    return (
      <Container>
        <span>{this.props.propsQuantidade}x</span>
        <span> {this.props.propsNome} </span>
        <RemoveButton>X</RemoveButton>
      </Container>
    );
  }
}

const Container = styled.div``;

const RemoveButton = styled.span`
  cursor: pointer;
  border: 1px solid black;
`;
