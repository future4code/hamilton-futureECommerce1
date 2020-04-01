import React, { Component } from "react";
import styled, { css } from "styled-components";
import ProdutoCarrinho from "./ProdutoCarrinho";

export default class Carrinho extends Component {
  render() {
    return (
      <>
        <Container show={this.props.show}>
          <Header>
            <Texts>Sua Viagens ({this.props.viagensTotal})</Texts>
            <ExitButton onClick={this.props.closeCart}>X</ExitButton>
          </Header>
          <ProductList>
            {this.props.propsListaAdicionados.map(element => (
              <ProdutoCarrinho
                ApagarDoCarrinho={this.props.funcaoParaRemover}
                propsNome={element.nome}
                propsQuantidade={element.quantidade}
              />
            ))}
          </ProductList>
          <Texts>Total: R${this.props.valorTotal},00</Texts>
        </Container>
        <Overlay show={this.props.show} onClick={this.props.closeCart} />
      </>
    );
  }
}

const Header = styled.div`
  flex: none;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ProductList = styled.div`
  height: 100%;
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Texts = styled.p`
  box-sizing: border-box;
  flex: none;
  color: #939393;
  font-size: 20px;
  margin: 20px 50px;
`;

const ExitButton = styled(Texts)`
  cursor: pointer;
  border: 2px solid #939393;
  padding: 0px 5px;
  border-radius: 50%;
`;

const Overlay = styled.div`
  position: fixed;
  z-index: 2;
  top: 0px;
  right: 0px;

  width: 100%;
  height: 100%;

  background-color: rgba(0, 0, 0, 0.7);

  transition: 0.3s ease-out;

  ${props =>
    !props.show &&
    css`
      background-color: transparent;
      pointer-events: none;
    `}
`;

const Container = styled.div`
  position: fixed;
  z-index: 3;
  top: 0px;
  right: 0px;

  width: 50%;
  max-width: 500px;
  height: 100%;

  background-color: white;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  transition: 0.3s ease-out;

  ${props =>
    !props.show &&
    css`
      right: -50%;
    `}
`;
