import React, { Component } from "react";
import styled from "styled-components";

export default class ProdutoCarrinho extends Component {
  
  onClickApagarDoCarrinho = () =>{
    this.props.ApagarDoCarrinho(this.props.propsNome)
  }
  
  render() {
    return (
      <Container>
        <span>{this.props.propsQuantidade}x</span>
        <span> {this.props.propsNome} </span>
        <RemoveButton
        onClick={this.onClickApagarDoCarrinho}
        >X
        </RemoveButton>
      </Container>
    );
  }
}

const Container = styled.div``;

const RemoveButton = styled.span`
  cursor: pointer;
  border: 1px solid black;
`;
