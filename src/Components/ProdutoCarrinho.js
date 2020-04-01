import React, { Component } from "react";
import styled from "styled-components";

export default class ProdutoCarrinho extends Component {
  onClickApagarDoCarrinho = () => {
    this.props.ApagarDoCarrinho(this.props.propsNome);
  };

  render() {
    return (
      <Container>
        <Texts>{this.props.propsQuantidade}x</Texts>
        <Texts> {this.props.propsNome} </Texts>
        <RemoveButton onClick={this.onClickApagarDoCarrinho}>X</RemoveButton>
      </Container>
    );
  }
}

const Container = styled.div`
  margin: 5px;
`;

const RemoveButton = styled.span`
  cursor: pointer;
  color: #939393;
  border: 2px solid #939393;
  padding: 3px 5px;
  border-radius: 50%;
`;

const Texts = styled.span`
  box-sizing: border-box;
  flex: none;
  color: #939393;
  font-size: 20px;
`;
