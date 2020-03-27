import React, { Component } from "react";
import styled from "styled-components";
import plante from "../Img/terra.jpg";

export default class Produto extends Component {
  onClickAdicionarCarrinho = () => {
    const produtoAdicionado = {
      nome: this.props.propsNome,
      preco: this.props.propsPreco,
      quantidade: 1
    };
    this.props.adicionaAoCarrinho(produtoAdicionado);
  };

  render() {
    return (
      <Container>
        <Img img={require(`../Img/${this.props.propsImagem}.jpg`)} />
        <ProductName>{this.props.propsNome}</ProductName>
        <ProductPrice>
          R${this.props.propsPreco}
          <PriceZeros>,00</PriceZeros>
        </ProductPrice>
        <Button onClick={this.onClickAdicionarCarrinho}>
          Adicionar ao Carrinho
        </Button>
      </Container>
    );
  }
}

const Container = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  width: 100%;
  height: 40vh;
  background: linear-gradient(to bottom, #d3d3d3 0%, #ffffff 100%);
  transition: 0.2s ease-out;

  &:hover {
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.4);
    transform: translateY(-5px);
  }
`;

const ProductName = styled.p`
  text-transform: capitalize;
  color: #939393;
  font-size: 22px;
  padding: 5px;
`;

const ProductPrice = styled.p`
  color: #939393;
  font-size: 30px;
  padding: 5px;
`;

const PriceZeros = styled.span`
  font-size: 14px;
`;

const Img = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${props => props.img});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const Button = styled.button`
  box-sizing: border-box;
  background-color: #939393;
  border: 2px solid #939393;
  color: white;
  padding: 5px;
  width: 100%;
  max-width: 300px;
  height: 45px;
  border-radius: 5px;
  font-size: 18px;
  cursor: pointer;
  transition: 0.2s ease-out;

  &:hover {
    background-color: white;
    color: #939393;
  }
`;
